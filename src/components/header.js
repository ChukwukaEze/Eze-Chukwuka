import React, { useEffect, useState } from "react";
import { FiDownloadCloud, FiGithub, FiLinkedin } from "react-icons/fi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DisplayPicture from "../images/eze-chukwuka.jpg";

function Header(props) {
  const { SearchField } = props;
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);

  return (
    <>
      {" "}
      {small && (
        <div className={`scroll_intro ${small && "holder_intro"}`}>
          <div className="small_header_content">
            <div className="name_title">
              <h3>Eze Chukwuka</h3>
            </div>
            {SearchField}
          </div>
        </div>
      )}
      <div className="intro">
        <LazyLoadImage
          src={DisplayPicture}
          alt="Chukwuka Eze"
          className="display_picture"
          effect="blur"
        />
        <div className="name_title">
          <h3>Eze Chukwuka</h3>
          <p>Software Engineer</p>
        </div>

        <div className="nav">
          <div className="onsocials">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://docs.google.com/document/d/1ryJV4qp_Ke-iE3Zy8-xg01rdSzRd85P_APoJ4DAqhVo/edit?usp=sharing"
            >
              <FiDownloadCloud />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/ChukwukaEze"
            >
              <FiGithub />
            </a>

            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/eze-chukwuka"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
