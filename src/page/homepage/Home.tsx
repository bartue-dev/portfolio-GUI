import Activity from "../../components/activities/activity"
import ProjectCard from "../../components/projects/ProjectCard"
import Hero from "./Hero"

export default function Home() {

  return (
    <div className="flex-grow flex flex-col gap-10">
      <Hero />
      <ProjectCard />
      <Activity/>
    </div>
  )
}