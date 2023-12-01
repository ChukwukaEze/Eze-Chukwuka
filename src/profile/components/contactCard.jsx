import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaGoogle, FaWhatsapp } from "react-icons/fa";

function ContactCard() {
  return (
    <div className="project_item next-project">
      {/* <p style={{ textAlign: "left" }}>Chat about your next project</p> */}
      <div>
        <h3 style={{ marginTop: "11rem" }}>Let's</h3>
        <h3>
          Collaborate <BsArrowRight />
        </h3>
        <div className="contact-bib">
          <a rel="noreferrer" href="mailto:ezechukwukae@gmail.com">
            <FaGoogle />
          </a>
          <a rel="noreferrer" href="https://wa.link/7j9t00" target="_blank">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
