import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ryan Bullough | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ryan Bullough',
  subtitle: `I'm a web developer / dreamer`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I've recently made the transition from coal to code.`,
  paragraphTwo: `At some point in your life you realise there's merit in
   chasing after what you're passionate about.`,
  paragraphThree: `I love solving problems and working with creative people. Fortunately for me - software engineering provides both in abundance!`,
  paragraphFour: `Browse below to see a few samples of my work, check out my resume or flick me an email - 
   I'd love to chat.`,
  resume: 'https://github.com/rjbullough/Resume/blob/main/Ryan%20Bullough%20-%20Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'PAIRSWELL.png',
    title: 'Pairswell',
    info: 'A food + wine pairing app that delivers the best choices based on user input',
    info2: 'Built using Vue.js',
    url: 'https://bit.ly/39TIFVf',
    repo: 'https://github.com/rjbullough/seic38-project3', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'UNA.jpeg',
    title: 'UNA',
    info:
      'Nutritional tracking web app that features beautiful data representation and simple inputs ',
    info2: 'Built using Ruby on Rails',
    url: 'https://bit.ly/2HInsBs',
    repo: 'https://github.com/rjbullough/seic38-project1', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'CONNECT4.png',
    title: 'Four in a Row',
    info: '2 player game that mimics the famous Connect 4 game by Mattel',
    info2: '',
    url: 'https://bit.ly/2GbIaJv',
    repo: 'https://github.com/rjbullough/seic38-project0', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: `I'd to chat about what you're building and how I could help`,
  btn: 'Contact me!',
  email: 'rjbullough@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ryan-bullough/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/rjbullough',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
