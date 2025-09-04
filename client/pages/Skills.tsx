import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "AWS", "Linux", "CI/CD", "Nginx"]
    },
    {
      title: "Other",
      skills: ["GraphQL", "REST APIs", "WebSockets", "Redis", "Elasticsearch"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-8">Skills</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="bg-card rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
