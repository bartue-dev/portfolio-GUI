import ProjectCard from "../../components/projects/ProjectCard";

export default function Projects() {

  return (
    <div>
      <div className="mb-4">
        <h1 className="text-3xl font-bold">Things I’ve Built <span className="italic"> (projects) </span></h1>
        <p className="mt-2">Through out my learning journey, while having a non-software-developer full time job. I've faced challenges of limited time to focus on developing. But with planning and consistent execution. I've been able to make a progress and bring ideas to life.</p>
      </div>
      <ProjectCard/>
    </div>
  )
}