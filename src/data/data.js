import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Simeon Leatherland',
  lang: 'en',
  description: 'Welcome to my website',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Simeon Leatherland',
  jobtitle: 'Software Developer',
  cta: '',
  img: 'handwave.png',
  location: 'Sydney',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      netname: 'linkedin',
      url: 'https://www.linkedin.com/in/simeonleatherland/',
    },
    {
      id: nanoid(),
      netname: 'github',
      url: 'https://github.com/simeonleatherland',
    },
    {
      id: nanoid(),
      netname: 'instagram',
      url: 'https://www.instagram.com/simeonleatherland/',
    },
  ],
};
