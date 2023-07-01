import React from "react";
import {
  FaCss3,
  FaGit,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaLink,
  FaNodeJs,
  FaNpm,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { SiAzuredevops, SiInteractiondesignfoundation, SiRedux } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";
import Zuri from "../images/zuri.png";
import Gida from "../images/gida.png";
import NLPC from "../images/nlpc.png";
import AIICO from "../images/aiico.png";
import CHUKWUKA_NODE from "../images/chukwuka-node.png";

export function DevProjects() {
  // const proIcon = (prop) => (
  //   return ...prop
  // )
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
      stackIMG: (color) => <FaReact color={color} />,
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
      stackIMG: (color) => <FaReact color={color} />,
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
      stackIMG: (color) => <FaReact color={color} />, // stackIMG: <FaReact />,
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
      stackIMG: (color) => <FaReact color={color} />,
    },
    {
      //Image Properties
      devImg: CHUKWUKA_NODE,
      devAlt: "Chukwuka Node",

      //Project Details
      project: "Chukwuka Node",
      projectDes: `Chukwuka Node - a simple light weight npm package containing utility functions that can be used across various JS Applications.`,

      //Links
      git: "",
      siteLink: "https://www.npmjs.com/package/chukwuka-node",
      stack: "Javascript",
      stackIMG: (color) => <FaJs color={color} />,
      stackColor: "red",
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
      key: "8",
      stack: <TbBrandNextjs />,
      stackName: "Next.js",
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
      stackName: "CSS",
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
      stack: <BiLogoJavascript />,
      stackName: "Javascript",
      stackStar: "Core",
    },
    {
      key: "5",
      stack: <BiLogoTypescript />,
      stackName: "Typescript",
      stackStar: "Core",
    },
    {
      key: "5",
      stack: <SiAzuredevops />,
      stackName: "Azure Devops",
      stackStar: "Core",
    },
    {
      key: "5",
      stack: <FaGitAlt />,
      stackName: "Git",
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
      key: "8",
      stack: <FaNpm />,
      stackName: "NPM",
      stackStar: "Core",
    },
    {
      key: "8",
      stack: <SiInteractiondesignfoundation />,
      stackName: "Design Libraries",
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
    {
      key: "8",
      stack: <SiRedux />,
      stackName: "Redux",
      stackStar: "Core",
    },
  ];
  return { devProjects, myStacks };
}
