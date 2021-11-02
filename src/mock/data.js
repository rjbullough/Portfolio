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
  subtitle: `I'm a web developer / Australian Shepherd enthusiast`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `After working in the mining industry for 15 years I've recently made the transition to code.`,
  paragraphTwo: `It definitely wasn't easy - but nothing worth while ever is!`,
  paragraphThree: `I love chewing on a difficult problem and working with creative people.`,
  paragraphFour: `Browse below to see a few samples of my work, check out my resume or send me an email with some sweet Aussie Shepherd pics, i'd love to chat!`,
  resume: 'https://drive.google.com/file/d/1gpNfDNbCiXqNYtYHfnfP4iosJGj1U1Uv/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'VC.png',
    title: 'Visit Canberra',
    info: 'A Tourism website designed to surface stand-out local attractions and events.',
    info2: 'JAMstack website using a headless instance of Drupal 9 and Vue.js.',
    url: 'https://bit.ly/3w7BW2K',
    repo: null, // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '4CBR.png',
    title: '4 Canberra',
    info: 'A brouchure website designed to promote a local tourism initiative.',
    info2: 'Built using Svelte + Sveltekit',
    url: 'https://bit.ly/3k0yx0S',
    repo: null, // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'PAIRSWELL.png',
    title: 'Pairswell',
    info:
      'A food + wine pairing app that delivers the best wine choices based on what a user is eating.',
    info2: 'Built using Vue.js.',
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
