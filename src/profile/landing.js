import React from "react";
import { FaGoogle, FaWhatsapp } from "react-icons/fa";
import { BsArrowRight, BsStarFill, BsThreeDots } from "react-icons/bs";
import "react-lazy-load-image-component/src/effects/blur.css";
import Search from "../components/search";
import Header from "../components/header";
import { ProjectBlock, Stacks } from "../components/cards";
import { SkillsType } from "./projectslist";

function Profile() {
  const { myStacks, projects, SearchField } = Search();

  const NotFound = (condition) => {
    return (
      condition && (
        <p style={{ lineHeight: "2rem" }}>
          No Projects Found At this Minute! <br /> Chukwuka may be working on a
          project similar to your query, as there are other projects not listed
          here. Confirm from him on WhatsApp.{" "}
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
        <Header SearchField={<SearchField />} />
        <div className="_contact">
          <div className="main_contact_body">
            <h2 className="headings_contact">Most Rigorous Projects</h2>
            <p>Here are some of my deeply inspiring projects.</p>

            {SearchField()}
            {NotFound(projects?.length === 0)}
            <div className="projects_rack">
              {projects.map((devProject) => (
                <ProjectBlock {...devProject} key={devProject?.project} />
              ))}

              <div className="project_item next-project">
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

            <h4>- Frontend -</h4>
            <div className="stacks-cage">
              {myStacks(SkillsType.Frontend)?.map((stack, index) => (
                <Stacks {...stack} key={stack?.stackName} />
              ))}
            </div>
            <h4>- Backend -</h4>
            <div className="stacks-cage">
              {myStacks(SkillsType.Backend)?.map((stack, index) => (
                <Stacks {...stack} key={stack?.stackName} />
              ))}
            </div>
            <h4>- Utility Tools -</h4>
            <div className="stacks-cage">
              {myStacks(SkillsType.Tools)?.map((stack, index) => (
                <Stacks {...stack} key={stack?.stackName} />
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

export default Profile;
