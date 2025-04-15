import { useEffect, useRef } from 'react';

const DataFlowAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Ensure canvas is properly sized
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Data points and flow lines
    type DataPoint = {
      x: number;
      y: number;
      size: number;
      speed: number;
      color: string;
      direction: number;
      active: boolean;
      delay: number;
    };
    
    // Create data points
    const dataPoints: DataPoint[] = [];
    const lineConnections: [number, number][] = [];
    const colors = ['#60a5fa', '#34d399', '#a78bfa', '#38bdf8'];
    
    // Create a grid of points
    const gridSize = 7;
    const pointsPerRow = 5;
    
    // Create initial points
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < pointsPerRow; j++) {
        // Create points in a grid pattern
        const x = (canvas.width / (pointsPerRow + 1)) * (j + 1);
        const y = (canvas.height / (gridSize + 1)) * (i + 1);
        
        dataPoints.push({
          x,
          y,
          size: 2 + Math.random() * 2,
          speed: 0.2 + Math.random() * 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
          direction: Math.random() > 0.5 ? 1 : -1,
          active: Math.random() > 0.3,
          delay: Math.floor(Math.random() * 100)
        });
      }
    }
    
    // Create connections between points
    for (let i = 0; i < dataPoints.length; i++) {
      // Connect to 2-4 nearby points
      const connections = 2 + Math.floor(Math.random() * 3);
      
      for (let j = 0; j < connections; j++) {
        // Pick a random point to connect to (avoid self-connections)
        let target;
        do {
          target = Math.floor(Math.random() * dataPoints.length);
        } while (target === i);
        
        lineConnections.push([i, target]);
      }
    }
    
    // Animation loop
    let frame = 0;
    let flowParticles: { x: number; y: number; t: number; speed: number; startPoint: number; endPoint: number; progress: number; color: string }[] = [];
    
    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;
      
      // Draw connections
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.2;
      
      for (const [i, j] of lineConnections) {
        if (!(dataPoints[i].active && dataPoints[j].active)) continue;
        
        ctx.beginPath();
        ctx.moveTo(dataPoints[i].x, dataPoints[i].y);
        ctx.lineTo(dataPoints[j].x, dataPoints[j].y);
        
        // Semi-transparent lines
        const gradient = ctx.createLinearGradient(
          dataPoints[i].x, dataPoints[i].y, 
          dataPoints[j].x, dataPoints[j].y
        );
        gradient.addColorStop(0, dataPoints[i].color);
        gradient.addColorStop(1, dataPoints[j].color);
        
        ctx.strokeStyle = gradient;
        ctx.stroke();
      }
      
      // Draw data points
      ctx.globalAlpha = 1;
      dataPoints.forEach((point, idx) => {
        // Skip points in delay
        if (frame < point.delay) return;
        
        if (point.active) {
          // Pulse effect
          const pulseSize = point.size + Math.sin(frame * 0.05 + idx) * 1;
          
          // Glow effect
          const glow = ctx.createRadialGradient(
            point.x, point.y, 0,
            point.x, point.y, pulseSize * 3
          );
          glow.addColorStop(0, point.color);
          glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
          
          ctx.beginPath();
          ctx.fillStyle = glow;
          ctx.arc(point.x, point.y, pulseSize * 3, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw point
          ctx.beginPath();
          ctx.fillStyle = point.color;
          ctx.arc(point.x, point.y, pulseSize, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      
      // Generate new flow particles occasionally
      if (frame % 15 === 0) {
        const validConnections = lineConnections.filter(([i, j]) => 
          dataPoints[i].active && dataPoints[j].active);
        
        if (validConnections.length > 0) {
          const connectionIdx = Math.floor(Math.random() * validConnections.length);
          const [startPoint, endPoint] = validConnections[connectionIdx];
          
          flowParticles.push({
            x: dataPoints[startPoint].x,
            y: dataPoints[startPoint].y,
            t: 0,
            speed: 0.02 + Math.random() * 0.02,
            startPoint,
            endPoint,
            progress: 0,
            color: dataPoints[startPoint].color
          });
        }
      }
      
      // Update and draw flow particles
      flowParticles = flowParticles.filter(particle => {
        // Update particle position
        particle.progress += particle.speed;
        
        if (particle.progress >= 1) return false;
        
        const startX = dataPoints[particle.startPoint].x;
        const startY = dataPoints[particle.startPoint].y;
        const endX = dataPoints[particle.endPoint].x;
        const endY = dataPoints[particle.endPoint].y;
        
        particle.x = startX + (endX - startX) * particle.progress;
        particle.y = startY + (endY - startY) * particle.progress;
        
        // Draw particle
        ctx.beginPath();
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 1 - Math.abs(particle.progress - 0.5) * 2; // Fade in/out
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fill();
        
        return true;
      });
      
      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30"
    />
  );
};

export default DataFlowAnimation;
