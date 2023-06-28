import React, { useState, useEffect } from "react";
import DisplayPicture from "../../images/eze-chukwuka.jpg";
import {
  FiDownloadCloud,
  FiArrowRight,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { FaGoogle, FaWhatsapp } from "react-icons/fa";
import { BsArrowRight, BsStarFill, BsThreeDots } from "react-icons/bs";
import { DevProjects } from "./projectslist";

function Contact(props) {
  const { devProjects, myStacks } = DevProjects();
  const [projects, setProjects] = useState(devProjects);

  const [small, setSmall] = useState(false);
  const [filterValues, setFilterValues] = useState("");

  //Onscroll Effect
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);

  //OnChange
  const handleChange = (e) => {
    e.preventDefault();
    setFilterValues(e.target.value);
    const loweredInput = e.target.value.toLowerCase();
    const filteredProjects = () =>
      devProjects.filter((roles) => {
        return (
          roles.project.toLowerCase().match(loweredInput) ||
          roles.projectDes.toLowerCase().match(loweredInput) ||
          roles.stack.toLowerCase().match(loweredInput)
        );
      });

    setProjects(filteredProjects());
  };

  const NotFound = (condition) => {
    return (
      condition && (
        <p style={{ lineHeight: "2rem" }}>
          No Projects Found At this Minute. <br /> Chukwuka may be working on a
          project similar to your query, as there are other projects not listed here. Confirm from him on WhatsApp.{" "}
          <a rel="noreferrer" href="https://wa.link/7j9t00" target="_blank">
            Confirm Now!
          </a>
        </p>
      )
    );
  };

  return (
    <main className="contact closed">
      <div className="contact_body">
        {small && (
          <div className={`scroll_intro ${small && "holder_intro"}`}>
            <div className="small_header_content">
              <div className="name_title">
                <h3>Eze Chukwuka</h3>
              </div>
              <div className="search_fie">
                <input
                  type="text"
                  name="filterValue"
                  id=""
                  value={filterValues}
                  onChange={handleChange}
                  placeholder="Search for a Project"
                />
              </div>
            </div>
          </div>
        )}
        <div className="intro">
          <img src={DisplayPicture} alt="" className="display_picture" />
          <div className="name_title">
            <h3>Eze Chukwuka</h3>
            <p>Software Engineer</p>
          </div>

          <div className="nav">
            <div className="onsocials">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://docs.google.com/document/d/1b0rRMabRN6DaG52rTwsTYwEQixxn1Dn-Lt0r9qCa6mU/edit?usp=sharing"
              >
                <FiDownloadCloud />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/ChukkyWang"
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

        <div className="_contact">
          <div className="main_contact_body">
            <h2 className="headings_contact">Most Rigorous Projects</h2>
            <p>Here are some of my deeply inspiring projects.</p>

            <div className="search_fie">
              <input
                type="text"
                name="filterValue"
                id=""
                value={filterValues}
                onChange={handleChange}
                placeholder="Search for a Project"
              />
            </div>
            {NotFound(projects?.length === 0)}
            <div className="projects_rack">
              {projects.map((devProject, index) => (
                <ProjectBlock {...devProject} key={index} />
              ))}

              <div
                style={{ height: "275px" }}
                className="project_item next-project"
              >
                <p>Chat about your next project</p>
                <div>
                  <h3>Let's</h3>
                  <h3>
                    Collaborate <BsArrowRight />
                  </h3>
                  <div className="contact-bib">
                    <a rel="noreferrer" href="mailto:ezechukwukae@gmail.com">
                      <FaGoogle />
                    </a>
                    <a
                      rel="noreferrer"
                      href="https://wa.link/7j9t00"
                      target="_blank"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p style={{ textAlign: "center" }}>
            <BsThreeDots />
          </p>
          <div className="main_contact_body">
            <h2 className="headings_contact">My Stacks</h2>
            <p>Here are some of the stacks I work with more often.</p>

            <div className="stacks-cage">
              {myStacks?.map((stack, index) => (
                <Stacks {...stack} key={index} />
              ))}
            </div>
          </div>
          <div
            className="star"
            style={{ textAlign: "center", marginTop: "25px" }}
          >
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;

function ProjectBlock({
  project,
  stack,
  stackIMG,
  projectDes,
  siteLink,
  devImg,
  devAlt,
}) {
  return (
    <div key={project} className="project_item other_items">
      <div className="project_image">
        <img src={devImg} alt={devAlt} />
      </div>
      <div className="project_item_title">
        <h3>{project}</h3>
        <span
          className={`stack-icon ${
            stack === "Laravel" ? "laravel_color" : "react_color"
          }`}
        >
          {stackIMG} {stack}
        </span>
      </div>
      <br />
      <div className="project-note">
        <p>{projectDes}</p>
      </div>
      <a href={siteLink} rel="noreferrer" target="_blank">
        {" "}
        Visit {project} <FiArrowRight />
      </a>
    </div>
  );
}

function Stacks({ stack, stackName, stackStar }) {
  return (
    <div className="stack-skills">
      <big>{stack}</big>
      <p>{stackName}</p>
      <small>{stackStar}</small>
    </div>
  );
}
