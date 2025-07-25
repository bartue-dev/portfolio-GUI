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
      id: 1,
      title: "Car Rental App",
      about: "Car Rental App is a Full Stack project. User/Admin app, User able to navigate throught the availble vehicle then book whatever available vehicle and can create testimonials about the service of the business. Admin monitor the data of the business. Add more vehicle, Update the existing Vehicle or Delete Vehicle. Admin can also Add bookings, Update existing bookings and Delete booking. Lastly Admin can select a testimonials created by the user to display in the client side of the website. ",
      frontend: [
        {src: "icons8-react-js-48.png", tip: "react-js"},
        {src: "icons8-tailwind-css-48.png", tip: "tailwind-css"}
      ],
      backend: [
        {src: "icons8-express-js-50.png", tip: "express-js"},
        {src: "icons8-prisma-orm-48.png", tip: "prisma-orm"},
        {src: "icons8-jwt-48.png", tip: "jsonwebtoken"},
        {src: "express-validator.svg", tip: "express-validator"}  
      ],
      code:{
        frontend: "https://github.com/bartue-dev/car_rental/blob/main/README.md",
        backend: "https://github.com/bartue-dev/car-rental-api/blob/main/README.md"
      },
      status: "ongoing",
      images: [
        "car-rental-06.PNG",
        "car-rental-02.PNG",
        "car-rental-03.PNG",
        "car-rental-04.PNG",
        "car-rental-05.PNG",
        "car-rental-07.PNG",
        "car-rental-08.PNG",
        "car-rental-09.PNG",
        "car-rental-10.PNG",
        "car-rental-11.PNG",
        "car-rental-12.PNG",
      ]
    },
    {
      id: 2,
      title: "File Uploader",
      about: "Basically a file manager. Uses supabase storage to store files, with this approach files can be access from any device as long as there's an internet connection. No frontend Framework used. Uses EJS for Server Side Rendering",
      backend: [
        {src: "icons8-express-js-50.png", tip: "express-js"},
        {src: "icons8-prisma-orm-48.png", tip: "prisma-orm"},
        {src: "icons8-supabase-48.png", tip: "supabase-storage"},
        {src: "passport-seeklogo.png", tip: "passport-js"},
        {src: "express-validator.svg", tip: "express-validator"},
        {src: "icons8-tailwind-css-48.png", tip: "tailwind-css"},
      ],
      code:{
        backend: "https://github.com/bartue-dev/file-uploader/blob/main/README.md"
      },
      images: [
        "file-uploader-02.PNG",
        "file-uploader-01.PNG",
        "file-uploader-03.PNG",
        "file-uploader-04.PNG",
        "file-uploader-05.PNG"
      ]
    },
    {
      id: 3,
      title: "Cv Generator App",
      about: "An app that can build a downloadable cv/resume. Click the show/hide sample button to have an overview of the output. Then try to input information to the forms and click download button to download your CV/Resume as pdf file",
      frontend: [
        {src: "icons8-react-js-48.png", tip: "react-js"},
        {src: "react-pdf.png", tip: "react-pdf"}
      ],
       code:{
        frontend: "https://github.com/bartue-dev/cv-application-generator/blob/main/README.md"
      },
      images: [
        "cv-generator-01.PNG",
        "cv-generator-02.PNG",
        "cv-generator-03.PNG",
      ]
    },
    {
      id: 4,
      title: "Blog API",
      about: "Practice building a REST API. Used jsonwebtoken(jwt) for authentication and prisma orm for database schema and queries",
      backend: [
        {src: "icons8-express-js-50.png", tip: "express-js"},
        {src: "icons8-prisma-orm-48.png", tip: "prisma-orm"},
        {src: "icons8-jwt-48.png", tip: "jsonwebtoken"},
        {src: "express-validator.svg", tip: "express-validator"},
      ],
      code:{
        backend: "https://github.com/bartue-dev/blog_api/blob/main/README.md",
      },
      images: []
    }
]