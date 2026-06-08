import { Briefcase, Heart } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    icon: Briefcase,
    role: "Research and Innovation Head",
    org: "Innovators Loft, Sreenidhi University",
    period: "Aug 2025 — Present",
    bullets: [
      "Active member of the innovation community.",
      
      "Encourage innovation and collaboration among students.",
    ],
  },
  {
    icon: Heart,
    role: "Volunteer Teacher",
    org: "ZPHS, Telangana",
    period: "June 2025",
    bullets: [
      "Conducted sessions on basic mathematics and English.",
      "Delivered career guidance for 10th-grade students.",
      "Introduced fundamental computer concepts via interactive learning.",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience & Leadership"
      title={<>Where I'm <span className="text-gradient">contributing</span></>}
    >
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((it, i) => (
          <article
            key={i}
            className="glass rounded-3xl p-6 md:p-8 shadow-soft hover:-translate-y-1 transition-transform"
          >
            <div className="flex items-center gap-3">
              <span className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                <it.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold">{it.role}</h3>
                <p className="text-xs text-muted-foreground">{it.org}</p>
              </div>
            </div>
            <div className="mt-3 text-xs font-mono text-primary">{it.period}</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {it.bullets.map((b, j) => (
                <li key={j} className="flex gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}