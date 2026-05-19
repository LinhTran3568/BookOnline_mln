import React from 'react';
import { Award, Code, Palette, Star, Briefcase } from 'lucide-react';

export default function CVPreview({ variant = 'a', portrait }) {
  const isA = variant === 'a';

  return (
    <article className={`cv-card cv-card--${variant}`}>
      <div className="cv-card__ribbon">
        {isA ? 'CV SINH VIÊN A' : 'CV SINH VIÊN B'}
      </div>
      <header className="cv-card__header">
        {portrait && (
          <div className="cv-card__avatar">
            <img src={portrait} alt={isA ? 'Sinh viên A' : 'Sinh viên B'} />
          </div>
        )}
        <div className="cv-card__identity">
          <h4>{isA ? 'Nguyễn Văn A' : 'Trần Thị B'}</h4>
          <p>{isA ? 'Ứng viên CNTT — Tốt nghiệp loại Giỏi' : 'Ứng viên CNTT — Tốt nghiệp loại Khá'}</p>
          <span className={`cv-badge ${isA ? 'cv-badge--gold' : 'cv-badge--blue'}`}>
            {isA ? 'GPA 3.85 / 4.0' : 'GPA 3.2 / 4.0'}
          </span>
        </div>
      </header>

      <section className="cv-card__section">
        <h5><Briefcase size={13} /> Kinh nghiệm</h5>
        {isA ? (
          <ul>
            <li>Thực tập Marketing — thiết kế slide, viết báo cáo</li>
            <li>Tham gia 3 cuộc thi ý tưởng khởi nghiệp (vai trò thuyết trình)</li>
            <li>Chưa có dự án phần mềm triển khai production</li>
          </ul>
        ) : (
          <ul>
            <li>Freelance: sửa lỗi API, tối ưu query SQL cho SME</li>
            <li>Dự án GitHub: 2 repo backend (Node.js) có CI/CD</li>
            <li>Fix bug hệ thống logistics — giảm 40% timeout</li>
          </ul>
        )}
      </section>

      <section className="cv-card__section">
        <h5>{isA ? <Palette size={13} /> : <Code size={13} />} {isA ? 'Điểm nhấn CV' : 'Kỹ năng kỹ thuật'}</h5>
        {isA ? (
          <div className="cv-tags cv-tags--flashy">
            {['Leadership', 'Proactive', 'Teamwork', 'Innovation', 'Synergy'].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        ) : (
          <div className="cv-tags cv-tags--tech">
            {['Node.js', 'PostgreSQL', 'Docker', 'REST API', 'Git'].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        )}
      </section>

      <footer className="cv-card__footer">
        {isA ? (
          <p className="cv-note cv-note--warn">
            <Star size={12} /> CV gradient đầy màu — nhấn mạnh <em>hình thức</em>, ít bằng chứng thực chiến
          </p>
        ) : (
          <p className="cv-note cv-note--good">
            <Award size={12} /> CV tối giản — <em>nội dung</em> cụ thể, có link repo & mô tả task
          </p>
        )}
      </footer>
    </article>
  );
}
