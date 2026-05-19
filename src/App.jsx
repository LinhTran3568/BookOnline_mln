import React, { useState, useEffect } from 'react';
import ThreeCanvas from './components/ThreeCanvas';
import Header from './components/Header';
import StoryContent from './components/StoryContent';
import InteractiveLore from './components/InteractiveLore';
import CustomCursor from './components/CustomCursor';
import Soundscape from './components/Soundscape';
import './App.css';

export default function App() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [userChoices, setUserChoices] = useState({
    cvChoice: null,       // 'form' (A's style) or 'content' (B's style)
    analysisChoice: null   // 'subjective' (A's view) or 'dialectics' (Objective rule)
  });
  const [loreModal, setLoreModal] = useState({
    isOpen: false,
    activeTab: 'contentForm' // 'contentForm', 'essencePhenomenon', 'necessityChance', 'possibilityReality'
  });

  // 1. Gilded Map Sweep transition coordinator
  const scrollToChapter = (chapterId) => {
    if (chapterId === activeChapter) return;
    
    // Activate the slanted golden sweep curtain!
    setTransitioning(true);

    // Midway through the sweep (700ms), update the content behind the curtain
    setTimeout(() => {
      setActiveChapter(chapterId);
      if (chapterId === 0) {
        setUserChoices({
          cvChoice: null,
          analysisChoice: null
        });
      }
    }, 700);

    // Turn off transitioning once the curtain sweeps completely off the screen
    setTimeout(() => {
      setTransitioning(false);
    }, 1450);
  };

  // 2. Make choice callback with snappy transition delay
  const makeChoice = (chapterKey, optionValue) => {
    setUserChoices((prev) => ({
      ...prev,
      [chapterKey]: optionValue
    }));

    // Snappy auto advance after choice selection coordinate with curtain sweep
    setTimeout(() => {
      if (chapterKey === 'cvChoice') {
        scrollToChapter(2);
      } else if (chapterKey === 'analysisChoice') {
        scrollToChapter(4);
      }
    }, 1000);
  };

  // 4. Open artifact history modal
  const openLore = (tabId) => {
    setLoreModal({
      isOpen: true,
      activeTab: tabId
    });
  };

  return (
    <div className="app-container">
      {/* Golden Shimmer Map Curtain Overlay */}
      {transitioning && <div className="transition-curtain-overlay active" />}

      {/* Immersive 3D Canvas Background */}
      <ThreeCanvas activeChapter={activeChapter} userChoices={userChoices} />

      {/* Classic Gilded Greek/Academic Columns Background Overlay */}
      <div className="columns-bg">
        {/* Kingdom Castle Skyline Silhouette stretching across the bottom */}
        <svg className="kingdom-bg" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path d="M0,200 L0,150 L30,150 L30,130 L45,130 L45,150 L70,150 L70,110 L90,90 L110,110 L110,150 L160,150 L160,80 L180,60 L200,80 L200,150 L230,150 L230,140 L245,140 L245,150 L280,150 L280,120 L310,120 L310,150 L340,150 L340,50 L365,20 L390,50 L390,150 L440,150 L440,135 L455,135 L455,150 L490,150 L490,90 L515,65 L540,90 L540,150 L590,150 L590,125 L605,125 L605,150 L640,150 L640,40 L670,10 L700,40 L700,150 L750,150 L750,100 L775,75 L800,100 L800,150 L840,150 L840,130 L855,130 L855,150 L890,150 L890,70 L915,45 L940,70 L940,150 L990,150 L990,120 L1020,120 L1020,150 L1060,150 L1060,30 L1090,0 L1120,30 L1120,150 L1170,150 L1170,95 L1195,70 L1220,95 L1220,150 L1260,150 L1260,135 L1275,135 L1275,150 L1310,150 L1310,80 L1335,55 L1360,80 L1360,150 L1440,150 L1440,200 Z" fill="var(--gold-deep)" opacity="0.10" />
        </svg>

        {/* Elegant Gilded Academic Hammer and Sickle Watermarked Crest */}
        <div className="hammer-sickle-crest">
          <svg viewBox="0 0 100 100">
            {/* Circular Wreath of Wheat ears */}
            <path d="M 25 50 A 25 25 0 0 1 75 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3" />
            <path d="M 20 50 A 30 30 0 0 1 80 50" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
            {/* Hammer */}
            <path d="M 46 62 L 68 40 L 72 44 L 50 66 Z" fill="currentColor" />
            <path d="M 64 36 L 76 48 L 72 52 L 60 40 Z" fill="currentColor" />
            {/* Sickle */}
            <path d="M 32 64 C 32 38, 64 38, 64 54 C 64 48, 42 42, 40 64 Z" fill="currentColor" />
            {/* Star at the top */}
            <polygon points="50,15 53,23 61,23 55,28 57,36 50,31 43,36 45,28 39,23 47,23" fill="currentColor" />
          </svg>
        </div>

        <svg className="column c1" viewBox="0 0 90 360" preserveAspectRatio="none">
          <rect x="5" y="0" width="80" height="20" fill="#e8dec5"/>
          <rect x="0" y="20" width="90" height="12" fill="#d9cfb6"/>
          <g fill="#e8dec5" stroke="#c9bda0" strokeWidth="0.5">
            <rect x="10" y="35" width="6" height="310"/><rect x="22" y="35" width="6" height="310"/><rect x="34" y="35" width="6" height="310"/><rect x="46" y="35" width="6" height="310"/><rect x="58" y="35" width="6" height="310"/><rect x="70" y="35" width="6" height="310"/>
          </g>
          <rect x="0" y="345" width="90" height="15" fill="#d9cfb6"/>
        </svg>
        <svg className="column c2" viewBox="0 0 90 280" preserveAspectRatio="none">
          <rect x="5" y="0" width="80" height="16" fill="#e8dec5"/>
          <rect x="0" y="16" width="90" height="10" fill="#d9cfb6"/>
          <g fill="#e8dec5" stroke="#c9bda0" strokeWidth="0.5">
            <rect x="10" y="28" width="6" height="240"/><rect x="22" y="28" width="6" height="240"/><rect x="34" y="28" width="6" height="240"/><rect x="46" y="28" width="6" height="240"/><rect x="58" y="28" width="6" height="240"/><rect x="70" y="28" width="6" height="240"/>
          </g>
          <rect x="0" y="268" width="90" height="12" fill="#d9cfb6"/>
        </svg>
        <svg className="column c3" viewBox="0 0 90 320" preserveAspectRatio="none">
          <rect x="5" y="0" width="80" height="18" fill="#e8dec5"/>
          <rect x="0" y="18" width="90" height="11" fill="#d9cfb6"/>
          <g fill="#e8dec5" stroke="#c9bda0" strokeWidth="0.5">
            <rect x="10" y="32" width="6" height="275"/><rect x="22" y="32" width="6" height="275"/><rect x="34" y="32" width="6" height="275"/><rect x="46" y="32" width="6" height="275"/><rect x="58" y="32" width="6" height="275"/><rect x="70" y="32" width="6" height="275"/>
          </g>
          <rect x="0" y="307" width="90" height="13" fill="#d9cfb6"/>
        </svg>
        <svg className="column c4" viewBox="0 0 90 240" preserveAspectRatio="none">
          <rect x="5" y="0" width="80" height="14" fill="#e8dec5"/>
          <rect x="0" y="14" width="90" height="9" fill="#d9cfb6"/>
          <g fill="#e8dec5" stroke="#c9bda0" strokeWidth="0.5">
            <rect x="10" y="26" width="6" height="200"/><rect x="22" y="26" width="6" height="200"/><rect x="34" y="26" width="6" height="200"/><rect x="46" y="26" width="6" height="200"/><rect x="58" y="26" width="6" height="200"/><rect x="70" y="26" width="6" height="200"/>
          </g>
          <rect x="0" y="226" width="90" height="11" fill="#d9cfb6"/>
        </svg>
      </div>

      {/* Floating Procedural Audio Player */}
      <Soundscape />

      {/* Custom High-Performance Cursor Tracker */}
      <CustomCursor />

      {/* Glowing Global Header Navigation */}
      <Header 
        activeChapter={activeChapter} 
        userChoices={userChoices} 
        scrollToChapter={scrollToChapter} 
      />

      {/* Interactive Story Timeline HUD (Right side) */}
      <nav className="story-progress-indicator" aria-label="Story chapters timeline">
        {[
          { id: 0, label: 'Khởi đầu' },
          { id: 1, label: 'So sánh CV' },
          { id: 2, label: 'Phòng phỏng vấn' },
          { id: 3, label: 'Ấm ức của A' },
          { id: 4, label: 'Bài học biện chứng' }
        ].map((item) => (
          <button
            key={item.id}
            className={`progress-dot ui-interactive ${activeChapter === item.id ? 'active' : ''}`}
            onClick={() => scrollToChapter(item.id)}
            title={item.label}
            aria-label={`Go to chapter ${item.id}`}
          >
            <span className="progress-dot-label cinzel">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Ambient status indicator (Left-bottom corner) */}
      <div className="sound-indicator">
        <span className="pulse-dot"></span>
        <span className="cinzel" style={{ fontSize: '0.65rem' }}>SYSTEM: PHÂN TÍCH TRIẾT HỌC MÁC-LÊNIN</span>
      </div>

      {/* Main scrolling storytelling layer */}
      <main>
        <StoryContent 
          activeChapter={activeChapter}
          userChoices={userChoices}
          onMakeChoice={makeChoice}
          onOpenLore={openLore}
          scrollToChapter={scrollToChapter}
        />
      </main>

      {/* Lore Artifact Overlay Modal */}
      <InteractiveLore 
        activeTab={loreModal.activeTab}
        isOpen={loreModal.isOpen}
        onClose={() => setLoreModal(prev => ({ ...prev, isOpen: false }))}
        userChoices={userChoices}
      />
    </div>
  );
}
