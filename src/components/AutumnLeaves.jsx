import React, { useMemo } from 'react';

const LEAF_SHAPES = [
  'M12 2C8 8 2 10 2 16c0 4 3 8 10 10 7-2 10-6 10-10 0-6-6-8-10-14z',
  'M10 0C6 6 0 8 0 14c0 5 4 9 10 11 6-2 10-6 10-11 0-6-6-8-10-14z',
  'M8 1C5 5 1 7 1 12c0 4 3 7 7 9 4-2 7-5 7-9 0-5-4-7-7-11z',
];

const COLORS = [
  '#b73a3a', '#c45c3a', '#d4783a', '#b8945a',
  '#8a6936', '#d96a6a', '#e8a84a', '#a63d2f',
];

export default function AutumnLeaves({ count = 52 }) {
  const leaves = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 14}s`,
      duration: `${9 + Math.random() * 16}s`,
      size: `${16 + Math.random() * 26}px`,
      drift: `${-50 + Math.random() * 100}px`,
      spin: `${200 + Math.random() * 600}deg`,
      opacity: 0.18 + Math.random() * 0.22,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      shape: LEAF_SHAPES[i % LEAF_SHAPES.length],
      blur: Math.random() > 0.8 ? '0.8px' : '0px',
    }));
  }, [count]);

  return (
    <div className="autumn-leaves-layer" aria-hidden="true">
      {leaves.map((leaf) => (
        <span
          key={leaf.id}
          className="autumn-leaf"
          style={{
            left: leaf.left,
            width: leaf.size,
            height: leaf.size,
            opacity: leaf.opacity,
            filter: `blur(${leaf.blur}) drop-shadow(0 2px 4px rgba(90,40,10,0.25))`,
            animationDelay: leaf.delay,
            animationDuration: leaf.duration,
            '--leaf-drift': leaf.drift,
            '--leaf-spin': leaf.spin,
          }}
        >
          <svg viewBox="0 0 24 28" fill={leaf.color}>
            <path d={leaf.shape} />
          </svg>
        </span>
      ))}
    </div>
  );
}

