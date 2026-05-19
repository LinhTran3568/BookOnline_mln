import React from 'react';
import { X, Layers, Search, Shuffle, FileText, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PHILOSOPHY_LORE = {
  contentForm: {
    title: '1. Cặp phạm trù: Nội dung & Hình thức',
    icon: <Layers size={24} style={{ color: 'var(--rose)' }} />,
    concept: 'Nội dung là tổng hợp tất cả những mặt, những yếu tố, những quá trình tạo nên sự vật. Hình thức là phương thức tồn tại và phát triển của sự vật, là hệ thống các mối liên hệ tương đối bền vững giữa các yếu tố của nó.',
    analysis: 'Trong tình huống trên:\n- **Nội dung (Content):** Năng lực thực chiến, kiến thức chuyên môn áp dụng được vào công việc của ứng viên.\n- **Hình thức (Form):** Thiết kế CV, những từ khóa đao to búa lớn (Proactive, Leadership...), hay tấm bằng tốt nghiệp loại Giỏi/Khá.\n\n**Biện chứng tuyển dụng:** Triết học Mác - Lênin chỉ ra: *Nội dung quyết định hình thức*. Hình thức chỉ có giá trị khi nó biểu đạt đúng nội dung thực tế. Sinh viên A sở hữu hình thức cực kỳ hào nhoáng (CV đẹp, toàn từ khóa khủng, bằng Giỏi) nhưng nội dung bên trong lại trống rỗng (không giải quyết được bài toán phỏng vấn). Ngược lại, sinh viên B có hình thức đơn giản (CV giản dị, bằng Khá) nhưng chứa đựng nội dung thực chất vượt trội (giải quyết trực tiếp bài toán thực tế của công ty). Việc doanh nghiệp chọn B là hoàn toàn hợp quy luật biện chứng.'
  },
  essencePhenomenon: {
    title: '2. Cặp phạm trù: Bản chất & Hiện tượng',
    icon: <Search size={24} style={{ color: 'var(--gold-deep)' }} />,
    concept: 'Bản chất là tổng hợp tất cả những mặt, những mối liên hệ tất nhiên, tương đối ổn định bên trong sự vật, quyết định sự vận động và phát triển của sự vật đó. Hiện tượng là sự biểu hiện ra bên ngoài của bản chất.',
    analysis: 'Trong tình huống trên:\n- **Hiện tượng (Phenomenon):** Tấm bằng xuất sắc, bộ hồ sơ lộng lẫy và kỹ năng phỏng vấn lý thuyết trôi chảy của A. Đây là những thứ dễ dàng phơi bày ra bên ngoài.\n- **Bản chất (Essence):** Khả năng tư duy logic, thái độ thực tế và trình độ chuyên môn sâu sắc giải quyết được khủng hoảng của ứng viên.\n\n**Biện chứng tuyển dụng:** Triết học khẳng định: *Bản chất quyết định hiện tượng*, và *hiện tượng có thể phản ánh không đầy đủ hoặc xuyên tạc bản chất*. Một chiếc CV đẹp (hiện tượng) chưa chắc biểu thị một nhân sự chất lượng (bản chất). Nhà tuyển dụng tại tập đoàn lớn là những người có kinh nghiệm, họ không bị đánh lừa bởi hiện tượng hào nhoáng của A mà chủ động thiết lập bài test thực chiến để bóc tách và kiểm tra bản chất của cả hai. Sinh viên B đã bộc lộ bản chất xuất sắc của mình qua việc giải toán thực tế.'
  },
  necessityChance: {
    title: '3. Cặp phạm trù: Tất nhiên & Ngẫu nhiên',
    icon: <Shuffle size={24} style={{ color: 'var(--rose)' }} />,
    concept: 'Tất nhiên (tất yếu) là cái do những nguyên nhân cơ bản bên trong của sự vật quyết định và trong những điều kiện nhất định nó phải xảy ra như thế chứ không thể khác. Ngẫu nhiên là cái không do mối liên hệ bản chất quyết định mà do các nhân tố bên ngoài, có thể xảy ra hoặc không.',
    analysis: 'Trong tình huống trên:\n- **Ngẫu nhiên (Chance):** Suy nghĩ ấm ức của A cho rằng B trúng tuyển chỉ vì ăn may hoặc có người quen nâng đỡ.\n- **Tất nhiên (Necessity):** Quy luật cạnh tranh khốc liệt của thị trường lao động. Doanh nghiệp cần người làm được việc để vận hành bộ máy và tối ưu chi phí. Việc người có năng lực giải quyết vấn đề (B) được chọn và người chỉ có lý thuyết suông (A) bị loại là kết quả **Tất yếu** khách quan.\n\n**Biện chứng tuyển dụng:** Triết học chỉ ra: *Cái ngẫu nhiên chỉ là hình thức biểu hiện của cái tất nhiên*. Đằng sau cái tưởng chừng như may mắn (ngẫu nhiên) của B là cả một quá trình tích lũy năng lực thực tế âm thầm (tất nhiên). Sự đổ lỗi của A cho thấy sự thiếu sót trong nhận thức biện chứng, nhầm lẫn giữa nguyên nhân tất yếu khách quan và sự may rủi ngẫu nhiên.'
  },
  possibilityReality: {
    title: '4. Cặp phạm trù: Khả năng & Hiện thực',
    icon: <FileText size={24} style={{ color: '#2c5f7a' }} />,
    concept: 'Khả năng là cái chưa có, nhưng sẽ có, sẽ xảy ra khi có các điều kiện thích hợp. Hiện thực là cái đang có, đang tồn tại thực sự.',
    analysis: 'Trong tình huống trên:\n- **Khả năng (Possibility):** Bằng Giỏi và CV hoành tráng của A. Nó chỉ đại diện cho một *khả năng* tiềm tàng rằng A có thể làm tốt công việc trong tương lai.\n- **Hiện thực (Reality):** Hành động thực tế giải quyết bài toán khủng hoảng của công ty ngay tại bàn phỏng vấn của B. Đây là kết quả thực tế, đóng góp giá trị ngay lập tức.\n\n**Biện chứng tuyển dụng:** Doanh nghiệp luôn vận hành dựa trên hiện thực để sinh tồn. Họ cần những kết quả hiện hữu thay vì những hứa hẹn tiềm năng nằm trên giấy tờ. Bằng cách hiện thực hóa kỹ năng của mình qua bài toán thực tế, B đã biến khả năng thành hiện thực thuyết phục, đánh bại hoàn toàn hồ sơ lý thuyết của A.'
  }
};

function formatText(text) {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

export default function InteractiveLore({ activeTab, isOpen, onClose }) {
  const entry = PHILOSOPHY_LORE[activeTab] || PHILOSOPHY_LORE.contentForm;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="lore-modal-overlay ui-interactive"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="lore-modal"
            initial={{ scale: 0.92, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 24, opacity: 0 }}
            transition={{ type: 'spring', damping: 26, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn ui-interactive" onClick={onClose} aria-label="Đóng">
              <X size={20} />
            </button>

            <div className="lore-modal__header">
              <div className="lore-modal__icon">{entry.icon}</div>
              <h3>{entry.title}</h3>
            </div>

            <div className="lore-modal-content">
              <div className="lore-block lore-block--definition">
                <h4>Định Nghĩa Giáo Trình Triết Học</h4>
                <p className="lore-concept">"{entry.concept}"</p>
              </div>

              <div className="lore-block lore-block--analysis">
                <h4>Giải Mã Biện Chứng Tình Huống A & B</h4>
                <div className="lore-analysis">
                  {entry.analysis.split('\n').map((line, i) => (
                    <p key={i}>{formatText(line)}</p>
                  ))}
                </div>
              </div>

              <div className="lore-block lore-block--tip">
                <CheckCircle2 size={18} className="lore-tip-icon" />
                <div>
                  <h4>Từ khóa Ghi Điểm Thuyết Trình</h4>
                  <p>
                    Vận dụng cặp phạm trù này để phản bác luận điểm{' '}
                    <strong>chủ nghĩa duy tâm chủ quan</strong> hoặc{' '}
                    <strong>tư duy siêu hình</strong> của sinh viên A khi đổ lỗi cho ngoại cảnh
                    thay vì tự phê bình năng lực.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
