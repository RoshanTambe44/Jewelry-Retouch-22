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
          <h3 style={{textAlign:"start", marginBottom:"0px"}} >Contact Info</h3>
          <hr style={{width:"20%", marginBottom:"50px" }} />
          <div className="contact-main-div" >
            <a
              href="https://www.google.com/maps?q=Noida, India" // Link to Google Maps with the address
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <img
                src="https://fonts.gstatic.com/s/i/materialiconsoutlined/place/v1/24px.svg"
                alt="Location"
              />
            </a>
            <p style={{textAlign:"start"}}>D 247/1, Sector 63, Noida, India 201301</p>
          </div>
          <div className="contact-main-div">
            <a
              href="tel:+01204558100" // Click to call phone number
               className="contact-item"
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
          <div className="contact-main-div" >
            <a
              href="mailto:info@snwbswebservices.com" // Open default mail client
               className="contact-item"
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
           <div className="" style={{display:"flex", flexDirection:"column", flex:"auto" }}>
           <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Full Name"
              value={formData.name}
              onChange={handleInputChange}
              style={{boxShadow: "inset 2px 2px 10px rgba(0, 0, 0, 0.3)",  color: "black",
                ":placeholder": {
                  color: "black", 
                },}}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
           </div>

            <div className=""  style={{display:"flex", flexDirection:"column", flex:"auto" }}>
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Id"
              value={formData.email}
              onChange={handleInputChange}
              style={{boxShadow: "inset 2px 2px 10px rgba(0, 0, 0, 0.3)", }}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}

            </div>
          </div>

          <div className="form-row">
          <div className=""  style={{display:"flex", flexDirection:"column", flex:"auto" }}>
            <label htmlFor="address">Address</label>
          <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter Full Address"
              value={formData.address}
              onChange={handleInputChange}
              style={{boxShadow: "inset 2px 2px 10px rgba(0, 0, 0, 0.3)", }}
              required
            />
            {errors.address && <p className="error">{errors.address}</p>}
          </div>
           <div className="" style={{display:"flex", flexDirection:"column", flex:"auto" }}>
            <label htmlFor="phone">Phone</label>
           <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              style={{boxShadow: "inset 2px 2px 10px rgba(0, 0, 0, 0.3)", }}
              required
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
           </div>
          </div>

          <div className="form-row">
            <div className="" style={{display:"flex", flexDirection:"column", flex:"auto", width:"50%"  }}>
              <label htmlFor="state">State</label>
            <select
              name="state"
              id="state"
              value={formData.state}
              onChange={handleInputChange}
              style={{boxShadow: "inset 2px 2px 10px rgba(0, 0, 0, 0.3)", }}
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
            </div>

            <div className="" style={{display:"flex", flexDirection:"column", flex:"auto",  width:"50%" }}>
              <label htmlFor="country">Country</label>
            <select
              name="country"
              id="country"
              value={formData.country}
              onChange={handleInputChange}
              style={{boxShadow: "inset 2px 2px 10px rgba(0, 0, 0, 0.3)", }}
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
          </div>

          <div className="form-row service-types" style={{display:"flex" ,flexDirection:"column"}}>
            <div className="" style={{display:"flex", alignItems:"start",  flexDirection:"column"}}>
              <h2 className="">Service Type</h2>
              <p style={{textAlign:"start", marginLeft:"10px" , width:"200px"}}>Pick One!</p>
            </div>
            <div className="" style={{display:"flex", gap:"16px"}}>
            <div className="" style={{width:"30%", display:"flex", flex:"auto",  flexDirection:"column", gap:"16px", justifyContent:"start"  }}>
            
              <div className=" " style={{ display:"flex"  , flexDirection:"row-reverse"}}>
              <label style={{textWrap:"nowrap", width:"80%", fontSize:"16px"}}>
              Background removal
            </label>
            <label class="round-checkbox">
              <input
                type="checkbox"
                value="Background removal"
                onChange={handleCheckboxChange}
                style={{width:"20%" }}
              /><span></span>
              </label>
              
              </div>
            <div className="" style={{display:"flex" , flexDirection:"row-reverse"}}>
            <label style={{textWrap:"nowrap", width:"80%", fontSize:"16px" }} > Metal Retouching
            </label>
            <label class="round-checkbox">
              <input
                type="checkbox"
                value="Metal Retouching"
                onChange={handleCheckboxChange}
                style={{width:"20%"}}
              /><span></span>
              </label>
            </div>
             
            </div>
            <div className="" style={{width:"30%", display:"flex", flex:"auto", flexDirection:"column", gap:"16px", justifyContent:"start"  }}>
            <div className="" style={{display:"flex" , flexDirection:"row-reverse" , justifyContent:"space-between" }}>
            <label style={{textWrap:"nowrap", width:"80%",fontSize:"16px"}}>Color Correction
            </label>
            <label class="round-checkbox">
              <input
                type="checkbox"
                value="Color Correction"
                onChange={handleCheckboxChange}
                style={{width:"20%"}}
              /><span></span>
              </label>
            </div>
              
            <div className="" style={{display:"flex" , flexDirection:"row-reverse"}}>
            <label style={{textWrap:"nowrap", width:"80%", fontSize:"16px"}}>Shadow Creation
            </label>
            <label class="round-checkbox">
              <input
                type="checkbox"
                value="Shadow Creation"
                onChange={handleCheckboxChange}
                style={{width:"20%"}}
              /><span></span>
              </label>
              
            </div>
            </div>
            <div className="" style={{width:"30%", display:"flex", flex:"auto",  flexDirection:"column", gap:"16px", justifyContent:"start" }}>
            <div className="" style={{display:"flex" , flexDirection:"row-reverse", }}>
              <label style={{textWrap:"nowrap", width:"80%", fontSize:"16px"}}> Re-color
            </label><label class="round-checkbox">
              <input
                type="checkbox"
                value="Re-color"
                onChange={handleCheckboxChange}
                style={{width:"20%"}}
              /><span></span>
              </label>
              </div>
             
            <div className="" style={{display:"flex" , flexDirection:"row-reverse"}}>
            <label style={{textWrap:"nowrap", width:"80%", fontSize:"16px"}}> Gemstone Enhancement
            </label><label class="round-checkbox">
              <input
                type="checkbox"
                value="Gemstone Enhancement"
                onChange={handleCheckboxChange}
                style={{width:"20%"}}
              /><span></span>
              </label>
            </div>
             
            </div>
          </div>
          </div>
         
          <div className="form-row" style={{display:"flex", flexDirection:'column', gap:'16px'}}>
            <label className="file-upload  " style={{color:"white", fontSize:"20px", marginTop:'16px' }}>
              <strong>Upload Files:</strong> JPG / JPEG / PNG / GIF / TIF / TIFF
              / PSD / DNG/RAW/CR2</label>
              <input type="file" multiple onChange={handleFileUpload} />
            
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
