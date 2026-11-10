import { personal } from "../data/personal";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600">
        <div>© {new Date().getFullYear()} <span className="text-zinc-400">{personal.name}</span> · MERN + Cloud/DevOps</div>
        <div className="mono text-xs">Built with React + Tailwind</div>
      </div>
    </footer>
  );
}