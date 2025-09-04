import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Play } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      className={`relative group ${
        project.featured ? 'md:col-span-2' : ''
      }`}
      style={{
        animationDelay: `${index * 100}ms`
      }}
      onClick={handleCardClick}
    >
      <Card className="h-full bg-gradient-to-br from-slate-900/40 to-slate-800/40 border-slate-700/30 overflow-hidden relative">
        
        {/* Project Image/Icon */}
        <div className="relative overflow-hidden bg-gradient-to-br from-neural-500/20 to-data-500/20 h-48">
          <div className="absolute inset-0 bg-gradient-to-br from-neural-600 to-data-600 opacity-20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl text-white/30 font-bold">
              {project.title.charAt(0)}
            </div>
          </div>
          
          
          {project.featured && (
            <Badge className="absolute top-4 right-4 bg-gradient-to-r from-neural-500 to-data-500 text-white">
              Featured
            </Badge>
          )}
        </div>

        <CardHeader>
          <CardTitle className="text-xl text-foreground">
            {project.title}
          </CardTitle>
          <CardDescription className="text-muted-foreground leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs bg-slate-700/30 text-slate-300"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            {project.liveUrl && (
              <Button
                size="sm"
                className="flex-1 bg-gradient-to-r from-neural-500 to-neural-600 focus:outline-none focus:ring-0"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(project.liveUrl, '_blank');
                }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live
              </Button>
            )}
            {project.githubUrl && (
              <Button
                size="sm"
                variant="outline"
                className="flex-1 border-neural-400/30 focus:outline-none focus:ring-0"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(project.githubUrl, '_blank');
                }}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            )}
          </div>
        </CardContent>

      </Card>
    </div>
  );
}
