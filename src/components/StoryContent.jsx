import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layers, Search, Shuffle, FileText, ArrowDown, RefreshCw, Eye } from 'lucide-react';

// Import our beautiful AI generated illustrations & authentic Marxist-Leninist portraits
import studentA from '../assets/student_a.png';
import studentB from '../assets/student_b.png';
import dialectics from '../assets/dialectics.png';
import trio from '../assets/trio.png';
import marxEngels from '../assets/marx_engels.png';
import lenin from '../assets/lenin.png';

export default function StoryContent({
  activeChapter,
  userChoices,
  onMakeChoice,
  onOpenLore,
  scrollToChapter
}) {
  
  // Premium smooth horizontal slide transition variants
  const slideVariants = {
    hidden: { opacity: 0, x: 120, scale: 0.98 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { duration: 0.75, ease: [0.25, 1, 0.5, 1] } // Decelerating horizontal glide
    },
    exit: { 
      opacity: 0, 
      x: -120, 
      scale: 0.98,
      transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] }
    }
  };

  return (
    <div className="ui-layer" style={{ width: '100%', height: '100%', position: 'relative' }}>
      <AnimatePresence mode="wait">
        
        {/* CHAPTER 0: HERO SECTION - INTRO SLIDE */}
        {activeChapter === 0 && (
          <motion.section
            key="chapter-0"
            className="story-section align-center"
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div style={{ maxWidth: '900px', display: 'flex', flexDirection: 'column', alignItems: 'center', pointerEvents: 'auto' }}>
              {/* Trio Emblem at the very top of the presentation framed like a gallery portrait */}
              <img 
                src={trio} 
                alt="Các Mác, Phờ-ri-đrích Ăng-ghen, V.I. Lê-nin" 
                style={{ 
                  width: '100%', 
                  maxWidth: '360px', 
                  borderRadius: '0px', 
                  border: '1px solid var(--line)', 
                  boxShadow: '0 8px 24px rgba(26, 21, 37, 0.05)', 
                  backgroundColor: '#fff', 
                  marginBottom: '25px',
                  padding: '6px'
                }} 
              />

              <div className="chapter-badge">
                BÀI THUYẾT TRÌNH PHÂN TÍCH CHUYÊN SÂU • TRIẾT HỌC MÁC - LÊNIN
              </div>
              
              <h1
                className="cinzel"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.8rem)',
                  fontWeight: 900,
                  letterSpacing: '4px',
                  marginBottom: '15px',
                  lineHeight: '1.25',
                  background: 'linear-gradient(135deg, var(--ink) 0%, var(--rose) 60%, var(--gold-deep) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                BIỆN CHỨNG LAO ĐỘNG
              </h1>
              
              <h3
                className="cinzel"
                style={{
                  fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
                  color: 'var(--rose)',
                  letterSpacing: '3px',
                  marginBottom: '30px',
                  fontWeight: 700,
                  textTransform: 'uppercase'
                }}
              >
                Ứng Dụng Các Cặp Phạm Trù Cơ Bản Giải Mã Bài Toán Tuyển Dụng A & B
              </h3>
              
              <div
                style={{
                  background: 'var(--mist)',
                  border: '1px solid var(--line)',
                  borderRadius: '0px',
                  padding: '24px 32px',
                  marginBottom: '35px',
                  maxWidth: '800px',
                  textAlign: 'left',
                  boxShadow: '0 8px 24px rgba(26, 21, 37, 0.03)'
                }}
              >
                <p style={{ color: 'var(--ink)', fontSize: '1.02rem', lineHeight: '1.7', marginBottom: '12px', fontWeight: 500 }}>
                  <strong>Tình huống thực tiễn:</strong> Sinh viên A tốt nghiệp loại Giỏi, CV lộng lẫy đầy từ khóa đao to búa lớn nhưng bị loại từ vòng đầu. Sinh viên B bằng Khá, CV đơn giản nhưng trúng tuyển nhờ trực tiếp sửa lỗi hệ thống thực tế của công ty. A ấm ức quy chụp B "ăn may" hoặc có "người quen nâng đỡ".
                </p>
                <p style={{ color: 'var(--ink-soft)', fontSize: '0.88rem', margin: 0, borderTop: '1px solid var(--line)', paddingTop: '10px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                  🎯 Phương pháp luận: Áp dụng các cặp phạm trù của Phép biện chứng duy vật nhằm bác bỏ tư duy siêu hình của A và chỉ ra chân lý khách quan.
                </p>
              </div>

              <button
                className="btn-cosmic ui-interactive"
                onClick={() => scrollToChapter(1)}
              >
                <Sparkles size={14} /> BẮT ĐẦU TRÌNH CHIẾU THUYẾT TRÌNH
              </button>
            </div>
          </motion.section>
        )}

        {/* CHAPTER 1: RESUMES - CONTENT VS FORM */}
        {activeChapter === 1 && (
          <motion.section
            key="chapter-1"
            className="story-section align-center"
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="narrative-card">
              <div className="slide-layout">
                <div className="slide-text">
                  <span className="chapter-badge">Slide I • Cặp phạm trù Nội dung & Hình thức</span>
                  <h2>Vỏ Hồ Sơ Hào Nhoáng Vs. Năng Lực Thực Chất</h2>
                  <p>
                    Sự đối lập biện chứng thể hiện ngay từ cấu trúc hồ sơ ứng tuyển của hai ứng viên:
                  </p>
                  <ul style={{ paddingLeft: '20px', marginBottom: '20px', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    <li style={{ marginBottom: '8px' }}>
                      🔴 <strong>Hồ sơ của A:</strong> Bằng loại Giỏi, CV màu sắc sặc sỡ, lạm dụng buzzwords <em>"Leadership"</em>, <em>"Proactive"</em>. Đây là sự thổi phồng của <strong>Hình thức (Form)</strong> sáo rỗng.
                    </li>
                    <li style={{ marginBottom: '8px' }}>
                      🔵 <strong>Hồ sơ của B:</strong> Bằng loại Khá, CV đơn sắc tối giản nhưng liệt kê chi tiết các dòng code và dự án phần mềm thực chiến. Đây là sự chuẩn bị của <strong>Nội dung (Content)</strong> vững chắc.
                    </li>
                  </ul>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px', borderTop: '1px solid rgba(15,23,42,0.06)', paddingTop: '15px' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Tư liệu Giáo trình Triết học:</span>
                    <button 
                      className="btn-cosmic ui-interactive" 
                      style={{ padding: '6px 12px', fontSize: '0.72rem', borderRadius: '8px' }}
                      onClick={() => onOpenLore('contentForm')}
                    >
                      <Eye size={12} /> Xem phân tích Nội dung & Hình thức
                    </button>
                  </div>

                  <div className="choices-container">
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-color)', marginBottom: '4px' }}>
                      Đánh giá của bạn về mối quan hệ giữa CV và năng lực?
                    </span>
                    <button 
                      className={`btn-choice ui-interactive ${userChoices.cvChoice === 'form' ? 'selected' : ''}`}
                      onClick={() => onMakeChoice('cvChoice', 'form')}
                    >
                      <span>CV đẹp là lợi thế tuyệt đối (Hình thức quyết định)</span>
                      <Layers size={14} style={{ color: 'var(--color-primary)' }} />
                    </button>
                    <button 
                      className={`btn-choice ui-interactive ${userChoices.cvChoice === 'content' ? 'selected' : ''}`}
                      onClick={() => onMakeChoice('cvChoice', 'content')}
                    >
                      <span>Kiến thức thực chất là cốt lõi (Nội dung quyết định)</span>
                      <Layers size={14} style={{ color: 'var(--color-secondary)' }} />
                    </button>
                  </div>
                  
                  {userChoices.cvChoice && (
                    <div style={{ marginTop: '18px' }}>
                      <button className="btn-cosmic ui-interactive" onClick={() => scrollToChapter(2)}>
                        Slide II: Vòng phỏng vấn thực tế <ArrowDown size={14} />
                      </button>
                    </div>
                  )}
                </div>

                {/* Philosophical Guide: Marx & Engels */}
                <div className="slide-media">
                  <img src={marxEngels} alt="Mác và Ăng-ghen" className="slide-image" style={{ border: '2px solid rgba(124, 58, 237, 0.15)', padding: '4px' }} />
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-color)', marginTop: '12px', fontStyle: 'italic', textAlign: 'center', fontWeight: 600, padding: '0 10px', lineHeight: '1.4' }}>
                    "Hình thức của một sự vật chỉ có giá trị thực sự khi nó là sự biểu hiện chân thực của một nội dung biện chứng phong phú bên trong." <br/>
                    <strong style={{ color: 'var(--color-primary)' }}>— C. Mác & F. Ăng-ghen</strong>
                  </span>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* CHAPTER 2: THE INTERVIEW - ESSENCE VS PHENOMENON / POSSIBILITY VS REALITY */}
        {activeChapter === 2 && (
          <motion.section
            key="chapter-2"
            className="story-section align-center"
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="narrative-card">
              <div className="slide-layout">
                <div className="slide-text">
                  <span className="chapter-badge">Slide II • Khả năng & Hiện thực | Bản chất & Hiện tượng</span>
                  <h2>Phòng Phỏng Vấn: Lý Thuyết Suông Đối Mặt Thực Chiến</h2>
                  <p>
                    Thử thách sửa mã nguồn hệ thống của tập đoàn lớn đã lập tức phân định rõ ranh giới giữa hai ứng viên:
                  </p>
                  <ul style={{ paddingLeft: '20px', marginBottom: '20px', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    <li style={{ marginBottom: '8px' }}>
                      🔴 <strong>Hành vi của A:</strong> Chỉ biết trích dẫn lý thuyết tĩnh từ sách vở hàn lâm. Tấm bằng loại Giỏi chỉ dừng lại ở <strong>Khả năng (Possibility)</strong> chứ chưa được kiểm chứng trong <strong>Hiện thực (Reality)</strong>.
                    </li>
                    <li style={{ marginBottom: '8px' }}>
                      🔵 <strong>Hành vi của B:</strong> Trực tiếp bóc tách mã lỗi, viết code gỡ nghẽn dữ liệu thành công. B đã biến khả năng tiềm năng thành **Hiện thực hành động** đem lại giá trị.
                    </li>
                  </ul>

                  <p style={{ color: 'var(--color-secondary)', fontWeight: 700, borderLeft: '3px solid var(--color-secondary)', paddingLeft: '10px', fontSize: '0.88rem', marginBottom: '15px' }}>
                    ⚖️ ĐỊNH HƯỚNG TRIẾT HỌC: Bằng Giỏi (Hiện tượng) không đại diện cho Trình độ thực tế (Bản chất). Nhà tuyển dụng chọn Bản chất thay vì Hiện tượng.
                  </p>

                  <div style={{ display: 'flex', gap: '10px', borderTop: '1px solid rgba(15,23,42,0.06)', paddingTop: '15px' }}>
                    <button 
                      className="btn-cosmic ui-interactive" 
                      style={{ padding: '6px 12px', fontSize: '0.72rem', borderRadius: '8px' }}
                      onClick={() => onOpenLore('possibilityReality')}
                    >
                      <FileText size={12} /> Khả năng & Hiện thực
                    </button>
                    <button 
                      className="btn-cosmic ui-interactive" 
                      style={{ padding: '6px 12px', fontSize: '0.72rem', borderRadius: '8px' }}
                      onClick={() => onOpenLore('essencePhenomenon')}
                    >
                      <Search size={12} /> Bản chất & Hiện tượng
                    </button>
                  </div>

                  <div style={{ marginTop: '18px' }}>
                    <button className="btn-cosmic ui-interactive" onClick={() => scrollToChapter(3)}>
                      Slide III: Phân tích sự phẫn nộ của A <ArrowDown size={14} />
                    </button>
                  </div>
                </div>

                {/* Graphical representation: Student B solving live systems */}
                <div className="slide-media">
                  <img src={studentB} alt="Sinh viên B sửa hệ thống" className="slide-image" style={{ border: '2px solid rgba(14, 165, 233, 0.15)', padding: '4px' }} />
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-color)', marginTop: '12px', fontStyle: 'italic', textAlign: 'center', fontWeight: 600, padding: '0 10px', lineHeight: '1.4' }}>
                    "Từ trực quan sinh động đến tư duy trừu tượng, và từ tư duy trừu tượng đến thực tiễn - đó là con đường biện chứng của sự nhận thức chân lý khách quan." <br/>
                    <strong style={{ color: 'var(--color-secondary)' }}>— V.I. Lê-nin</strong>
                  </span>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* CHAPTER 3: THE OUTRAGE - NECESSITY VS CHANCE / CAUSE VS EFFECT */}
        {activeChapter === 3 && (
          <motion.section
            key="chapter-3"
            className="story-section align-center"
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="narrative-card">
              <div className="slide-layout">
                <div className="slide-text">
                  <span className="chapter-badge">Slide III • Cặp phạm trù Tất nhiên & Ngẫu nhiên</span>
                  <h2>Sự Phẫn Nộ Siêu Hình Và Ngụy Biện "Ăn May"</h2>
                  <p>
                    Thất bại khiến A cay cú. A quy chụp rằng B trúng tuyển chỉ do <strong>"may mắn" (Ngẫu nhiên)</strong> hoặc do **"quan hệ nâng đỡ"**.
                  </p>
                  <p>
                    Nhận thức này bộc lộ <strong>phương pháp tư duy siêu hình</strong> của A. Triết học Mác - Lênin chỉ ra rằng: Cái ngẫu nhiên bao giờ cũng là hình thức biểu hiện của một Cái tất nhiên ẩn giấu phía sau.
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px', borderTop: '1px solid rgba(15,23,42,0.06)', paddingTop: '15px' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Tài liệu Phân tích Tất nhiên & Ngẫu nhiên:</span>
                    <button 
                      className="btn-cosmic ui-interactive" 
                      style={{ padding: '6px 12px', fontSize: '0.72rem', borderRadius: '8px' }}
                      onClick={() => onOpenLore('necessityChance')}
                    >
                      <Shuffle size={12} /> Bóc tách lý thuyết Tất nhiên
                    </button>
                  </div>

                  <div className="choices-container">
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-color)', marginBottom: '4px' }}>
                      Chọn hướng đánh giá để đưa vào slide báo cáo:
                    </span>
                    <button 
                      className={`btn-choice ui-interactive ${userChoices.analysisChoice === 'subjective' ? 'selected' : ''}`}
                      onClick={() => onMakeChoice('analysisChoice', 'subjective')}
                    >
                      <span>Chấp nhận lập luận của A (B chỉ gặp may ngẫu nhiên)</span>
                      <Shuffle size={14} style={{ color: 'var(--color-primary)' }} />
                    </button>
                    <button 
                      className={`btn-choice ui-interactive ${userChoices.analysisChoice === 'dialectics' ? 'selected' : ''}`}
                      onClick={() => onMakeChoice('analysisChoice', 'dialectics')}
                    >
                      <span>Lập luận biện chứng (Quy luật chọn lọc năng lực là Tất nhiên)</span>
                      <Shuffle size={14} style={{ color: 'var(--color-secondary)' }} />
                    </button>
                  </div>

                  {userChoices.analysisChoice && (
                    <div style={{ marginTop: '18px' }}>
                      <button className="btn-cosmic ui-interactive" onClick={() => scrollToChapter(4)}>
                        Slide IV: Slide Tổng Kết Thuyết Trình Nhóm <ArrowDown size={14} />
                      </button>
                    </div>
                  )}
                </div>

                {/* Philosophical Guide: Vladimir Lenin */}
                <div className="slide-media">
                  <img src={lenin} alt="V.I. Lê-nin" className="slide-image" style={{ border: '2px solid rgba(217, 119, 6, 0.15)', padding: '4px' }} />
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-color)', marginTop: '12px', fontStyle: 'italic', textAlign: 'center', fontWeight: 600, padding: '0 10px', lineHeight: '1.4' }}>
                    "Cái ngẫu nhiên chỉ là vỏ bọc bên ngoài của một Tất nhiên khách quan đang tự vạch đường đi cho mình thông qua vô số biến cố ngẫu nhiên khác." <br/>
                    <strong style={{ color: 'var(--color-accent)' }}>— V.I. Lê-nin</strong>
                  </span>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* CHAPTER 4: SYNTHESIS - PRESENTATION CONCLUSION SLIDE */}
        {activeChapter === 4 && (
          <motion.section
            key="chapter-4"
            className="story-section align-center"
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="narrative-card">
              <div className="slide-layout">
                <div className="slide-text" style={{ flex: '1.5' }}>
                  <span className="chapter-badge" style={{ color: 'var(--rose)' }}>KẾT LUẬN BÀI BÁO CÁO THUYẾT TRÌNH</span>
                  <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Phương Pháp Luận Biện Chứng Cho Thế Hệ Trẻ</h2>
                  
                  <p style={{ fontSize: '0.92rem', marginBottom: '20px', color: 'var(--ink-soft)' }}>
                    Thông qua case study của A & B, nhóm chúng em tổng kết 4 giải pháp hành động biện chứng thiết thực:
                  </p>

                  <div className="synthesis-grid" style={{ marginBottom: '20px' }}>
                    <div className="synthesis-card">
                      <h5>1. Đồng bộ Nội dung & Hình thức</h5>
                      <p>
                        Bồi đắp năng lực làm việc cốt lõi trước khi trau chuốt CV bóng bẩy. Hình thức đẹp đẽ phải phản ánh trung thực năng lực thực tế.
                      </p>
                    </div>

                    <div className="synthesis-card">
                      <h5>2. Đi sâu Bản chất thay vì Hiện tượng</h5>
                      <p>
                        Bằng cấp chỉ là hiện tượng; năng lực giải quyết khủng hoảng mới là bản chất. Mọi tập đoàn lớn luôn ưu tiên tìm kiếm bản chất.
                      </p>
                    </div>

                    <div className="synthesis-card">
                      <h5>3. Tích lũy Tất nhiên, loại bỏ Ngẫu nhiên</h5>
                      <p>
                        Ngừng dựa dẫm vào vận may (ngẫu nhiên). Năng lực thực chiến được tích lũy bền bỉ sẽ tự định hình kết quả tuyển dụng tất yếu (tất nhiên).
                      </p>
                    </div>

                    <div className="synthesis-card">
                      <h5>4. Hiện thực hóa các Khả năng</h5>
                      <p>
                        Không giữ kiến thức nằm im trên giấy tờ lý thuyết. Hãy áp dụng triệt để lý luận giảng đường để giải quyết bài toán của thực tiễn.
                      </p>
                    </div>
                  </div>

                  <p style={{ fontStyle: 'italic', color: 'var(--ink-soft)', fontSize: '0.88rem', marginBottom: '20px', borderTop: '1px solid var(--line)', paddingTop: '12px', fontWeight: 500 }}>
                    "Thực tiễn là tiêu chuẩn khách quan duy nhất để kiểm tra chân lý." — Đây là bài học tối thượng mà Phép biện chứng duy vật Mác - Lênin truyền tải.
                  </p>

                  <div style={{ display: 'flex', gap: '15px' }}>
                    <button 
                      className="btn-cosmic ui-interactive" 
                      onClick={() => scrollToChapter(0)}
                    >
                      <RefreshCw size={14} /> QUAY LẠI TRANG ĐẦU TIÊN
                    </button>
                  </div>
                </div>

                {/* Widescreen presentation final branding framed like a gallery portrait */}
                <div className="slide-media" style={{ flex: '0.7' }}>
                  <img src={trio} alt="Mác, Ăng-ghen, Lê-nin" className="slide-image" style={{ borderRadius: '0px', border: '1px solid var(--line)', padding: '4px' }} />
                  <span style={{ fontSize: '0.75rem', color: 'var(--ink-soft)', marginTop: '10px', fontStyle: 'italic', textAlign: 'center', lineHeight: '1.4' }}>
                    Học viện Biện chứng Mác - Lênin <br/>
                    <strong>© Bản quyền thuyết trình Nhóm</strong>
                  </span>
                </div>
              </div>
            </div>
          </motion.section>
        )}

      </AnimatePresence>
    </div>
  );
}
