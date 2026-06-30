'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const nodes = [
  { x: 7, y: 18, s: 3 },
  { x: 18, y: 34, s: 2 },
  { x: 31, y: 16, s: 4 },
  { x: 43, y: 42, s: 2 },
  { x: 56, y: 24, s: 3 },
  { x: 69, y: 37, s: 2 },
  { x: 82, y: 19, s: 4 },
  { x: 91, y: 48, s: 2 },
  { x: 13, y: 72, s: 3 },
  { x: 34, y: 81, s: 2 },
  { x: 51, y: 66, s: 4 },
  { x: 74, y: 78, s: 3 },
  { x: 88, y: 69, s: 2 },
];

const links = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [1, 8],
  [3, 10],
  [8, 9],
  [9, 10],
  [10, 11],
  [11, 12],
  [5, 11],
];

export function NeuralBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 45, damping: 22, mass: 0.6 });
  const smoothY = useSpring(mouseY, { stiffness: 45, damping: 22, mass: 0.6 });
  const driftX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const driftY = useTransform(smoothY, [-1, 1], [-14, 14]);

  useEffect(() => {
    function onPointerMove(event: PointerEvent) {
      mouseX.set((event.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((event.clientY / window.innerHeight - 0.5) * 2);
    }

    window.addEventListener('pointermove', onPointerMove);
    return () => window.removeEventListener('pointermove', onPointerMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(61,126,255,0.18),transparent_34rem),radial-gradient(circle_at_78%_18%,rgba(114,103,255,0.12),transparent_28rem),radial-gradient(circle_at_52%_82%,rgba(87,216,255,0.13),transparent_30rem)]" />
      <div className="animate-shimmer absolute -top-1/3 left-1/4 h-[150vh] w-32 rotate-12 bg-gradient-to-b from-transparent via-cyan-200/10 to-transparent blur-2xl" />
      <div className="animate-particle-rise absolute left-[12%] top-[18%] h-1.5 w-1.5 rounded-full bg-cyan-200/50 shadow-[0_0_18px_rgba(87,216,255,0.85)]" />
      <div className="animate-particle-rise absolute left-[78%] top-[31%] h-1 w-1 rounded-full bg-blue-200/45 shadow-[0_0_16px_rgba(61,126,255,0.8)] [animation-delay:2s]" />
      <div className="animate-particle-rise absolute left-[58%] top-[76%] h-1.5 w-1.5 rounded-full bg-violet-200/35 shadow-[0_0_18px_rgba(114,103,255,0.65)] [animation-delay:4s]" />
      <motion.div style={{ x: driftX, y: driftY }} className="neural-grid animate-drift absolute -inset-20 opacity-80" />
      <motion.svg
        style={{ x: driftX, y: driftY }}
        className="absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="neural-line" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#57D8FF" stopOpacity="0.18" />
            <stop offset="0.55" stopColor="#3D7EFF" stopOpacity="0.34" />
            <stop offset="1" stopColor="#7267FF" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        {links.map(([from, to]) => (
          <motion.line
            key={`${from}-${to}`}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            stroke="url(#neural-line)"
            strokeWidth="0.12"
            initial={{ pathLength: 0.35, opacity: 0.28 }}
            animate={{ pathLength: [0.35, 1, 0.35], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 12 + from, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
        {nodes.map((node, index) => (
          <motion.circle
            key={`${node.x}-${node.y}`}
            cx={node.x}
            cy={node.y}
            r={node.s / 10}
            fill="#57D8FF"
            initial={{ opacity: 0.28, scale: 0.8 }}
            animate={{ opacity: [0.25, 0.72, 0.25], scale: [0.8, 1.35, 0.8] }}
            transition={{ duration: 7 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </motion.svg>
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent,rgba(255,255,255,0.045)_42%,transparent_58%)] opacity-50" />
    </div>
  );
}
