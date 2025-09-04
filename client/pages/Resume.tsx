import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';
import { useState } from 'react';

const Resume = () => {

  const [isDark, setIsDark] = useState(false);
  
    const toggleTheme = () => {
      setIsDark(!isDark);
      // You can add theme switching logic here
    };
  const handleDownload = (filename: string, displayName: string) => {
    const link = document.createElement('a');
    link.href = `/${filename}`;
    link.download = displayName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const certificates = [
    {
      filename: 'ROUSHAN KUMAR-FE-AI-DP-09-08-2025.pdf',
      displayName: 'ROUSHAN KUMAR-FE-AI-DP-09-08-2025.pdf',
      title: 'Frontend & AI Development Certificate'
    },
    {
      filename: 'Excel_cetificateCB-51-376655.pdf',
      displayName: 'Excel_cetificateCB-51-376655.pdf',
      title: 'Excel Certification'
    },
    {
      filename: 'Certification.pdf',
      displayName: 'Certification.pdf',
      title: 'General Certification'
    },
    {
      filename: 'Certificate_360_python.pdf',
      displayName: 'Certificate_360_python.pdf',
      title: 'Python 360 Certification'
    },
    {
      filename: 'Roushan+Kumar_147634761.pdf',
      displayName: 'Roushan+Kumar_147634761.pdf',
      title: 'Professional Certification'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-8 text-center">Resume & Certificates</h1>

      {/* Resume Section */}
      <div className="bg-card rounded-lg p-8 shadow-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4">Download My Resume</h2>
        <p className="text-muted-foreground mb-6">
          Get a comprehensive overview of my skills, experience, and education.
        </p>

        <Button
          size="lg"
          onClick={() => handleDownload('Roushan_Kumar_Resume.pdf', 'Roushan_Kumar_Resume.pdf')}
          className="bg-primary hover:bg-primary/90"
        >
          <Download className="mr-2 h-4 w-4" />
          Download PDF Resume
        </Button>

        <div className="mt-8">
          <iframe
            src="/Roushan_Kumar_Resume.pdf"
            className="w-full h-96 rounded-lg border"
            title="Resume Preview"
          />
        </div>
      </div>

      {/* Certificates Section */}
      <div className="bg-card rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">My Certificates</h2>
        <p className="text-muted-foreground mb-8">
          Here are my professional certifications and achievements.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 text-neural-500 mr-3" />
                <h3 className="font-semibold text-sm">{cert.title}</h3>
              </div>

              <p className="text-xs text-muted-foreground mb-4 truncate">
                {cert.displayName}
              </p>

              <Button
                size="sm"
                onClick={() => handleDownload(cert.filename, cert.displayName)}
                className="w-full bg-neural-500 hover:bg-neural-600 text-white"
              >
                <Download className="mr-2 h-3 w-3" />
                Download
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Certificate Preview Section */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Certificate Preview</h3>
          <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-4">
              Click on any certificate above to download, or select one below to preview:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certificates.slice(0, 2).map((cert, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 rounded border p-2">
                  <iframe
                    src={`/${cert.filename}`}
                    className="w-full h-64 rounded border-0"
                    title={`${cert.title} Preview`}
                  />
                  <p className="text-xs text-center mt-2 text-muted-foreground">
                    {cert.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
