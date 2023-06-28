import React from "react";
import {
  FaCss3,
  FaGit,
  FaHtml5,
  FaJs,
  FaLink,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import Zuri from "../../images/zuri.png";
import Gida from "../../images/gida.png";
import NLPC from "../../images/nlpc.png";
import AIICO from "../../images/aiico.png";
import CHUKWUKA_NODE from "../../images/chukwuka-node.png";

export function DevProjects() {
  const devProjects = [
    {
      //Image Properties
      devImg: Zuri,
      devAlt: "Zuri Interships",

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
      devImg: Gida,
      devAlt: "Gida Rentals",

      //Project Details
      project: "Gida Rentals",
      projectDes: `Gida allows Homeowners rent or sell their properties on the go. Comes with three portals for Renters/Buyers, Sellers and Inhouse Backoffice Users. Authenticate Routes Included`,

      //Links
      git: "",
      siteLink: "https://gida-rentals.netlify.app/",
      stack: "React",
      stackIMG: <FaReact />,
    },

    {
      //Image Properties
      devImg: NLPC,
      devAlt: "NLPC PFA",

      //Project Details
      project: "NLPC PFA",
      projectDes: `This Business Process Management portal allows NLPC Pension Funds Administrators manage their entire business, vendor and procurement operations.`,

      //Links
      git: "",
      siteLink: "https://nlpc-pfa-demo-app.web.app/",
      stack: "React",
      stackIMG: <FaReact />,
    },
    {
      //Image Properties
      devImg: AIICO,
      devAlt: "AIICO Capital",

      //Project Details
      project: "AIICO Capital",
      projectDes: `This Portal allows AIICO Capital to manage their entire business, and capital management operations.`,

      //Links
      git: "",
      siteLink: "",
      stack: "Next",
      stackIMG: <FaReact />,
    },
    {
      //Image Properties
      devImg: CHUKWUKA_NODE,
      devAlt: "Chukwuka Node",

      //Project Details
      project: "Chukwuka Node",
      projectDes: `Chukwuka Node - a simple light weight npm package containing utility functions that can be used across various JS Applications`,

      //Links
      git: "",
      siteLink: "https://www.npmjs.com/package/chukwuka-node",
      stack: "Next",
      stackIMG: <FaReact />,
    },
  ];

  const myStacks = [
    {
      key: "1",
      stack: <FaReact />,
      stackName: "React",
      stackStar: "Core",
    },
    {
      key: "2",
      stack: <FaHtml5 />,
      stackName: "HTML 5",
      stackStar: "Core",
    },
    {
      key: "3",
      stack: <FaCss3 />,
      stackName: "CSS 3",
      stackStar: "Core",
    },
    {
      key: "4",
      stack: <FaSass />,
      stackName: "Sass",
      stackStar: "Core",
    },
    {
      key: "5",
      stack: <FaJs />,
      stackName: "Javascript",
      stackStar: "Core",
    },
    {
      key: "6",
      stack: <FaLink />,
      stackName: "REST APIs",
      stackStar: "Core",
    },
    {
      key: "6.5",
      stack: <FaLink />,
      stackName: "Context APIs",
      stackStar: "Core",
    },
    {
      key: "7",
      stack: <FaGit />,
      stackName: "GIT",
      stackStar: "Core",
    },
    {
      key: "8",
      stack: <FaNodeJs />,
      stackName: "Node",
      stackStar: "Auxilliary",
    },
  ];
  return { devProjects, myStacks };
}
