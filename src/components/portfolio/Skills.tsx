import {
  Code, Database, Cpu, GitBranch, Github, Terminal, Cloud, Shield, Server, Layers,
} from "lucide-react";
import { Section } from "./Section";

const groups = [
  {
    title: "Languages",
    items: [
      { name: "Python", icon: Code },
      { name: "Java", icon: Code },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "Technologies",
    items: [
      { name: "OpenCV", icon: Cpu },
      { name: "TensorFlow", icon: Layers },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "VS Code", icon: Terminal },
    ],
  },
  {
    title: "Areas of Interest",
    items: [
      { name: "DevOps", icon: Server },
      { name: "Cloud Computing", icon: Cloud },
      { name: "Cybersecurity", icon: Shield },
      { name: "Software Dev", icon: Code },
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>Tools of the <span className="text-gradient">trade</span></>}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {groups.map((g) => (
          <div key={g.title} className="glass rounded-3xl p-6 hover:shadow-glow transition-shadow">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              {g.title}
            </h3>
            <ul className="space-y-2">
              {g.items.map((s) => (
                <li
                  key={s.name}
                  className="flex items-center gap-3 rounded-xl px-3 py-2 bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/40 transition group"
                >
                  <span className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-brand text-primary-foreground group-hover:scale-110 transition-transform">
                    <s.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium">{s.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}