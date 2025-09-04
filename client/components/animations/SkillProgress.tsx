import { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  color: string;
  category: string;
}

interface SkillProgressProps {
  skills: Skill[];
}

export default function SkillProgress({ skills }: SkillProgressProps) {
  const [visibleSkills, setVisibleSkills] = useState<Set<string>>(new Set());
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animating skills one by one
            skills.forEach((skill, index) => {
              setTimeout(() => {
                setVisibleSkills(prev => new Set(prev).add(skill.name));
                
                // Animate progress bar
                let currentLevel = 0;
                const increment = skill.level / 60; // 60 frames for smooth animation
                
                const animateLevel = () => {
                  currentLevel += increment;
                  if (currentLevel <= skill.level) {
                    setAnimatedLevels(prev => ({
                      ...prev,
                      [skill.name]: Math.min(currentLevel, skill.level)
                    }));
                    requestAnimationFrame(animateLevel);
                  } else {
                    setAnimatedLevels(prev => ({
                      ...prev,
                      [skill.name]: skill.level
                    }));
                  }
                };
                
                animateLevel();
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [skills]);

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as { [key: string]: Skill[] });

  return (
    <div ref={sectionRef} className="space-y-8">
      {Object.entries(groupedSkills).map(([category, categorySkills]) => (
        <div key={category} className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground mb-4 border-b border-neural-400/20 pb-2">
            {category}
          </h3>
          <div className="grid gap-4">
            {categorySkills.map((skill) => {
              const isVisible = visibleSkills.has(skill.name);
              const currentLevel = animatedLevels[skill.name] || 0;
              
              return (
                <div
                  key={skill.name}
                  className={`transition-all duration-500 transform ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {Math.round(currentLevel)}%
                    </span>
                  </div>
                  
                  <div className="relative">
                    {/* Background bar */}
                    <div className="w-full h-2 bg-slate-700/30 rounded-full overflow-hidden">
                      {/* Progress bar */}
                      <div
                        className="h-full rounded-full transition-all duration-300 relative"
                        style={{
                          width: `${currentLevel}%`,
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`
                        }}
                      >
                        {/* Animated shine effect */}
                        {isVisible && (
                          <div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-neural-flow"
                            style={{ animationDuration: '2s', animationDelay: '0.5s' }}
                          />
                        )}
                      </div>
                    </div>
                    
                    {/* Skill level indicator */}
                    <div
                      className="absolute top-0 w-3 h-3 rounded-full border-2 border-background transform -translate-y-0.5 transition-all duration-300"
                      style={{
                        left: `calc(${currentLevel}% - 6px)`,
                        backgroundColor: skill.color,
                        boxShadow: `0 0 10px ${skill.color}50`
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
