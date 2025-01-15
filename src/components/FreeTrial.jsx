
import React, { useState } from "react";
import "../styles/FreeTrial.css";

const FreeTrialForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    state: "",
    country: "",
    services: [],
    instruction: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      const services = checked
        ? [...prevState.services, value]
        : prevState.services.filter((service) => service !== value);
      return { ...prevState, services };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };

  return (
    <section className="free-trial-form">
      <h2>Get a free trial</h2>
      <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Id"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleInputChange}
            required
          />
          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Select Your Country
            </option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
          </select>
        </div>
        <div className="form-row service-types">
          <label>
            <input
              type="checkbox"
              value="Background removal"
              onChange={handleCheckboxChange}
            />
            Background removal
          </label>
          <label>
            <input
              type="checkbox"
              value="Shadow Creation"
              onChange={handleCheckboxChange}
            />
            Shadow Creation
          </label>
          <label>
            <input
              type="checkbox"
              value="Reflections removal"
              onChange={handleCheckboxChange}
            />
            Reflections removal
          </label>
          <label>
            <input
              type="checkbox"
              value="Color Change"
              onChange={handleCheckboxChange}
            />
            Color Change
          </label>
          <label>
            <input
              type="checkbox"
              value="Scratch removal"
              onChange={handleCheckboxChange}
            />
            Scratch removal
          </label>
          <label>
            <input
              type="checkbox"
              value="Color Correction"
              onChange={handleCheckboxChange}
            />
            Color Correction
          </label>
        </div>
        <div className="form-row">
          <textarea
            name="instruction"
            placeholder="Instruction: Tell us what to do with your images."
            value={formData.instruction}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit Form
        </button>
      </form>
      </div>
    </section>
  );
};

export default FreeTrialForm;
