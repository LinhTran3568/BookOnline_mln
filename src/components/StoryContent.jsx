import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BookMarked,
  BookOpen,
  Eye,
  FileText,
  Quote,
  Search,
  Sparkles,
  Target,
  Users
} from 'lucide-react';
import CVPreview from './CVPreview';

import coverPoster from '../assets/lenin.jpg';
import studentA from '../assets/linh a.jpg';
import studentB from '../assets/quang gay.jpg';
import dialectics from '../assets/dialectics.png';
import trio from '../assets/trio.png';
import marxEngels from '../assets/marx_engels.png';
import lenin from '../assets/lenin.png';
import heroImg from '../assets/hero.png';
import interviewVideo from '../assets/1805.mp4';

const PAGE_NUMBERS = ['I', 'II', 'III', 'IV', 'V', 'VI'];

function BookSpread({ pageIndex, children }) {
  const showPageNumbers =
    typeof pageIndex === 'number' && pageIndex >= 0 && pageIndex < PAGE_NUMBERS.length;

  return (
    <div className="book-spread">
      {showPageNumbers && (
        <>
          <span className="book-page-number left">— {PAGE_NUMBERS[pageIndex]} —</span>
          <span className="book-page-number right">Triết học Mác-Lênin</span>
        </>
      )}
      <div className="narrative-card">{children}</div>
    </div>
  );
}

export default function StoryContent({
  activeChapter,
  onOpenLore,
  scrollToChapter
}) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef(null);

  const slideVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] }
    },
    exit: {
      opacity: 0,
      y: -16,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  useEffect(() => {
    if (!isVideoOpen) return;
    const videoEl = videoRef.current;
    if (!videoEl) return;
    const playPromise = videoEl.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        // Autoplay can be blocked; user can press play.
      });
    }
  }, [isVideoOpen]);

  return (
    <div className="ui-layer" style={{ width: '100%', position: 'relative' }}>
      <AnimatePresence mode="wait">

        {activeChapter === -1 && (
          <motion.section
            key="chapter-cover"
            className="story-section align-center"
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <BookSpread pageIndex={-1}>
              <div
                className="ui-interactive"
                role="button"
                tabIndex={0}
                onClick={() => scrollToChapter(0)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    scrollToChapter(0);
                  }
                }}
                aria-label="Mở sách"
                style={{
                  position: 'relative',
                  textAlign: 'center',
                  margin: '-40px -48px -50px',
                  padding: '40px 48px 50px',
                  minHeight: 'min(74vh, 720px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                <img src={coverPoster} alt="" className="cover-full-bg" aria-hidden="true" />

                <div className="cover-overlay">
                  <div className="chapter-badge" style={{ justifyContent: 'center', marginBottom: '12px' }}>
                    <BookOpen size={14} /> TRIẾT HỌC MÁC — LÊ-NIN • PHÉP BIỆN CHỨNG DUY VẬT
                  </div>

                  <h1
                    className="cinzel"
                    style={{
                      fontSize: 'clamp(2.1rem, 5.4vw, 3.7rem)',
                      fontWeight: 700,
                      fontFamily: 'var(--font-serif)',
                      letterSpacing: '4px',
                      marginBottom: '10px',
                      lineHeight: 1,
                      background: 'linear-gradient(135deg, var(--ink) 0%, var(--rose) 55%, var(--gold-deep) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    BIỆN CHỨNG DUY VẬT
                  </h1>

                  
                </div>
              </div>
            </BookSpread>
          </motion.section>
        )}

        {activeChapter === 0 && (
          <motion.section
            key="chapter-0"
            className="story-section align-center"
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <BookSpread pageIndex={0}>
              <img src={heroImg} alt="" className="cover-hero-bg" aria-hidden="true" />
              <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
                <img
                  src={trio}
                  alt="Các Mác, Phờ-ri-đrích Ăng-ghen, V.I. Lê-nin"
                  className="slide-image"
                  style={{ maxWidth: '340px', margin: '18px auto 22px', display: 'block' }}
                />
                <div className="chapter-badge">
                  <BookOpen size={14} /> BÀI THUYẾT TRÌNH NHÓM • CHƯƠNG 2: CHỦ NGHĨA DUY VẬT BIỆN CHỨNG
                </div>

                <h1
                  className="cinzel"
                  style={{
                    fontSize: 'clamp(2.2rem, 5.6vw, 3.9rem)',
                    fontWeight: 800,
                    fontFamily: 'var(--font-serif)',
                    letterSpacing: '3px',
                    marginBottom: '12px',
                    lineHeight: 1.2,
                    background: 'linear-gradient(135deg, var(--ink) 0%, var(--rose) 55%, var(--gold-deep) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  BIỆN CHỨNG DUY VẬT
                </h1>

                <h3
                  className="cinzel"
                  style={{
                    fontSize: 'clamp(0.85rem, 2vw, 1.1rem)',
                    color: 'var(--rose)',
                    letterSpacing: '2px',
                    marginBottom: '24px',
                    fontWeight: 600,
                    fontFamily: 'var(--font-garamond)',
                    fontStyle: 'italic',
                    textTransform: 'none'
                  }}
                >
                  Vận dụng các cặp phạm trù cơ bản của phép biện chứng duy vật
                  <br />phân tích tình huống tuyển dụng Sinh viên A & B
                </h3>

                <dl className="presentation-meta">
                  <div><dt>Môn học</dt><dd>Triết học Mác — Lênin</dd></div>
                  <div><dt>Chương</dt><dd>II. Phép biện chứng duy vật</dd></div>
                  <div><dt>Hình thức</dt><dd>Thuyết trình nhóm + Case study</dd></div>
                </dl>

                <div
                  style={{
                    background: 'rgba(255,251,244,0.85)',
                    border: '1px solid var(--line)',
                    padding: '22px 28px',
                    marginBottom: '28px',
                    textAlign: 'left'
                  }}
                >
                  <p style={{ fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '14px', color: 'var(--ink)' }}>
                    <strong>Bối cảnh:</strong> Doanh nghiệp tuyển dụng vị trí kỹ sư phần mềm và tổ chức phỏng vấn theo hướng
                    kiểm tra năng lực giải quyết vấn đề.
                    <strong> Sinh viên A</strong> — tốt nghiệp loại Giỏi, hồ sơ trình bày ấn tượng — bị loại ở vòng phỏng vấn kỹ thuật.
                    <strong> Sinh viên B</strong> — tốt nghiệp loại Khá, hồ sơ tối giản — trúng tuyển nhờ xử lý được bài toán thực tế.
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.65 }}>
                    A cho rằng B “ăn may” hoặc do yếu tố bên ngoài. Nhóm vận dụng các cặp phạm trù
                    <em> Nội dung — Hình thức</em>, <em> Bản chất — Hiện tượng</em>, <em> Khả năng — Hiện thực</em>
                    (mở rộng thêm <em> Tất nhiên — Ngẫu nhiên</em>) để phân tích theo quan điểm duy vật biện chứng.
                  </p>
                </div>

                <div className="character-row">
                  <div className="character-card character-card--a">
                    <img src={studentA} alt="Sinh viên A" />
                    <h4>SINH VIÊN A</h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--ink-soft)' }}>Giỏi • CV hào nhoáng • Thất bại</p>
                  </div>
                  <div className="compare-vs">VS</div>
                  <div className="character-card character-card--b">
                    <img src={studentB} alt="Sinh viên B" />
                    <h4>SINH VIÊN B</h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--ink-soft)' }}>Khá • CV thực chất • Trúng tuyển</p>
                  </div>
                </div>
              </div>
            </BookSpread>
          </motion.section>
        )}

        {activeChapter === 1 && (
          <motion.section
            key="chapter-1"
            className="story-section"
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <BookSpread pageIndex={1}>
              <span className="chapter-badge">Trang II • Cặp phạm trù Nội dung & Hình thức</span>
              <h2>Nội dung — Hình thức: CV chỉ có ý nghĩa khi phản ánh đúng năng lực</h2>

              <p>
                Theo phép biện chứng duy vật, mọi sự vật đều có <strong>nội dung</strong> (tổng hợp các yếu tố, mặt,
                quá trình tạo nên sự vật) và <strong>hình thức</strong> (phương thức tồn tại, cách tổ chức và biểu hiện của nội dung).
                Nội dung giữ vai trò quyết định; hình thức có tính độc lập tương đối và <em>tác động trở lại</em> nội dung.
                Trong tuyển dụng, CV là <em>hình thức</em> trình bày năng lực, có thể hỗ trợ truyền đạt, nhưng không thể thay thế năng lực thực tế.
              </p>

              <div className="cv-gallery">
                <CVPreview variant="a" portrait={studentA} />
                <CVPreview variant="b" portrait={studentB} />
              </div>

              <div className="philosophy-quote">
                Luận điểm phương pháp luận: <strong>Nội dung quyết định hình thức</strong>.
                Một hình thức “đẹp” chỉ có giá trị khi phản ánh đúng và làm nổi bật nội dung; nếu hình thức tách rời nội dung,
                giá trị sẽ không bền vững.
              </div>

               <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', margin: '16px 0' }}>
                    <button className="btn-cosmic ui-interactive" style={{ padding: '8px 14px', fontSize: '0.72rem' }}
                      onClick={() => onOpenLore('contentForm')}>
                      <Eye size={12} /> Lý thuyết Nội dung & Hình thức
                    </button>
                  </div>

              <div className="slide-layout" style={{ alignItems: 'flex-start' }}>
                <div className="slide-text">
                  <ul style={{ paddingLeft: '20px', fontSize: '0.92rem', color: 'var(--ink-soft)', lineHeight: 1.7 }}>
                    <li style={{ marginBottom: '10px' }}>
                      <strong style={{ color: 'var(--rose)' }}>A:</strong> tập trung làm nổi bật hồ sơ, dùng nhiều từ khóa “chuyên nghiệp”
                      — nhưng phần minh chứng năng lực giải quyết vấn đề còn mờ nhạt.
                    </li>
                    <li>
                      <strong style={{ color: '#2c5f7a' }}>B:</strong> CV đen trắng, liệt kê repo GitHub, stack công nghệ,
                      mô tả vấn đề đã xử lý — nội dung thể hiện qua minh chứng cụ thể.
                    </li>
                  </ul>

                  
                </div>
                <div className="slide-media">
                  <img src={marxEngels} alt="Mác và Ăng-ghen" className="slide-image" />
                </div>
              </div>
            </BookSpread>
          </motion.section>
        )}

        {activeChapter === 2 && (
          <motion.section
            key="chapter-2"
            className="story-section"
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <BookSpread pageIndex={2}>
              <span className="chapter-badge">Trang III • Khả năng & Hiện thực | Bản chất & Hiện tượng</span>
              <h2>Bản chất — Hiện tượng & Khả năng — Hiện thực trong phỏng vấn</h2>

              <p>
                Nhà tuyển dụng đưa ra bài test xử lý lỗi hệ thống đang vận hành.
                Về mặt phương pháp luận, đây là “điều kiện” để kiểm tra: (1) <strong>bản chất</strong> năng lực (bên trong) có thực sự tương ứng
                với <strong>hiện tượng</strong> hồ sơ (bên ngoài) hay không; (2) ứng viên có chuyển <strong>khả năng</strong> (tiềm năng) thành
                <strong>hiện thực</strong> (kết quả/giải pháp) hay không.
              </p>

              <div className="interview-scene">
                <div className="interview-panel interview-panel--fail">
                  <img src={studentA} alt="A trong phỏng vấn" style={{ width: '100%', maxHeight: '140px', objectFit: 'contain', marginBottom: '10px' }} />
                  <h4 style={{ color: 'var(--rose)', fontFamily: 'var(--font-roman)', fontSize: '0.8rem', letterSpacing: '2px' }}>SINH VIÊN A</h4>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--ink-soft)' }}>
                    Trình bày trôi chảy khái niệm, thuật ngữ — nhưng lúng túng khi phân tích log và khoanh vùng nguyên nhân.
                    Điều này cho thấy “hiện tượng” (hồ sơ, lời nói) không đủ để đảm bảo “bản chất” năng lực đáp ứng yêu cầu.
                  </p>
                </div>
                <div className="interview-panel interview-panel--pass">
                  <img src={studentB} alt="B sửa hệ thống" style={{ width: '100%', maxHeight: '140px', objectFit: 'contain', marginBottom: '10px' }} />
                  <h4 style={{ color: '#2c5f7a', fontFamily: 'var(--font-roman)', fontSize: '0.8rem', letterSpacing: '2px' }}>SINH VIÊN B</h4>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--ink-soft)' }}>
                    Phân tích lỗi theo quy trình, đề xuất phương án khả thi và chứng minh bằng thao tác cụ thể.
                    Khả năng tiềm tàng được hiện thực hóa thành kết quả, qua đó bộc lộ bản chất năng lực.
                  </p>
                </div>
              </div>

              <div className="philosophy-quote">
                Luận điểm nhận thức luận (tóm lược ý của Lê-nin): nhận thức không dừng ở lời nói/khái niệm,
                mà phải quay trở về <strong>thực tiễn</strong> để kiểm nghiệm.
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', margin: '16px 0' }}>
                <button className="btn-cosmic ui-interactive" style={{ padding: '8px 14px', fontSize: '0.72rem' }}
                  onClick={() => onOpenLore('possibilityReality')}>
                  <FileText size={12} /> Khả năng & Hiện thực
                </button>
                <button className="btn-cosmic ui-interactive" style={{ padding: '8px 14px', fontSize: '0.72rem' }}
                  onClick={() => onOpenLore('essencePhenomenon')}>
                  <Search size={12} /> Bản chất & Hiện tượng
                </button>
              </div>

              <img src={dialectics} alt="Biện chứng" className="slide-image"
                style={{ maxHeight: '200px', margin: '16px auto', display: 'block' }} />

             
            </BookSpread>
          </motion.section>
        )}

        {activeChapter === 3 && (
          <motion.section
            key="chapter-3"
            className="story-section"
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <BookSpread pageIndex={3}>
              <span className="chapter-badge">Trang IV • Tất nhiên & Ngẫu nhiên</span>
              <h2>Mở rộng: Tất nhiên — Ngẫu nhiên và cách lý giải “ăn may”</h2>

              <div className="slide-layout">
                <div className="slide-text">
                  <p>
                    Sau khi bị loại, A có xu hướng quy chụp B trúng tuyển do <strong>“may mắn” (ngẫu nhiên)</strong>
                    hoặc do yếu tố bên ngoài. Lập luận này dễ rơi vào nhìn nhận phiến diện: tuyệt đối hóa cái ngẫu nhiên,
                    bỏ qua chuỗi nguyên nhân — kết quả khách quan.
                  </p>
                  <p>
                    Theo phép biện chứng duy vật, cái <strong>ngẫu nhiên</strong> thường là hình thức biểu hiện của cái <strong>tất nhiên</strong>.
                    Nếu B giải quyết được bài toán thực tế, thì “cơ hội” trúng tuyển chỉ là biểu hiện bên ngoài của một quá trình
                    tích lũy năng lực và kinh nghiệm (những điều kiện tất yếu bên trong).
                  </p>

                  <div className="character-row" style={{ justifyContent: 'flex-start' }}>
                    
                  </div>

                  

                 

                  
                </div>
                <div className="slide-media">
                  <img src={lenin} alt="V.I. Lê-nin" className="slide-image" />
                  <div className="philosophy-quote" style={{ marginTop: '12px', fontSize: '0.82rem' }}>
                    "Cái ngẫu nhiên chỉ là vỏ bọc bên ngoài của một Tất nhiên khách quan..."
                    <strong>— V.I. LÊ-NIN</strong>
                  </div>
                </div>
              </div>
            </BookSpread>
          </motion.section>
        )}

        {activeChapter === 4 && (
          <motion.section
            key="chapter-4"
            className="story-section"
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <BookSpread pageIndex={4}>
              <span className="chapter-badge" style={{ color: 'var(--rose)' }}>
                <Target size={14} /> KẾT LUẬN BÀI THUYẾT TRÌNH NHÓM
              </span>
              <h2>Kết luận phương pháp luận: nhìn đúng bản chất, kiểm nghiệm bằng thực tiễn</h2>

              <p style={{ fontSize: '0.95rem', marginBottom: '20px' }}>
                Qua tình huống A & B, nhóm nhấn mạnh: đánh giá năng lực trong tuyển dụng về cơ bản
                dựa trên yêu cầu khách quan của công việc và tiêu chuẩn thực tiễn.
                Dưới đây là các luận điểm/bài học rút ra từ các cặp phạm trù đã vận dụng:
              </p>

              <div className="synthesis-grid">
                <div className="synthesis-card">
                  <h5>1. Nội dung quyết định hình thức</h5>
                  <p>CV chỉ phát huy tác dụng khi phản ánh trung thực năng lực. Đầu tư kỹ năng/kinh nghiệm trước, rồi mới tối ưu cách trình bày.</p>
                </div>
                <div className="synthesis-card">
                  <h5>2. Phân biệt bản chất và hiện tượng</h5>
                  <p>Bằng cấp, điểm số, cách diễn đạt là hiện tượng; năng lực giải quyết vấn đề và thái độ lao động mới là bản chất cần được kiểm chứng.</p>
                </div>
                <div className="synthesis-card">
                  <h5>3. Hiện thực hóa khả năng</h5>
                  <p>Kiến thức và tiềm năng phải được chuyển hóa thành kết quả trong công việc. Thực tiễn là tiêu chuẩn để kiểm nghiệm và đánh giá.</p>
                </div>
              </div>


              <div className="philosophy-quote" style={{ marginTop: '16px' }}>
                Luận điểm phương pháp luận: <strong>Thực tiễn là tiêu chuẩn kiểm nghiệm chân lý</strong>.
              </div>

              
            </BookSpread>
          </motion.section>
        )}

        {activeChapter === 5 && (
          <motion.section
            key="chapter-5"
            className="story-section"
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <BookSpread pageIndex={5}>
              <span className="chapter-badge" style={{ color: 'var(--gold-deep)' }}>
                <BookMarked size={14} /> TRANG KẾT • LỜI KẾT CUỐI
              </span>
              <h2>Tổng Hợp Biện Chứng & Thông Điệp Gửi Sinh Viên</h2>

              <p style={{ fontSize: '0.95rem', marginBottom: '20px', color: 'var(--ink-soft)' }}>
                Sau khi phân tích case study A & B qua các cặp phạm trù cơ bản, nhóm khẳng định:
                kết quả tuyển dụng chủ yếu phản ánh năng lực được kiểm nghiệm trong thực tiễn.
              </p>

              <table className="conclusion-table">
                <thead>
                  <tr>
                    <th>Cặp phạm trù</th>
                    <th>Sinh viên A</th>
                    <th>Sinh viên B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nội dung — Hình thức</td>
                    <td>CV hào nhoáng, thiếu nội dung</td>
                    <td>CV giản dị, nội dung thực chiến</td>
                  </tr>
                  <tr>
                    <td>Bản chất — Hiện tượng</td>
                    <td>Bằng Giỏi che giấu thiếu kỹ năng</td>
                    <td>Bản chất bộc lộ qua hành động</td>
                  </tr>
                  <tr>
                    <td>Khả năng — Hiện thực</td>
                    <td>Lý thuyết suông</td>
                    <td>Sửa hệ thống thành công</td>
                  </tr>
                  <tr>
                    <td>Tất nhiên — Ngẫu nhiên</td>
                    <td>Quy chụp &quot;ăn may&quot;</td>
                    <td>Tích lũy → tất yếu</td>
                  </tr>
                </tbody>
              </table>

              <div className="slide-layout" style={{ marginTop: '24px' }}>
                <div className="slide-text">
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', marginBottom: '10px' }}>
                    <Users size={15} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                    Gợi ý sản phẩm sáng tạo
                  </h3>
                  <ul style={{ fontSize: '0.88rem', lineHeight: 1.75, color: 'var(--ink-soft)', paddingLeft: '20px', marginBottom: '18px' }}>
                    <li>Video phỏng vấn giả lập A vs B</li>
                    <li>Short film / motion graphic 4 cặp phạm trù</li>
                    <li>Infographic so sánh 2 CV</li>
                    <li>Game narrative chọn hướng biện chứng</li>
                  </ul>

                  <button
                    className="btn-cosmic ui-interactive"
                    style={{ padding: '10px 16px', fontSize: '0.8rem', marginBottom: '14px' }}
                    onClick={() => setIsVideoOpen((v) => !v)}
                  >
                    {isVideoOpen ? 'Ẩn video' : 'Phát video'}
                  </button>

                  {isVideoOpen && (
                    <div
                      style={{
                        border: '1px solid var(--line)',
                        background: 'rgba(255,251,244,0.7)',
                        padding: '12px',
                        marginBottom: '18px'
                      }}
                    >
                      <video
                        ref={videoRef}
                        src={interviewVideo}
                        controls
                        playsInline
                        style={{ width: '100%', borderRadius: '10px' }}
                      />
                    </div>
                  )}

                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', marginBottom: '8px' }}>
                    <BookOpen size={14} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                    Tài liệu tham khảo
                  </h3>
                  <ul style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--ink-soft)', paddingLeft: '20px', marginBottom: '18px' }}>
                    <li>Giáo trình Triết học Mác — Lênin (2019, 2021): tr. 108–125, 203–234</li>
                    <li>Chương 2: Phép biện chứng duy vật</li>
                    <li>
                      <a href="http://www.marxists.org/xlang/index.htm" target="_blank" rel="noreferrer"
                        style={{ color: 'var(--gold-deep)' }}>Marxists Internet Archive</a>
                    </li>
                  </ul>

                  <div className="epilogue-box">
                    <Quote size={18} style={{ color: 'var(--rose)', flexShrink: 0 }} />
                    <p>
                      Xin cảm ơn thầy/cô và các bạn đã lắng nghe. Mong bài thuyết trình góp phần
                      rèn luyện tư duy biện chứng cho sinh viên trên con đường lao động.
                    </p>
                  </div>

             
                </div>
                <div className="slide-media">
                  <img src={trio} alt="Mác, Ăng-ghen, Lê-nin" className="slide-image" />
                  
                </div>
              </div>
            </BookSpread>
          </motion.section>
        )}

      </AnimatePresence>
    </div>
  );
}
