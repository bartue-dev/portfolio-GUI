import ProjectCard from "../../components/projects/ProjectCard";

export default function Projects() {

  return (
    <div>
      <div className="mb-4 mt-15 px-20 lg:px-10">
        <h1 className="text-4xl font-bold text-gray-700">Things I’ve Built <span className="italic"> (projects) </span></h1>
        <p className="mt-2">Through out my learning journey, while having a non-software-developer full time job. I've faced challenges of limited time to focus on developing. But with planning and consistent execution. I've been able to make a quite progress and upskill.</p>
      </div>
      <ProjectCard/>
    </div>
  )
}