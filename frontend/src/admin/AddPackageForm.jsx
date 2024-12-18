
// AddPackageForm.js
import React, { useState } from "react";

const AddPackageForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    availableDates: [{ startDate: "", endDate: "" }],
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("availableDates")) {
      const index = parseInt(name.split("[")[1].split("]")[0]);
      const field = name.split(".")[1];

      const updatedAvailableDates = [...formData.availableDates];
      updatedAvailableDates[index][field] = value;

      setFormData({ ...formData, availableDates: updatedAvailableDates });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddDateRange = () => {
    setFormData({
      ...formData,
      availableDates: [
        ...formData.availableDates,
        { startDate: "", endDate: "" },
      ],
    });
  };

  const handleRemoveDateRange = (index) => {
    const updatedAvailableDates = formData.availableDates.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, availableDates: updatedAvailableDates });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedAvailableDates = formData.availableDates.map((date) => {
      const startDate = date.startDate
        ? new Date(date.startDate).toISOString()
        : null;
      const endDate = date.endDate
        ? new Date(date.endDate).toISOString()
        : null;
      return { startDate, endDate };
    });

    const dataToSend = {
      ...formData,
      availableDates: formattedAvailableDates,
    };

    try {
      const response = await fetch("/api/packages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        alert("Package added successfully!");
        setFormData({
          title: "",
          description: "",
          price: "",
          availableDates: [{ startDate: "", endDate: "" }],
          image: "",
        });
      } else {
        alert("Failed to add package. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="bg-sageGreen min-h-screen py-8">
      <div className="container mx-auto p-6 bg-beige rounded shadow-lg">
        <h1 className="text-3xl font-semibold text-charcoal text-center mb-6">
          Add Package
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-lg font-medium text-gunmetalGray">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-charcoal"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-lg font-medium text-gunmetalGray">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-charcoal"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block text-lg font-medium text-gunmetalGray">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-charcoal"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gunmetalGray">
              Available Dates
            </label>
            {formData.availableDates.map((date, index) => (
              <div key={index} className="mb-2">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <input
                      type="date"
                      name={`availableDates[${index}].startDate`}
                      value={date.startDate}
                      onChange={handleChange}
                      className="w-full p-3 border rounded focus:outline-charcoal"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="date"
                      name={`availableDates[${index}].endDate`}
                      value={date.endDate}
                      onChange={handleChange}
                      className="w-full p-3 border rounded focus:outline-charcoal"
                      required
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveDateRange(index)}
                    className="text-red-500 ml-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddDateRange}
              className="text-charcoal mt-2 underline"
            >
              Add More Dates
            </button>
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-lg font-medium text-gunmetalGray">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              id="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-charcoal"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-charcoal text-white py-2 px-4 rounded hover:bg-gunmetalGray"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPackageForm;
