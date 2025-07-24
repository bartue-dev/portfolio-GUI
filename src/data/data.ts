import { type ProjectTypes, type LinksTypes } from "../lib/types"

export const links: LinksTypes[] = [
  {
    name: "Home",
    route: "/home"
  },
  {
    name: "Projects",
    route: "/projects"
  },
  {
    name: "About",
    route: "/about"
  },
  {
    name: "Contact",
    route: "/contact"
  }
]

export const projects: ProjectTypes[] = [
    {
      title: "Car Rental App",
      about: "full stack project",
      frontend: ["icons8-react-js-48.png", "icons8-tailwind-css-48.png"],
      backend: ["icons8-express-js-50.png", "icons8-prisma-orm-48.png", "icons8-jwt-48.png", "express-validator.svg"],
      code:{
        frontend: "https://github.com/bartue-dev/car_rental/blob/main/README.md",
        backend: "https://github.com/bartue-dev/car-rental-api/blob/main/README.md"
      },
      status: "ongoing",
      images: [
        "car-rental-02.PNG",
        "car-rental-01.PNG",
        "car-rental-03.PNG",
        "car-rental-04.PNG",
        "car-rental-05.PNG",
        "car-rental-06.PNG",
        "car-rental-07.PNG",
        "car-rental-08.PNG",
        "car-rental-09.PNG",
        "car-rental-10.PNG",
        "car-rental-11.PNG",
        "car-rental-12.PNG",
      ]
    },
    {
      title: "File Uploader",
      about: "Basically a file manager. Used supabase storage to store files and it is Server side rendering app",
      backend: ["icons8-express-js-50.png", "icons8-prisma-orm-48.png", "icons8-supabase-48.png", "passport-seeklogo.png", "express-validator.svg", "icons8-tailwind-css-48.png"],
      code:{
        backend: "https://github.com/bartue-dev/file-uploader/blob/main/README.md"
      },
      images: [
        "file-uploader-01.PNG",
        "file-uploader-02.PNG",
        "file-uploader-03.PNG",
        "file-uploader-04.PNG",
        "file-uploader-05.PNG"
      ]
    },
    {
      title: "Cv Generator App",
      about: "An app that can build a downloadable cv/resume",
      frontend: ["icons8-react-js-48.png"],
       code:{
        frontend: "https://github.com/bartue-dev/cv-application-generator/blob/main/README.md"
      },
      images: [
        "cv-generator-02.PNG",
        "cv-generator-01.PNG",
        "cv-generator-03.PNG",
      ]
    },
    {
      title: "Blog API",
      about: "Build my first API",
      backend: ["icons8-express-js-50.png", "icons8-prisma-orm-48.png", "icons8-jwt-48.png", "express-validator.svg"],
      code:{
        backend: "https://github.com/bartue-dev/blog_api/blob/main/README.md",
      },
      images: [
     
      ]
    }
]