"use client";

import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useMemo, useCallback, memo } from "react";
import { ThemeToggle } from "@/app/components/theme-toggle";
import { FloatingLogos } from "@/app/components/floating-logos";
import { preloadImage } from "@/lib/performance";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Instagram,
  Send,
  ExternalLink,
  Code,
  Database,
  Globe,
  ArrowDown,
  Mail,
  MapPin,
  Calendar,
  Download,
  Sparkles,
  Zap,
  Star
} from "lucide-react";

const skills = [
  { name: "HTML", level: 95, color: "#E34F26", icon: "🌐" },
  { name: "CSS", level: 90, color: "#1572B6", icon: "🎨" },
  { name: "JavaScript", level: 92, color: "#F7DF1E", icon: "⚡" },
  { name: "PHP", level: 85, color: "#777BB4", icon: "🔧" },
  { name: "MySQL", level: 88, color: "#4479A1", icon: "🗄️" },
  { name: "SQL", level: 85, color: "#336791", icon: "📊" },
  { name: "Git", level: 90, color: "#F05032", icon: "🌿" },
  { name: "C#", level: 80, color: "#239120", icon: "⚙️" },
  { name: "C++", level: 75, color: "#00599C", icon: "🔩" },
  { name: "Java", level: 78, color: "#ED8B00", icon: "☕" },
];

const projects = [
  {
    title: "Dynamic Web Application",
    description: "Full-stack web application with real-time features, user authentication, and responsive design using modern technologies.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=250&fit=crop"
  },
  {
    title: "Database Management System",
    description: "Comprehensive database solution with advanced SQL queries, data visualization, and performance optimization.",
    tech: ["C#", "SQL", "MySQL", "Git"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop"
  },
  {
    title: "Enterprise Software Solution",
    description: "Scalable enterprise application built with object-oriented programming principles and modern architecture patterns.",
    tech: ["Java", "C++", "Git", "SQL"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub", color: "#333" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "#0077B5" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "#E4405F" },
  { icon: Send, href: "https://telegram.org", label: "Telegram", color: "#0088CC" },
];

// Dynamic cycling typewriter component
const DynamicTypewriter = memo(() => {
  const roles = [
    "Dynamic",
    "Software Engineer", 
    "Web Developer",
    "Video Editor",
    "Project Manager",
    "Cloud Architect"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentIndex < currentRole.length) {
      // Typing forward - faster speed (50ms)
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
    } else if (!isDeleting && currentIndex === currentRole.length) {
      // Pause at end of word
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && currentIndex > 0) {
      // Deleting - faster speed (30ms)
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      }, 30);
    } else if (isDeleting && currentIndex === 0) {
      // Move to next role
      setIsDeleting(false);
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, currentRoleIndex, roles]);

  return (
    <span className="inline-block">
      {displayedText}
      <span className="animate-pulse ml-1 border-r-2 border-primary">|</span>
    </span>
  );
});

DynamicTypewriter.displayName = "DynamicTypewriter";

export default function HomePage() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  // Preload hero image for faster loading
  useEffect(() => {
    preloadImage('https://cdn.builder.io/api/v1/image/assets%2F9750540b78c646d2a475c71aa9567927%2F98d04842338d4350819356c973f4d52a?format=webp&width=800');
  }, []);

  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingLogos />
      
      {/* Dynamic background gradient */}
      <div className="fixed inset-0 animate-gradient-shift opacity-5 pointer-events-none" />
      
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-xl font-bold animate-pulse-glow"
              whileHover={{ scale: 1.05 }}
            >
              <span className="animate-wave inline-block">👋</span> Portfolio
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-muted-foreground hover:text-foreground transition-colors relative"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 animate-bounce-in hover:animate-pulse-glow"
              >
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 relative">
        <motion.div style={{ y: y1 }} className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <motion.div
              className="space-y-6 relative z-10"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Badge variant="secondary" className="mb-4 animate-bounce-in">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Available for work
                </Badge>
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Hi, I&apos;m a
                <span className="text-primary block">
                  <DynamicTypewriter />
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                I craft dynamic web experiences with cutting-edge technologies. 
                Passionate about building scalable, high-performance applications that push boundaries.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('projects')}
                  className="flex items-center gap-2 animate-pulse-glow hover:animate-bounce-in"
                >
                  <Zap className="w-4 h-4" />
                  View Projects
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="hover:animate-pulse-glow"
                >
                  Get In Touch
                </Button>
              </motion.div>
              <motion.div 
                className="flex gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-float hover:animate-pulse-glow"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.8 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              style={{ y: y2 }}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets%2F9750540b78c646d2a475c71aa9567927%2F98d04842338d4350819356c973f4d52a?format=webp&width=800"
                    alt="Software Engineer"
                    width={400}
                    height={600}
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl animate-float"
                    priority
                  />
                  <motion.div
                    className="absolute -top-2 -right-2 p-2 bg-primary rounded-full animate-bounce-in"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Star className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-muted/50 relative">
        <div className="container mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4 animate-bounce-in">
              About Me
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
              I&apos;m a passionate full-stack developer who loves creating dynamic, interactive experiences. 
              From frontend magic to backend architecture, I build end-to-end solutions that make an impact.
            </motion.p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Code, title: "Frontend Magic", desc: "HTML, CSS, JavaScript", color: "#61DAFB" },
              { icon: Database, title: "Backend Power", desc: "PHP, MySQL, C#, Java", color: "#339933" },
              { icon: Globe, title: "Full-Stack Solutions", desc: "End-to-end development", color: "#F05032" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 animate-float hover:animate-pulse-glow group">
                  <CardHeader>
                    <motion.div
                      className="mx-auto p-4 bg-primary/10 rounded-full w-fit animate-skill-glow"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      style={{ animationDelay: `${index * 0.3}s` }}
                    >
                      <item.icon className="w-8 h-8 text-primary group-hover:animate-bounce" />
                    </motion.div>
                    <CardTitle className="group-hover:text-primary transition-colors">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.desc}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="container mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4 animate-bounce-in">
              Skills & Technologies
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground">
              My technical expertise spans across multiple languages and technologies
            </motion.p>
          </motion.div>
          
          {/* Animated skill icons */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  className="mx-auto w-20 h-20 rounded-2xl flex items-center justify-center text-3xl mb-3 animate-float hover:animate-pulse-glow cursor-pointer"
                  style={{ backgroundColor: skill.color + "20", animationDelay: `${index * 0.2}s` }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -10, 10, 0],
                    backgroundColor: skill.color + "40"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="group-hover:animate-bounce">{skill.icon}</span>
                </motion.div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">{skill.name}</h3>
              </motion.div>
            ))}
          </motion.div>

          {/* Skill progress bars */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium flex items-center gap-2">
                    <span>{skill.icon}</span>
                    {skill.name}
                  </span>
                  <span className="text-muted-foreground font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden relative">
                  <motion.div
                    className="h-full rounded-full relative overflow-hidden"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-muted/50 relative">
        <div className="container mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4 animate-bounce-in">
              Featured Projects
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects showcasing different technologies and solutions
            </motion.p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 group animate-float hover:animate-pulse-glow">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <motion.div
                      className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Sparkles className="w-8 h-8 text-white animate-bounce" />
                    </motion.div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between group-hover:text-primary transition-colors">
                      {project.title}
                      <div className="flex gap-2">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{ scale: 0.8 }}
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{ scale: 0.8 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="hover:animate-bounce cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4 animate-bounce-in">
              Let&apos;s Create Something Amazing
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let&apos;s collaborate and build something extraordinary together.
            </motion.p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              {[
                { icon: Mail, title: "Email", detail: "your.email@example.com", color: "#EA4335" },
                { icon: MapPin, title: "Location", detail: "Your City, Country", color: "#4285F4" },
                { icon: Calendar, title: "Availability", detail: "Open to new opportunities", color: "#34A853" }
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  className="flex items-center gap-4 group hover:animate-pulse-glow cursor-pointer"
                  whileHover={{ scale: 1.05, x: 10 }}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <motion.div 
                    className="p-3 rounded-full animate-float"
                    style={{ backgroundColor: item.color + "20" }}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="animate-float hover:animate-pulse-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 animate-bounce" />
                    Send me a message
                  </CardTitle>
                  <CardDescription>
                    I&apos;ll get back to you faster than you can say &quot;Hello World!&quot;
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First name"
                      className="px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:animate-pulse-glow transition-all duration-300"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className="px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:animate-pulse-glow transition-all duration-300"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:animate-pulse-glow transition-all duration-300"
                  />
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:animate-pulse-glow resize-none transition-all duration-300"
                  />
                  <Button className="w-full hover:animate-bounce-in group">
                    <motion.span 
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      Send Message
                      <Send className="w-4 h-4 group-hover:animate-bounce" />
                    </motion.span>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t bg-muted/50 relative">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-muted-foreground text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              © 2024 Portfolio. Made with ❤️ and lots of ☕
            </motion.p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-float"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.8 }}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
