
export default function Navbar() {
  
  const links = [
    "Home",
    "About",
    "Projects",
    "Contact"
  ]


  return (
    <div>
      <nav 
        className="bg-white w-100 m-auto shadow-sm rounded-full py-2 font-semibold text-sm"
      >
        <ul className="flex justify-center items-center gap-10">
          {links.map((link, i) => (
            <li key={i}
              className="cursor-pointer hover:text-emerald-600"
            >
              {link}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}