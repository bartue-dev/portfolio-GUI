import { useParams } from "react-router"

export default function ProjectDetails() {
  const { projectId } = useParams();

  return (
    <div>
      <h1>Project details {projectId}</h1>
    </div>
  )
}