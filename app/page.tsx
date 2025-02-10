"use client"

import { useState, useEffect } from "react"
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Terminal,
  Shield,
  Cpu,
  Code,
  Network,
  Lock,
  Webhook,
  Github,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  FileText,
  Search,
  FileCode,
  Home as HomeIcon,
  Computer,
  Globe,
  Signal,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import GlitchText from "@/components/GlitchText"

interface Project {
  title: string
  description: string
  image: string
  role: string
  tech: string[]
  github: string
}

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <span>
      {displayText}
      <span className="animate-pulse">_</span>
    </span>
  )
}

export default function HomePage() {
  const [currentProject, setCurrentProject] = useState<number>(0)
  const [isMatrixActive, setIsMatrixActive] = useState(true)

  const projects: Project[] = [
    {
      title: "0xCipherLink",
      description:
        "0xCipherLink ensures safe and encrypted file sharing using AES-256 encryption and PBKDF2 key derivation. With a user-friendly Tkinter interface, securely send and receive files over the network. Protect your data from online vulnerabilities with 0xCipherLink.",
      image: "/0xcipherlink.jpg?height=400&width=400",
      role: "Developer",
      tech: ["Python", "Cryptography", "Socket Programming", "Tkinter"],
      github: "https://github.com/0x4m4/0xCipherLink",
    },
    {
      title: "ShadowVault",
      description:
        "Advanced encryption toolkit featuring quantum-resistant algorithms and zero-knowledge proofs for secure data storage and transmission.",
      image: "/placeholder.png?height=400&width=400",
      role: "COMING SOON",
      tech: ["Rust", "Go", "ZK-SNARKs"],
      github: "#",
    },
    {
      title: "NeuralGuard",
      description:
        "AI-powered intrusion detection system using deep learning to identify and prevent zero-day attacks in real-time.",
      image: "/placeholder.png?height=400&width=400",
      role: "COMING SOON",
      tech: ["Python", "PyTorch", "Kubernetes"],
      github: "#",
    },
  ]

  return (
    <>
      <div className="min-h-screen bg-black text-red-50 font-mono relative p-8 overflow-hidden">
        {/* Matrix Rain Effect */}
        <div className="fixed inset-0 bg-black opacity-50 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden matrix-rain" />
        </div>

        {/* Scanline Effect */}
        <div className="fixed inset-0 pointer-events-none scanline" />

        {/* Navigation */}
        <nav className="flex justify-between items-center mb-20 text-sm relative z-10">
          <div className="flex gap-8">
            {[
              { label: "Home", path: "/", active: true },
              { label: "Blog", path: "/blog", active: false },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className={`group relative overflow-hidden ${item.active ? "text-red-500" : "text-gray-500 hover:text-red-500"}`}
              >
                <span className="inline-block transform group-hover:-translate-y-full transition-transform duration-300">
                  //0{item.active ? "1" : "2"}. &lt;{item.label}/&gt;
                </span>
                <span className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  [ACCESS_GRANTED]
                </span>
              </Link>
            ))}
          </div>
          <div className="text-2xl text-red-500 animate-pulse">\0x4m4</div>
          <div className="flex gap-8">{/* Empty div to maintain layout */}</div>
        </nav>

        <main>
          {/* Hero Section */}
          <section className="mb-32 relative z-10">
            <div className="relative max-w-4xl mx-auto">
              <div className="glitch-container mb-4">
                <p className="text-red-500 mb-2 opacity-80">
                  &lt;init&gt;system.out.print(&quot;identity&quot;);&lt;/init&gt;
                </p>
                <h1 className="text-6xl mb-4 font-bold">
                  <TypewriterText text="0x4m4" />
                </h1>
                <p className="text-red-500 mb-8 text-lg">
                  <TypewriterText text="[ETHICAL_HACKER] :: {CYBER_SECURITY_RESEARCHER}" />
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Shield, label: "Security Audits", value: "98+" },
                  { icon: Terminal, label: "Zero Days", value: "3" },
                  { icon: Cpu, label: "Systems Hardened", value: "342" },
                  { icon: Network, label: "Success Rate", value: "99%" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="border border-red-500/30 p-4 backdrop-blur-sm hover:border-red-500 transition-colors duration-300"
                  >
                    <stat.icon className="w-6 h-6 text-red-500 mb-2" aria-hidden="true" />
                    <div className="text-2xl font-bold text-red-500">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Link
                  href="mailto:contact@0x4m4.com"
                  className="group relative px-6 py-3 text-red-500 hover:text-black transition-colors duration-300"
                >
                  <span className="absolute inset-0 border border-red-500 bg-transparent group-hover:bg-red-500 transition-colors duration-300"></span>
                  <span className="absolute inset-0 border border-red-500 bg-transparent group-hover:bg-red-500 transition-colors duration-300 animation-delay-100"></span>
                  <span className="relative font-mono">contact@0x4m4.com</span>
                </Link>
                <Link
                  href="#about"
                  className="group relative px-6 py-3 text-red-500 hover:text-black transition-colors duration-300"
                >
                  <span className="absolute inset-0 border border-red-500 bg-transparent group-hover:bg-red-500 transition-colors duration-300"></span>
                  <span className="absolute inset-0 border border-red-500 bg-transparent group-hover:bg-red-500 transition-colors duration-300 animation-delay-100"></span>
                  <span className="relative font-mono">Projects</span>
                </Link>
                {["Blog"].map((text) => (
                  <Link
                    key={text}
                    href={`/${text.toLowerCase()}`}
                    className="group relative px-6 py-3 text-red-500 hover:text-black transition-colors duration-300"
                  >
                    <span className="absolute inset-0 border border-red-500 bg-transparent group-hover:bg-red-500 transition-colors duration-300"></span>
                    <span className="absolute inset-0 border border-red-500 bg-transparent group-hover:bg-red-500 transition-colors duration-300 animation-delay-100"></span>
                    <span className="relative font-mono">{text}</span>
                  </Link>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-6">
                {[
                  { icon: Github, href: "https://github.com/0x4m4/", label: "GitHub" },
                  { icon: Twitter, href: "https://twitter.com/0x4m4", label: "Twitter" },
                  { icon: Instagram, href: "https://instagram.com/0x4m4", label: "Instagram" },
                  { icon: Linkedin, href: "https://linkedin.com/in/0x4m4", label: "LinkedIn" },
                  { icon: Youtube, href: "https://youtube.com/@0x4m4", label: "YouTube" },
                  { icon: FileText, href: "#", label: "Resume" },
                ].map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="group relative p-2 inline-block"
                    aria-label={social.label}
                  >
                    <span className="absolute inset-0 border border-red-500/80 bg-transparent group-hover:bg-red-500/5 transition-colors duration-300"></span>
                    <span className="relative z-10 block">
                      <social.icon
                        className="w-6 h-6 text-red-500 group-hover:text-red-500/80 transition-colors duration-300"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Portfolio Section */}
          <section id="projects" className="mb-32 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-16 text-center break-words">
              <GlitchText>[SECURITY_PORTFOLIO]</GlitchText>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto px-4">

              <div className="relative group w-full h-[300px] lg:h-[400px]">
                <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg z-10" />
                <div className="w-full h-full rounded-lg overflow-hidden border border-red-500 relative">
                  <Image
                    src={projects[currentProject].image || "/placeholder.svg"}
                    alt={`${projects[currentProject].title} project screenshot`}
                    fill
                    priority
                    className="object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-6 px-0 lg:px-4">
                <h3 className="text-red-500 text-2xl lg:text-3xl font-bold">{projects[currentProject].title}</h3>
                <p className="text-gray-400 leading-relaxed">{projects[currentProject].description}</p>
                <div>
                  <h4 className="text-red-500 mb-3">TECHNOLOGIES</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentProject].tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 border border-red-500/30 text-sm text-red-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-red-500 font-bold">{projects[currentProject].role}</p>
                <Link
                  href={projects[currentProject].github}
                  className="group relative inline-flex items-center gap-2 w-fit px-4 py-2 text-red-500 hover:text-black transition-colors duration-300"
                >
                  <span className="absolute inset-0 border border-red-500 bg-transparent group-hover:bg-red-500 transition-colors duration-300"></span>
                  <Github className="w-4 h-4" aria-hidden="true" />
                  <span className="relative font-mono">View on GitHub</span>
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                onClick={() => setCurrentProject((prev) => (prev > 0 ? prev - 1 : projects.length - 1))}
                className="p-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-black transition-colors duration-300"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-6 h-6" aria-hidden="true" />
              </button>
              <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-500 transition-all duration-300"
                  style={{ width: `${((currentProject + 1) / projects.length) * 100}%` }}
                />
              </div>
              <button
                onClick={() => setCurrentProject((prev) => (prev < projects.length - 1 ? prev + 1 : 0))}
                className="p-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-black transition-colors duration-300"
                aria-label="Next project"
              >
                <ChevronRight className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-32 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-16 text-center break-words">
              <GlitchText>[CORE_CAPABILITIES]</GlitchText>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: Search,
                  title: "Forensics",
                  description:
                    "Advanced digital forensics skills: data acquisition, evidence analysis and development of analysis tools.",
                },
                {
                  icon: FileCode,
                  title: "Reverse Engineering",
                  description: "Strong skills in static/dynamic binary analysis and malware deobfuscation.",
                },
                {
                  icon: Shield,
                  title: "DevSecOps",
                  description:
                    "Implementation and hosting of tools and solutions while taking into account IT security and regulatory compliance. Competent in CI/CD and network security.",
                },
                {
                  icon: Computer,
                  title: "SOC Analyst",
                  description:
                    "Expert in threat detection, incident response, and security monitoring. Proficient in vulnerability management, scripting, and forensic analysis. Strong collaboration and compliance skills.",
                },
                {
                  icon: Code,
                  title: "Development",
                  description:
                    "Expertise in Java, Python, C/C++, Javascript, Bash, Docker and others. Advanced use of Github for version control and collaboration on personal and professional projects.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden border border-red-500/30 p-6 backdrop-blur-sm hover:border-red-500 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <service.icon
                      className="w-12 h-12 text-red-500 mb-4 group-hover:animate-pulse"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-bold text-red-500 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{service.description}</p>
                  </div>
                  <div className="absolute inset-0 border border-red-500 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Me Section */}
          <section className="mb-32 relative z-10 max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-12 text-center break-words">
              <GlitchText>[WHY_CHOOSE_ME]</GlitchText>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Content */}
              <div className="space-y-6 max-w-lg">
                <div className="group relative overflow-hidden">
                  <div className="space-y-4">
                    <p className="text-red-500 mb-3 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full border border-red-500 inline-flex items-center justify-center text-sm">
                        1
                      </span>
                      WHY CHOOSE ME
                    </p>
                    <h3 className="text-3xl font-bold leading-tight">
                      <span className="text-red-500">PROVIDE ADVANCED</span>{" "}
                      <span className="glitch-container">SECURITY</span>
                      <br />
                      <span className="text-red-500">FOR ADVANCED THREAT</span>
                    </h3>
                    <div className="space-y-4 text-gray-400 mt-6">
                      <p className="leading-relaxed text-sm">
                      With 04+ years of global cybersecurity experience, I excel in both red and blue team roles, mastering offensive tactics and defensive strategies.
                      </p>
                      <p className="leading-relaxed text-sm">
                      My skills ensure comprehensive protection, identifying vulnerabilities and implementing robust security measures to secure critical systems.
                      </p>
                    </div>
                  </div>
                </div>

                {[
                  {
                    icon: Shield,
                    title: "Versatile Expertise",
                    description:
                      "Skilled in red teaming, blue teaming, GRC, and SOC operations for end-to-end cybersecurity.",
                  },
                  {
                    icon: Globe,
                    title: "Proven Track Record",
                    description:
                      "Delivered measurable security improvements for global organizations.",
                  },
                  {
                    icon: Network,
                    title: "Holistic Approach",
                    description:
                      "Combines offensive testing, defense, compliance, and real-time monitoring for tailored solutions.",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden border border-red-500/30 hover:border-red-500 transition-all duration-300 p-4"
                  >
                    <div className="absolute inset-0 bg-red-500/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                    <div className="relative flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-lg border border-red-500 flex items-center justify-center group-hover:bg-red-500 group-hover:text-black transition-all duration-300">
                          <feature.icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-bold text-red-500">{feature.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column - Cyber Attack Image */}
              <div className="relative w-full h-[600px] hidden lg:block lg:self-center">
                <Image
                  src="/cyber-attack-vector.svg"
                  alt="Cyber Attack Illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </section>

          {/* Media Coverage section */}
          <section className="mb-32 relative z-10 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-12 text-center break-words">
              <GlitchText>[MEDIA_COVERAGE]</GlitchText>
            </h2>
            <div className="space-y-4">
              {[
                { 
                  title: "Cyber Defense Weekly",
                  date: "May 15, 2024",
                  tag: "FEATURE",
                  href: "#",
                },
                {
                  title: "Security Now",
                  date: "April 02, 2024",
                  tag: "ANALYSIS",
                  href: "#",
                },
                {
                  title: "Black Hat MEA 2024",
                  date: "November 26, 2024",
                  tag: "CTF Competiton",
                  href: "https://blackhatmea.com/",
                },
              ].map((press) => (
                <Link key={press.title} href={press.href} className="group relative overflow-hidden block">
                  <div className="absolute inset-0 bg-red-500/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  <div className="relative flex justify-between items-center p-6 border border-red-500/30 hover:border-red-500 transition-colors duration-300">
                    <div>
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-xl text-red-500">{press.title}</h3>
                        <span className="px-2 py-1 text-xs border border-red-500/50 text-red-500">{press.tag}</span>
                      </div>
                      <p className="text-gray-500">{press.date}</p>
                    </div>
                    <ArrowRight
                      className="w-6 h-6 text-red-500 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* About Me Section */}
          <section id="about" className="mb-32 relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">
              <GlitchText>[ABOUT_ME]</GlitchText>
            </h2>

            {/* Skills */}
            <div className="mb-16">
              <h3 className="text-2xl text-red-500 mb-6 font-bold">Skills</h3>
              <div className="space-y-6">
                <div className="border border-red-500/30 p-6 hover:border-red-500 transition-all duration-300">
                  <h4 className="text-red-500 mb-3">Programming Languages</h4>
                  <p className="text-gray-400">
                    Python, C, C++, JavaScript, Bash, PowerShell and a little bit of Java.
                  </p>
                </div>
                <div className="border border-red-500/30 p-6 hover:border-red-500 transition-all duration-300">
                  <h4 className="text-red-500 mb-3">Tools & Frameworks</h4>
                  <p className="text-gray-400">
                    Docker, Podmon, Ansible, Terraform, Kubernetes, Grafana, Prometheus, OWASP and NIST.
                  </p>
                </div>
                <div className="border border-red-500/30 p-6 hover:border-red-500 transition-all duration-300">
                  <h4 className="text-red-500 mb-3">Platforms</h4>
                  <p className="text-gray-400">Linux, Windows, AWS, Azure, GCP, DigitalOcean, Vercel, Cloudflare</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="mb-16">
              <h3 className="text-2xl text-red-500 mb-6 font-bold">Experience</h3>
              <div className="space-y-6">
                {[
                  {
                    role: "Founder & CEO",
                    company: "HexStrike",
                    period: "December 2024 - Present",
                    location: "Islamabad [Remote]",
                  },
                  {
                    role: "DevSecOps Intern",
                    company: "CitrusBits",
                    period: "July 2023 - October 2023",
                    location: "Islamabad [Onsite]",
                  },
                  {
                    role: "Cyber Security Consultant",
                    company: "Skyscrapers",
                    period: "January 2021 - October 2021",
                    location: "Islamabad [Onsite]",
                  },
                ].map((job, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden border border-red-500/30 p-6 hover:border-red-500 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <h4 className="text-red-500 font-bold mb-2">{job.role}</h4>
                      <p className="text-gray-400 mb-1">at {job.company}</p>
                      <p className="text-sm text-gray-500">{job.period}</p>
                      {job.location && <p className="text-sm text-gray-500">{job.location}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="mb-16">
              <h3 className="text-2xl text-red-500 mb-6 font-bold">Education & Certifications</h3>
              <div className="grid grid-cols-1 gap-6">
                {/* Education */}
                <div className="border border-red-500/30 p-6 hover:border-red-500 transition-all duration-300">
                  <h4 className="text-red-500 mb-4 text-xl">Education</h4>
                  <div className="space-y-4">
                    <div className="group">
                      <p className="text-white mb-2 text-lg">Bachelors in Cyber Security</p>
                      <div className="flex justify-between items-center">
                        <p className="text-red-500">SS C@ASE IT, Islamabad</p>
                        <p className="text-sm text-gray-500">2022 - 2026</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="border border-red-500/30 p-6 hover:border-red-500 transition-all duration-300">
                  <h4 className="text-red-500 mb-4 text-xl">Certifications</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        name: "Certified Network Defender (CND)",
                        issuer: "EC-Council",
                        date: "2025",
                      },
                      {
                        name: "Dante Pro Lab",
                        issuer: "Hack The Box",
                        date: "2024",
                      },
                      {
                        name: "Zephyr Pro Lab",
                        issuer: "Hack The Box",
                        date: "2024",
                      },
                      {
                        name: "Offshore Pro Lab",
                        issuer: "Hack The Box",
                        date: "2024",
                      },
                      {
                        name: "RastaLabs Pro Lab",
                        issuer: "Hack The Box",
                        date: "2024",
                      },
                      {
                        name: "APTLabs Pro Lab",
                        issuer: "Hack The Box",
                        date: "2024",
                      },
                      {
                        name: "Google Cybersecurity Professional",
                        issuer: "Google",
                        date: "2023",
                      },
                      {
                        name: "Amazon AWS Pentesting",
                        issuer: "EC-Council",
                        date: "2023",
                      },
                      
                      
                      // Add more certifications here
                    ].map((cert, index) => (
                      <div
                        key={index}
                        className="group relative overflow-hidden border border-red-500/30 p-4 hover:border-red-500 transition-all duration-300"
                      >
                        <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative z-10">
                          <h5 className="text-red-500 font-bold mb-2 text-sm">{cert.name}</h5>
                          <div className="flex justify-between items-center">
                            <p className="text-gray-400 text-sm">{cert.issuer}</p>
                            <p className="text-gray-500 text-xs">{cert.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="mb-16">
              <h3 className="text-2xl text-red-500 mb-6 font-bold">Projects</h3>
              <div className="space-y-6">
                {[
                  {
                    name: "0xAcademy",
                    description:
                      "A structured CTF learning platform by 0x4m4, offering step-by-step cybersecurity guides, practical challenges, and hands-on hacking resources.",
                    link: "https://github.com/0x4m4/0xacademy.0x4m4.com",
                  },
                  {
                    name: "buffer-overflow-lab",
                    description:
                      "A controlled environment for demonstrating and understanding buffer overflow vulnerabilities in web applications. This project is designed for educational purposes as part of secure software development training.",
                    link: "https://github.com/0x4m4/buffer-overflow-lab",
                  },
                  {
                    name: "0xCipherLink",
                    description:
                      "0xCipherLink ensures safe and encrypted file sharing using AES-256 encryption and PBKDF2 key derivation. With a user-friendly Tkinter interface, securely send and receive files over the network. Protect your data from online vulnerabilities with 0xCipherLink.",
                    link: "https://github.com/0x4m4/0xCipherLink",
                  },
                  {
                    name: "BloodCodeCTF",
                    description:
                      "Blood Code CTF challenge repository! This repository contains all the challenges and their source files from the Capture The Flag event codenamed Blood Code, organized by 0x4m4. It includes challenges in cryptography, steganography, digital forensics, pwn, pyjail, reverse engineering, and web exploitation, designed for all skill levels.",
                    link: "https://github.com/0x4m4/BloodCodeCTF",
                  },
                  {
                    name: "k3vil",
                    description:
                      "The code implements ransomware-like behavior, encrypting files by changing their extensions to k3vil. It includes a decryption process using a linked list as the key. The program also changes the desktop wallpaper.",
                    link: "https://github.com/0x4m4/k3vil",
                  },
                ].map((project, index) => (
                  <Link
                    href={project.link}
                    key={index}
                    className="group relative overflow-hidden border border-red-500/30 p-6 hover:border-red-500 transition-all duration-300 block"
                  >
                    <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-red-500 font-bold">{project.name}</h4>
                        <ArrowRight
                          className="w-4 h-4 text-red-500 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="text-gray-400 text-sm">{project.description}</p>
                    </div>
                    <div className="absolute inset-0 bg-red-500/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Additional Experiences */}
            <div>
              <h3 className="text-2xl text-red-500 mb-6 font-bold">Additional Experiences</h3>
              <div className="space-y-4">
                {[
                  {
                    role: "Founder",
                    company: "hexstrike.com",
                    period: "2024 - Present",
                    details: "HexStrike is a cybersecurity consulting firm that provides a range of services to help organizations protect their data and systems from cyber threats.",
                  },
                  {
                    role: "Founder Cyber Security Society",
                    company: "SS C@ASE IT, Islamabad",
                    period: "2023 - Present",
                    details: "Created a Cyber Security Society at my university and was the President of the society for 2 years. Conducted various events and workshops for the students.",
                  },
                  {
                    role: "Advisor Cyber Security Department",
                    company: "SS C@ASE IT, Islamabad",
                    period: "2022 - Present",
                    details: "As an advisor, I provided guidance and support to the Cyber Security Department at my university.",
                  },
                ].map((exp, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden border border-red-500/30 p-4 hover:border-red-500 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-red-500 font-bold">{exp.role}</h4>
                        <span className="text-sm text-gray-500">{exp.period}</span>
                      </div>
                      <p className="text-gray-400">{exp.company}</p>
                      {exp.details && <p className="text-sm text-gray-500 mt-1">{exp.details}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Social Channels Section */}
          <section className="mb-32 relative z-10 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-12 text-center break-words">
              <GlitchText>[SECURE_CHANNELS]</GlitchText>
            </h2>
            <div className="flex justify-center gap-8">
              {[
                { name: "Signal", href: "/", icon: Signal },
                { name: "Twitter", href: "/", icon: Webhook },
                { name: "GitHub", href: "/", icon: Code },
                { name: "Email", href: "/", icon: Lock },
              ].map((social) => (
                <Link key={social.name} href={social.href} className="group relative w-32 h-32">
                  <div className="absolute inset-0 border border-red-500 rounded-full animate-[spin_10s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-4 rounded-full border border-red-500 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-black transition-all duration-300">
                    <social.icon className="w-8 h-8" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Copyright Section */}
          <footer className="text-center pb-8 text-red-500/60 font-mono text-sm relative z-10">
            <div className="flex items-center justify-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>&copy; {new Date().getFullYear()} 0x4m4. All rights reserved.</span>
            </div>
          </footer>
        </main>
      </div>
    </>
  )
}

