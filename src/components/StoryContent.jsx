import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles, Layers, Search, Shuffle, FileText,
  ArrowDown, RefreshCw, Eye, BookOpen, Users, Target,
  BookMarked, Heart, Quote
} from 'lucide-react';
import CVPreview from './CVPreview';

import studentA from '../assets/student_a.png';
import studentB from '../assets/student_b.png';
import dialectics from '../assets/dialectics.png';
import trio from '../assets/trio.png';
import marxEngels from '../assets/marx_engels.png';
import lenin from '../assets/lenin.png';
import heroImg from '../assets/hero.png';

const PAGE_NUMBERS = ['I', 'II', 'III', 'IV', 'V', 'VI'];

function BookSpread({ pageIndex, children }) {
  return (
    <div className="book-spread">
      <span className="book-page-number left">— {PAGE_NUMBERS[pageIndex]} —</span>
      <span className="book-page-number right">Triết học Mác-Lênin</span>
      <div className="narrative-card">{children}</div>
    </div>
  );
}

export default function StoryContent({
  activeChapter,
  userChoices,
  onMakeChoice,
  onOpenLore,
  scrollToChapter
}) {
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

  return (
    <div className="ui-layer" style={{ width: '100%', position: 'relative' }}>
      <AnimatePresence mode="wait">

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
                  style={{ maxWidth: '320px', margin: '0 auto 24px', display: 'block' }}
                />

                <div className="chapter-badge">
                  <BookOpen size={14} /> BÀI THUYẾT TRÌNH NHÓM • CHƯƠNG 2: CHỦ NGHĨA DUY VẬT BIỆN CHỨNG
                </div>

                <h1
                  className="cinzel"
                  style={{
                    fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)',
                    fontWeight: 900,
                    letterSpacing: '3px',
                    marginBottom: '12px',
                    lineHeight: 1.2,
                    background: 'linear-gradient(135deg, var(--ink) 0%, var(--rose) 55%, var(--gold-deep) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  BIỆN CHỨNG LAO ĐỘNG
                </h1>

                <h3 className="cinzel" style={{
                  fontSize: 'clamp(0.85rem, 2vw, 1.1rem)',
                  color: 'var(--rose)',
                  letterSpacing: '2px',
                  marginBottom: '24px',
                  fontWeight: 700,
                }}>
                  Vận dụng các cặp phạm trù cơ bản của Phép biện chứng duy vật
                  <br />giải mã bài toán tuyển dụng Sinh viên A & B
                </h3>

                <dl className="presentation-meta" style={{ textAlign: 'left' }}>
                  <div><dt>Môn học</dt><dd>Triết học Mác — Lênin</dd></div>
                  <div><dt>Chương</dt><dd>II. Phép biện chứng duy vật</dd></div>
                  <div><dt>Đề tài</dt><dd>Các cặp phạm trù cơ bản</dd></div>
                  <div><dt>Hình thức</dt><dd>Thuyết trình nhóm + Case study</dd></div>
                </dl>

                <div style={{
                  background: 'rgba(255,251,244,0.85)',
                  border: '1px solid var(--line)',
                  padding: '22px 28px',
                  marginBottom: '28px',
                  textAlign: 'left',
                }}>
                  <p style={{ fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '14px', color: 'var(--ink)' }}>
                    <strong>Bối cảnh:</strong> Tập đoàn công nghệ lớn tuyển dụng vị trí kỹ sư phần mềm.
                    <strong> Sinh viên A</strong> — tốt nghiệp loại Giỏi, CV bóng bẩy, nhiều buzzword — bị loại ngay vòng phỏng vấn kỹ thuật.
                    <strong> Sinh viên B</strong> — bằng Khá, CV tối giản — trúng tuyển nhờ sửa trực tiếp lỗi hệ thống trong buổi phỏng vấn.
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.65 }}>
                    A cho rằng B "ăn may" hoặc có quan hệ. Nhóm chúng em dùng <em>Nội dung — Hình thức</em>,
                    <em> Bản chất — Hiện tượng</em>, <em>Khả năng — Hiện thực</em>, <em>Tất nhiên — Ngẫu nhiên</em>
                    để phân tích và bác bỏ tư duy siêu hình của A.
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

                <button className="btn-cosmic ui-interactive" onClick={() => scrollToChapter(1)} style={{ marginTop: '20px' }}>
                  <Sparkles size={14} /> MỞ TRANG SO SÁNH CV
                </button>
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
              <h2>Vỏ Hồ Sơ Hào Nhoáng Vs. Năng Lực Thực Chất</h2>

              <p>
                Theo quan điểm duy vật biện chứng, mọi sự vật đều có <strong>nội dung</strong> (tổng hợp các yếu tố,
                mối liên hệ bên trong) và <strong>hình thức</strong> (phương thức tồn tại, biểu hiện bên ngoài).
                Nội dung quyết định hình thức; hình thức tác động trở lại nội dung. CV là <em>hình thức</em> biểu hiện
                năng lực — nhưng không thay thế được nội dung thực chất.
              </p>

              <div className="cv-gallery">
                <CVPreview variant="a" portrait={studentA} />
                <CVPreview variant="b" portrait={studentB} />
              </div>

              <div className="philosophy-quote">
                "Hình thức của một sự vật chỉ có giá trị thực sự khi nó là sự biểu hiện chân thực
                của một nội dung biện chứng phong phú bên trong."
                <strong>— C. Mác & F. Ăng-ghen</strong>
              </div>

              <div className="slide-layout" style={{ marginTop: '20px' }}>
                <div className="slide-text">
                  <ul style={{ paddingLeft: '20px', fontSize: '0.92rem', color: 'var(--ink-soft)', lineHeight: 1.7 }}>
                    <li style={{ marginBottom: '10px' }}>
                      <strong style={{ color: 'var(--rose)' }}>A:</strong> CV gradient, icon đẹp, từ khóa "Leadership", "Synergy"
                      — hình thức vượt xa nội dung kỹ thuật.
                    </li>
                    <li>
                      <strong style={{ color: '#2c5f7a' }}>B:</strong> CV đen trắng, liệt kê repo GitHub, stack công nghệ,
                      mô tả bug đã fix — nội dung tự lên tiếng.
                    </li>
                  </ul>

                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', margin: '16px 0' }}>
                    <button className="btn-cosmic ui-interactive" style={{ padding: '8px 14px', fontSize: '0.72rem' }}
                      onClick={() => onOpenLore('contentForm')}>
                      <Eye size={12} /> Lý thuyết Nội dung & Hình thức
                    </button>
                  </div>

                  <div className="choices-container">
                    <span style={{ fontSize: '0.82rem', fontWeight: 700 }}>Quan điểm của nhóm về CV:</span>
                    <button
                      className={`btn-choice ui-interactive ${userChoices.cvChoice === 'form' ? 'selected' : ''}`}
                      onClick={() => onMakeChoice('cvChoice', 'form')}
                    >
                      <span>CV đẹp = lợi thế tuyệt đối (Hình thức quyết định)</span>
                      <Layers size={14} />
                    </button>
                    <button
                      className={`btn-choice ui-interactive ${userChoices.cvChoice === 'content' ? 'selected' : ''}`}
                      onClick={() => onMakeChoice('cvChoice', 'content')}
                    >
                      <span>Năng lực thực chất là cốt lõi (Nội dung quyết định)</span>
                      <Layers size={14} />
                    </button>
                  </div>

                  {userChoices.cvChoice && (
                    <button className="btn-cosmic ui-interactive" style={{ marginTop: '16px' }}
                      onClick={() => scrollToChapter(2)}>
                      Trang III: Phòng phỏng vấn <ArrowDown size={14} />
                    </button>
                  )}
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
              <h2>Phòng Phỏng Vấn: Lý Thuyết Suông Đối Mặt Thực Chiến</h2>

              <p>
                Nhà tuyển dụng đưa ra bài test: sửa lỗi API timeout trên hệ thống logistics đang chạy production.
                Đây là "phép thử" biến <strong>khả năng</strong> (tiềm năng) thành <strong>hiện thực</strong> (hành động có giá trị).
              </p>

              <div className="interview-scene">
                <div className="interview-panel interview-panel--fail">
                  <img src={studentA} alt="A trong phỏng vấn" style={{ width: '100%', maxHeight: '140px', objectFit: 'contain', marginBottom: '10px' }} />
                  <h4 style={{ color: 'var(--rose)', fontFamily: 'var(--font-roman)', fontSize: '0.8rem', letterSpacing: '2px' }}>SINH VIÊN A</h4>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--ink-soft)' }}>
                    Trích dẫn lý thuyết OOP, giải thích design pattern — nhưng không mở được terminal,
                    không đọc được log lỗi. Bằng Giỏi chỉ là <em>hiện tượng</em> chưa chạm <em>bản chất</em> năng lực.
                  </p>
                </div>
                <div className="interview-panel interview-panel--pass">
                  <img src={studentB} alt="B sửa hệ thống" style={{ width: '100%', maxHeight: '140px', objectFit: 'contain', marginBottom: '10px' }} />
                  <h4 style={{ color: '#2c5f7a', fontFamily: 'var(--font-roman)', fontSize: '0.8rem', letterSpacing: '2px' }}>SINH VIÊN B</h4>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--ink-soft)' }}>
                    Phân tích stack trace, tối ưu query N+1, deploy hotfix trong 25 phút.
                    Khả năng tiềm ẩn đã trở thành hiện thực có giá trị kinh tế cho doanh nghiệp.
                  </p>
                </div>
              </div>

              <div className="philosophy-quote">
                "Từ trực quan sinh động đến tư duy trừu tượng, và từ tư duy trừu tượng đến thực tiễn
                — đó là con đường biện chứng của sự nhận thức chân lý khách quan."
                <strong>— V.I. Lê-nin</strong>
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

              <button className="btn-cosmic ui-interactive" onClick={() => scrollToChapter(3)}>
                Trang IV: Sự phẫn nộ của A <ArrowDown size={14} />
              </button>
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
              <h2>Sự Phẫn Nộ Siêu Hình Và Ngụy Biện "Ăn May"</h2>

              <div className="slide-layout">
                <div className="slide-text">
                  <p>
                    Thất bại khiến A cay cú. A quy chụp B trúng tuyển do <strong>"may mắn" (ngẫu nhiên)</strong>
                    hoặc <strong>"quan hệ nâng đỡ"</strong> — đây là tư duy siêu hình: tách rời ngẫu nhiên khỏi tất nhiên,
                    bỏ qua chuỗi nguyên nhân — kết quả khách quan.
                  </p>
                  <p>
                    Triết học Mác — Lênin: ngẫu nhiên luôn là hình thức biểu hiện của tất nhiên.
                    Kỹ năng B tích lũy qua dự án thực tế (tất nhiên) mới tạo ra "cơ hội" trúng tuyển
                    (biểu hiện ngẫu nhiên bên ngoài).
                  </p>

                  <div className="character-row" style={{ justifyContent: 'flex-start' }}>
                    <div className="character-card character-card--a" style={{ maxWidth: '220px' }}>
                      <img src={studentA} alt="A thất vọng" />
                      <h4>A: "B CHỈ GẶP MAY!"</h4>
                    </div>
                  </div>

                  <button className="btn-cosmic ui-interactive" style={{ padding: '8px 14px', fontSize: '0.72rem', margin: '12px 0' }}
                    onClick={() => onOpenLore('necessityChance')}>
                    <Shuffle size={12} /> Lý thuyết Tất nhiên & Ngẫu nhiên
                  </button>

                  <div className="choices-container">
                    <span style={{ fontSize: '0.82rem', fontWeight: 700 }}>Kết luận nhóm đưa vào slide:</span>
                    <button
                      className={`btn-choice ui-interactive ${userChoices.analysisChoice === 'subjective' ? 'selected' : ''}`}
                      onClick={() => onMakeChoice('analysisChoice', 'subjective')}
                    >
                      <span>Ủng hộ A: B chỉ gặp may (ngẫu nhiên thuần túy)</span>
                      <Shuffle size={14} />
                    </button>
                    <button
                      className={`btn-choice ui-interactive ${userChoices.analysisChoice === 'dialectics' ? 'selected' : ''}`}
                      onClick={() => onMakeChoice('analysisChoice', 'dialectics')}
                    >
                      <span>Biện chứng: năng lực thực chiến là tất nhiên</span>
                      <Shuffle size={14} />
                    </button>
                  </div>

                  {userChoices.analysisChoice && (
                    <button className="btn-cosmic ui-interactive" style={{ marginTop: '16px' }}
                      onClick={() => scrollToChapter(4)}>
                      Trang V: Kết luận thuyết trình <ArrowDown size={14} />
                    </button>
                  )}
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
              <h2>Phương Pháp Luận Biện Chứng Cho Thế Hệ Trẻ Lao Động</h2>

              <p style={{ fontSize: '0.95rem', marginBottom: '20px' }}>
                Qua case study A & B, nhóm xác định: thị trường lao động không "bất công chủ quan"
                mà vận hành theo quy luật khách quan — chọn lọc năng lực thực chiến.
                Dưới đây là 4 luận điểm cốt lõi và bài học hành động:
              </p>

              <div className="synthesis-grid">
                <div className="synthesis-card">
                  <h5>1. Đồng bộ Nội dung & Hình thức</h5>
                  <p>Bồi đắp kỹ năng trước khi trau chuốt CV. Hình thức đẹp phải phản ánh trung thực nội dung — không thay thế nội dung.</p>
                </div>
                <div className="synthesis-card">
                  <h5>2. Đi sâu Bản chất, không mê Hiện tượng</h5>
                  <p>Bằng cấp, điểm số là hiện tượng; khả năng giải quyết vấn đề thực tế mới là bản chất mà nhà tuyển dụng tìm kiếm.</p>
                </div>
                <div className="synthesis-card">
                  <h5>3. Tích lũy Tất nhiên, bỏ ảo tưởng Ngẫu nhiên</h5>
                  <p>Thành công không đến từ "may mắn" tách rời. Mỗi dự án, mỗi bug đã fix là tích lũy tất nhiên dẫn đến kết quả.</p>
                </div>
                <div className="synthesis-card">
                  <h5>4. Hiện thực hóa Khả năng</h5>
                  <p>Tri thức sách vở chỉ là khả năng tiềm tàng. Hãy đưa lý luận vào thực tiễn — đó là tiêu chuẩn kiểm nghiệm chân lý.</p>
                </div>
              </div>


              <div className="philosophy-quote" style={{ marginTop: '16px' }}>
                "Thực tiễn là tiêu chuẩn chân lý duy nhất."
                <strong>— C. Mác</strong>
              </div>

              <button className="btn-cosmic ui-interactive" style={{ marginTop: '24px' }}
                onClick={() => scrollToChapter(5)}>
                Trang VI: Lời kết & Tổng hợp cuối <ArrowDown size={14} />
              </button>
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
                Sau khi phân tích case study A & B qua bốn cặp phạm trù, nhóm khẳng định thành công
                trong lao động đến từ năng lực thực chiến được kiểm nghiệm bằng thực tiễn.
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

                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '22px' }}>
                    <button className="btn-cosmic ui-interactive" onClick={() => scrollToChapter(4)}>
                      <ArrowDown size={14} style={{ transform: 'rotate(90deg)' }} /> Trang trước
                    </button>
                    <button className="btn-cosmic ui-interactive" onClick={() => scrollToChapter(0)}>
                      <RefreshCw size={14} /> Về trang bìa
                    </button>
                  </div>
                </div>
                <div className="slide-media">
                  <img src={trio} alt="Mác, Ăng-ghen, Lê-nin" className="slide-image" />
                  <img src={dialectics} alt="Biện chứng" className="slide-image"
                    style={{ marginTop: '12px', maxHeight: '150px' }} />
                  <p className="epilogue-credits">
                    <Heart size={12} style={{ color: 'var(--rose)', display: 'inline' }} />
                    {' '}Nhóm thuyết trình — Triết học Mác-Lênin
                  </p>
                </div>
              </div>
            </BookSpread>
          </motion.section>
        )}

      </AnimatePresence>
    </div>
  );
}
