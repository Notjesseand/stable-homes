"use client";
import Nav from "./nav";
import Footer from "@/components/footer";

import React, { useState } from "react";

export default function QuotationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quotation request submitted:", formData);
    // TODO: send data to backend / email service
    alert("Your quotation request has been submitted!");
  };

  return (
    <>
      <div className="min-h-screen bg-[#f9f9f9] flex flex-col justify-center items-center px-6 md:px-16 py-16 font-montserrat">
        <Nav />
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 pt-20">
          <p className="text-orange-500 font-semibold text-lg">
            Request a Quote
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Get Your Project Quotation
          </h2>
          <p className="mt-4 text-gray-600">
            Fill in the details below and our team will prepare a personalized
            quotation for your construction project.
          </p>
        </div>

        {/* Quotation Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-2xl p-8 w-full max-w-3xl space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Project Type
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                required
              >
                <option value="">Select project type</option>
                <option value="building">Building Construction</option>
                <option value="renovation">Renovation & Remodeling</option>
                <option value="interior">Interior Design</option>
                <option value="civil">Civil Engineering</option>
                <option value="flooring">Flooring & Roofing</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-2">
              Estimated Budget
            </label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="e.g. $50,000"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-2">
              Project Details
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-3 px-4 rounded-lg"
          >
            Submit Request
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
