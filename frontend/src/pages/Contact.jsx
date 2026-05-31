import "../styles/contact.css";
import HeadingSection from "../components/HeadingSection";
import ContactEmail from "../components/ContactEmail";
import ContactCall from "../components/ContactCall";
import VisitUs from "../components/VisitUs";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";
import FaqQuestions from "../components/FaqQuestions";
import ChatBot from "../components/ChatBot";

function Contact() {
  return (
    <div className="contact-page">
      <HeadingSection />
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="row g-4">
            <ContactEmail />
            <ContactCall />
            <VisitUs/>
          </div>
        </div>
        <div className="col-md-8">
          <ContactForm />
        </div>
      </div>
      <div className="row">
        <Map />
      </div>
      <FaqQuestions />
      <ChatBot />
    </div>
  );
}

export default Contact;
