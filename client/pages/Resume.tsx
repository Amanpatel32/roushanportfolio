import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, FileText, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const Resume = () => {
  const [downloadStatus, setDownloadStatus] = useState<{ [key: string]: string }>({});

  const handleDownload = async (filename: string, displayName: string) => {
    try {
      setDownloadStatus(prev => ({ ...prev, [filename]: 'downloading' }));

      const link = document.createElement('a');
      link.href = `/${filename}`;
      link.download = displayName;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';

      // Add error handling
      link.onerror = () => {
        setDownloadStatus(prev => ({ ...prev, [filename]: 'error' }));
        // Fallback: open in new tab
        window.open(`/${filename}`, '_blank');
      };

      link.onload = () => {
        setDownloadStatus(prev => ({ ...prev, [filename]: 'success' }));
      };

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clear status after 3 seconds
      setTimeout(() => {
        setDownloadStatus(prev => ({ ...prev, [filename]: '' }));
      }, 3000);

    } catch (error) {
      console.error('Download failed:', error);
      setDownloadStatus(prev => ({ ...prev, [filename]: 'error' }));
      // Fallback: open in new tab
      window.open(`/${filename}`, '_blank');
    }
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
      className="max-w-6xl mx-auto px-4"
    >
      <h1 className="text-4xl font-bold mb-8 text-center">Resume & Certificates</h1>

      {/* Resume Section */}
      <div className="bg-card rounded-lg p-8 shadow-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4">Download My Resume</h2>
        <p className="text-muted-foreground mb-6">
          Get a comprehensive overview of my skills, experience, and education.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            onClick={() => handleDownload('Roushan_Kumar_Resume.pdf', 'Roushan_Kumar_Resume.pdf')}
            className="bg-primary hover:bg-primary/90"
            disabled={downloadStatus['Roushan_Kumar_Resume.pdf'] === 'downloading'}
          >
            <Download className="mr-2 h-4 w-4" />
            {downloadStatus['Roushan_Kumar_Resume.pdf'] === 'downloading' ? 'Downloading...' : 'Download PDF Resume'}
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open('/Roushan_Kumar_Resume.pdf', '_blank')}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View in Browser
          </Button>
        </div>

        {downloadStatus['Roushan_Kumar_Resume.pdf'] === 'error' && (
          <p className="text-red-500 mt-2 text-sm">
            Download failed. Try viewing in browser instead.
          </p>
        )}

        {downloadStatus['Roushan_Kumar_Resume.pdf'] === 'success' && (
          <p className="text-green-500 mt-2 text-sm">
            Download completed successfully!
          </p>
        )}
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

              <div className="flex flex-col gap-2">
                <Button
                  size="sm"
                  onClick={() => handleDownload(cert.filename, cert.displayName)}
                  className="w-full bg-neural-500 hover:bg-neural-600 text-white"
                  disabled={downloadStatus[cert.filename] === 'downloading'}
                >
                  <Download className="mr-2 h-3 w-3" />
                  {downloadStatus[cert.filename] === 'downloading' ? 'Downloading...' : 'Download'}
                </Button>

                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => window.open(`/${cert.filename}`, '_blank')}
                  className="w-full border-neural-500 text-neural-500 hover:bg-neural-500 hover:text-white"
                >
                  <ExternalLink className="mr-2 h-3 w-3" />
                  View
                </Button>
              </div>

              {downloadStatus[cert.filename] === 'error' && (
                <p className="text-red-500 mt-2 text-xs">
                  Download failed
                </p>
              )}

              {downloadStatus[cert.filename] === 'success' && (
                <p className="text-green-500 mt-2 text-xs">
                  Downloaded!
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2 text-blue-800 dark:text-blue-200">📄 PDF Viewing Tips</h3>
          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <li>• Click "Download" to save certificates to your device</li>
            <li>• Click "View" to open certificates in a new browser tab</li>
            <li>• If downloads fail, use the "View" option as a fallback</li>
            <li>• Make sure your browser allows pop-ups for this site</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
