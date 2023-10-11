import { Suspense } from "react";
import { FiArrowRight } from "react-icons/fi";
import { LazyLoadImage } from "react-lazy-load-image-component";

export function Stacks({ stack, stackName, stackStar }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="stack-skills">
        <big>{stack}</big>
        <p>{stackName}</p>
        <small>{stackStar}</small>
      </div>
    </Suspense>
  );
}

export function ProjectBlock({
  project,
  stack,
  stackIMG,
  projectDes,
  siteLink,
  devImg,
  devAlt,
  stackColor,
}) {
  return (
    <div key={project} className="project_item other_items">
      <div className="project_image">
        <Suspense fallback={<div>Loading...</div>}>
          <LazyLoadImage src={devImg} alt={devAlt} effect="blur" />
        </Suspense>
      </div>
      <div className="project_item_title">
        <h3>{project}</h3>
        <span>
          {stackIMG?.(stackColor || "#61dafb")} {stack}
        </span>
      </div>
      <br />
      <div className="project-note">
        <p>{projectDes}</p>
      </div>
      {!siteLink ? (
        ""
      ) : (
        <a href={siteLink} rel="noreferrer" target="_blank">
          {" "}
          Visit {project} <FiArrowRight />
        </a>
      )}
    </div>
  );
}
