// Import images statically
import { StaticImageData } from "next/image";
import airbnbImage from "../assets/imgs/airbnb.png";
import lmsImage from "../assets/imgs/LMS.png";
import moviesBookingImage from "../assets/imgs/movies_booking.jpeg";
import trainBookingImage from "../assets/imgs/train_booking.jpeg";
import airsaver from "../assets/imgs/airsaver.jpeg";

import nextjsIcon from "../assets/imgs/nextjs-icon.png";
import reactIcon from "../assets/imgs/react-js-icon.png";
import typescriptIcon from "../assets/imgs/typescript.png";
import tailwindIcon from "../assets/imgs/tailwindcss-icon.png";
import nodejsIcon from "../assets/imgs/node-js-icon.png";
import jestIcon from "../assets/imgs/jest.png";
import figmaIcon from "../assets/imgs/figma-icon.png";

export interface IProject {
  name: string;
  desc: string;
  tech: string[];
  links?: {
    live?: string;
    github?: string;
  };
  image?: any; // The image will now be imported statically
  categorie?: string;
}

export const projectsItems: IProject[] = [
  {
    name: "Clone AirBnb",
    desc: "A web app for food Delivery. choose your burger, choose your menu, choose adresse, pay online, track your commande, cancel you commande, update your commande",
    tech: ["Vs Code", "Bootstrap", "Sass", "React JS", "FireBase"],
    links: {
      github: "https://github.com/MohamedKandadev/airbnb-clone",
      live: "https://airbnb-clone-kappa-liart.vercel.app/?vercelToolbarCode=r9UmdUCBxOW-gbi",
    },
    image: airbnbImage, // Use imported image
    categorie: "Web App",
  },
  {
    name: "Learning management system",
    desc: "A web app for students and teachers to upload and buy courses and watch online courses",
    tech: ["Vs Code", "Next js", "Tailwind", "Node js"],
    links: {
      github: "https://github.com/MohamedKandadev/LMS.git",
    },
    image: lmsImage, // Use imported image
    categorie: "Web App",
  },
  {
    name: "Movie Ticket Booking",
    desc: "A web app for students and teachers to upload and buy courses and watch online courses",
    tech: ["Vs Code", "Next js", "Tailwind", "Node js"],
    links: {
      github: "https://github.com/MohamedKandadev/movie-ticket.git",
    },
    image: moviesBookingImage, // Use imported image
    categorie: "Mobile App",
  },
  {
    name: "Train Booking",
    desc: "A web app for students and teachers to upload and buy courses and watch online courses",
    tech: ["Vs Code", "Next js", "Tailwind", "Node js"],
    links: {
      github: "https://github.com/MohamedKandadev/movie-ticket.git",
    },
    image: trainBookingImage, // Use imported image
    categorie: "Mobile App",
  },
  {
    name: "Air Saver",
    desc: "A web app for students and teachers to upload and buy courses and watch online courses",
    tech: ["Vs Code", "Next js", "Tailwind", "Node js"],
    links: {
      github: "https://github.com/mohamed-kandad/airSaver",
    },
    image: airsaver, // Use imported image
    categorie: "Mobile App",
  },
];

export const MyAdvantagesItems = [
  {
    title: "Next js",
    icon: nextjsIcon, // Use the imported icon
    percentage: "80%",
  },
  {
    title: "React native",
    icon: reactIcon, // Use the imported icon
    percentage: "70%",
  },
  {
    title: "TypeScript",
    icon: typescriptIcon, // Use the imported icon
    percentage: 92,
  },
  {
    title: "Tailwind CSS",
    icon: tailwindIcon, // Use the imported icon
    percentage: 90,
  },
  {
    title: "Node js",
    icon: nodejsIcon, // Use the imported icon
    percentage: "70%",
  },
  {
    title: "Jest",
    icon: jestIcon, // Use the imported icon
    percentage: "60%",
  },
  {
    title: "Figma",
    icon: figmaIcon, // Use the imported icon
    percentage: "50%",
  },
];
