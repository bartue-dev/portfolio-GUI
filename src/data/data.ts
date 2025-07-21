import { type ProjectTypes } from "../lib/types"

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
      status: "ongoing"
    },
    {
      title: "File Uploader",
      about: "Basically a file manager. Used supabase storage to store files and it is Server side rendering app",
      backend: ["icons8-express-js-50.png", "icons8-prisma-orm-48.png", "icons8-supabase-48.png", "passport-seeklogo.png", "express-validator.svg", "icons8-tailwind-css-48.png"],
      code:{
        backend: "https://github.com/bartue-dev/file-uploader/blob/main/README.md"
      } 
    },
    {
      title: "Blog API",
      about: "Build my first API",
      backend: ["icons8-express-js-50.png", "icons8-prisma-orm-48.png", "icons8-jwt-48.png", "express-validator.svg"],
      code:{
        backend: "https://github.com/bartue-dev/blog_api/blob/main/README.md",
      } 
    },
    {
      title: "Cv Generator App",
      about: "An app that can build a downloadable cv/resume",
      frontend: ["icons8-react-js-48.png"],
       code:{
        frontend: "https://github.com/bartue-dev/cv-application-generator/blob/main/README.md"
      } 
    }
  ]