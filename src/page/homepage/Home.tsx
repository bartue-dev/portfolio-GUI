import Projects from "../projects/Projects"
import Hero from "./Hero"

export default function Home() {

  return (
    <div className="flex-grow py-5 px-35 mt-15 flex flex-col gap-30">
      <Hero />
      <Projects />
    </div>
  )
}