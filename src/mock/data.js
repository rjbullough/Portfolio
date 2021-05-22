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
  paragraphOne: `After working in the mining industry for 15 years I've made the transition to code.`,
  paragraphTwo: `At some point in your life you realise there's merit in
   chasing after what you're passionate about.`,
  paragraphThree: `I love solving problems and working with creative people. Fortunately for me - software engineering provides both in abundance!`,
  paragraphFour: `Browse below to see a few samples of my work, check out my resume or flick me an email - 
   I'd love to chat.`,
  resume: 'https://drive.google.com/file/d/1Cyo1IESrjcSkJgodWtyb4irk9gPpVB4z/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'PAIRSWELL.png',
    title: 'Pairswell',
    info: 'A food + wine pairing app that delivers the best choices based on user input.',
    info2: 'Built using Vue.js and Vuex.  This app ranks wine pairing based on user food choices.',
    url: 'https://bit.ly/39TIFVf',
    repo: 'https://github.com/rjbullough/seic38-project3', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'UNA.jpeg',
    title: 'UNA',
    info:
      'Daily food intake tracking app that features beautiful data representation and intuitive design.',
    info2:
      'Built using Ruby on Rails and featuring a CRUD system utilising PostgreSQL.  Users can sign up and login, add entries and see the macronutrient makeup graphed out for them.',
    url: 'https://bit.ly/2HInsBs',
    repo: 'https://github.com/rjbullough/seic38-project1', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'CONNECT4.png',
    title: 'Four in a Row',
    info: '2 player game that mimics the famous Connect 4 game by Mattel',
    info2:
      'Built using Vanilla JS, HTML and CSS.  The game adds entries to an array with each move and then checks for a victory state each time.',
    url: 'https://bit.ly/2GbIaJv',
    repo: 'https://github.com/rjbullough/seic38-project0', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: ``,
  btn: '',
  email: 'rjbullough@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
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
