import { useParams } from "react-router"
import { projects } from "../../data/data";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ImageOff  } from 'lucide-react';


export default function ProjectDetails() {
  const { projectId } = useParams();
  const [slideIndex, setSlideIndex] = useState(0);
  const [isOpenImage, setIsOpenImage] = useState(false)

  const nextBtn = (images: string[]) => { 
    setSlideIndex((prev:number) => {
      if (prev >= images.length - 1) {
        return 0
      }
      return prev + 1
    })
  }

  const prevBtn = (images: string[]) => { 
    setSlideIndex((prev: number) => {
      if (prev <= 0) {
        return images.length - 1
      }
      return prev -1
    })
  }

  //open image to fullscreen
  const openImage = () => {
    setIsOpenImage(true)
  }

  //close image from fullscreen
  const closeImage = () => {
    setIsOpenImage(false)
  }

  //use escape key to close the image from fullscreen
  useEffect(() => {
    //esc callback function
    const escBtn = (e : KeyboardEvent) => {
      if (e.key === "Escape") {
        closeImage()
        console.log("Esc btn is press")
      }
    }

    //only esc if img is open
    if (isOpenImage === true) {
      window.addEventListener("keydown", escBtn)
    }

    return () => {
      window.removeEventListener("keydown", escBtn)
    }
  },[isOpenImage])

  return (
    <div className="mt-15 w-full h-screen">
      {projects
        .filter(project => project.id === Number(projectId))
        .map(project => (
          <div key={project.id}>
            <h1 className="text-xl sm:text-2xl font-bold italic">{project.title.toUpperCase()}</h1>
            
            <p className="mt-2 text-xs sm:text-base"> {project.about} </p>

            <div className="flex items-center gap-2 mt-2">
              <h1 className="font-semibold italic">Built with:</h1>
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

            <div className="flex flex-col justify-center mt-3">
                {project?.code?.frontend && <a href={project?.code?.frontend} target="_blank" className="link w-fit">frontend repo</a>}
                {project?.code?.backend && <a href={project?.code?.backend} target="_blank" className="link w-fit">backend repo</a>}
                {project?.demo && <a href={project?.demo?.link} target="_blank" className="link w-fit"> demo link</a>}
            </div>

            {project?.images && project?.images?.length > 0
              ? <div className="relative w-full h-90 shadow-md border border-gray-200 rounded-md mt-5">
                    <button
                      className="absolute top-1/2 -left-10 cursor-pointer w-8 h-8 border rounded-full flex justify-center items-center hover:border-2"
                      onClick={() => prevBtn(project?.images || [])}
                    >
                      <ChevronLeft/>
                    </button>
                    <img 
                      src={`/${(project?.images ?? [])[slideIndex]}`} 
                      alt="project-image"
                      className="w-full h-full object-cover rounded-md cursor-pointer"
                      onClick={openImage}
                    />
                    <button
                      className="absolute top-1/2 -right-10 cursor-pointer w-8 h-8 border rounded-full flex justify-center items-center hover:border-2"
                      onClick={() => nextBtn(project?.images || [])}
                    >
                      <ChevronRight/>
                    </button>

                     {isOpenImage && (
                        <div
                          className="fixed inset-0 bg-black/50 bg-opacity-80 flex justify-center items-center z-50"
                          onClick={closeImage}
                        >
                          <img
                            src={`/${(project?.images ?? [])[slideIndex]}`} 
                            alt="full"
                            className="max-h-[90%] max-w-[90%] rounded shadow-lg"
                          />
                        </div>
                      )}
                  </div>
                : <div 
                    className=" w-full h-90 shadow-md border border-gray-200 rounded-md mt-5"
                  >
                    <ImageOff size="100%"/>
                  </div>}
          </div>
        ))}
    </div>
  )
}