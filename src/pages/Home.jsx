import { Link } from "react-router-dom";
import { personal } from "../data/personal";
import { stats, focusAreas, skills, education, learningJourney, marqueeItems } from "../data/skills";
import { mernProjects } from "../data/mern";
import { practiceCategories } from "../data/practice";
import Reveal from "../components/Reveal";

export default function Home() {
  const allPracticeItems = practiceCategories.flatMap((c) => c.items);
  const previewProjects = mernProjects.slice(0, 2);
  const previewPractice = allPracticeItems.slice(0, 2);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="pt-20 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-6">
            <Reveal className="md:col-span-8">
              <div className="bento-card p-8 md:p-12 h-full">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs mb-6">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  MERN developer · learning Cloud & DevOps
                </div>
                <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6">
                  Hi, I'm <br />
                  <span className="grad-text">{personal.firstName}</span>
                </h1>
                <p className="text-lg text-zinc-300 font-medium mb-3">{personal.role}</p>
                <p className="text-zinc-500 max-w-lg mb-8 leading-relaxed">{personal.tagline}</p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/projects" className="px-6 py-3 rounded-lg bg-green-500 text-black font-semibold hover:bg-green-400 transition shadow-lg shadow-green-500/20">
                    MERN projects →
                  </Link>
                  <Link to="/practice" className="px-6 py-3 rounded-lg border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/50 transition">
                    DevOps practice
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150} className="md:col-span-4">
              <div className="bento-card p-8 h-full flex flex-col items-center justify-center text-center">
                <div className="relative float">
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-500/30 to-cyan-500/30 rounded-full blur-2xl"></div>
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-zinc-800 glow-pulse bg-gradient-to-br from-green-500/10 to-cyan-500/10">
                    <img
                      src={personal.avatar}
                      alt={personal.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-5xl font-black grad-text">${personal.firstName[0]}</div>`;
                      }}
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <div className="text-sm text-zinc-500 mono">📍 {personal.location}</div>
                  <div className="text-xs text-zinc-600 mt-2 mono">~/mern + cloud</div>
                </div>
              </div>
            </Reveal>

            {stats.map((s, i) => (
              <Reveal key={s.label} delay={200 + i * 80} className="md:col-span-3">
                <div className="bento-card p-6 text-center h-full">
                  <div className="text-3xl font-black grad-text mb-1">{s.value}</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="py-6 border-y border-zinc-800/60 overflow-hidden bg-[#0d0d12]">
        <div className="flex marquee-track whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="mx-6 text-sm text-zinc-500 mono">
              {item} <span className="text-green-400/40">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Focus */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-12">
              <span className="text-green-400 text-xs font-semibold uppercase tracking-widest mono">01 — Focus</span>
              <h2 className="text-4xl md:text-6xl font-black mt-2">What I work with</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {focusAreas.map((f, i) => {
              const badge = {
                confident: "text-green-400 border-green-500/30 bg-green-500/10",
                learning: "text-yellow-400 border-yellow-500/30 bg-yellow-500/10",
                upcoming: "text-zinc-500 border-zinc-700 bg-zinc-800/30",
              }[f.status];
              return (
                <Reveal key={f.title} delay={i * 80}>
                  <div className="bento-card p-6 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{f.icon}</div>
                      <span className={`text-xs px-2 py-0.5 rounded-full border mono ${badge}`}>{f.status}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-4">{f.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {f.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded bg-zinc-800/60 text-zinc-500 mono">{t}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* MERN preview */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
              <div>
                <span className="text-green-400 text-xs font-semibold uppercase tracking-widest mono">02 — MERN</span>
                <h2 className="text-4xl md:text-6xl font-black mt-2">Recent projects</h2>
              </div>
              <Link to="/projects" className="text-sm text-green-400 hover:underline mono">view all →</Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {previewProjects.map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <Link to="/projects" className="bento-card block group">
                  <div className={`h-40 bg-gradient-to-br ${p.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[100px] font-black text-white/[0.07] group-hover:scale-110 transition">{p.id}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition">{p.title}</h3>
                    <p className="text-sm text-zinc-400 line-clamp-2">{p.description}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Practice preview */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
              <div>
                <span className="text-green-400 text-xs font-semibold uppercase tracking-widest mono">03 — Practice</span>
                <h2 className="text-4xl md:text-6xl font-black mt-2">Learning in public</h2>
              </div>
              <Link to="/practice" className="text-sm text-green-400 hover:underline mono">view all →</Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {previewPractice.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <Link to="/practice" className="bento-card block group">
                  <div className="bg-zinc-900 aspect-video overflow-hidden border-b border-zinc-800">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-zinc-700 mono text-xs">📸 ${p.id}</div>`;
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-sm text-zinc-400">{p.description}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills + Journey */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-6">
          <Reveal className="md:col-span-7">
            <div className="bento-card p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
              {Object.entries(skills).map(([cat, items]) => (
                <div key={cat} className="mb-4 last:mb-0">
                  <div className="text-xs uppercase tracking-wider text-zinc-500 mb-2 mono">{cat}</div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((s) => (
                      <span key={s} className="text-sm px-3 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-300 border border-zinc-800">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150} className="md:col-span-5">
            <div className="bento-card p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Journey</h3>
              <div className="relative">
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-green-400 via-cyan-400 to-transparent"></div>
                <div className="space-y-5">
                  {learningJourney.map((item, i) => {
                    const cfg = {
                      done: { dot: "bg-green-400", label: "✓", text: "text-green-400" },
                      progress: { dot: "bg-yellow-400 animate-pulse", label: "◐", text: "text-yellow-400" },
                      next: { dot: "bg-zinc-700", label: "○", text: "text-zinc-600" },
                    }[item.status];
                    return (
                      <div key={i} className="relative pl-8">
                        <div className={`absolute left-1 top-1.5 w-3 h-3 rounded-full ${cfg.dot} ring-4 ring-[#111118]`}></div>
                        <div className="text-xs text-zinc-500 mono mb-1">{item.week}</div>
                        <div className={`text-sm ${item.status === "next" ? "text-zinc-500" : "text-zinc-300"}`}>{item.topic}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="bento-card p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="blob blob-green w-64 h-64 -top-20 -left-20"></div>
                <div className="blob blob-cyan w-64 h-64 -bottom-20 -right-20"></div>
              </div>
              <div className="relative">
                <span className="text-green-400 text-xs font-semibold uppercase tracking-widest mono">04 — Contact</span>
                <h2 className="text-4xl md:text-7xl font-black mt-3 mb-6 leading-none">
                  Let's <span className="grad-text">talk</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href={`mailto:${personal.email}`} className="px-8 py-4 rounded-lg bg-green-500 text-black font-bold hover:bg-green-400 transition">
                    Send email →
                  </a>
                  <a href={personal.github} target="_blank" rel="noreferrer" className="px-8 py-4 rounded-lg border border-zinc-700 hover:border-zinc-500 transition">
                    GitHub
                  </a>
                  <a href={personal.linkedin} target="_blank" rel="noreferrer" className="px-8 py-4 rounded-lg border border-zinc-700 hover:border-zinc-500 transition">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}