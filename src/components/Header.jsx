import React from 'react';
import { GraduationCap } from 'lucide-react';
import Soundscape from './Soundscape';

export default function Header({ activeChapter, userChoices, scrollToChapter }) {
  const getPhilosophyInsight = () => {
    let score = 10;
    if (activeChapter >= 1) score += 20;
    if (userChoices.cvChoice) score += 10;
    if (activeChapter >= 2) score += 15;
    if (activeChapter >= 3) score += 15;
    if (activeChapter >= 4) score += 15;
    if (userChoices.analysisChoice) score += 10;
    if (activeChapter >= 7) score = 100;
    else if (activeChapter >= 6) score = 95;
    else if (activeChapter >= 5) score = 90;
    return score;
  };

  const choiceLabel = [
    userChoices.cvChoice === 'content' ? 'Bản chất > Hình thức' : userChoices.cvChoice === 'form' ? 'Hình thức hấp dẫn' : '',
    userChoices.analysisChoice === 'dialectics' ? 'Biện chứng' : userChoices.analysisChoice === 'subjective' ? 'Chủ quan' : '',
  ].filter(Boolean).join(' · ');

  return (
    <header className="top-bar">
      <a
        href="#"
        className="site-logo ui-interactive"
        onClick={(e) => {
          e.preventDefault();
          scrollToChapter(-1);
        }}
      >
        <span>Triết học Mác — Lênin</span>
        <span className="heart">♦</span>
        <span className="italic">Biện chứng duy vật</span>
      </a>

    </header>
  );
}

