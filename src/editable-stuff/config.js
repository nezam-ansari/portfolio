// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION

const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Md",
  middleName: "",
  lastName: "Nezamuddin",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/nezam-ansari",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/nezam404",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/nezam_404/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/md-nezam-147781226/",
    }
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/me.jpg"),
  imageSize: 400,
  message:
    "My name is Md Nezamuddin. I am pursuing BTECH from BRCM college of Engineering, Bahal (Haryana). Currently, I am working at Repository technologies as a Full-stack developer. I have completed many technologies like NodeJS, React, MongoDB, Postgress, Redux. My hobbies are playing cricket and listening to music in my free time.",
  resume: require("../editable-stuff/resume.pdf"),
};

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "nezam-ansari", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/me.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/me.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 90 },
    { name: "Data Structures", value: 85 },
    { name: "MySQL", value: 75 },
    { name: "Postgres", value: 75 },
    { name: "C/C++", value: 50 },
    { name: "React", value: 90 },
    { name: "Redux", value: 90 },
    { name: "Vue.js", value: 60 },
    { name: "Node.js", value: 80 },
    { name: "HTML/CSS", value: 75 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "nezamnazir1234@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Entern',
      companylogo: require('../assets/img/Daffodil.png'),
      date: 'June 2019 – July 2019',
      height: 200,
      width: 300,
    },
    { 
      role: 'Full stack developer',
      companylogo: require('../assets/img/repozitory.jpeg'),
      date: 'July 2020 – Present',
      height: 200,
      width: 200,
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
