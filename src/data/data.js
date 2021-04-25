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
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/simeonleatherland/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/simeonleatherland',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/simeonleatherland/',
    },
    {
      id: nanoid(),
      name: 'email',
      url: 'https://www.instagram.com/simeonleatherland/',
    },
  ],
};
