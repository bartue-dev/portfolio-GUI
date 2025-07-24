import { projects } from  "../../data/data"
import { type ProjectTypes } from "../../lib/types"
import { Link } from 'lucide-react';

export default function ProjectCard() {

  return (
    <div className="grid grid-cols-2 gap-5">
      {projects.map((project: ProjectTypes, i: number) => (
        <div 
          key={i} 
          className="w-90 min-h-80 rounded-md shadow border border-gray-100 flex flex-col gap-5 p-4 hover:shadow-md hover:border-gray-200"
        >

        {(project?.images ?? []).length > 0
          ?  <div className="h-50 w-full border border-gray-100">
                <img 
                  key={i} 
                  src={(project?.images ?? [])[1]} 
                  alt="project-image" 
                  className="w-full h-full object-cover border-gray-400"
                />
              </div>
          : <p className="w-full h-full border border-gray-100 rounded-md text-center italic">No image provided</p>}
        

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