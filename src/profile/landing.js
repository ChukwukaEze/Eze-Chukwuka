import React from "react";
import { BsStarFill, BsThreeDots } from "react-icons/bs";
import "react-lazy-load-image-component/src/effects/blur.css";
import Search from "../components/search";
import Header from "../components/header";
import { ProjectBlock, Stacks } from "../components/cards";
import { SkillsType } from "./projectslist";
import GitInfo from "react-git-info/macro";
import ContactCard from "./components/contactCard";
import { NotFound } from "./components/notFound";
import moment from "moment";

function Profile() {
  const { myStacks, projects, SearchField, filterValues } = Search();

  const gitInfo = GitInfo();

  const date = new Date();

  return (
    <main className="contact closed">
      <div className="contact_body">
        <Header SearchField={<SearchField />} />
        <div className="_contact">
          <div className="main_contact_body">
            <h2 className="headings_contact">Most Rigorous Projects</h2>
            <p>Here are some of my deeply inspiring projects.</p>
            <br />
            <p>
              Last Updated:{" "}
              {moment(gitInfo.commit.date).format("MMMM Do YYYY, h:mm:ss a")}{" "}
            </p>

            {SearchField()}
            {NotFound(projects?.length === 0, filterValues)}
            <div className="projects_rack">
              {projects.map((devProject) => (
                <ProjectBlock {...devProject} key={devProject?.project} />
              ))}

              <ContactCard />
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
          <div
            className="star"
            style={{ textAlign: "center", marginTop: "50px" }}
          >
            <small>(c) {date?.getFullYear()}</small>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
