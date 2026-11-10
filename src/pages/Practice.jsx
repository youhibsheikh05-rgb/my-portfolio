import { practiceCategories } from "../data/practice";
import Reveal from "../components/Reveal";

export default function Practice() {
  const total = practiceCategories.reduce((sum, c) => sum + c.items.length, 0);
  const inProgress = practiceCategories.reduce(
    (sum, c) => sum + c.items.filter((i) => i.status === "in progress").length,
    0
  );

  return (
    <div className="pt-16">
      <section className="pt-20 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-green-400 text-xs font-semibold uppercase tracking-widest mono">
              Practice Log
            </span>
            <h1 className="text-5xl md:text-7xl font-black mt-2 mb-4">
              Learning <span className="grad-text">Cloud & DevOps</span>
            </h1>
            <p className="text-zinc-500 max-w-lg">
              My learning roadmap. {inProgress} in progress, {total - inProgress} coming soon — documented as I go.
            </p>
          </Reveal>
        </div>
      </section>

      {practiceCategories.map((cat) => (
        <section
          key={cat.id}
          className="py-12 px-6 border-t border-zinc-800/60"
          id={cat.id}
        >
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl">{cat.icon}</div>
                <h2 className="text-2xl md:text-3xl font-black">{cat.name}</h2>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-4">
              {cat.items.map((item, i) => {
                const isProgress = item.status === "in progress";
                return (
                  <Reveal key={item.id} delay={i * 60}>
                    <div className="bento-card p-5 h-full">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-sm font-semibold text-white flex-1">
                          {item.title}
                        </h3>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full border mono whitespace-nowrap ${
                            isProgress
                              ? "text-yellow-400 border-yellow-500/30 bg-yellow-500/10"
                              : "text-zinc-600 border-zinc-800 bg-zinc-800/30"
                          }`}
                        >
                          {isProgress ? "in progress" : "soon"}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}