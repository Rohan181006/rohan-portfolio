import { GraduationCap } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    degree: "B.Tech in Computer Science",
    school: "Sreenidhi University, Telangana",
    period: "2024 — 2028 (Expected)",
    score: "CGPA: 8.87 / 10",
  },
  {
    degree: "Higher Secondary Education",
    school: "TSBIE — Mathematics, Physics, Chemistry",
    period: "Completed 2024",
    score: "Percentage: 93.4%",
  },
  {
    degree: "Secondary School",
    school: "CBSE Board",
    period: "Completed 2022",
    score: "Percentage: 86.6%",
  },
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title={<>Academic <span className="text-gradient">journey</span></>}
    >
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/30 to-transparent md:-translate-x-px" />
        <div className="space-y-8">
          {items.map((it, i) => (
            <div
              key={i}
              className={`relative grid md:grid-cols-2 gap-8 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                <div className="glass rounded-2xl p-6 shadow-soft hover:shadow-glow transition-shadow">
                  <h3 className="font-semibold text-lg">{it.degree}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{it.school}</p>
                  <div className="mt-3 inline-flex items-center gap-2 text-xs font-mono text-primary">
                    {it.period} · {it.score}
                  </div>
                </div>
              </div>
              <div className="hidden md:block" />
              <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 grid place-items-center h-8 w-8 rounded-full bg-gradient-brand text-primary-foreground shadow-glow">
                <GraduationCap className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}