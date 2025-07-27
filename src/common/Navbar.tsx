import { Link } from "react-router"
import { links } from "../data/data"
import { useLocation } from "react-router"
import { useEffect } from "react";

export default function Navbar() {
  const {pathname} = useLocation();
  

  useEffect(()=> {
    const title = pathname.split("/")[1];
    if (pathname) {
      document.title = `${title.charAt(0).toUpperCase() + title.slice(1)} | bartue.dev`
    }

    return () => {
       document.title = "bartue.dev"
    }
  },[pathname])

  return (
    <div className="sticky top-3 z-1">
      <nav 
        className="bg-white w-70 sm:w-100 m-auto shadow-sm rounded-full py-2 font-semibold text-sm"
      >
        <ul className="flex justify-center items-center gap-4 sm:gap-10">
          {links.map((link, i) => (
            <Link 
              to={link.route}
              key={i}
              className={`${pathname === link.route && "text-emerald-600"} hover:text-emerald-600 text-xs sm:text-base`}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  )
}