import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  figma,
  njweb,
  dradv,
  drgp
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Designer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    no:"1",
    title: "HTML,CSS and JS Web Designer",
    iconBg: "#2CB557",
    date: "2019 - 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",

    ],
  },
  {
    no:"2",
    title:"Wordpress Developer",
    iconBg: "#2CB557",
    date: "2020 - 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    no:"3",
    title: "Elementor Developer",
    iconBg: "#2CB557",
    date: "2021 - 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product.",
    name: "Dr.S.Gnanapragasam",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients.",
    name: "Dr.V.Natarajan",

  },
  {
    testimonial:
      "After optimized our website, our traffic increased by 50%.",
    name: "N.Rethikaa shree",
  },
];

const projects = [
  {
    name: "NJWEBDESIGNING",
    description:
      "My Personal Website for designing the creative websites.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      
      {
        name: "Elementor",
        color: "pink-text-gradient",
      },
    ],
    image: njweb,
    source_code_link: "https://njwebdesigning.in",
  },
  {
    name: "Dradventurer",
    description:
      "DrAdventurer is a  website for a dentist who loves travels and adventur",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "Elementor",
        color: "pink-text-gradient",
      },
    ],
    image: dradv,
    source_code_link: "dradventurer.in",
  },
  {
    name: "Drgp",
    description:
      "Drgp is a website for a dentist in India",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "Elementor",
        color: "pink-text-gradient",
      },
    ],
    image: drgp,
    source_code_link: "drgp.in",
  },
];

export { services, technologies, experiences, testimonials, projects };
