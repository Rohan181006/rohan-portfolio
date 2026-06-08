import { Mail, Linkedin, MapPin, Github } from "lucide-react";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build <span className="text-gradient">something great</span></>}
      description="Have an opportunity, idea, or just want to chat tech? Drop me a message."
    >
      <div className="max-w-xl">
        {/* Info card */}
        <div className="glass rounded-3xl p-8 flex flex-col gap-4 shadow-soft">
          <InfoRow icon={Mail} label="Email" value="[vujjinirohan@gmail.com]" href="mailto:[EMAIL_ADDRESS]" />
          <InfoRow icon={Linkedin} label="LinkedIn" value="linkedin.com/in/vujjini-rohan" href="https://linkedin.com/in/vujjini-rohan" />
          <InfoRow icon={MapPin} label="Location" value="Hyderabad, Telangana, India" />
          <InfoRow icon={Github} label="Github" value="github.com/Rohan181006" href="https://github.com/Rohan181006" />

          <div className="mt-2 flex gap-3">

          </div>
        </div>
      </div>
    </Section>
  );
}

function InfoRow({
  icon: Icon, label, value, href,
}: {
  icon: typeof Mail; label: string; value: string; href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl px-4 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/40 transition">
      <span className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-brand text-primary-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
