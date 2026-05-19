import React from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';
import Soundscape from './Soundscape';

export default function Header({ activeChapter, userChoices, scrollToChapter }) {
  
  // Calculate philosophy understanding level based on scroll and interactive inputs
  const getPhilosophyInsight = () => {
    let score = 10;
    if (activeChapter >= 1) score += 20; // Chapter 1: CVs Analysis
    if (userChoices.cvChoice) score += 10;
    if (activeChapter >= 2) score += 20; // Chapter 2: Interviews
    if (activeChapter >= 3) score += 20; // Chapter 3: Conflicts & Outrage
    if (userChoices.analysisChoice) score += 10;
    if (activeChapter >= 4) score = 100; // Chapter 4: Synthesis & Life Lessons
    return score;
  };

  return (
    <header className="nav-header">
      {/* Philosophical branding logo */}
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

      {/* Philosophy Insight Meter HUD */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(26, 21, 37, 0.03)',
          border: '1px solid var(--line)',
          padding: '6px 14px',
          borderRadius: '0px',
          fontSize: '0.75rem',
          letterSpacing: '1px',
          fontFamily: 'var(--font-roman)',
          color: 'var(--ink-soft)'
        }}
      >
        <GraduationCap size={13} style={{ color: 'var(--rose)' }} />
        <span>Nhận thức Biện chứng: </span>
        <strong style={{ 
          color: 'var(--rose)',
        }}>
          {getPhilosophyInsight()}%
        </strong>
      </div>

      {/* Choice summary pill */}
      {(userChoices.cvChoice || userChoices.analysisChoice) && (
        <div 
          className="hide-mobile"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(184, 148, 90, 0.08)',
            border: '1px solid var(--gold)',
            padding: '6px 14px',
            borderRadius: '0px',
            fontSize: '0.72rem',
            letterSpacing: '1px',
            fontFamily: 'var(--font-roman)',
            color: 'var(--gold-deep)'
          }}
        >
          <span>QUAN ĐIỂM: </span>
          <span style={{ color: 'var(--ink)' }}>
            {userChoices.cvChoice === 'content' ? 'BẢN CHẤT > HÌNH THỨC' : userChoices.cvChoice === 'form' ? 'HÌNH THỨC HẤP DẪN' : ''}
            {userChoices.analysisChoice && ' • '}
            {userChoices.analysisChoice === 'dialectics' ? 'BIỆN CHỨNG DUY VẬT' : userChoices.analysisChoice === 'subjective' ? 'Ý CHÍ CHỦ QUAN' : ''}
          </span>
        </div>
      )}
    </header>
  );
}
