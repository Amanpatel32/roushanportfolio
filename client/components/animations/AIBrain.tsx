import { useEffect, useState } from 'react';

interface Neuron {
  id: number;
  x: number;
  y: number;
  pulse: boolean;
}

export default function AIBrain() {
  const [neurons, setNeurons] = useState<Neuron[]>([]);
  const [activeConnections, setActiveConnections] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Create brain-like structure
    const brainNeurons: Neuron[] = [];
    const radius = 80;
    const centerX = 100;
    const centerY = 100;

    // Create neurons in a brain-like pattern
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const r = radius * (0.5 + Math.random() * 0.5);
      brainNeurons.push({
        id: i,
        x: centerX + Math.cos(angle) * r,
        y: centerY + Math.sin(angle) * r,
        pulse: false
      });
    }

    setNeurons(brainNeurons);

    // Animate neural activity
    const interval = setInterval(() => {
      // Activate random neurons
      const activeNeurons = new Set<number>();
      for (let i = 0; i < 3; i++) {
        activeNeurons.add(Math.floor(Math.random() * brainNeurons.length));
      }

      setNeurons(prev => prev.map(neuron => ({
        ...neuron,
        pulse: activeNeurons.has(neuron.id)
      })));

      // Create connections between active neurons
      const connections = new Set<string>();
      const activeArray = Array.from(activeNeurons);
      for (let i = 0; i < activeArray.length - 1; i++) {
        for (let j = i + 1; j < activeArray.length; j++) {
          connections.add(`${activeArray[i]}-${activeArray[j]}`);
        }
      }
      setActiveConnections(connections);

      setTimeout(() => {
        setNeurons(prev => prev.map(neuron => ({ ...neuron, pulse: false })));
        setActiveConnections(new Set());
      }, 800);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg bg-gradient-to-r from-slate-900/20 to-slate-800/20 backdrop-blur-sm border border-slate-700/30">
      <svg className="w-full h-full" viewBox="0 0 200 200">
        {/* Brain outline */}
        <path
          d="M50,80 Q50,40 80,40 Q120,30 140,50 Q160,40 170,60 Q180,80 170,100 Q160,120 140,130 Q120,140 100,135 Q80,140 60,130 Q40,120 40,100 Q40,80 50,80 Z"
          fill="none"
          stroke="#475569"
          strokeWidth="2"
          opacity="0.3"
          className="animate-pulse"
        />
        
        {/* Neural connections */}
        {neurons.map((fromNeuron, i) => 
          neurons.slice(i + 1).map((toNeuron, j) => {
            const distance = Math.sqrt(
              Math.pow(fromNeuron.x - toNeuron.x, 2) + 
              Math.pow(fromNeuron.y - toNeuron.y, 2)
            );
            const connectionKey = `${fromNeuron.id}-${toNeuron.id}`;
            const isActive = activeConnections.has(connectionKey);
            
            return distance < 50 ? (
              <line
                key={connectionKey}
                x1={fromNeuron.x}
                y1={fromNeuron.y}
                x2={toNeuron.x}
                y2={toNeuron.y}
                stroke={isActive ? '#38bdf8' : '#475569'}
                strokeWidth={isActive ? '2' : '1'}
                opacity={isActive ? '0.8' : '0.2'}
                className={isActive ? 'animate-pulse' : ''}
              />
            ) : null;
          })
        )}
        
        {/* Neurons */}
        {neurons.map((neuron) => (
          <g key={neuron.id}>
            <circle
              cx={neuron.x}
              cy={neuron.y}
              r={neuron.pulse ? '6' : '4'}
              fill={neuron.pulse ? '#38bdf8' : '#64748b'}
              className={`transition-all duration-300 ${neuron.pulse ? 'animate-pulse-glow' : ''}`}
            />
            {neuron.pulse && (
              <circle
                cx={neuron.x}
                cy={neuron.y}
                r="12"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="1"
                opacity="0.3"
                className="animate-ping"
              />
            )}
          </g>
        ))}
      </svg>
      
      <div className="absolute bottom-2 left-2 text-xs text-slate-400">
        AI Neural Processing
      </div>
    </div>
  );
}
