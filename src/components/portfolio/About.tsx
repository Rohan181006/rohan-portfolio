import { Cloud, Code2, Users, GraduationCap } from "lucide-react";
import { Section } from "./Section";

const highlights = [
  { icon: Cloud, text: "Passionate about DevOps and Cloud Engineering" },
  { icon: Code2, text: "Strong foundation in programming and basic knowledge of Full Stack Development." },
  { icon: Users, text: "Active in innovation and technical communities" },
  { icon: GraduationCap, text: "Dedicated to continuous learning and growth" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title={<>Building reliable software, <span className="text-gradient">one commit at a time</span></>}
    >
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="glass rounded-3xl p-8 shadow-soft">
          <p className="text-muted-foreground leading-relaxed">
            Rohan Vujjini is a Computer Science undergraduate focused on Software
            Development, DevOps practices, Cloud Computing, and Cybersecurity. He
            enjoys solving real-world problems through technology and continuously
            works on improving his technical expertise through projects,
            certifications, and leadership activities.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <Pill k="Location" v="Hyderabad, India" />
            <Pill k="Degree" v="B.Tech CSE" />
            <Pill k="Focus" v="DevOps & Cloud" />
            <Pill k="Status" v="Open to intern" />
          </div>
        </div>

        <ul className="space-y-3">
          {highlights.map((h, i) => (
            <li
              key={i}
              className="glass rounded-2xl p-4 flex items-center gap-4 hover:translate-x-1 transition-transform"
            >
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-brand text-primary-foreground shrink-0">
                <h.icon className="h-5 w-5" />
              </span>
              <span className="text-sm md:text-base">{h.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function Pill({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{k}</div>
      <div className="text-sm font-medium mt-0.5">{v}</div>
    </div>
  );
}