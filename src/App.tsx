/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { 
  Github, 
  ExternalLink, 
  Mail, 
  Cpu, 
  Code2, 
  Database, 
  Layout, 
  Terminal,
  ChevronRight,
  Sparkles,
  Blocks,
  Network,
  Award,
  FileText,
  X,
  Download,
  Eye,
  Linkedin,
  Instagram
} from "lucide-react";
import { useState, useEffect, ReactNode } from "react";

const SKILLS = {
  Frontend: {
    icon: <Layout className="w-5 h-5" />,
    items: ["React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"]
  },
  Backend: {
    icon: <Terminal className="w-5 h-5" />,
    items: ["Python", "FastAPI", "Django", "PHP"]
  },
  AI: {
    icon: <Cpu className="w-5 h-5" />,
    items: ["TensorFlow", "Computer Vision", "ResNet50", "Machine Learning"]
  },
  Database: {
    icon: <Database className="w-5 h-5" />,
    items: ["MySQL", "PostgreSQL"]
  },
  Tools: {
    icon: <Code2 className="w-5 h-5" />,
    items: ["Git", "GitHub", "Linux", "Docker"]
  }
};

const PROJECTS = [
  {
    title: "FarmDiag",
    description: "AI-powered agriculture platform for crop disease detection and smart farming diagnostics.",
    tech: ["FastAPI", "TensorFlow", "Tailwind", "Python"],
    github: "https://github.com/rugasira",
    featured: true
  },
  {
    title: "HealthPro",
    description: "ML-powered disease prediction platform for intelligent healthcare analysis.",
    tech: ["Python", "Machine Learning", "AI", "Healthcare Tech"],
    github: "https://github.com/rugasira",
    featured: true
  },
  {
    title: "AI-Screener",
    description: "Automated screening workflows focused on intelligent evaluation and AI analysis.",
    tech: ["AI", "FastAPI", "Python", "Automation"],
    github: "https://github.com/rugasira",
    featured: false
  },
  {
    title: "SmartParking",
    description: "Digital vehicle management system designed to improve parking efficiency.",
    tech: ["Web Development", "Database Systems", "Automation"],
    github: "https://github.com/rugasira",
    featured: false
  },
  {
    title: "Dream Home",
    description: "Database-driven real estate management system for properties and clients.",
    tech: ["MySQL", "PHP", "HTML", "CSS"],
    github: "https://github.com/rugasira",
    featured: false
  },
  {
    title: "Blockchain Medical",
    description: "Decentralized medical record management system using Ethereum smart contracts.",
    tech: ["Solidity", "Ethereum", "Remix IDE"],
    github: "https://github.com/rugasira",
    featured: false
  }
];

interface Certificate {
  title: string;
  issuer: string;
  path: string;
  type: "pdf" | "image";
  icon: ReactNode;
  description: string;
}

const CERTIFICATES: Certificate[] = [
  {
    title: "AI Professional Certificate",
    issuer: "DeepLearning.AI / Google",
    path: "/certificates/ai_certificate.pdf",
    type: "pdf",
    icon: <Cpu className="w-6 h-6" />,
    description: "Advanced certification in Artificial Intelligence, neural networks, and deep learning architectures."
  },
  {
    title: "ALX Incubation Certificate",
    issuer: "ALX Africa",
    path: "/certificates/alx_incubation_certificate.pdf",
    type: "pdf",
    icon: <Award className="w-6 h-6" />,
    description: "Specialized incubation and leadership training focusing on tech startup scaling and growth."
  },
  {
    title: "Meta AI Hackathon Certificate",
    issuer: "Meta / AfriLabs",
    path: "/certificates/afrilabs_certificate.pdf",
    type: "pdf",
    icon: <Network className="w-6 h-6" />,
    description: "Meta AI Hackathon hosted by AfriLabs, focusing on building AI solutions for local ecosystem challenges."
  },
  {
    title: "Machine Learning Specialist",
    issuer: "Stanford / DeepLearning.AI",
    path: "/certificates/ml_certificate.pdf",
    type: "pdf",
    icon: <Database className="w-6 h-6" />,
    description: "Comprehensive study of supervised, unsupervised learning, and best practices in machine learning engineering."
  },
  {
    title: "Pakistan High Commission Training",
    issuer: "Pakistan High Commission",
    path: "/certificates/pakistan_high_commission_certificate.pdf",
    type: "pdf",
    icon: <Award className="w-6 h-6" />,
    description: "Intensive training program hosted by the Pakistan High Commission, focusing on technical skill-building and capacity development."
  },
  {
    title: "Canva Design Milestone Badge",
    issuer: "Canva",
    path: "/certificates/canva_badge.jpg",
    type: "image",
    icon: <Layout className="w-6 h-6" />,
    description: "Milestone badge for 50 designs, demonstrating creative design and asset creation capabilities."
  },
  {
    title: "Computer Hardware Basics",
    issuer: "Cisco Networking Academy",
    path: "/certificates/computer_hardware_basics.pdf",
    type: "pdf",
    icon: <Cpu className="w-6 h-6" />,
    description: "Foundational training in computer hardware components, system assembly, diagnostic troubleshooting, and operating systems."
  }
];

const BackgroundEffect = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px] animate-pulse" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[120px]" />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
  </div>
);

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeTab, setActiveTab] = useState("all");
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  return (
    <div className="relative min-h-screen selection:bg-emerald-500/30">
      <BackgroundEffect />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center glass rounded-2xl px-6 py-3">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-black shadow-[0_0_15px_rgba(16,185,129,0.5)]">
              A
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Alexis.dev
            </span>
          </motion.div>

          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            {["About", "Skills", "Projects", "Certificates", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="hover:text-emerald-400 transition-colors uppercase tracking-widest text-[10px]"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/rugasira"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass rounded-xl hover:text-emerald-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/farm-diag-a799bb371?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass rounded-xl hover:text-emerald-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/rugasira_/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass rounded-xl hover:text-emerald-400 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 px-6">
        <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-xs uppercase tracking-widest font-semibold text-emerald-400">
                Senior AI Developer & Engineer
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.85]"
            >
              ALEXIS <br />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent italic">
                AHISHAKIYE.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-400 max-w-xl mb-12 leading-relaxed"
            >
              Architecting the next generation of intelligent digital experiences. 
              Focused on ML integration, robust backends, and high-performance interfaces.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 rounded-2xl bg-emerald-500 text-black font-bold overflow-hidden transition-all hover:pr-12"
              >
                <span className="relative z-10">VIEW MY WORK</span>
                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all w-5 h-5" />
              </a>

              <a
                href="mailto:alexisahishakiye378@gmail.com"
                className="px-8 py-4 rounded-2xl glass hover:bg-white/10 transition-all font-bold"
              >
                CONTACT ME
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 w-full aspect-square rounded-[3rem] overflow-hidden border-2 border-white/10 group">
              <img 
                src="/profile.jpeg"
                alt="Alexis Ahishakiye Portfolio"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
                <span className="text-white font-black text-2xl tracking-tighter uppercase font-mono">Alexis.dev</span>
              </div>
            </div>
            <div className="absolute -inset-4 bg-emerald-500/20 blur-2xl rounded-full -z-10 animate-pulse" />
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-4">
              Behind the code
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Passionate about Innovation <br />
              & Scalable Systems.
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Based in Rwanda, I am an IT student and engineer bridging the gap between artificial intelligence 
              and practical software applications. My journey is driven by a deep curiosity for how 
              intelligent systems can transform industries like agriculture, healthcare, and finance.
            </p>
            <div className="flex gap-12">
              <div>
                <div className="text-3xl font-bold text-white mb-1">6+</div>
                <div className="text-xs uppercase tracking-widest text-emerald-500 font-bold">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">AI</div>
                <div className="text-xs uppercase tracking-widest text-emerald-500 font-bold">Focused</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">Web3</div>
                <div className="text-xs uppercase tracking-widest text-emerald-500 font-bold">Exploring</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { title: "AI/ML", icon: <Cpu className="w-8 h-8" /> },
              { title: "Backend", icon: <Terminal className="w-8 h-8" /> },
              { title: "Blockchain", icon: <Network className="w-8 h-8" /> },
              { title: "Architecture", icon: <Blocks className="w-8 h-8" /> }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl glass hover:border-emerald-500/50 transition-colors group">
                <div className="text-emerald-500 mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-xl font-bold text-white">{item.title}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              TECH STACK & <span className="text-emerald-400">EXPERTISE</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              A curated set of technologies I use to bring ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {Object.entries(SKILLS).map(([name, data], idx) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl glass hover:border-emerald-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                  {data.icon}
                </div>
                <h4 className="text-xl font-bold mb-6">{name}</h4>
                <div className="flex flex-wrap gap-2">
                  {data.items.map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-lg bg-white/5 text-xs text-gray-400 font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-4">
                Selected Works
              </h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
                BUILDING THE <br /> FUTURE.
              </h3>
            </div>
            <div className="flex gap-2">
              {["all", "featured"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                    activeTab === tab ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20" : "glass text-gray-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {(() => {
                const filteredProjects = PROJECTS.filter(p => activeTab === 'all' || p.featured);
                const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 3);
                return displayedProjects.map((project) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group relative flex flex-col p-8 rounded-[2rem] glass hover:border-emerald-500/50 transition-all overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl -z-10 group-hover:bg-emerald-500/20 transition-colors" />
                    
                    <div className="flex justify-between items-start mb-12">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 font-mono text-2xl font-bold group-hover:bg-emerald-500 group-hover:text-black transition-all">
                        {project.title.charAt(0)}
                      </div>
                      <a 
                        href={project.github}
                        target="_blank"
                        className="p-3 glass rounded-xl hover:text-emerald-400 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>

                    <h4 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-emerald-500/70 py-1 px-2 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                          {t}
                        </span>
                      ))}
                    </div>

                    <motion.a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 text-xs font-bold text-white group-hover:text-emerald-400 transition-colors uppercase tracking-widest"
                    >
                      View Repository <ExternalLink className="w-3 h-3" />
                    </motion.a>
                  </motion.div>
                ));
              })()}
            </AnimatePresence>
          </div>

          {(() => {
            const filteredProjects = PROJECTS.filter(p => activeTab === 'all' || p.featured);
            return filteredProjects.length > 3 && (
              <div className="flex justify-center mt-16">
                <button
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="group relative px-8 py-4 rounded-2xl glass hover:bg-emerald-500 hover:text-black font-bold text-xs tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer border border-white/10 hover:border-transparent"
                >
                  {showAllProjects ? "See Less" : "See More..."}
                </button>
              </div>
            );
          })()}
        </div>
      </section>


      {/* Certifications & Badges */}
      <section id="certificates" className="py-32 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-4">
              Credentials
            </h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight">
              CERTIFICATIONS & <span className="text-emerald-400">BADGES</span>
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto mt-4">
              Verified achievements and technical certifications. Click any certificate to view the PDF or badge preview.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {(() => {
                const displayedCertificates = showAllCertificates ? CERTIFICATES : CERTIFICATES.slice(0, 3);
                return displayedCertificates.map((cert) => (
                  <motion.div
                    key={cert.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ y: -5 }}
                    className="group relative p-8 rounded-[2rem] glass hover:border-emerald-500/50 transition-all flex flex-col justify-between"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl -z-10 group-hover:bg-emerald-500/10 transition-colors" />
                    
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                        {cert.icon}
                      </div>
                      <span className="text-xs font-bold text-emerald-500/70 tracking-widest uppercase block mb-2">
                        {cert.issuer}
                      </span>
                      <h4 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed mb-8">
                        {cert.description}
                      </p>
                    </div>
                    
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="w-full py-4 rounded-2xl bg-white/5 hover:bg-emerald-500 hover:text-black font-bold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 border border-white/5 hover:border-transparent cursor-pointer"
                    >
                      <Eye className="w-4 h-4" /> View Certificate
                    </button>
                  </motion.div>
                ));
              })()}
            </AnimatePresence>
          </div>

          {CERTIFICATES.length > 3 && (
            <div className="flex justify-center mt-16">
              <button
                onClick={() => setShowAllCertificates(!showAllCertificates)}
                className="group relative px-8 py-4 rounded-2xl glass hover:bg-emerald-500 hover:text-black font-bold text-xs tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer border border-white/10 hover:border-transparent"
              >
                {showAllCertificates ? "See Less" : "See More..."}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-5xl h-[85vh] rounded-[2rem] glass overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-black/40">
                <div>
                  <h4 className="text-lg font-bold text-white leading-tight">
                    {selectedCert.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Issued by {selectedCert.issuer}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={selectedCert.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 border border-white/15 hover:bg-emerald-500 hover:text-black hover:border-transparent transition-all flex items-center justify-center text-gray-400 hover:text-black"
                    title="Open in New Tab"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={selectedCert.path}
                    download
                    className="p-2.5 rounded-xl bg-white/5 border border-white/15 hover:bg-emerald-500 hover:text-black hover:border-transparent transition-all flex items-center justify-center text-gray-400 hover:text-black"
                    title="Download File"
                  >
                    <Download className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2.5 rounded-xl bg-white/5 border border-white/15 hover:bg-white/10 transition-all text-gray-400 hover:text-white cursor-pointer"
                    title="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Content - PDF or Image Viewer */}
              <div className="flex-grow bg-black/20 flex items-center justify-center overflow-hidden p-6">
                {selectedCert.type === "pdf" ? (
                  <iframe
                    src={`${selectedCert.path}#toolbar=0&navpanes=0`}
                    className="w-full h-full rounded-2xl border border-white/5 bg-black/50"
                    title={selectedCert.title}
                  />
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={selectedCert.path}
                      alt={selectedCert.title}
                      className="max-w-full max-h-full object-contain rounded-2xl border border-white/5"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact */}
      <section id="contact" className="relative py-40 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter">
              READY TO <br />
              <span className="text-emerald-400 underline decoration-white/10 underline-offset-8">COLLABORATE?</span>
            </h2>
            <p className="text-gray-400 text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
              Whether it's a new startup idea, a freelance project, or just a technical discussion, my inbox is always open.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:alexisahishakiye378@gmail.com"
                className="px-8 py-5 rounded-full bg-white text-black font-black uppercase tracking-tight flex items-center gap-3"
              >
                <Mail className="w-5 h-5" /> SAY HELLO
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/rugasira"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-5 rounded-full glass font-black uppercase tracking-tight flex items-center gap-3"
              >
                <Github className="w-5 h-5" /> GITHUB
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/farm-diag-a799bb371?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-5 rounded-full glass font-black uppercase tracking-tight flex items-center gap-3"
              >
                <Linkedin className="w-5 h-5" /> LINKEDIN
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/rugasira_/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-5 rounded-full glass font-black uppercase tracking-tight flex items-center gap-3"
              >
                <Instagram className="w-5 h-5" /> INSTAGRAM
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/5 blur-[150px] -z-10" />
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-sm">
            © 2026 Alexis Ahishakiye. Built with Precision.
          </p>
          <div className="flex gap-8">
            <a href="https://github.com/rugasira" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-gray-500 hover:text-emerald-400 transition-colors uppercase tracking-widest">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/farm-diag-a799bb371?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-gray-500 hover:text-emerald-400 transition-colors uppercase tracking-widest">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/rugasira_/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-gray-500 hover:text-emerald-400 transition-colors uppercase tracking-widest">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
