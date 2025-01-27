import emailjs from "@emailjs/browser";
import { useState } from "react";
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
      const templateParams = {
        name: formData.name,
        email: formData.email,
        address: formData.address,
        phone: formData.phone,
        state: formData.state,
        country: formData.country,
        services: formData.services.join(", "),
        instruction: formData.instruction,
        files: formData.files ? formData.files[0].name : "No files uploaded",
      };

      emailjs
        .send(
          "service_waggq6v", // Replace with your EmailJS Service ID
          "template_3t2y449", // Replace with your EmailJS Template ID
          templateParams,
          "JRZ4D4K-EU7nlq1lo" // Replace with your EmailJS Public Key
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("Form submitted successfully, we'll get in touch soon!");
          },
          (error) => {
            console.error("FAILED...", error);
            alert("Form submission failed. Please try again.");
          }
        );

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
      <p>Get up to 5 Photos free of cost</p>
      <h3>Try us before you decide to use our service</h3>
      <p>
        We offer up to 10 images for a free trial. there is an opportunity to
        justify our quality before submitting your final order.{" "}
      </p>
      <div className="form-layout">
        {/* Left Section: Contact Info */}
        <div className="contact-info">
          <h3>Contact Info</h3>
          <div className="contact-item">
            <a
              href="https://www.google.com/maps?q=Noida, India" // Link to Google Maps with the address
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://fonts.gstatic.com/s/i/materialiconsoutlined/place/v1/24px.svg"
                alt="Location"
              />
            </a>
            <p>D 247/1, Sector 63, Noida, India 201301</p>
          </div>
          <div className="contact-item">
            <a
              href="tel:+01204558100" // Click to call phone number
            >
              <img
                src="https://fonts.gstatic.com/s/i/materialiconsoutlined/phone/v1/24px.svg"
                alt="Phone"
              />
            </a>
            <p>
              <strong>Contact:</strong> 0120-4558100
            </p>
          </div>
          <div className="contact-item">
            <a
              href="mailto:info@snwbswebservices.com" // Open default mail client
            >
              <img
                src="https://fonts.gstatic.com/s/i/materialiconsoutlined/email/v1/24px.svg"
                alt="Email"
              />
            </a>
            <p>
              <strong>Email:</strong> info@snwbswebservices.com
            </p>
          </div>
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
              {/* India */}
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Delhi">Delhi</option>
              <option value="Karnataka">Karnataka</option>

              {/* USA */}
              <option value="New York">New York</option>
              <option value="California">California</option>
              <option value="Texas">Texas</option>
              <option value="Florida">Florida</option>

              {/* UK */}
              <option value="England">England</option>
              <option value="Scotland">Scotland</option>
              <option value="Wales">Wales</option>
              <option value="Northern Ireland">Northern Ireland</option>

              {/* Canada */}
              <option value="Ontario">Ontario</option>
              <option value="Quebec">Quebec</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Alberta">Alberta</option>

              {/* Australia */}
              <option value="New South Wales">New South Wales</option>
              <option value="Victoria">Victoria</option>
              <option value="Queensland">Queensland</option>
              <option value="Western Australia">Western Australia</option>

              {/* Germany */}
              <option value="Bavaria">Bavaria</option>
              <option value="Berlin">Berlin</option>
              <option value="Hamburg">Hamburg</option>
              <option value="North Rhine-Westphalia">
                North Rhine-Westphalia
              </option>

              {/* Japan */}
              <option value="Tokyo">Tokyo</option>
              <option value="Osaka">Osaka</option>
              <option value="Kyoto">Kyoto</option>
              <option value="Hokkaido">Hokkaido</option>
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
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="Japan">Japan</option>
              <option value="France">France</option>
              <option value="Italy">Italy</option>
              <option value="Spain">Spain</option>
              <option value="Brazil">Brazil</option>
              <option value="Mexico">Mexico</option>
              <option value="South Africa">South Africa</option>
              <option value="China">China</option>
              <option value="Russia">Russia</option>
              <option value="South Korea">South Korea</option>
              <option value="Argentina">Argentina</option>
              <option value="New Zealand">New Zealand</option>
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
            <label>
              <input
                type="checkbox"
                value="Re-color"
                onChange={handleCheckboxChange}
              />
              Re-color
            </label>
            <label>
              <input
                type="checkbox"
                value="Gemstone Enhancement"
                onChange={handleCheckboxChange}
              />
              Gemstone Enhancement
            </label>
          </div>

          <div className="form-row">
            <label className="file-upload ">
              <strong>Upload Files:</strong> JPG / JPEG / PNG / GIF / TIF / TIFF
              / PSD / DNG/RAW/CR2
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
