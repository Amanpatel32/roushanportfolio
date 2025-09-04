import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"]
    },
    {
      title: "AI Chatbot",
      description: "Intelligent chatbot powered by OpenAI GPT",
      technologies: ["React", "Python", "FastAPI", "OpenAI"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-card rounded-lg p-6 shadow-lg hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
