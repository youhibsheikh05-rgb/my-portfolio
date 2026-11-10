import { Link, useLocation } from "react-router-dom";
import { personal } from "../data/personal";

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const links = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "MERN" },
    { to: "/practice", label: "Practice" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#08080c]/70 backdrop-blur-xl border-b border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg">
          <span className="grad-text">{personal.firstName}</span>
          <span className="text-zinc-600 mono text-sm">.dev</span>
        </Link>
        <div className="hidden md:flex gap-7 text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={isActive(l.to) ? "text-white" : "text-zinc-400 hover:text-white transition"}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <a href={personal.resume} download className="text-sm px-4 py-2 rounded-lg bg-green-500 text-black font-semibold hover:bg-green-400 transition">
          Resume
        </a>
      </div>
    </nav>
  );
}