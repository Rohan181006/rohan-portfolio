import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="text-xl font-bold text-gradient">Rohan Vujjini</div>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              Computer Science student building scalable software and exploring
              the cloud-native ecosystem.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex md:justify-end gap-3">
            <a href="#" aria-label="GitHub" className="grid place-items-center h-10 w-10 rounded-xl glass hover:bg-white/10 transition">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com/in/vujjini-rohan" aria-label="LinkedIn" className="grid place-items-center h-10 w-10 rounded-xl glass hover:bg-white/10 transition">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:rohan.vujjini@email.com" aria-label="Email" className="grid place-items-center h-10 w-10 rounded-xl glass hover:bg-white/10 transition">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-2 justify-between items-center text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Rohan Vujjini. All rights reserved.</div>
          <div>Designed and Developed by Rohan Vujjini</div>
        </div>
      </div>
    </footer>
  );
}