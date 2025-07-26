import { Link } from "react-router"
import { links } from "../data/data"

export default function Footer() {

  return (
    <div className="border-t-2 border-gray-300 px-60 py-3 mt-15 flex justify-between items-center">
      <div className="flex justify-center items-center gap-8">
        {links.map((link, i) => (
          <Link to={link.route} key={i} className="font-semibold text-sm">
            {link.name}
          </Link>
        ))}
      </div>
      <h1 className="text-sm"> ©{new Date().getFullYear()} bartue.dev All Rights Reserved </h1>
    </div>
  )
}