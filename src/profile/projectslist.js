import React from "react";
import {
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaLink,
  FaNodeJs,
  FaNpm,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiAzuredevops,
  SiElixir,
  SiFigma,
  SiGithub,
  SiInteractiondesignfoundation,
  SiJira,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRedux,
  SiZoho,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";
import Zuri from "../images/zuri.png";
import Gida from "../images/gida.png";
import NLPC from "../images/nlpc.png";
import AIICO from "../images/aiico.png";
import CHUKWUKA_NODE from "../images/chukwuka-node.png";
import AGENCY from "../images/agency.png";

export const SkillsType = {
  Frontend: "frontend",
  Backend: "backend",
  Tools: "tools",
};

const SkillsLevel = {
  Core: "core",
  Intermediate: "intermediate",
  Advanced: "advanced",
  Auxilliary: "auxilliary",
};

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
      devImg: AGENCY,
      devAlt: "Insurance Agency",

      //Project Details
      project: "Insurance Agency",
      projectDes: `Insurance Agency - an simple Insurance Agency API written in Node.js, with a PostgresDB, and hosted on Render.com`,

      //Links
      git: "",
      siteLink: "https://documenter.getpostman.com/view/16491924/2s9YeEdCiC",
      stack: "Typescript",
      stackIMG: (color) => <BiLogoTypescript color={color} />,
      stackColor: "red",
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

  const myStacks = (skillsType) => {
    const stacks = [
      {
        key: "1",
        stack: <FaReact />,
        stackName: "React",
        stackStar: SkillsLevel.Core,
        stackSkillType: SkillsType.Frontend,
      },
      {
        key: "8",
        stack: <TbBrandNextjs />,
        stackName: "Next.js",
        stackStar: SkillsLevel.Core,
        stackSkillType: SkillsType.Frontend,
      },
      {
        key: "8",
        stack: <TbBrandNextjs />,
        stackName: "Next.js APIs",
        stackStar: SkillsLevel.Core,
        stackSkillType: SkillsType.Backend,
      },
      {
        key: "2",
        stack: <FaHtml5 />,
        stackName: "HTML 5",
        stackStar: SkillsLevel.Core,
        stackSkillType: SkillsType.Frontend,
      },
      {
        key: "3",
        stack: <FaCss3 />,
        stackName: "CSS",
        stackStar: SkillsLevel.Core,
        stackSkillType: SkillsType.Frontend,
      },
      {
        key: "4",
        stack: <FaSass />,
        stackName: "Sass",
        stackStar: SkillsLevel.Core,
        stackSkillType: SkillsType.Frontend,
      },
      {
        key: "5",
        stack: <BiLogoJavascript />,
        stackName: "Javascript",
        stackStar: SkillsLevel.Core,
        stackSkillType: SkillsType.Frontend,
      },
      {
        key: "5",
        stack: <BiLogoTypescript />,
        stackName: "Typescript",
        stackStar: SkillsLevel.Core,
        stackSkillType: SkillsType.Frontend,
      },
      {
        key: "5",
        stack: <SiAzuredevops />,
        stackName: "Azure Devops",
        stackStar: SkillsLevel.Core,
        stackSkillType: SkillsType.Tools,
      },
      {
        key: "5",
        stack: <FaGitAlt />,
        stackName: "Git",
        stackStar: SkillsLevel.Core,
        stackSkillType: SkillsType.Tools,
      },
      {
        key: "6",
        stack: <FaLink />,
        stackName: "REST APIs",
        stackStar: SkillsLevel.Core,
        stackSkillType: SkillsType.Backend,
      },
      {
        key: "8",
        stack: <FaNpm />,
        stackName: "NPM",
        stackStar: SkillsLevel.Core,
        stackSkillType: SkillsType.Tools,
      },
      {
        key: "8",
        stack: <SiInteractiondesignfoundation />,
        stackName: "Design Libraries",
        stackStar: SkillsLevel.Core,
        stackSkillType: SkillsType.Tools,
      },
      {
        key: "7",
        stack: <SiGithub />,
        stackName: "Github",
        stackStar: SkillsLevel.Core,
        stackSkillType: SkillsType.Tools,
      },
      {
        key: "8",
        stack: <FaNodeJs />,
        stackName: "Node.js",
        stackStar: SkillsLevel.Core,
        stackSkillType: SkillsType.Backend,
      },
      {
        key: "8",
        stack: <SiRedux />,
        stackName: "Redux",
        stackStar: SkillsLevel.Core,
        stackSkillType: SkillsType.Frontend,
      },
      {
        key: "8",
        stack: <SiJira />,
        stackName: "Jira",
        stackStar: SkillsLevel.Core,
        stackSkillType: SkillsType.Tools,
      },
      {
        key: "8",
        stack: <SiZoho />,
        stackName: "Zoho Sprints",
        stackStar: SkillsLevel.Core,
        stackSkillType: SkillsType.Tools,
      },
      {
        key: "8",
        stack: <SiPrisma />,
        stackName: "Prisma",
        stackStar: SkillsLevel.Core,
        stackSkillType: SkillsType.Backend,
      },
      {
        key: "8",
        stack: <SiMongodb />,
        stackName: "Mongo DB",
        stackStar: SkillsLevel.Core,
        stackSkillType: SkillsType.Backend,
      },
      {
        key: "8",
        stack: <SiPostgresql />,
        stackName: "Postgres DB",
        stackStar: SkillsLevel.Core,
        stackSkillType: SkillsType.Backend,
      },
      {
        key: "8",
        stack: <SiFigma />,
        stackName: "Figma",
        stackStar: SkillsLevel.Core,
        stackSkillType: SkillsType.Tools,
      },

      {
        key: "8",
        stack: <SiElixir />,
        stackName: "Elixir",
        stackStar: SkillsLevel.Auxilliary,
        stackSkillType: SkillsType.Backend,
      },
      {
        key: "8",
        stack: <SiPython />,
        stackName: "Python",
        stackStar: SkillsLevel.Auxilliary,
        stackSkillType: SkillsType.Backend,
      },
    ];

    if (skillsType) {
      return stacks.filter((stack) => stack.stackSkillType === skillsType);
    }

    return stacks;
  };
  return { devProjects, myStacks };
}
