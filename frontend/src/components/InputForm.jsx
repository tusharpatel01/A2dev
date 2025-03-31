import React, { useState } from "react";
import axios from "axios";

const InputForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    institutionName: "",
    requirements: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/v1/users/register", formData);
      console.log("Response:", response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-black">Get In Touch</h2>
      <p className="text-gray-600 mb-6">
        Have questions about our Products? Fill out the form below to get a call with us.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name <span className="text-red-500">*</span></label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name"
            className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Email <span className="text-red-500">*</span></label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email"
            className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Contact Number <span className="text-red-500">*</span></label>
          <div className="flex">
            <span className="text-black border-gray-300 inline-flex items-center px-4 border border-r-0 rounded-l-md bg-gray-100">+91</span>
            <input type="tel" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact Number"
              className=" text-black flex-1 px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Institution Name <span className="text-red-500">*</span></label>
          <input type="text" name="institutionName" value={formData.institutionName} onChange={handleChange} placeholder="Institution Name"
            className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Requirements</label>
          <textarea name="requirements" value={formData.requirements} onChange={handleChange} placeholder="Requirements"
            rows="3" className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>

        <button type="submit"
          className="w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-900 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputForm;
