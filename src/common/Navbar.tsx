import { Link } from "react-router"
import { links } from "../data/data"

export default function Navbar() {

  return (
    <div className="sticky top-3 z-1">
      <nav 
        className="bg-white w-100 m-auto shadow-sm rounded-full py-2 font-semibold text-sm"
      >
        <ul className="flex justify-center items-center gap-10">
          {links.map((link, i) => (
            <Link 
              to={link.route}
              key={i}
              className="hover:text-emerald-600"
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  )
}