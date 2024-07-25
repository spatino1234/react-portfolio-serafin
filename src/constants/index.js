import twitch from "../assets/projects/twitch.png";
import bwt from "../assets/projects/burrowsWheeler.png";
import vaasle from "../assets/projects/vaasle.png";
import skin from "../assets/projects/skinBeauty.png";

export const HERO_CONTENT = `Hey Folks! I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With my prior inernships and personal projects, I've developed my skills in React.Js, Vue.Js & Nuxt, as well as back-end technologies like Node.js, Golang (Gin), PostgreSQL, and MongoDB. My goal is to leverage my expertise to make products that push boundaries to provide free information to users.`;

export const ABOUT_TEXT =
  "Outside of being a Fullstack Dev, in my freetime I enjoy: cooking for my friends and family, learning new languages, Dominating people in Fortnite and league of legends, photography, reading and buying books to add to my reading collection. I've been grateful to be a member of and participate in: IBM Accelerate Program, CITI Early ID Program, MLT Career Prep, SEO Career, CodePath, ColorStack, Headstarter Ai, ILLCF, BobaTalks and SGA. Without the help of these orginizations, events and the people I've encountered, I couldn't make it here without their help and guidance.";
export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: " SWE AI Trainer",
    company: "Outlier.ai",
    description: `Assisted in training AI LLM's to write better code by evaluating the quality of AI generated code, develop test cases to ensure code works effectively and solve coding problems to comapre solutions to AI code. `,
    technologies: [
      "Python",
      "Java",
      "Javascript",
      "Typescript",
      "C",
      "Open Ai API",
    ],
  },
  {
    year: "2023 - 2024",
    role: "SWE Intern",
    company: "Datasquad",
    description:
      "Optimized legacy Python based web scraper for academic research to collect news transcripts from 2000 - 2022 and successfully scraped over 900,000 transcripts using Selenium and BeautifulSoup while receiving commendation from lead researcher.",
    technologies: ["Python", "Pandas", "Selenium", "BeautifulSoup"],
    link: "https://www.carleton.edu/its/blog/election-news-analysis-project/",
  },
  {
    year: "2023 - 2023",
    role: "SWE Intern",
    company: "Boston Scientific",
    description: `Developed a web app for clinicians to visualize and manage deep brain patient data along with using Prisma to enhance data
    retrieval from MSSQL database, leading to a reduction in query times and future scalability and migration to other databases.`,
    technologies: [
      "Vue.js",
      "Node.js",
      "Bulma",
      "MSSQL",
      "Express.js",
      "Vuetify",
      "Charts.js",
    ],
  },
];

export const PROJECTS = [
  {
    title: "SkinBeauty App (UNDER CONSTRUCTION!!!)",
    image: skin,
    description:
      "A web app helping users identify their skin concerns while educating them on the different active ingredients in their skin care products in a digestable manner to determine what's best for their skin.",
    technologies: [
      "Golang (Gin)",
      "Javascript",
      "React.js",
      "Python",
      "MongoDB",
    ],
  },
  {
    title: "Twitch Clip Highlights Generator",
    image: twitch,
    description:
      "A program that takes in TWITCH VOD's and generates a series of edited clips with the streamer and chat in the video to post on different social media platforms.",
    technologies: ["Python", "TwitchDownloader", "FFmpeg", "Movie.py"],
    link: "https://github.com/riceboi732/Clip-Generator",
  },
  {
    title: "Vaasle",
    image: vaasle,
    description:
      "A Wordle clone that allows Multiplayer Functionality, Game Analytics that's built with a modern Tech Stack and Microservice Architecture.",
    technologies: [
      "Golang (Gin)",
      "Javascript",
      "React.js",
      "Python",
      "MongoDB",
    ],
    link: "https://github.com/abronstone/Vaasle",
  },
  {
    title: "Burrows Wheeler Transform (BWT) Algorithm",
    image: bwt,
    description:
      "An implementation of the BWT algorithm to investigate file compression for DNA sequence allignment and analysis.",
    technologies: ["Python", "C", "Numpy"],
    link: "https://github.com/spatino1234/bwt",
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "",
  email: "spatino1234@gmail.com",
};
