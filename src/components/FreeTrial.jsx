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

  const [errors, setErrors] = useState({});

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

  const validate = () => {
    const newErrors = {};

    // Name validation (alphabets only)
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name must contain only alphabets";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Phone number validation (10 digits only)
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    // State validation (must be selected)
    if (!formData.state) {
      newErrors.state = "Please select your state";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      alert("Form submitted successfully, w'll get touch soon!");
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        address: "",
        phone: "",
        state: "",
        country: "",
        services: [],
        instruction: "",
      });
    }
  };

  return (
    <section className="free-trial-form" id="trial">
      <h2>— FREE TRIAL —</h2>
      <p>Get up to 5 Photos free of cost.</p>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-row side">
            <div>
              <input 
                type="text"
                name="name"
                placeholder="Enter Your Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Id"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
            <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
          </div>
          <div className="form-row">
            <input
              className="address"
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              required
            /> 
          </div>
          <div className="form-row">
            <select
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select Your State
              </option>
              <option value="California">Uttar Pradesh</option>
              <option value="New York">New York</option>
              <option value="Texas">Texas</option>
              <option value="Florida">Florida</option>
              <option value="Illinois">Illinois</option>
            </select>
            {errors.state && <p className="error">{errors.state}</p>}
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
