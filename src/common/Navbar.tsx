import { Link } from "react-router"
import { links } from "../data/data"
import { useLocation } from "react-router"

export default function Navbar() {
  const {pathname} = useLocation();  

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
              className={`${pathname === link.route && "text-emerald-600"} hover:text-emerald-600`}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  )
}