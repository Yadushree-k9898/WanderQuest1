const generateInvoice = (booking) => {
  return `
      <h1>Invoice</h1>
      <p>Customer: ${booking.name}</p>
      <p>Package: ${booking.packageId}</p>
      <p>Number of Travelers: ${booking.numTravelers}</p>
      <p>Total Price: ${booking.numTravelers * booking.packageId.price}</p>
  `;
};

module.exports = generateInvoice;
