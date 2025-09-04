import { useEffect, useState } from 'react';

interface Node {
  id: string;
  x: number;
  y: number;
  active: boolean;
}

interface Connection {
  from: string;
  to: string;
  active: boolean;
}

export default function NeuralNetwork() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);

  useEffect(() => {
    // Create neural network structure
    const layers = [
      { count: 4, x: 50 },
      { count: 6, x: 150 },
      { count: 5, x: 250 },
      { count: 3, x: 350 }
    ];

    const newNodes: Node[] = [];
    const newConnections: Connection[] = [];

    layers.forEach((layer, layerIndex) => {
      for (let i = 0; i < layer.count; i++) {
        const nodeId = `layer-${layerIndex}-node-${i}`;
        newNodes.push({
          id: nodeId,
          x: layer.x,
          y: 50 + (i * 40),
          active: false
        });

        // Connect to next layer
        if (layerIndex < layers.length - 1) {
          const nextLayer = layers[layerIndex + 1];
          for (let j = 0; j < nextLayer.count; j++) {
            const nextNodeId = `layer-${layerIndex + 1}-node-${j}`;
            newConnections.push({
              from: nodeId,
              to: nextNodeId,
              active: false
            });
          }
        }
      }
    });

    setNodes(newNodes);
    setConnections(newConnections);

    // Animate neural activation
    const interval = setInterval(() => {
      const randomNode = newNodes[Math.floor(Math.random() * newNodes.length)];
      
      setNodes(prev => prev.map(node => ({
        ...node,
        active: node.id === randomNode.id
      })));

      setConnections(prev => prev.map(conn => ({
        ...conn,
        active: conn.from === randomNode.id || conn.to === randomNode.id
      })));

      setTimeout(() => {
        setNodes(prev => prev.map(node => ({ ...node, active: false })));
        setConnections(prev => prev.map(conn => ({ ...conn, active: false })));
      }, 500);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const getNodePosition = (nodeId: string) => {
    const node = nodes.find(n => n.id === nodeId);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg bg-gradient-to-r from-slate-900/20 to-slate-800/20 backdrop-blur-sm border border-slate-700/30">
      <svg className="w-full h-full" viewBox="0 0 400 240">
        {/* Connections */}
        {connections.map((conn, index) => {
          const from = getNodePosition(conn.from);
          const to = getNodePosition(conn.to);
          return (
            <line
              key={index}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={conn.active ? '#38bdf8' : '#475569'}
              strokeWidth={conn.active ? '2' : '1'}
              opacity={conn.active ? '1' : '0.3'}
              className={conn.active ? 'animate-pulse' : ''}
            />
          );
        })}
        
        {/* Nodes */}
        {nodes.map((node) => (
          <circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.active ? '8' : '6'}
            fill={node.active ? '#38bdf8' : '#64748b'}
            className={`transition-all duration-300 ${node.active ? 'animate-pulse-glow' : ''}`}
          />
        ))}
      </svg>
      
      <div className="absolute bottom-2 left-2 text-xs text-slate-400">
        Neural Network
      </div>
    </div>
  );
}
