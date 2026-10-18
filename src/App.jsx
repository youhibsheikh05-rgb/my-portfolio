import { personal, skills, projects } from "./data";

const Prompt = ({ children }) => (
  <span className="text-green-400">
    <span className="text-gray-500">$ </span>
    {children}
  </span>
);

const Section = ({ command, children }) => (
  <section className="mb-14">
    <div className="mb-4 text-sm">
      <Prompt>{command}</Prompt>
    </div>
    <div className="pl-4 border-l border-gray-800">{children}</div>
  </section>
);

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300">
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Terminal window header */}
        <div className="flex items-center gap-2 mb-8 pb-4 border-b border-gray-800">
          <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
          <span className="ml-3 text-xs text-gray-600">~/portfolio — bash</span>
        </div>

        {/* whoami */}
        <Section command="whoami">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            {personal.name}
          </h1>
          <p className="text-green-400 mb-1">{personal.role}</p>
          <p className="text-gray-500 text-sm">{personal.location} · {personal.status}</p>
        </Section>

        {/* cat about.txt */}
        <Section command="cat about.txt">
          <p className="text-gray-400 leading-relaxed">
            I build and deploy production-ready web applications. Currently completing
            a 90-day Cloud & DevOps program focused on AWS, Docker, CI/CD, Terraform,
            and Kubernetes. I believe in learning by shipping.
          </p>
        </Section>

        {/* ls skills/ */}
        <Section command="ls skills/">
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-gray-500">languages/ </span>
              <span className="text-gray-300">{skills.languages.join("  ")}</span>
            </div>
            <div>
              <span className="text-gray-500">frontend/  </span>
              <span className="text-gray-300">{skills.frontend.join("  ")}</span>
            </div>
            <div>
              <span className="text-gray-500">backend/   </span>
              <span className="text-gray-300">{skills.backend.join("  ")}</span>
            </div>
            <div>
              <span className="text-gray-500">devops/    </span>
              <span className="text-green-400">{skills.devops.join("  ")}</span>
            </div>
            <div>
              <span className="text-gray-500">learning/  </span>
              <span className="text-yellow-400">{skills.learning.join("  ")}</span>
            </div>
          </div>
        </Section>

        {/* cat projects.md */}
        <Section command="cat projects.md">
          <div className="space-y-8">
            {projects.map((p) => (
              <div key={p.id}>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-gray-600 text-sm">[{p.id}]</span>
                  <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-2 leading-relaxed">{p.description}</p>
                <div className="text-xs text-gray-600 mb-2">
                  stack: <span className="text-blue-400">{p.stack.join(" · ")}</span>
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-400 text-sm hover:underline"
                >
                  → github
                </a>
              </div>
            ))}
          </div>
        </Section>

        {/* cat contact.txt */}
        <Section command="cat contact.txt">
          <div className="space-y-1 text-sm">
            <div>
              <span className="text-gray-500">email:    </span>
              <a href={`mailto:${personal.email}`} className="text-green-400 hover:underline">{personal.email}</a>
            </div>
            <div>
              <span className="text-gray-500">github:   </span>
              <a href={personal.github} target="_blank" rel="noreferrer" className="text-green-400 hover:underline">{personal.github}</a>
            </div>
            <div>
              <span className="text-gray-500">linkedin: </span>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="text-green-400 hover:underline">{personal.linkedin}</a>
            </div>
          </div>
        </Section>

        {/* blinking cursor */}
        <div className="mt-12 text-sm">
          <Prompt>
            <span className="inline-block w-2 h-4 bg-green-400 animate-pulse align-middle"></span>
          </Prompt>
        </div>

      </div>
    </div>
  );
}

export default App;