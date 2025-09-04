import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          I'm a passionate full-stack developer with expertise in modern web technologies.
          I love creating beautiful, functional applications that solve real-world problems.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <ul className="space-y-2">
              <li>React & TypeScript</li>
              <li>Node.js & Express</li>
              <li>Python & Django</li>
              <li>PostgreSQL & MongoDB</li>
              <li>Docker & AWS</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Experience</h3>
            <p>Full-stack developer with 3+ years of experience building scalable web applications.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
