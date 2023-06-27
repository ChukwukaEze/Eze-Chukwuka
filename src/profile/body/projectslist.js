import React from "react";
import { FaLaravel, FaReact } from "react-icons/fa";
import JDev from "../../images/jd.png";
import TEDxApapa from "../../images/tedxapapa.png";
import Chukky from "../../images/chukky.png";

export function DevProjects() {
  const devProjects = [
    {
      //Image Properties
      devImg: "",
      devAlt: "",

      //Project Details
      project: "Zuri Team",
      projectDes: `Built out an alike version of Zuri Team and their sub urls; Zuri Training and Zuri Interships. This site was built to take and store data, and its has an advanced routing and suspense process.`,

      //Links
      git: "",
      siteLink: "https://zuri-site.web.app/",
      stack: "React",
      stackIMG: <FaReact />,
    },
    {
      //Image Properties
      devImg: "",
      devAlt: "",

      //Project Details
      project: "Electricity Web Evaluator",
      projectDes: `Built with React and Charts Dependencies, this project fetches electricity data from an API to make it easier to compare annual electricity generation variables.`,

      //Links
      git: "",
      siteLink: "https://nextier-fe.web.app/",
      stack: "React",
      stackIMG: <FaReact />,
    },

    {
      //Image Properties
      devImg: TEDxApapa,
      devAlt: "TEDxApapa Website",

      //Project Details
      project: "TEDxApapa",
      projectDes:
        "TEDxApapa is an exciting project I built with React to connect with the trendy TEDx community in Apapa. This site is integrated with Firebase Firestore to collect and store data of guests and partners. It comes with full security and state management.",

      //Links
      git: "",
      siteLink: "https://tedxapapa.com",
      stack: "React",
      stackIMG: <FaReact />,
    },

    {
      //Image Properties
      devImg: JDev,
      devAlt: "JDi",

      //Project Details
      project: "JDi",
      projectDes:
        "JDi is an insurance fun project I built with Laravel. It comes with all functionalities: User Authentication (Create Account, Login, and Dashboard). It also comes with the added feature that calls to an API to verify the BVN presented by users.",

      //Links
      git: "",
      siteLink: "http://jd-backend.herokuapp.com/",
      stack: "Laravel",
      stackIMG: <FaLaravel />,
    },

    {
      //Image Properties
      devImg: Chukky,
      devAlt: "Personal Website",

      //Project Details
      project: "Eze Chukwuka",
      projectDes:
        "Eze Chukwuka is personal to me because it will over time tell stories about my journey as a Frontend Engineer, and the rediscovery of my passion as a Python Developer. It was built with React to present a simple overview of my work, and progress.",

      //Links
      git: "",
      siteLink: "https://chukkywang.github.io/Eze-Chukwuka/",
      stack: "React",
      stackIMG: <FaReact />,
    },
    {
      //Image Properties
      devImg: "",
      devAlt: "",

      //Project Details
      project: "Lyft",
      projectDes:
        "Built out an alike website of one of America's largest ridesharing companies, Lyft. This site was built to explore creativity as well as other dimensions to React.",

      //Links
      git: "",
      siteLink: "https://lyft-landing.web.app/",
      stack: "React",
      stackIMG: <FaReact />,
    },
  ];
  return { devProjects };
}
