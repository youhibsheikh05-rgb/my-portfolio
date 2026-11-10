import { mernProjects } from "../data/mern";
import Reveal from "../components/Reveal";
import Tilt from "../components/Tilt";

export default function MernProjects() {
  return (
    <div className="pt-16">
      <section className="pt-20 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-green-400 text-xs font-semibold uppercase tracking-widest mono">MERN Projects</span>
            <h1 className="text-5xl md:text-7xl font-black mt-2 mb-4">
              Apps I've <span className="grad-text">built</span>
            </h1>
            <p className="text-zinc-500 max-w-lg">
              Full-stack MERN applications. More added as I build.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {mernProjects.map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <Tilt>
                  <div className="bento-card overflow-hidden group h-full flex flex-col">
                    
                    {/* IMAGE YA FALLBACK (01) WALA SECTION */}
                    <div className={`h-56 relative overflow-hidden border-b border-zinc-800 ${p.image ? "bg-zinc-900" : `bg-gradient-to-br ${p.gradient}`}`}>
                      {p.image ? (
                      <img
  src={p.image}
  alt={p.title}
  onError={(e) => {
    console.log("IMAGE ERROR:", p.image);
    console.log("ERROR DETAILS:", e);
  }}
  onLoad={() => console.log("IMAGE LOADED:", p.image)}
  className="absolute inset-0 w-full h-full object-cover z-0"
/>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center z-0">
                          <span className="text-[140px] font-black text-white/[0.07] group-hover:scale-110 transition duration-700">{p.id}</span>
                        </div>
                      )}
                      
                      {/* Status Badge upar dikhne ke liye z-10 diya hai */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur text-xs text-white/80 mono z-10">
                        {p.status}
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1 relative z-10 bg-[#111118]">
                      <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                      <p className="text-sm text-zinc-400 mb-4 leading-relaxed">{p.longDescription || p.description}</p>
                      
                      {p.features && (
                        <div className="mb-4">
                          <div className="text-xs uppercase tracking-wider text-zinc-600 mb-2 mono">Features</div>
                          <div className="flex flex-wrap gap-1.5">
                            {p.features.map((f) => (
                              <span key={f} className="text-xs px-2 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20 mono">
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex flex-wrap gap-2 mb-5">
                        {p.stack.map((s) => (
                          <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-zinc-800/60 text-zinc-400 border border-zinc-800 mono">{s}</span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3 mt-auto">
                        {p.github && (
                          <a href={p.github} target="_blank" rel="noreferrer" className="text-sm text-green-400 hover:underline mono">→ github</a>
                        )}
                        {p.live && (
                          <a href={p.live} target="_blank" rel="noreferrer" className="text-sm text-cyan-400 hover:underline mono">→ live</a>
                        )}
                      </div>
                    </div>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}