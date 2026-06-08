import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Goals } from "@/components/portfolio/Goals";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rohan Vujjini — DevOps & Cloud Engineering Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio of Rohan Vujjini — Computer Science undergraduate specializing in Software Development, DevOps, Cloud Engineering, and Cybersecurity.",
      },
      { property: "og:title", content: "Rohan Vujjini — Portfolio" },
      {
        property: "og:description",
        content:
          "CS undergraduate building scalable software and exploring cloud-native technologies.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Goals />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
