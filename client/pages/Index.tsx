import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import ParticleField from "@/components/animations/ParticleField";
import TypingEffect from "@/components/animations/TypingEffect";
import SkillProgress from "@/components/animations/SkillProgress";
import ProjectCard from "@/components/animations/ProjectCard";
import NeuralNetwork from "@/components/animations/NeuralNetwork";
import DataVisualization from "@/components/animations/DataVisualization";
import AIBrain from "@/components/animations/AIBrain";
import {
  Brain,
  Code,
  Database,
  Rocket,
  Award,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Download,
  Send,
  Calendar,
  Building,
  GraduationCap,
  Coffee,
  ExternalLink,
  MessageCircle
} from "lucide-react";

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return visibleSections;
};

export default function Index() {
  const [isDark, setIsDark] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const visibleSections = useScrollAnimation();

  const skills = [
    { name: "Python", level: 95, color: "#3776ab", category: "Programming & Libraries" },
    { name: "MySQL", level: 85, color: "#4479a1", category: "Programming & Libraries" },
    { name: "NumPy", level: 90, color: "#013243", category: "Programming & Libraries" },
    { name: "Pandas", level: 92, color: "#150458", category: "Programming & Libraries" },
    { name: "Scikit-learn", level: 88, color: "#f7931e", category: "Programming & Libraries" },
    { name: "OpenCV", level: 85, color: "#5c3ee8", category: "Programming & Libraries" },
    { name: "TensorFlow", level: 82, color: "#ff6f00", category: "Programming & Libraries" },
    { name: "Matplotlib", level: 80, color: "#11557c", category: "Programming & Libraries" },
    { name: "Seaborn", level: 78, color: "#4c72b0", category: "Programming & Libraries" },
    { name: "Machine Learning", level: 90, color: "#ff6b6b", category: "ML & DL Models" },
    { name: "Deep Learning", level: 85, color: "#4ecdc4", category: "ML & DL Models" },
    { name: "Computer Vision", level: 88, color: "#45b7d1", category: "ML & DL Models" },
    { name: "NLP", level: 80, color: "#96ceb4", category: "ML & DL Models" },
    { name: "Gen AI", level: 75, color: "#ffeaa7", category: "ML & DL Models" },
    { name: "CNN", level: 83, color: "#dda0dd", category: "ML & DL Models" },
    { name: "Power BI", level: 87, color: "#f1c40f", category: "EDA & Visualization" },
    { name: "Tableau", level: 75, color: "#e17055", category: "EDA & Visualization" },
    { name: "Excel", level: 85, color: "#00b894", category: "EDA & Visualization" },
    { name: "Streamlit", level: 90, color: "#ff4757", category: "Tools & Platforms" },
    { name: "Flask", level: 78, color: "#2d3436", category: "Tools & Platforms" },
    { name: "Git/GitHub", level: 85, color: "#6c5ce7", category: "Tools & Platforms" },
    { name: "VS Code", level: 88, color: "#007acc", category: "Tools & Platforms" }
  ];

  const projects = [
    {
      id: "1",
      title: "AI-Driven Liver Damage Detection",
      description: "Developed an AI system to analyze histopathology images for early liver damage detection using deep learning models including DenseNet121, ResNet50, ResNet101, ResNet152, and VGG16, achieving high accuracy in diagnostic efficiency.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcPaliF0kqDGIKxmk8EJP7yZKXSmOYeN68Ow&s",
      tags: ["Python", "TensorFlow", "Computer Vision", "DenseNet121", "ResNet", "VGG16"],
      githubUrl: "https://github.com/webcoder123",
      
      featured: true
    },
    {
      id: "2",
      title: "Steel Plant Energy Optimization",
      description: "Implemented ML models (Logistic Regression, Random Forest, SVM, XGBoost) to optimize steel grade selection, reducing energy consumption and improving production quality in manufacturing plants.",
      image: "/placeholder.svg",
      tags: ["Python", "Scikit-learn", "XGBoost", "Power BI", "Streamlit"],
      githubUrl: "https://github.com/webcoder123",
     
    },
    {
      id: "3",
      title: "AI-Based Workplace Safety Monitoring",
      description: "Developed real-time safety monitoring system using YOLOv11 for object detection and pose estimation, automating workplace compliance and reducing safety risks through computer vision.",
      image: "/placeholder.svg",
      tags: ["Python", "YOLOv11", "Computer Vision", "Roboflow", "Streamlit"],
      githubUrl: "https://github.com/webcoder123",
     
    },
    {
      id: "4",
      title: "Computer Vision Segmentation Model",
      description: "Built segmentation model for automatic detection of defects like cracks and potholes in roads, buildings, and pipelines, contributing to infrastructure monitoring solutions.",
      image: "/placeholder.svg",
      tags: ["Python", "Computer Vision", "Segmentation", "Deep Learning"],
      githubUrl: "https://github.com/webcoder123"
    }
  ];

  const experiences = [
    {
      company: "Krati Tech.AI, Kanpur",
      position: "AI/ML Intern",
      period: "Jun 2025 - Present",
      description: "Developing Computer Vision Segmentation Model for automatic defect detection in infrastructure. Contributing to UPSIDA AI Assistant (UP Government project) by integrating LLMs, RAG, LangChain, and Agentic AI with FastAPI backend and Streamlit deployment.",
      technologies: ["Python", "Computer Vision", "LLMs", "RAG", "LangChain", "FastAPI", "Streamlit"]
    },
    {
      company: "AISPRY",
      position: "Junior Data Scientist Intern",
      period: "Jan 2025 - Jun 2025",
      description: "Designed and deployed four real-world AI/ML solutions including computer vision projects. Developed workplace safety monitoring system using YOLOv11 and liver damage detection system using deep learning models. Implemented end-to-end ML pipeline for energy optimization in steel plants.",
      technologies: ["Python", "YOLOv11", "Deep Learning", "Streamlit", "Computer Vision", "NLP"]
    },
    {
      company: "Contechub, Jaipur",
      position: "Data Analyst (Remote)",
      period: "Feb 2024 - Jul 2024",
      description: "Analyzed datasets using Python, SQL, and Power BI. Built KPI dashboards, automated data pipelines, performed EDA, and created automated reports. Conducted data cleaning and visualization for business insights.",
      technologies: ["Python", "SQL", "Power BI", "Data Analysis", "EDA"]
    }
  ];

  const educationData = [
    {
      degree: "BCA (Bachelor of Computer Applications)",
      institution: "VKSU, Arrah, Bihar",
      period: "May 2024",
      description: "Graduated with Bachelor's degree in Computer Applications"
    },
    {
      degree: "I.Sc.(PCM), BSEB",
      institution: "SS High School Jagdishpur, Bihar",
      period: "June 2020",
      description: "Intermediate Science with Physics, Chemistry, Mathematics"
    }
  ];

  const certifications = [
    {
      name: "Professional Program in Data Science & AI",
      issuer: "Aispry, 360DigiTMG, Hyderabad",
      period: "Aug 2024 - Jul 2025"
    },
    {
      name: "Certificate of Data Science",
      issuer: "NASSCOM",
      period: "2024"
    },
    {
      name: "Data Analyst Bootcamp 3.0",
      issuer: "Codebasics, United States",
      period: "2024"
    }
  ];

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    // Update document classes
    const htmlElement = document.documentElement;
    const bodyElement = document.body;

    if (newTheme) {
      // Dark mode
      htmlElement.classList.add('dark');
      bodyElement.classList.add('dark');
      htmlElement.style.colorScheme = 'dark';
    } else {
      // Light mode
      htmlElement.classList.remove('dark');
      bodyElement.classList.remove('dark');
      htmlElement.style.colorScheme = 'light';
    }

    // Force a re-render by updating CSS custom properties
    htmlElement.style.setProperty('--theme-transition', 'all 0.3s ease-in-out');

    // Store theme preference
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Roushan_Kumar_Resume.pdf';
    link.download = 'Roushan_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    setIsVisible(true);

    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme ? savedTheme === 'dark' : prefersDark;

    setIsDark(shouldUseDark);

    const htmlElement = document.documentElement;
    const bodyElement = document.body;

    if (shouldUseDark) {
      htmlElement.classList.add('dark');
      bodyElement.classList.add('dark');
      htmlElement.style.colorScheme = 'dark';
    } else {
      htmlElement.classList.remove('dark');
      bodyElement.classList.remove('dark');
      htmlElement.style.colorScheme = 'light';
    }
  }, []);

  // Animation helper function
  const getAnimationClass = (sectionId: string, animationType: 'slideUp' | 'slideLeft' | 'slideRight' | 'fadeIn' = 'slideUp', delay = 0) => {
    const isVisible = visibleSections.has(sectionId);
    const delayClass = delay > 0 ? `delay-${delay}` : '';

    const animations = {
      slideUp: isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
      slideLeft: isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0',
      slideRight: isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0',
      fadeIn: isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
    };

    return `transition-all duration-1000 transform ${animations[animationType]} ${delayClass}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation toggleTheme={toggleTheme} isDark={isDark} onResumeDownload={handleResumeDownload} />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <ParticleField />

        {/* Background Effects */}
        <div className="absolute inset-0 bg-neural-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm bg-gradient-to-r from-neural-500/20 to-data-500/20 border-neural-400/30 animate-pulse">
                <Coffee className="w-4 h-4 mr-2" />
                Available for Work
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-neural-400 via-data-400 to-algorithm-400 bg-clip-text text-transparent animate-pulse">
                Roushan Kumar
              </span>
            </h1>

            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 h-16 flex items-center justify-center">
              <TypingEffect
                texts={[
                  "Data Scientist",
                  "AI/ML Engineer",
                  "Computer Vision Expert",
                  "Deep Learning Specialist"
                ]}
                className="bg-gradient-to-r from-neural-400 to-data-400 bg-clip-text text-transparent"
              />
            </div>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeIn">
              Passionate Data Science & AI/ML enthusiast with 1.3+ years of hands-on experience.
              Skilled in turning complex data into actionable insights and building scalable AI solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={handleResumeDownload}
                className="group bg-gradient-to-r from-neural-500 to-neural-600 hover:from-neural-600 hover:to-neural-700 text-white px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-neural-400/30 hover:bg-neural-400/10 px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {[
                { icon: Github, href: "https://github.com/webcoder123", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/roushan-kumar-063175258", label: "LinkedIn" },
                { icon: MessageCircle, href: "https://wa.me/916200561725", label: "WhatsApp" },
                { icon: Mail, href: "mailto:roushanpateldata@gmail.com", label: "Email" }
              ].map(({ icon: Icon, href, label }, index) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800/30 hover:bg-neural-500/20 border border-slate-700/30 hover:border-neural-400/30 transition-all duration-300 group transform hover:scale-110 animate-bounce"
                  style={{ animationDelay: `${index * 0.2}s` }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-neural-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${getAnimationClass('about', 'fadeIn')}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-neural-400 to-data-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Turning complex data into intelligent solutions that drive innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${getAnimationClass('about', 'slideRight')}`}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Data Science & AI/ML enthusiast with 1.3+ years of hands-on and internship experience.
                Proficient in Machine Learning, Deep Learning, and GenAI, with expertise in predictive modeling
                and data visualization.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in turning complex data into actionable insights to drive innovation and support
                strategic decisions. Passionate about applying AI technologies to real-world business challenges,
                from computer vision solutions to energy optimization systems.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { icon: Code, label: "1.3+ Years Experience", description: "In Data Science & AI/ML" },
                  { icon: Brain, label: "AI/ML Projects", description: "Deployed in production" },
                  { icon: Database, label: "Data Analysis", description: "Multiple domains expertise" },
                  { icon: Award, label: "Certified Professional", description: "NASSCOM & Aispry certified" }
                ].map(({ icon: Icon, label, description }, index) => (
                  <div key={label} className={`text-center group ${getAnimationClass('about', 'slideUp', index * 200)}`}>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-neural-500/20 to-data-500/20 mb-3 group-hover:scale-110 transition-transform animate-pulse" style={{ animationDelay: `${index * 0.5}s` }}>
                      <Icon className="w-6 h-6 text-neural-400" />
                    </div>
                    <h3 className="font-semibold text-foreground">{label}</h3>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`space-y-6 ${getAnimationClass('about', 'slideLeft')}`}>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <AIBrain />
              </div>
              <Card className="bg-gradient-to-r from-slate-900/40 to-slate-800/40 border-slate-700/30 hover:border-neural-400/30 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Languages</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">Hindi</span>
                      <Badge variant="secondary">Native</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">English</span>
                      <Badge variant="secondary">Proficient</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${getAnimationClass('skills', 'fadeIn')}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-neural-400 to-data-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expertise in Data Science, Machine Learning, and AI technologies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className={getAnimationClass('skills', 'slideRight')}>
              <SkillProgress skills={skills} />
            </div>
            <div className={`space-y-6 ${getAnimationClass('skills', 'slideLeft')}`}>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <NeuralNetwork />
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <DataVisualization />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${getAnimationClass('projects', 'fadeIn')}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-neural-400 to-data-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world AI/ML solutions deployed in production environments
            </p>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${getAnimationClass('projects', 'slideUp')}`}>
            {projects.map((project, index) => (
              <div key={project.id} className={`transform transition-all duration-1000 ${getAnimationClass('projects', 'slideUp', index * 200)}`}>
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${getAnimationClass('experience', 'fadeIn')}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-neural-400 to-data-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Journey through internships and hands-on AI/ML projects
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-neural-400 to-data-400 opacity-30" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'} ${getAnimationClass('experience', index % 2 === 0 ? 'slideRight' : 'slideLeft', index * 300)}`}>
                    <Card className={`bg-gradient-to-r from-slate-900/40 to-slate-800/40 border-slate-700/30 hover:border-neural-400/30 transition-all duration-300 transform hover:scale-105 ${getAnimationClass('education', 'slideUp', index * 200)}`}>
                      <CardHeader>
                        <div className="flex items-center space-x-3 mb-2">
                          <Building className="w-5 h-5 text-neural-400" />
                          <CardTitle className="text-xl">{exp.company}</CardTitle>
                        </div>
                        <CardDescription className="text-neural-400 font-medium">
                          {exp.position}
                        </CardDescription>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs hover:bg-neural-400/20 transition-colors">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className={`w-4 h-4 bg-gradient-to-r from-neural-400 to-data-400 rounded-full border-4 border-background shadow-lg animate-pulse ${getAnimationClass('experience', 'fadeIn', index * 400)}`} />
                  </div>

                  <div className="hidden lg:block w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${getAnimationClass('education', 'fadeIn')}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-neural-400 to-data-400 bg-clip-text text-transparent">
              Education & Certifications
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className={getAnimationClass('education', 'slideRight')}>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-neural-400" />
                Education
              </h3>
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <Card key={index} className={`bg-gradient-to-r from-slate-900/40 to-slate-800/40 border-slate-700/30 hover:border-neural-400/30 transition-all duration-300 transform hover:scale-105 ${getAnimationClass('education', 'slideUp', index * 200)}`}>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-neural-400 font-medium">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                      <p className="text-muted-foreground mt-2">{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className={getAnimationClass('education', 'slideLeft')}>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-neural-400" />
                Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className={`bg-gradient-to-r from-slate-900/40 to-slate-800/40 border-slate-700/30 hover:border-neural-400/30 transition-all duration-300 transform hover:scale-105 ${getAnimationClass('education', 'slideUp', index * 200)}`}>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-foreground">{cert.name}</h4>
                      <p className="text-neural-400 font-medium">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">{cert.period}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 ${getAnimationClass('contact', 'fadeIn')}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-neural-400 to-data-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss opportunities in Data Science and AI/ML projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className={`space-y-6 ${getAnimationClass('contact', 'slideRight')}`}>
              <Card className="bg-gradient-to-r from-slate-900/40 to-slate-800/40 border-slate-700/30 hover:border-neural-400/30 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Mail, label: "Email", value: "roushanpateldata@gmail.com", href: "mailto:roushanpateldata@gmail.com" },
                      { icon: MessageCircle, label: "WhatsApp", value: "+91 6200561725", href: "https://wa.me/916200561725" },
                      { icon: Linkedin, label: "LinkedIn", value: "roushan-kumar-063175258", href: "https://www.linkedin.com/in/roushan-kumar-063175258" },
                      { icon: Github, label: "GitHub", value: "webcoder123", href: "https://github.com/webcoder123" },
                      { icon: MapPin, label: "Location", value: "India", href: null }
                    ].map(({ icon: Icon, label, value, href }) => (
                      <div key={label} className="flex items-center space-x-4 hover:bg-neural-400/5 p-2 rounded-lg transition-colors">
                        <div className="p-3 rounded-lg bg-gradient-to-r from-neural-500/20 to-data-500/20">
                          <Icon className="w-5 h-5 text-neural-400" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{label}</p>
                          {href ? (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground font-medium hover:text-neural-400 transition-colors flex items-center"
                            >
                              {value}
                              <ExternalLink className="w-3 h-3 ml-1" />
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">{value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-700/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground animate-pulse">
            © 2024 Roushan Kumar. Data Scientist & AI/ML Engineer.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Open for B2B contracts and exciting AI/ML opportunities
          </p>
        </div>
      </footer>
    </div>
  );
}
