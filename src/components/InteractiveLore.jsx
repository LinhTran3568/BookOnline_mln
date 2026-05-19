import React from 'react';
import { X, Layers, Search, Shuffle, FileText, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PHILOSOPHY_LORE = {
  contentForm: {
    title: '1. Cặp phạm trù: Nội dung & Hình thức',
    icon: <Layers size={24} style={{ color: 'var(--rose)' }} />,
    concept: 'Nội dung là tổng hợp tất cả những mặt, những yếu tố, những quá trình tạo nên sự vật. Hình thức là phương thức tồn tại và phát triển của sự vật, là hệ thống các mối liên hệ tương đối bền vững giữa các yếu tố của nó.',
    analysis: 'Trong tình huống trên:\n- **Nội dung:** năng lực chuyên môn có thể vận dụng, tư duy giải quyết vấn đề, kinh nghiệm dự án/việc làm cụ thể.\n- **Hình thức:** cách trình bày CV, cách “đóng gói” thành tích, danh mục kỹ năng/từ khóa, bằng cấp.\n\n**Vận dụng:** Theo phép biện chứng duy vật, *nội dung giữ vai trò quyết định đối với hình thức*. CV chỉ thực sự có ý nghĩa khi phản ánh đúng và làm nổi bật năng lực thực tế. Trường hợp A đầu tư nhiều vào hình thức nhưng thiếu minh chứng năng lực giải quyết vấn đề; còn B trình bày giản dị nhưng chứng minh được năng lực qua nhiệm vụ cụ thể. Vì vậy, kết quả tuyển dụng phù hợp với yêu cầu khách quan của công việc.'
  },
  essencePhenomenon: {
    title: '2. Cặp phạm trù: Bản chất & Hiện tượng',
    icon: <Search size={24} style={{ color: 'var(--gold-deep)' }} />,
    concept: 'Bản chất là tổng hợp tất cả những mặt, những mối liên hệ tất nhiên, tương đối ổn định bên trong sự vật, quyết định sự vận động và phát triển của sự vật đó. Hiện tượng là sự biểu hiện ra bên ngoài của bản chất.',
    analysis: 'Trong tình huống trên:\n- **Hiện tượng:** bằng cấp, hình thức CV, cách diễn đạt/“tự giới thiệu” trong phỏng vấn.\n- **Bản chất:** năng lực thực sự (tư duy, phương pháp làm việc, khả năng xử lý vấn đề) thể hiện ổn định qua hành động.\n\n**Vận dụng:** *Bản chất quyết định hiện tượng*, nhưng hiện tượng có thể phản ánh chưa đầy đủ bản chất. Vì vậy, doanh nghiệp thường dùng bài test/thử việc để “đi sâu” từ biểu hiện bên ngoài tới năng lực bên trong. Trường hợp B giải được bài toán thực tế giúp bộc lộ bản chất năng lực; còn A cho thấy khoảng cách giữa biểu hiện hồ sơ và năng lực cần thiết.'
  },
  necessityChance: {
    title: '3. Cặp phạm trù: Tất nhiên & Ngẫu nhiên',
    icon: <Shuffle size={24} style={{ color: 'var(--rose)' }} />,
    concept: 'Tất nhiên (tất yếu) là cái do những nguyên nhân cơ bản bên trong của sự vật quyết định và trong những điều kiện nhất định nó phải xảy ra như thế chứ không thể khác. Ngẫu nhiên là cái không do mối liên hệ bản chất quyết định mà do các nhân tố bên ngoài, có thể xảy ra hoặc không.',
    analysis: 'Trong tình huống trên:\n- **Ngẫu nhiên:** cảm giác của A rằng B “gặp may”, hoặc giả định có yếu tố ngoài năng lực.\n- **Tất nhiên:** yêu cầu khách quan của vị trí công việc và tiêu chí đánh giá dựa trên hiệu quả giải quyết nhiệm vụ.\n\n**Vận dụng:** Trong cách nhìn biện chứng, ngẫu nhiên thường là hình thức biểu hiện của tất nhiên: kết quả bề ngoài có thể “trông như may mắn”, nhưng thường dựa trên quá trình tích lũy năng lực, gặp đúng điều kiện và bộc lộ đúng lúc. Vì vậy, không nên tuyệt đối hóa ngẫu nhiên để phủ nhận các nguyên nhân khách quan.'
  },
  possibilityReality: {
    title: '4. Cặp phạm trù: Khả năng & Hiện thực',
    icon: <FileText size={24} style={{ color: '#2c5f7a' }} />,
    concept: 'Khả năng là cái chưa có, nhưng sẽ có, sẽ xảy ra khi có các điều kiện thích hợp. Hiện thực là cái đang có, đang tồn tại thực sự.',
    analysis: 'Trong tình huống trên:\n- **Khả năng:** tiềm năng thể hiện qua kết quả học tập, kiến thức tích lũy, các chứng chỉ/dự án ở mức “cam kết trên giấy”.\n- **Hiện thực:** năng lực đã được kiểm chứng bằng hành động và kết quả cụ thể trong điều kiện làm việc/đánh giá thực tế.\n\n**Vận dụng:** Bằng cấp và hồ sơ có thể chỉ ra khả năng, nhưng chỉ khi có điều kiện thích hợp (bài test, nhiệm vụ) thì khả năng mới được chuyển hóa thành hiện thực. B thuyết phục nhà tuyển dụng bằng kết quả xử lý vấn đề; A chưa biến được khả năng thành giải pháp có thể kiểm chứng.'
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

              
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
