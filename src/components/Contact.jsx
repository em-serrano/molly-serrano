import React from "react";
import '../styles/Contact.css'
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      
    className="contact-list position-fixed bottom-0 end-0 mb-3 me-3 text-light"

      style={{ maxWidth: "250px", fontSize: "0.9rem" }}
    >
      <ul className="list-unstyled">
        <li>
          <strong>School Phone:</strong> <a href="tel:+15126464168" className="text-decoration-none text-light">(512) 646-4168</a>
        </li>
        <li>
          <strong>Email:</strong> <a href="mailto:mserrano@valoreducation.org" className="text-decoration-none text-light">mserrano@valoreducation.org</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer" className="text-light d-flex align-items-center">
            <FaLinkedin size={18} className="me-2" /> LinkedIn
          </a>
        </li>
        <li>
        <span className="mb-3 mb-md-0 ">© 2025 Molly Serrano</span>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
