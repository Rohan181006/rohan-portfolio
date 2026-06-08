import { ExternalLink, Github, Sparkles, ListChecks, Youtube } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    name: "SENTIO",
    subtitle: "Agentic Emotion Recognition System",
    tags: ["Python", "TensorFlow", "OpenCV"],
    icon: Sparkles,
    description:
      "A real-time, self-learning emotion recognition system that adapts to individual facial expressions. Unlike traditional emotion AI, SENTIO continuously learns from user interactions, improving accuracy and personalization over time.",
    features: [
      "Real-time emotion detection",
      "Adaptive learning mechanism",
      "Personalized recognition",
      "AI-powered feedback",
    ],
    github: "https://github.com/kvarun-2006/SENTIO",
    demo: null as string | null,
  },
  {
    name: "Modern TODO App",
    subtitle: "CS50x Final Project — Task Management",
    tags: ["Full-Stack", "Database", "CRUD"],
    icon: ListChecks,
    description:
      "A task management application enabling users to create, update, delete, and track tasks efficiently. Implemented full CRUD operations and database integration while strengthening full-stack development skills.",
    features: [
      "Task creation and management",
      "Full CRUD functionality",
      "Database integration",
      "Responsive UI",
    ],
    demo: "https://youtu.be/viSeq74iHRE",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Things I've <span className="text-gradient">built</span></>}
      description="A selection of projects that reflect my interests in AI, full-stack development, and clean engineering."
    >
      <div className="grid lg:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group relative glass rounded-3xl p-8 overflow-hidden hover:-translate-y-1 transition-all duration-500"
          >
            <div
              className="absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-30 blur-3xl group-hover:opacity-50 transition-opacity"
              style={{ background: "var(--gradient-brand)" }}
            />

            <div className="relative">
              <div className="flex items-start justify-between mb-5">
                <span className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow">
                  <p.icon className="h-6 w-6" />
                </span>
                <div className="flex gap-2">
                  {p.github && p.github !== "#" && (
                    <a
                      href={p.github}
                      aria-label="GitHub"
                      className="grid place-items-center h-9 w-9 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {p.demo && p.demo !== "#" && (
                    <a
                      href={p.demo}
                      aria-label={p.demo.includes("youtu") ? "YouTube Video" : "Live Demo"}
                      className="grid place-items-center h-9 w-9 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                    >
                      {p.demo.includes("youtu") ? (
                        <Youtube className="h-4 w-4" />
                      ) : (
                        <ExternalLink className="h-4 w-4" />
                      )}
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.subtitle}</p>

              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>

              <ul className="mt-5 grid grid-cols-2 gap-2">
                {p.features.map((f) => (
                  <li key={f} className="text-xs flex items-center gap-2 text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}