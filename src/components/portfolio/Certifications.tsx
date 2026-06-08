import { Award } from "lucide-react";
import { Section } from "./Section";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title={<>Credentials & <span className="text-gradient">learning</span></>}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass rounded-3xl p-8 flex gap-5 items-start hover:shadow-glow transition-shadow">
          <span className="grid place-items-center h-14 w-14 rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow shrink-0">
            <Award className="h-7 w-7" />
          </span>
          <div>
            <h3 className="font-semibold text-lg">CS50x: Introduction to Computer Science</h3>
            <p className="text-xs font-mono text-primary mt-1">Harvard University · edX</p>
            <p className="text-sm text-muted-foreground mt-3">
              Programming fundamentals, algorithms, problem-solving, web development,
              and software engineering concepts.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}