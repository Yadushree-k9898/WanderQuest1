

// const dotenv = require("dotenv");
// dotenv.config();  // Load environment variables from a .env file

// module.exports = function (req, res, next) {
//   // Basic authentication logic
//   const auth = req.headers['authorization'];

//   if (!auth) {
//     return res.status(401).json({ msg: 'Authorization header is missing' });
//   }

//   // Extract the credentials from the authorization header (Basic <base64string>)
//   const [type, credentials] = auth.split(' ');

//   // Check if the type is 'Basic'
//   if (type !== 'Basic') {
//     return res.status(400).json({ msg: 'Invalid authorization type' });
//   }

//   // Decode the base64 credentials
//   const decodedCredentials = Buffer.from(credentials, 'base64').toString('utf-8');
//   const [username, password] = decodedCredentials.split(':');

//   // Check if the username and password match the expected values from environment variables
//   if (username !== process.env.ADMIN_USERNAME || password !== process.env.ADMIN_PASSWORD) {
//     return res.status(403).json({ msg: 'Forbidden' });
//   }

//   next();  // Proceed to the next middleware or route handler
// };


const dotenv = require("dotenv");
dotenv.config(); // Load environment variables from .env file

module.exports = function (req, res, next) {
  // Check for Authorization header
  const auth = req.headers['authorization'];
  if (!auth || !auth.includes(' ')) {
    return res.status(401).json({ msg: 'Malformed or missing Authorization header' });
  }

  // Split the header into type and credentials
  const [type, credentials] = auth.split(' ');

  // Validate the authorization type
  if (type !== 'Basic') {
    return res.status(400).json({ msg: 'Invalid authorization type' });
  }

  // Decode the base64 credentials
  let username, password;
  try {
    const decodedCredentials = Buffer.from(credentials, 'base64').toString('utf-8');
    [username, password] = decodedCredentials.split(':');

    if (!username || !password) {
      throw new Error('Credentials missing'); // Catch incomplete credentials
    }
  } catch (err) {
    return res.status(400).json({ msg: 'Invalid credentials format' });
  }

  // Validate against environment variables
  if (username !== process.env.ADMIN_USERNAME || password !== process.env.ADMIN_PASSWORD) {
    return res.status(403).json({ msg: 'Invalid credentials' });
  }

  // Proceed to the next middleware or route handler
  next();
};
