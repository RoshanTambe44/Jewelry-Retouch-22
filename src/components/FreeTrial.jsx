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
    files: null,
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

  const handleFileUpload = (e) => {
    setFormData({ ...formData, files: e.target.files });
  };

  const validate = () => {
    const newErrors = {};

    // Validation logic
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name must contain only alphabets";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

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
      alert("Form submitted successfully, we'll get in touch soon!");
      setFormData({
        name: "",
        email: "",
        address: "",
        phone: "",
        state: "",
        country: "",
        services: [],
        instruction: "",
        files: null,
      });
    }
  };

  return (
    <section className="free-trial-form" id="trial">
      <h2>— FREE TRIAL —</h2>
      <p>Try us before you decide to use our service. Get up to 5 images free of cost.</p>
      <div className="form-layout">
        {/* Left Section: Contact Info */}
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p>D 247/1, Sector 63</p>
          <p>Noida, India 201301</p>
          <p>
            <strong>Contact:</strong> 0120-4558100
          </p>
          <p>
            <strong>Email:</strong> info@snwbswebservices.com
          </p>
        </div>

        {/* Right Section: Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}

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

          <div className="form-row">
            <input
              type="text"
              name="address"
              placeholder="Enter Full Address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
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
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="New York">New York</option>
              <option value="Texas">Texas</option>
            </select>
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select Your Country
              </option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
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
                value="Metal Retouching"
                onChange={handleCheckboxChange}
              />
              Metal Retouching
            </label>
            <label>
              <input
                type="checkbox"
                value="Color Correction"
                onChange={handleCheckboxChange}
              />
              Color Correction
            </label>
            <label>
              <input
                type="checkbox"
                value="Shadow Creation"
                onChange={handleCheckboxChange}
              />
              Shadow Creation
            </label>
          </div>

          <div className="form-row">
            <label className="file-upload">
              <strong>Upload Files:</strong> JPG / JPEG / PNG / GIF / RAW (Max 20 files)
              <input type="file" multiple onChange={handleFileUpload} />
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
