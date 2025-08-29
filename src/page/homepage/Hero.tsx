import Socials from "../../common/Socials";

export default function Hero() {

  return (
    <div className="flex justify-start items-center gap-10 mt-15 place-self-center">
      <div className="w-40 justify-items-center hidden lg:block">
        <img 
          src="/profile.png" 
          alt="Profile-photo"
          className="w-full h-full rounded-full object-cover"   
        />

        <Socials size="xl" />
        </div>
        
        <div>
          <h1 className="font-semibold text-xl sm:text-2xl text-gray-700">Bartue.dev | Software Developer</h1>
          <p 
            className="text-sm sm:text-base mt-2"
          >
            I am a Software developer with expertise <br/> in Typescript, React, Nodejs, Express, PostgreSQL, Prisma
          </p>
          
          <div className="flex items-center gap-3 mt-3">
              
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" 
              className="w-6 sm:w-10"  
            />
          

            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" 
              className="w-6 sm:w-10"
            />

            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              className="w-6 sm:w-10"
            />

            
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
              className="w-6 sm:w-10"
            />
          
  
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" 
              className="w-6 sm:w-12"
            />
          
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" 
              className="w-6 sm:w-10"  
            />
            
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" 
              className="w-6 sm:w-10"
            />
            
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" 
              className="w-6 sm:w-10"
            />
          
          </div> 
        </div>
    </div>
  )
}