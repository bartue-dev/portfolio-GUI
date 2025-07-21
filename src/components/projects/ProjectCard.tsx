import { projects } from  "../../data/data"
import { type ProjectTypes } from "../../lib/types"
import { Link } from 'lucide-react';

export default function ProjectCard() {

  return (
    <div className="grid grid-cols-2 gap-5">
      {projects.map((project: ProjectTypes, i: number) => (
        <div 
          key={i} 
          className="w-80 min-h-80 rounded-md shadow flex flex-col gap-5 p-4 hover:shadow-md hover:border-0"
        >

        <img src="" alt="project-image" className="w-full h-60 border"/>

        <h1 className="font-semibold"> {project.title} </h1>

        <div>
          {((project?.frontend ?? []).length > 0 || (project?.backend ?? []).length > 0)
            &&  <div className="flex items-center gap-3">
                  {project?.frontend?.map((img: string, i) => (
                    <img src={img} alt="icon" key={i} className="w-8"/>
                  ))}

                  {project?.backend?.map((img: string, i) => (
                    <img src={img} alt="icon" key={i} className="w-8"/>
                  ))}
                </div>} 
        </div>

        <div className="flex items-center gap-3">
          <Link 
            size={15}
          />
          <h1 className="text-sm">View Project</h1>
        </div>
         
          
        </div>
      ))}
    </div>
  )
}