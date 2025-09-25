// src/components/VantaBackground.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

type VantaEffectName = 'net' | 'globe';

interface VantaBackgroundProps {
  children: React.ReactNode;
  effect: VantaEffectName;
}

export default function VantaBackground({ children, effect }: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    let canceled = false;

    const loadEffect = async () => {
      if (vantaEffect) vantaEffect.destroy();

      let effectInstance: any;

      if (effect === 'net') {
        const NET = await import('vanta/dist/vanta.net.min');
        if (!canceled) {
          effectInstance = NET.default({
            el: vantaRef.current!,
            THREE,
            color: 0x773fff,
            backgroundColor: 0x3c1532,
          });
          setVantaEffect(effectInstance);
        }
      }

      if (effect === 'globe') {
        const GLOBE = await import('vanta/dist/vanta.globe.min');
        if (!canceled) {
          effectInstance = GLOBE.default({
            el: vantaRef.current!,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xdaf0,
            color2: 0x289,
            backgroundColor: 0x0,
          });
          setVantaEffect(effectInstance);
        }
      }
    };

    loadEffect();

    return () => {
      canceled = true;
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [effect]);

  return (
    <div ref={vantaRef} style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
