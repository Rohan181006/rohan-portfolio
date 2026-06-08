import { Rocket, Cloud, Server, BookOpen } from "lucide-react";
import { Section } from "./Section";

const goals = [
  { icon: Server, text: "Become a DevOps Engineer" },
  { icon: Cloud, text: "Master Cloud Engineering technologies" },
  { icon: Rocket, text: "Contribute to innovative technology solutions" },
  { icon: BookOpen, text: "Pursue continuous learning in modern infrastructure" },
];

export function Goals() {
  return (
    <Section
      id="goals"
      eyebrow="Future Goals"
      title={<>Where I'm <span className="text-gradient">headed</span></>}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {goals.map((g, i) => (
          <div
            key={i}
            className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform"
          >
            <span className="grid place-items-center h-12 w-12 mx-auto rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow mb-4">
              <g.icon className="h-5 w-5" />
            </span>
            <p className="text-sm font-medium">{g.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}