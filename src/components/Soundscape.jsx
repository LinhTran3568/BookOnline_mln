import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function Soundscape() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  
  // Audio Nodes refs to clean up or adjust
  const filterNodeRef = useRef(null);
  const masterGainRef = useRef(null);
  const synthIntervalRef = useRef(null);
  const oscNodesRef = useRef([]);

  const toggleSound = () => {
    if (!isPlaying) {
      startSynth();
    } else {
      stopSynth();
    }
  };

  const startSynth = () => {
    try {
      // 1. Initialize audio context
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      
      const ctx = audioCtxRef.current;
      
      // Resume if suspended (browser security policy)
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // 2. Master Gain (for smooth volume envelopes)
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, ctx.currentTime);
      // Fade in master volume to avoid clicks
      masterGain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 2.0);
      
      // 3. Low Pass Filter (adds warmth and space feeling)
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(350, ctx.currentTime);
      filter.Q.setValueAtTime(1.0, ctx.currentTime);
      
      // 4. Delay / Echo (creates depth)
      const delay = ctx.createDelay(1.0);
      delay.delayTime.setValueAtTime(0.5, ctx.currentTime);
      const delayFeedback = ctx.createGain();
      delayFeedback.gain.setValueAtTime(0.4, ctx.currentTime);

      // Connect delay loop
      delay.connect(delayFeedback);
      delayFeedback.connect(delay);
      
      // Connect nodes: Synth -> Filter -> MasterGain -> Destination
      // And: Filter -> Delay -> MasterGain -> Destination
      filter.connect(masterGain);
      filter.connect(delay);
      delay.connect(masterGain);
      masterGain.connect(ctx.destination);

      masterGainRef.current = masterGain;
      filterNodeRef.current = filter;

      // 5. Procedural LFO to modulate the filter frequency (create "wind" or "breathing" effect)
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.08, ctx.currentTime); // 0.08 Hz (very slow)
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(200, ctx.currentTime); // Modulate by +/- 200Hz

      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      lfo.start();
      oscNodesRef.current.push(lfo);

      // 6. Base Drone Synthesizer (Lush, minor-seventh space chords)
      // C2 (65.41 Hz), G2 (98.00 Hz), Eb3 (155.56 Hz), Bb3 (233.08 Hz)
      const droneNotes = [65.41, 98.00, 155.56, 233.08];
      
      droneNotes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        
        // Soft triangle wave for clean warmth
        osc.type = idx % 2 === 0 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        
        // Add subtle detune for stereo-like thickness
        osc.detune.setValueAtTime((Math.random() - 0.5) * 15, ctx.currentTime);
        
        // Low amplitude per oscillator
        oscGain.gain.setValueAtTime(0.05, ctx.currentTime);
        
        // Connect osc to filter
        osc.connect(oscGain);
        oscGain.connect(filter);
        osc.start();
        
        oscNodesRef.current.push(osc);
      });

      // 7. Ambient Stardust Twinkles (random high notes playing in the background)
      const starNotes = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50]; // C5, D5, E5, G5, A5, C6
      
      const playStardust = () => {
        if (!isPlaying && masterGainRef.current === null) return;
        
        const noteFreq = starNotes[Math.floor(Math.random() * starNotes.length)];
        const starOsc = ctx.createOscillator();
        const starGain = ctx.createGain();
        
        starOsc.type = 'sine';
        starOsc.frequency.setValueAtTime(noteFreq, ctx.currentTime);
        
        // Quick fade-in, slow fade-out
        starGain.gain.setValueAtTime(0, ctx.currentTime);
        starGain.gain.linearRampToValueAtTime(0.012, ctx.currentTime + 0.1);
        starGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.5);
        
        // Connect to delay/filter for space feel
        starOsc.connect(starGain);
        starGain.connect(filter);
        
        starOsc.start();
        starOsc.stop(ctx.currentTime + 4.0);
      };

      // Play stardust twinkle every 2-4 seconds
      synthIntervalRef.current = setInterval(() => {
        playStardust();
      }, 3000 + Math.random() * 2000);

      setIsPlaying(true);
    } catch (e) {
      console.warn("Failed to start procedural audio:", e);
    }
  };

  const stopSynth = () => {
    // Fade out master volume
    if (masterGainRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      masterGainRef.current.gain.cancelScheduledValues(ctx.currentTime);
      masterGainRef.current.gain.setValueAtTime(masterGainRef.current.gain.value, ctx.currentTime);
      masterGainRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.5);
    }

    // Clear interval
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }

    // Stop and clear all oscillators after fade-out
    setTimeout(() => {
      oscNodesRef.current.forEach(osc => {
        try { osc.stop(); } catch (e) {}
      });
      oscNodesRef.current = [];
      
      masterGainRef.current = null;
      filterNodeRef.current = null;
      setIsPlaying(false);
    }, 1600);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (synthIntervalRef.current) clearInterval(synthIntervalRef.current);
      oscNodesRef.current.forEach(osc => {
        try { osc.stop(); } catch (e) {}
      });
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div className="ambient-player ui-interactive">
      <button className="sound-toggle" onClick={toggleSound} title={isPlaying ? "Tắt âm thanh" : "Bật âm thanh"}>
        {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>
      <div className="sound-visualizer">
        <span className={`sound-bar ${isPlaying ? 'playing' : ''}`}></span>
        <span className={`sound-bar ${isPlaying ? 'playing' : ''}`}></span>
        <span className={`sound-bar ${isPlaying ? 'playing' : ''}`}></span>
        <span className={`sound-bar ${isPlaying ? 'playing' : ''}`}></span>
        <span className={`sound-bar ${isPlaying ? 'playing' : ''}`}></span>
      </div>
    </div>
  );
}
