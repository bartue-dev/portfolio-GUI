import ProjectCard from "../../components/projects/ProjectCard"
import Hero from "./Hero"

export default function Home() {

  return (
    <div className="flex-grow flex flex-col gap-30">
      <Hero />
      <ProjectCard />
    </div>
  )
}