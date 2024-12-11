export interface IProject {
  name: string;
  desc: string;
  tech: string[];
  links?: {
    live?: string;
    github?: string;
  };
  image?: string;
}

export const projectsItems: IProject[] = [
  {
    name: "Clone AirBnb",
    desc: "A web app for food Delivery. choose your burger, choose your menu, choose adresse, pay online, track your commande, cancel you commande, update your commande",
    tech: ["Vs Code", "Bootstrap", "Sass", "React JS", "FireBase"],
    links: {
      github: "https://github.com/MohamedKandadev/airbnb-clone",
    },
    image: "aitbnb.png",
  },
  {
    name: "Online Courses",
    desc: "A web app for food Delivery. choose your burger, choose your menu, choose adresse, pay online, track your commande, cancel you commande, update your commande",
    tech: ["Vs Code", "Bootstrap", "Sass", "React JS", "FireBase"],
    image: "LMS.png",
    links: {
      github: "https://github.com/MohamedKandadev/LMS.git",
    },
  },
  {
    name: "Ecommerce Web App",
    desc: "A web app for electronic material. choose your commande, choose adresse, pay online, track your commande, cancel you commande, update your commande",
    tech: ["Vs Code", "Bootstrap", "Sass", "React JS", "Laravel", "MySql"],
    image: "mahalat.png",
  },
  {
    name: "Doctor Appointment",
    desc: "A web app for movies (Netflix Clone). choose your plane and pay online, choose your your movies, choose your language, watch movies",
    tech: ["Vs Code", "Bootstrap", "Sass", "React JS", "FireBase Auth"],
    links: {
      live: "https://doctors-booking.netlify.app/",
      github: "https://github.com/MohamedKandadev/Doctor-Appo/tree/main/client",
    },
    image: "doctor.png",
  },
  {
    name: "Netflix",
    desc: "A web app for movies (Netflix Clone). choose your plane and pay online, choose your your movies, choose your language, watch movies",
    tech: ["Vs Code", "Bootstrap", "Sass", "React JS", "FireBase Auth"],
    links: {
      // live: 'https://clonetflixreact.netlify.app/login',
      // github: 'asas'
    },
    image: "netflix.png",
  },
  {
    name: "Food Delivery",
    desc: "A web app for food Delivery. choose your burger, choose your menu, choose adresse, pay online, track your commande, cancel you commande, update your commande",
    tech: ["Vs Code", "Bootstrap", "Sass", "React JS", "FireBase"],
    links: {
      live: "https://berger-delivery.netlify.app/",
    },
    image: "food_delivery.png",
  },
  // {
  //   name: 'Learning management system',
  //   desc: 'A web app for students and teachers to upload and but courses and watch online courses',
  //   tech: ['Vs Code', 'Next js', 'Tailwind', 'Node js'],
  //   links: {
  //     live: '',
  //     github: 'sasas'
  //   },
  //   image: 'first_project.png'
  // },
];

export const MyAdvantagesItems = [
  {
    title: "Next js",
    icon: "nextjs-icon.png",
    percentage: "80%",
  },
  {
    title: "React native",
    icon: "react-js-icon.png",
    percentage: "70%",
  },

  {
    title: "TypeScript",
    icon: "typescript.png", // Replace with your actual icon reference
    percentage: 92,
  },
  {
    title: "Tailwind CSS",
    icon: "tailwindcss-icon.png", // Replace with your actual icon reference
    percentage: 90,
  },
  {
    title: "Node js",
    icon: "node-js-icon.png",
    percentage: "70%",
  },
  {
    title: "Figma",
    icon: "figma-icon.png",
    percentage: "50%",
  },
];
