import { projects } from  "../../data/data"
import { Link as LinkIcon, ImageOff  } from 'lucide-react';
import { Link } from "react-router";

export default function ProjectCard() {

  return (
    <div className="grid grid-cols-2 gap-5">
      {projects.map((project, i: number) => (
        <div 
          key={i} 
          className="w-90 min-h-80 rounded-md shadow border border-gray-100 flex flex-col gap-5 p-4 hover:shadow-md hover:border-gray-200"
        >

        {(project?.images ?? []).length > 0
          ?  <div className="h-50 w-full border border-gray-100">
                <img 
                  key={i} 
                  src={(project?.images ?? [])[0]} 
                  alt="project-image" 
                  className="w-full h-full object-cover border-gray-400"
                />
              </div>
          : <div 
              className="w-full h-50 border border-gray-100 rounded-md justify-items-center"
            >
              <ImageOff size="100%"/>
            </div>}
        

        <h1 className="font-semibold"> {project.title} </h1>

        <div>
          {((project?.frontend ?? []).length > 0 || (project?.backend ?? []).length > 0)
            &&  <div className="flex items-center gap-3">
                  {project?.frontend?.map((img, i) => (
                    <div className="tooltip" data-tip={img.tip}>
                      <img src={`/${img.src}`} alt="icon" key={i} className="w-8"/>
                    </div>
                  ))}

                  {project?.backend?.map((img, i) => (
                    <div className="tooltip" data-tip={img.tip}>
                      <img src={`/${img.src}`} alt="icon" key={i} className="w-8"/>
                    </div>
                  ))}
                </div>} 
        </div>

        <Link to={`/projects/${project.id}`}
          className="flex items-center gap-3"
        >
          <LinkIcon
            size={15}
          />
          <h1 className="text-sm font-semibold hover:text-emerald-600">View Project</h1>
        </Link>
         
          
        </div>
      ))}
    </div>
  )
}