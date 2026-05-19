import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

import backgroundTrack from '../assets/Voicy_Erika EARRAPE.mp3';

export default function Soundscape() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const ensureAudio = () => {
    if (audioRef.current) return audioRef.current;
    const audio = new Audio(backgroundTrack);
    audio.loop = true;
    // Default to a safer volume; user still controls system volume.
    audio.volume = 0.18;
    audioRef.current = audio;
    return audio;
  };

  const toggleSound = async () => {
    const audio = ensureAudio();

    if (!isPlaying) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (e) {
        // Some browsers block playback if they don't consider it a user gesture.
        // Keeping state off avoids showing "playing" while silent.
        setIsPlaying(false);
      }
      return;
    }

    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        try {
          audioRef.current.pause();
          audioRef.current.src = '';
          audioRef.current.load();
        } catch (e) {}
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
