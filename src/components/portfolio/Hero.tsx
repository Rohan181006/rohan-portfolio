import { useEffect, useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import heroAvatar from "@/assets/profile_photo.jpg";

const roles = [
  "DevOps Enthusiast",
  "Aspiring Cloud Engineer",
  "CS Undergraduate",
];

export function Hero() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 40 : 90;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">


      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          {/* Left: Text */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to internships & opportunities
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Hi, I'm <br />
              <span className="text-gradient">Rohan Vujjini</span>
            </h1>

            <div className="mt-6 text-xl md:text-2xl text-muted-foreground h-8">
              <span className="cursor-blink font-mono text-foreground">{text}</span>
            </div>

            <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Computer Science student combining strong fundamentals in data structures
              and problem-solving with a passion for DevOps and Cloud Engineering. I
              can build scalable Frontend and Backend webpage.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
              >
                View Projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-muted-foreground hover:text-foreground transition"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm">
              <Stat value="8.89" label="CGPA / 10" />
              <Divider />
              <Stat value="2+" label="Years Coding" />
              <Divider />
              <Stat value="2" label="Projects" />
            </div>
          </div>

          {/* Right: Avatar */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-8 rounded-full opacity-60 blur-3xl"
                style={{ background: "var(--gradient-glow)" }} />
              <div className="glow-ring rounded-full">
                <div className="relative h-72 w-72 md:h-96 md:w-96 rounded-full overflow-hidden border-2 border-white/10 shadow-glow">
                  <img
                    src={heroAvatar}
                    alt="Rohan Vujjini portrait"
                    width={768}
                    height={768}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-bold text-gradient">{value}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

function Divider() {
  return <div className="h-8 w-px bg-white/10" />;
}
