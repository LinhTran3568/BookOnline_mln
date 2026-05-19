import React from 'react';
import { GraduationCap } from 'lucide-react';
import Soundscape from './Soundscape';

export default function Header({ activeChapter, userChoices, scrollToChapter }) {
  const getPhilosophyInsight = () => {
    let score = 10;
    if (activeChapter >= 1) score += 20;
    if (userChoices.cvChoice) score += 10;
    if (activeChapter >= 2) score += 20;
    if (activeChapter >= 3) score += 20;
    if (userChoices.analysisChoice) score += 10;
    if (activeChapter >= 5) score = 100;
    else if (activeChapter >= 4) score = 90;
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
          scrollToChapter(0);
        }}
      >
        <span>DIALECTICA</span>
        <span className="heart">♦</span>
        <span className="italic">academy</span>
      </a>

      <div className="top-bar__hud hide-mobile">
        <div className="hud-pill">
          <GraduationCap size={13} style={{ color: 'var(--rose)' }} />
          <span>Nhận thức</span>
          <strong>{getPhilosophyInsight()}%</strong>
        </div>
        {choiceLabel && (
          <div className="hud-pill hud-pill--gold" title={`Quan điểm: ${choiceLabel}`}>
            <span>Quan điểm</span>
            <strong>{choiceLabel}</strong>
          </div>
        )}
      </div>

      <Soundscape />
    </header>
  );
}

