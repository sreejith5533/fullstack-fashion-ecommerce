import emailjs from "@emailjs/browser";
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oprk1mn",
        "template_i49ta17",
        e.target,
        "Y88ZqoJw5NY2VpG1j",
      )
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.error(err);
      });

    setTimeout(() => {
      setFormData({
        fullname: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <div className="contact-form-div">
      <form className="contact-form" method="post" onSubmit={sendEmail}>
        <div className="row mb-3">
          <div className="col-6">
            <div>
              <label htmlFor="name" className="form-label">
                Fullname:
              </label>
              <input
                name="fullname"
                type="text"
                id="name"
                className="form-control input"
                placeholder="John Doe"
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-6">
            <div>
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="form-control input"
                placeholder="jane@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject:
          </label>
          <input
            name="subject"
            type="text"
            id="subject"
            className="form-control input"
            placeholder="How can we help?"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            name="message"
            id="message"
            className="form-control input"
            placeholder="Your message here..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="send-btn btn">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
