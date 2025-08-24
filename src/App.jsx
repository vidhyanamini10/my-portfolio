import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  FileDown,
  Briefcase,
  Award,
  GraduationCap,
  Layers,
  Sparkles,
  MapPin,
  BadgeCheck,
} from "lucide-react";

/** ========= Config =========
 * Put your resume at: /public/Sri_Resume.pdf
 * Put your photo  at: /public/sri-profile.jpg
 */
const RESUME_PATH = "/Sri_Resume.pdf";
const PROFILE_SRC = "/sri-profile.jpeg";

const skills = [
  "Java",
  "Spring Boot",
  "Spring Security",
  "REST APIs",
  "React.js",
  "TypeScript",
  "Node.js",
  "AWS (EC2, Lambda, S3, RDS)",
  "Redis",
  "Kafka",
  "Docker",
  "Kubernetes",
  "CI/CD (Jenkins, GitHub Actions)",
  "JUnit/Mockito",
  "SonarQube",
];

const experience = [
  {
    role: "Software Developer",
    company: "Viacore Technologies Inc",
    years: "Sep 2024 – Jul 2025 ",
    location: "Austin, Texas Metropolitan Area",
    type: "Full-time • On-site",
  },
  {
    role: "Software Engineer",
    company: "Allied Tec Inc",
    years: "Feb 2024 – Aug 2024 ",
    location: "Carrollton, Texas, United States",
    type: "Full-time • On-site",
  },
  {
    role: "Full-stack Developer",
    company: "Real Fashion Index",
    years: "Aug 2023 – Dec 2023 ",
    location: "Denton, Texas, United States",
    type: "Full-time • Remote",
  },
  {
    role: "Graduate Teaching Assistant",
    company: "University of North Texas",
    years: "Jan 2023 – Dec 2023 ",
    location: "Denton, Texas, United States",
    type: "Part-time • On-site",
  },
  {
    role: "Associate Software Engineer",
    company: "EdgeRock Technologies, LLC",
    years: "Jan 2021 – Dec 2021 ",
    location: "Hyderabad, Telangana, India",
    type: "Full-time • Remote",
  },
];

export default function App() {
  return (
    <div className="app-surface text-neutral-100">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 md:px-8 py-3 flex items-center justify-between">
          <a
            href="#home"
            className="font-semibold tracking-tight text-lg flex items-center gap-2"
          >
            <Layers className="opacity-80" size={18} />
            Srividhya • Portfolio
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            {[
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Experience", "#experience"],
              ["Certificates", "#certs"],
              ["Education", "#education"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="hover:text-white/90 text-neutral-300"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex gap-2">
            <a
              aria-label="GitHub"
              href="https://github.com/vidhyanamini10"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl border border-white/10 hover:bg-white/5"
            >
              <Github size={18} />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/srividhya-lakshmi-n"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl border border-white/10 hover:bg-white/5"
            >
              <Linkedin size={18} />
            </a>
            <a
              aria-label="Email"
              href="mailto:srividhyalakshminamini@gmail.com"
              className="p-2 rounded-xl border border-white/10 hover:bg-white/5"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="w-full">
        <div className="mx-auto max-w-6xl px-6 md:px-8 pt-12 md:pt-16 pb-10 grid md:grid-cols-12 gap-8 items-center">
          {/* Left: text */}
          <div className="md:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl font-extrabold leading-tight heading"
            >
              Cloud-Native Full-Stack Engineer
            </motion.h1>
            {/* concise, professional tagline (no full paragraph) */}
            <div className="mt-3 text-neutral-200/90">
              Software Engineer — Java · Spring Boot · AWS · Docker · Kubernetes · React
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#experience" className="btn-primary">
                View Experience
              </a>
              <a href={RESUME_PATH} download className="btn-ghost">
                <FileDown size={18} /> Download Resume
              </a>
            </div>
          </div>

          {/* Right: photo */}
          <div className="md:col-span-5">
            <div className="relative p-2 rounded-3xl border border-white/10 bg-white/5">
              <span className="absolute -inset-0.5 rounded-3xl blur-xl opacity-40 [background:radial-gradient(600px_240px_at_20%_0%,rgba(99,102,241,0.35),transparent)] pointer-events-none" />
              <div className="rounded-2xl overflow-hidden bg-black/30">
                <img
                  src={PROFILE_SRC}
                  alt="Sri profile"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
<section id="about" className="mx-auto max-w-6xl px-6 md:px-8 py-10">
  {/* Full-width card inside the container */}
  <div className="glass w-full p-6 md:p-8">
    <div className="flex items-center gap-2">
      <Sparkles size={18} className="opacity-80" />
      <h2 className="text-2xl font-bold heading">About</h2>
    </div>

    <div className="divider my-4" />

    {/* Use the full card width (no max-w cap) */}
    <p className="text-neutral-200/90 leading-relaxed md:text-[17px]">
      Software Engineer with 3+ years of experience designing secure, distributed systems. I’ve delivered
      microservices on <span className="font-semibold">AWS</span>, built containerized solutions with
      <span className="font-semibold"> Docker</span> & <span className="font-semibold">Kubernetes</span>, and
      deployed scalable APIs with Spring Boot. Skilled at tuning performance using Redis caching, monitoring with
      CloudWatch, and implementing CI/CD pipelines for resilient, production-grade systems.
    </p>
  </div>
</section>


      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-6 md:px-8 py-10">
        <div className="glass p-6 md:p-8">
          <h2 className="text-2xl font-bold heading">Skills</h2>
          <div className="divider my-4" />
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {skills.map((s) => (
              <li key={s} className="chip">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* EXPERIENCE — one-line items with years */}
      <section id="experience" className="mx-auto max-w-6xl px-6 md:px-8 py-10">
        <div className="glass p-6 md:p-8">
          <h2 className="text-2xl font-bold heading">Experience</h2>
          <div className="divider my-4" />
          <ul className="space-y-3">
            {experience.map((e, i) => (
              <li
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <Briefcase size={18} className="opacity-80 shrink-0" />
                  <span className="font-semibold">{e.role}</span>
                  <span className="text-neutral-300">— {e.company}</span>
                  <span className="text-neutral-400">• {e.years}</span>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-3 text-neutral-400 text-xs md:text-sm">
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={14} /> {e.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <BadgeCheck size={14} /> {e.type}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certs" className="mx-auto max-w-6xl px-6 md:px-8 py-10">
        <div className="glass p-6 md:p-8">
          <h2 className="text-2xl font-bold heading">Certificates</h2>
          <div className="divider my-4" />
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 p-5 bg-white/5 flex items-start gap-3">
              <Award className="mt-1" size={18} />
              <div>
                <div className="font-semibold">AWS Cloud Practitioner</div>
                <div className="text-sm text-neutral-400">
                  Credential ID: <em>add</em> • Year: <em>add</em>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 p-5 bg-white/5 flex items-start gap-3">
              <Award className="mt-1" size={18} />
              <div>
                <div className="font-semibold">Google Cloud Associate Cloud Engineer</div>
                <div className="text-sm text-neutral-400">
                  Credential ID: <em>add</em> • Year: <em>add</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="mx-auto max-w-6xl px-6 md:px-8 py-10">
        <div className="glass p-6 md:p-8">
          <h2 className="text-2xl font-bold heading">Education</h2>
          <div className="divider my-4" />
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
              <div className="flex items-center gap-2 text-neutral-300">
                <GraduationCap size={18} />
                <span className="font-semibold">
                  University of North Texas, Denton, TX, USA — Masters
                </span>
              </div>
              <ul className="mt-2 list-disc list-inside text-neutral-300 leading-relaxed">
                <li>Computer and Information Science, 2023</li>
                <li>GPA: 3.9</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
              <div className="flex items-center gap-2 text-neutral-300">
                <GraduationCap size={18} />
                <span className="font-semibold">
                  Siddharth Institute of Engineering and Technology, Puttur, AP, India — Bachelors
                </span>
              </div>
              <ul className="mt-2 list-disc list-inside text-neutral-300 leading-relaxed">
                <li>Computer Science, 2021</li>
                <li>CGPA: 8.9</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 md:px-8 py-12">
        <div className="glass p-8">
          <h2 className="text-2xl font-bold heading">Let’s build something great</h2>
          <div className="divider my-4" />
          <p className="text-neutral-300">
            Open to Software Engineer roles (backend/full-stack). Best way to reach me:
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="mailto:srividhyalakshminamini@gmail.com" className="btn-ghost">
              <Mail size={18} /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/srividhya-lakshmi-n"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="https://github.com/vidhyanamini10"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <Github size={18} /> GitHub
            </a>
            <a href={RESUME_PATH} download className="btn-primary">
              <FileDown size={18} /> Download Resume
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-neutral-400 text-sm">
        © {new Date().getFullYear()} Srividhya — Built with React & Tailwind
      </footer>
    </div>
  );
}
