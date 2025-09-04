import { useEffect, useState } from 'react';

interface DataPoint {
  id: number;
  value: number;
  color: string;
}

export default function DataVisualization() {
  const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Initialize data points
    const initialData = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      value: Math.random() * 80 + 10,
      color: `hsl(${200 + i * 20}, 70%, 60%)`
    }));
    setDataPoints(initialData);

    // Animate data changes
    const interval = setInterval(() => {
      setIsAnimating(true);
      setDataPoints(prev => prev.map(point => ({
        ...point,
        value: Math.random() * 80 + 10
      })));
      
      setTimeout(() => setIsAnimating(false), 800);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg bg-gradient-to-r from-slate-900/20 to-slate-800/20 backdrop-blur-sm border border-slate-700/30 p-4">
      <div className="flex items-end justify-center h-full space-x-3">
        {dataPoints.map((point, index) => (
          <div
            key={point.id}
            className="relative group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div
              className={`w-6 bg-gradient-to-t from-neural-600 to-neural-400 rounded-t transition-all duration-700 ease-out ${
                isAnimating ? 'animate-data-wave' : ''
              }`}
              style={{
                height: `${point.value}%`,
                background: `linear-gradient(to top, ${point.color}, ${point.color}aa)`
              }}
            />
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="bg-slate-800 text-white text-xs px-2 py-1 rounded shadow-lg">
                {Math.round(point.value)}%
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neural-400 rounded-full animate-neural-flow opacity-60"
            style={{
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '4s'
            }}
          />
        ))}
      </div>
      
      <div className="absolute bottom-2 left-2 text-xs text-slate-400">
        Real-time Analytics
      </div>
    </div>
  );
}
