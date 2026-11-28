const EXAM_CATEGORIES = {
  thcs: {
    label: "Trung học cơ sở",
    subjects: [
      "Sinh học",
      "Hoá học",
      "Địa lý",
      "Công nghệ",
      "Vật lý",
      "GDCD",
      "Âm nhạc",
      "Lịch sử",
      "Tin học"
    ]
  },
  ktkt: {
    label: "KTKT-HCM",
    subjects: [
      "Tin học (CĐ)",
      "Tiếng Anh chuyên ngành Tin Học",
      "Cấu trúc dữ liệu",
      "Lập trình hướng đối tượng",
      "Hệ quản trị CSDL (Ms.Nga)",
      "Hệ quản trị CSDL (Mr.Hải)",
      "Kỹ thuật lập trình CB (Java)",
      "Tin học (TC)",
      "Chính trị - TC"
    ]
  },
  avthgt: {
    label: "Anh văn - Tin học - Giao thông",
    subjects: [
      "Ứng dụng CNTT Cơ bản (MS Office 2016)",
      "TOEIC-Part 5",
      "IELTS - VOC",
      "Ứng dụng CNTT Cơ bản (MS Office 2010)"
    ]
  }
};

const QUESTION_BANK = [
  {
    tags: ["Tin học (CĐ)", "Tin học (TC)", "Tin học", "ktkt", "thcs"],
    question: "Thiết bị nào được xem là “bộ não” của máy tính?",
    answers: ["RAM", "CPU", "Ổ cứng", "Bàn phím"],
    correct: 1,
    explanation: "CPU xử lý lệnh và điều phối hoạt động của các thành phần trong máy tính."
  },
  {
    tags: ["Tin học (CĐ)", "Tin học (TC)", "Tin học", "ktkt", "thcs"],
    question: "Đơn vị nào thường dùng để đo dung lượng bộ nhớ?",
    answers: ["Pixel", "Hertz", "Byte", "Volt"],
    correct: 2,
    explanation: "Byte và các bội số như KB, MB, GB được dùng để biểu thị dung lượng dữ liệu."
  },
  {
    tags: ["Tin học (CĐ)", "Tin học (TC)", "Ứng dụng CNTT Cơ bản (MS Office 2016)", "Ứng dụng CNTT Cơ bản (MS Office 2010)", "ktkt", "avthgt"],
    question: "Phím tắt nào thường dùng để sao chép văn bản đã chọn?",
    answers: ["Ctrl + C", "Ctrl + V", "Ctrl + Z", "Ctrl + S"],
    correct: 0,
    explanation: "Ctrl + C sao chép nội dung đã chọn vào bộ nhớ tạm."
  },
  {
    tags: ["Tin học (CĐ)", "Tin học", "ktkt", "thcs"],
    question: "Phần mềm nào sau đây là một trình duyệt web?",
    answers: ["Microsoft Excel", "Google Chrome", "Adobe Photoshop", "Windows Explorer"],
    correct: 1,
    explanation: "Google Chrome là trình duyệt dùng để truy cập và xem các trang web."
  },
  {
    tags: ["Tin học (CĐ)", "Tin học", "ktkt", "thcs"],
    question: "Mật khẩu nào an toàn hơn?",
    answers: ["12345678", "nguyenvana", "password", "MuaHe!2026xanh"],
    correct: 3,
    explanation: "Mật khẩu dài, khó đoán và kết hợp nhiều loại ký tự sẽ an toàn hơn."
  },
  {
    tags: ["Cấu trúc dữ liệu", "ktkt"],
    question: "Cấu trúc dữ liệu Ngăn xếp (Stack) hoạt động theo nguyên tắc nào?",
    answers: ["FIFO (Vào trước ra trước)", "LIFO (Vào sau ra trước)", "Truy cập ngẫu nhiên", "Sắp xếp tăng dần"],
    correct: 1,
    explanation: "Stack tuân theo cơ chế LIFO — phần tử thêm vào sau cùng sẽ được lấy ra đầu tiên."
  },
  {
    tags: ["Cấu trúc dữ liệu", "ktkt"],
    question: "Cấu trúc dữ liệu Hàng đợi (Queue) hoạt động theo nguyên tắc nào?",
    answers: ["LIFO", "FIFO", "Đệ quy", "Chia để trị"],
    correct: 1,
    explanation: "Queue hoạt động theo nguyên tắc FIFO — phần tử vào trước được xử lý trước."
  },
  {
    tags: ["Cấu trúc dữ liệu", "ktkt"],
    question: "Độ phức tạp tìm kiếm nhị phân (Binary Search) trên mảng đã sắp xếp là bao nhiêu?",
    answers: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correct: 1,
    explanation: "Mỗi bước tìm kiếm nhị phân loại bỏ một nửa không gian tìm kiếm nên có độ phức tạp O(log n)."
  },
  {
    tags: ["Lập trình hướng đối tượng", "Kỹ thuật lập trình CB (Java)", "ktkt"],
    question: "Tính chất nào cho phép lớp con kế thừa thuộc tính và phương thức từ lớp cha?",
    answers: ["Đóng gói (Encapsulation)", "Kế thừa (Inheritance)", "Đa hình (Polymorphism)", "Trừu tượng (Abstraction)"],
    correct: 1,
    explanation: "Kế thừa (Inheritance) giúp tái sử dụng mã nguồn và mở rộng hành vi từ lớp cha."
  },
  {
    tags: ["Lập trình hướng đối tượng", "Kỹ thuật lập trình CB (Java)", "ktkt"],
    question: "Trong Java, từ khóa nào dùng để tạo một đối tượng mới từ lớp?",
    answers: ["class", "new", "void", "import"],
    correct: 1,
    explanation: "Toán tử new cấp phát bộ nhớ và gọi hàm khởi tạo để tạo đối tượng."
  },
  {
    tags: ["Lập trình hướng đối tượng", "Kỹ thuật lập trình CB (Java)", "ktkt"],
    question: "Phương thức nào là điểm bắt đầu thực thi của một chương trình Java chuẩn?",
    answers: ["start()", "run()", "main(String[] args)", "init()"],
    correct: 2,
    explanation: "JVM bắt đầu chạy ứng dụng Java từ phương thức public static void main(String[] args)."
  },
  {
    tags: ["Hệ quản trị CSDL (Ms.Nga)", "Hệ quản trị CSDL (Mr.Hải)", "ktkt"],
    question: "Câu lệnh SQL nào dùng để truy vấn lấy dữ liệu từ bảng?",
    answers: ["INSERT", "UPDATE", "SELECT", "DELETE"],
    correct: 2,
    explanation: "SELECT dùng để truy xuất dữ liệu từ một hoặc nhiều bảng trong cơ sở dữ liệu."
  },
  {
    tags: ["Hệ quản trị CSDL (Ms.Nga)", "Hệ quản trị CSDL (Mr.Hải)", "ktkt"],
    question: "Khóa chính (Primary Key) trong một bảng cơ sở dữ liệu có đặc điểm gì?",
    answers: ["Có thể trùng lặp và NULL", "Duy nhất và không nhận giá trị NULL", "Chỉ dùng cho kiểu số thực", "Không thể tham chiếu từ bảng khác"],
    correct: 1,
    explanation: "Khóa chính dùng để định danh duy nhất mỗi bản ghi nên không được trùng và không được NULL."
  },
  {
    tags: ["Hệ quản trị CSDL (Ms.Nga)", "Hệ quản trị CSDL (Mr.Hải)", "ktkt"],
    question: "Mệnh đề nào trong SQL dùng để lọc các bản ghi thỏa điều kiện?",
    answers: ["ORDER BY", "GROUP BY", "WHERE", "JOIN"],
    correct: 2,
    explanation: "Mệnh đề WHERE lọc các dòng dữ liệu thỏa mãn điều kiện trước khi trả về."
  },
  {
    tags: ["Tiếng Anh chuyên ngành Tin Học", "TOEIC-Part 5", "IELTS - VOC", "ktkt", "avthgt"],
    question: "Thuật ngữ “Database” trong tiếng Việt nghĩa là gì?",
    answers: ["Hệ điều hành", "Cơ sở dữ liệu", "Mạng máy tính", "Trình biên dịch"],
    correct: 1,
    explanation: "Database nghĩa là cơ sở dữ liệu — tập hợp dữ liệu được tổ chức có cấu trúc."
  },
  {
    tags: ["Tiếng Anh chuyên ngành Tin Học", "TOEIC-Part 5", "IELTS - VOC", "avthgt"],
    question: "Chọn đáp án đúng: “The software update will be released _____ Monday.”",
    answers: ["in", "at", "on", "to"],
    correct: 2,
    explanation: "Giới từ 'on' được dùng trước các thứ trong tuần hoặc ngày cụ thể."
  },
  {
    tags: ["Tiếng Anh chuyên ngành Tin Học", "TOEIC-Part 5", "IELTS - VOC", "avthgt"],
    question: "Từ nào đồng nghĩa gần nhất với “algorithm”?",
    answers: ["Hardware", "Step-by-step procedure", "Monitor", "Keyboard shortcut"],
    correct: 1,
    explanation: "Algorithm (thuật toán) là một quy trình từng bước để giải quyết bài toán."
  },
  {
    tags: ["Ứng dụng CNTT Cơ bản (MS Office 2016)", "Ứng dụng CNTT Cơ bản (MS Office 2010)", "avthgt"],
    question: "Trong Microsoft Excel, công thức luôn bắt đầu bằng ký tự nào?",
    answers: ["@", "#", "=", "$"],
    correct: 2,
    explanation: "Mọi công thức và hàm trong Excel đều bắt đầu bằng dấu bằng (=)."
  },
  {
    tags: ["Ứng dụng CNTT Cơ bản (MS Office 2016)", "Ứng dụng CNTT Cơ bản (MS Office 2010)", "avthgt"],
    question: "Trong Microsoft Word, phím tắt Ctrl + B có tác dụng gì?",
    answers: ["In nghiêng chữ", "In đậm chữ", "Gạch chân chữ", "Căn giữa đoạn văn"],
    correct: 1,
    explanation: "Ctrl + B (Bold) dùng để bật/tắt định dạng in đậm cho văn bản được chọn."
  },
  {
    tags: ["Ứng dụng CNTT Cơ bản (MS Office 2016)", "Ứng dụng CNTT Cơ bản (MS Office 2010)", "avthgt"],
    question: "Phần mở rộng mặc định của tệp PowerPoint từ phiên bản 2010 trở lên là gì?",
    answers: [".docx", ".xlsx", ".pptx", ".pdf"],
    correct: 2,
    explanation: "Tệp trình chiếu PowerPoint hiện đại sử dụng phần mở rộng .pptx."
  },
  {
    tags: ["Sinh học", "thcs"],
    question: "Cơ quan nào đóng vai trò bơm máu đi khắp cơ thể người?",
    answers: ["Phổi", "Tim", "Gan", "Thận"],
    correct: 1,
    explanation: "Tim co bóp nhịp nhàng giúp vận chuyển máu qua hệ tuần hoàn."
  },
  {
    tags: ["Hoá học", "thcs"],
    question: "Công thức hóa học của nước là gì?",
    answers: ["CO₂", "H₂O", "O₂", "NaCl"],
    correct: 1,
    explanation: "Một phân tử nước gồm 2 nguyên tử Hiđro và 1 nguyên tử Oxi (H₂O)."
  },
  {
    tags: ["Vật lý", "thcs"],
    question: "Đơn vị đo lực trong hệ đo lường SI là gì?",
    answers: ["Jun (J)", "Oát (W)", "Niutơn (N)", "Mét (m)"],
    correct: 2,
    explanation: "Lực được đo bằng đơn vị Niutơn (ký hiệu là N)."
  },
  {
    tags: ["Địa lý", "Lịch sử", "GDCD", "Âm nhạc", "Công nghệ", "Chính trị - TC", "thcs", "ktkt"],
    question: "Việt Nam nằm ở khu vực nào của châu Á?",
    answers: ["Đông Á", "Nam Á", "Đông Nam Á", "Tây Á"],
    correct: 2,
    explanation: "Việt Nam thuộc khu vực Đông Nam Á trên bán đảo Đông Dương."
  }
];

const RESULTS_STORAGE_KEY = "cntt_quiz_results";
const LATEST_RESULT_KEY = "cntt_latest_result_id";
const LAST_MSSV_KEY = "cntt_last_mssv";

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatDuration(seconds) {
  const safe = Math.max(0, Math.floor(seconds));
  const mins = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function shuffleArray(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildQuestionSet(categoryKey, subjectName, requestedCount) {
  const exact = QUESTION_BANK.filter((q) => q.tags.includes(subjectName));
  const byCategory = QUESTION_BANK.filter(
    (q) => !q.tags.includes(subjectName) && q.tags.includes(categoryKey)
  );
  const others = QUESTION_BANK.filter(
    (q) => !q.tags.includes(subjectName) && !q.tags.includes(categoryKey)
  );

  const ordered = [
    ...shuffleArray(exact),
    ...shuffleArray(byCategory),
    ...shuffleArray(others)
  ];
  const limit = Math.min(requestedCount, ordered.length);
  return ordered.slice(0, limit);
}

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Mở menu" : "Đóng menu");
    primaryNav.classList.toggle("open", !isExpanded);
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      primaryNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Mở menu");
    });
  });
}

// Legacy quick quiz modal on index.html (when clicking #kiem-tra anchor cards)
const quizDialog = document.querySelector("#quiz-dialog");
const quizContent = document.querySelector("#quiz-content");
const closeQuizButton = document.querySelector("#close-quiz");
let quickCurrent = 0;
let quickScore = 0;
let quickAnswered = false;
const quickQuestions = QUESTION_BANK.slice(0, 5);

function renderQuickQuestion() {
  if (!quizContent) return;
  const item = quickQuestions[quickCurrent];
  const progress = ((quickCurrent + 1) / quickQuestions.length) * 100;
  const letters = ["A", "B", "C", "D"];

  quizContent.innerHTML = `
    <div class="quiz-progress-label"><span>Câu ${quickCurrent + 1} / ${quickQuestions.length}</span><span>${Math.round(progress)}%</span></div>
    <div class="progress-track" role="progressbar" aria-label="Tiến độ bài kiểm tra" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(progress)}"><div class="progress-fill" style="width:${progress}%"></div></div>
    <h2 class="quiz-question" id="quiz-title">${escapeHtml(item.question)}</h2>
    <div class="answer-list">${item.answers.map((answer, index) => `
      <button class="answer-option" type="button" data-answer="${index}">
        <span class="answer-letter">${letters[index]}</span><span>${escapeHtml(answer)}</span>
      </button>`).join("")}
    </div>
    <div class="quiz-feedback" role="status" aria-live="polite"></div>
    <button class="button quiz-next" type="button" disabled>${quickCurrent === quickQuestions.length - 1 ? "Xem kết quả" : "Câu tiếp theo"} <span aria-hidden="true">→</span></button>
  `;

  quizContent.querySelectorAll(".answer-option").forEach((button) => {
    button.addEventListener("click", () => selectQuickAnswer(Number(button.dataset.answer)));
  });
  quizContent.querySelector(".quiz-next").addEventListener("click", nextQuickQuestion);
}

function selectQuickAnswer(index) {
  if (quickAnswered || !quizContent) return;
  quickAnswered = true;
  const item = quickQuestions[quickCurrent];
  const options = quizContent.querySelectorAll(".answer-option");
  const feedback = quizContent.querySelector(".quiz-feedback");

  options.forEach((option, optionIndex) => {
    option.disabled = true;
    if (optionIndex === item.correct) option.classList.add("correct");
  });

  if (index === item.correct) {
    quickScore += 1;
    feedback.textContent = `Chính xác! ${item.explanation}`;
    feedback.classList.add("good");
  } else {
    options[index].classList.add("incorrect");
    feedback.textContent = `Chưa chính xác. ${item.explanation}`;
    feedback.classList.add("bad");
  }
  quizContent.querySelector(".quiz-next").disabled = false;
}

function nextQuickQuestion() {
  if (!quickAnswered) return;
  if (quickCurrent === quickQuestions.length - 1) {
    const percentage = Math.round((quickScore / quickQuestions.length) * 100);
    quizContent.innerHTML = `
      <div class="quiz-result">
        <div class="result-icon" aria-hidden="true">${quickScore >= 3 ? "✦" : "✓"}</div>
        <div class="section-kicker">HOÀN THÀNH BÀI KIỂM TRA</div>
        <h2 id="quiz-title">${quickScore === quickQuestions.length ? "Tuyệt vời!" : "Bạn đã hoàn thành!"}</h2>
        <div class="result-score">${quickScore}<span style="color:#a1a7b9;font-size:18px"> / ${quickQuestions.length}</span></div>
        <p>Điểm của bạn: ${percentage}%</p>
        <button class="button quiz-restart" type="button">Làm lại bài kiểm tra <span aria-hidden="true">↻</span></button>
      </div>
    `;
    quizContent.querySelector(".quiz-restart").addEventListener("click", startQuickQuiz);
    return;
  }
  quickCurrent += 1;
  quickAnswered = false;
  renderQuickQuestion();
}

function startQuickQuiz() {
  if (!quizDialog || !quizContent) return;
  quickCurrent = 0;
  quickScore = 0;
  quickAnswered = false;
  renderQuickQuestion();
  if (!quizDialog.open) quizDialog.showModal();
}

if (quizDialog && quizContent) {
  closeQuizButton?.addEventListener("click", () => quizDialog.close());
  quizDialog.addEventListener("click", (event) => {
    if (event.target === quizDialog) quizDialog.close();
  });
  document.querySelectorAll('a[href="#kiem-tra"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      startQuickQuiz();
    });
  });
}

function initExamPage() {
  const directory = document.querySelector("#exam-directory");
  const runner = document.querySelector("#exam-runner");
  const setupDialog = document.querySelector("#exam-setup-dialog");
  const setupForm = document.querySelector("#exam-setup-form");
  if (!directory || !runner || !setupDialog || !setupForm) return;

  const setupCategoryLabel = document.querySelector("#setup-category-label");
  const setupMssv = document.querySelector("#setup-mssv");
  const setupSubject = document.querySelector("#setup-subject");
  const setupGradeGroup = document.querySelector("#setup-grade-group");
  const setupGrade = document.querySelector("#setup-grade");
  const setupCount = document.querySelector("#setup-count");
  const setupDuration = document.querySelector("#setup-duration");
  const setupFeedback = document.querySelector("#setup-feedback");
  const closeSetup = document.querySelector("#close-setup");

  const runnerCategory = document.querySelector("#runner-category");
  const runnerSubject = document.querySelector("#runner-subject");
  const runnerMssv = document.querySelector("#runner-mssv");
  const runnerGradeWrap = document.querySelector("#runner-grade-wrap");
  const runnerGrade = document.querySelector("#runner-grade");
  const runnerTimer = document.querySelector("#runner-timer");
  const runnerProgressText = document.querySelector("#runner-progress-text");
  const runnerAnsweredText = document.querySelector("#runner-answered-text");
  const runnerProgressBar = document.querySelector("#runner-progress-bar");
  const runnerQuestionNav = document.querySelector("#runner-question-nav");
  const runnerQuestionCard = document.querySelector("#runner-question-card");
  const runnerFeedback = document.querySelector("#runner-feedback");
  const prevBtn = document.querySelector("#runner-prev");
  const nextBtn = document.querySelector("#runner-next");
  const submitBtn = document.querySelector("#runner-submit");

  let activeCategoryKey = "ktkt";
  let session = null;
  let timerId = null;

  function openSetup(categoryKey, preselectedSubject = "") {
    const category = EXAM_CATEGORIES[categoryKey] || EXAM_CATEGORIES.ktkt;
    activeCategoryKey = categoryKey in EXAM_CATEGORIES ? categoryKey : "ktkt";

    setupCategoryLabel.textContent = category.label.toUpperCase();
    setupSubject.innerHTML = category.subjects
      .map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`)
      .join("");

    if (preselectedSubject && category.subjects.includes(preselectedSubject)) {
      setupSubject.value = preselectedSubject;
    }

    const needsGrade = activeCategoryKey === "thcs";
    if (setupGradeGroup && setupGrade) {
      setupGradeGroup.hidden = !needsGrade;
      setupGrade.required = needsGrade;
      if (!needsGrade) setupGrade.value = "";
    }

    const savedMssv = localStorage.getItem(LAST_MSSV_KEY);
    if (savedMssv && !setupMssv.value) {
      setupMssv.value = savedMssv;
    }

    setupFeedback.textContent = "";
    setupFeedback.classList.remove("good", "bad");
    if (!setupDialog.open) setupDialog.showModal();
    setupMssv.focus();
  }

  document.querySelectorAll("[data-choose-category]").forEach((btn) => {
    btn.addEventListener("click", () => openSetup(btn.dataset.chooseCategory));
  });

  document.querySelectorAll(".exam-card .exam-list li").forEach((li) => {
    li.style.cursor = "pointer";
    li.addEventListener("click", () => {
      const card = li.closest(".exam-card");
      if (card) openSetup(card.dataset.category, li.textContent.trim());
    });
  });

  closeSetup?.addEventListener("click", () => setupDialog.close());
  setupDialog.addEventListener("click", (event) => {
    if (event.target === setupDialog) setupDialog.close();
  });

  function renderRunner() {
    if (!session) return;
    const total = session.questions.length;
    const current = session.currentIndex;
    const item = session.questions[current];
    const answeredCount = session.answers.filter((a) => a !== null).length;
    const progressPct = Math.round(((current + 1) / total) * 100);
    const letters = ["A", "B", "C", "D"];

    runnerProgressText.textContent = `Câu ${current + 1} / ${total}`;
    runnerAnsweredText.textContent = `Đã chọn: ${answeredCount} / ${total}`;
    runnerProgressBar.style.width = `${progressPct}%`;

    runnerQuestionNav.innerHTML = session.questions
      .map((_, idx) => {
        const cls = ["runner-q-pill"];
        if (session.answers[idx] !== null) cls.push("answered");
        if (idx === current) cls.push("current");
        return `<button type="button" class="${cls.join(" ")}" data-jump="${idx}">${idx + 1}</button>`;
      })
      .join("");

    runnerQuestionNav.querySelectorAll("[data-jump]").forEach((pill) => {
      pill.addEventListener("click", () => {
        session.currentIndex = Number(pill.dataset.jump);
        renderRunner();
      });
    });

    runnerQuestionCard.innerHTML = `
      <h3 class="quiz-question">${current + 1}. ${escapeHtml(item.question)}</h3>
      <div class="answer-list">
        ${item.answers
          .map((answer, idx) => {
            const selected = session.answers[current] === idx ? " selected" : "";
            return `
              <button class="answer-option${selected}" type="button" data-pick="${idx}">
                <span class="answer-letter">${letters[idx]}</span>
                <span>${escapeHtml(answer)}</span>
              </button>
            `;
          })
          .join("")}
      </div>
    `;

    runnerQuestionCard.querySelectorAll("[data-pick]").forEach((btn) => {
      btn.addEventListener("click", () => {
        session.answers[current] = Number(btn.dataset.pick);
        renderRunner();
      });
    });

    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;

    const allAnswered = answeredCount === total;
    if (submitBtn) submitBtn.disabled = !allAnswered;
    if (runnerFeedback) {
      runnerFeedback.classList.remove("good", "bad");
      if (allAnswered) {
        runnerFeedback.textContent = `Đã hoàn thành ${total}/${total} câu hỏi. Bạn có thể bấm Nộp bài & Xem kết quả.`;
        runnerFeedback.classList.add("good");
      } else {
        const remaining = total - answeredCount;
        runnerFeedback.textContent = `Hãy chọn hết đáp án trước khi nộp bài (còn ${remaining} câu chưa chọn).`;
      }
    }
  }

  function finishExam(timedOut = false) {
    if (!session) return;
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }

    const total = session.questions.length;
    let score = 0;
    const details = session.questions.map((q, idx) => {
      const selectedIndex = session.answers[idx];
      const isCorrect = selectedIndex === q.correct;
      if (isCorrect) score += 1;
      return {
        question: q.question,
        answers: q.answers,
        selectedIndex,
        correctIndex: q.correct,
        explanation: q.explanation,
        isCorrect
      };
    });

    const timeSpentSeconds = Math.min(
      session.totalSeconds,
      Math.max(1, session.totalSeconds - session.remainingSeconds)
    );
    const percentage = Math.round((score / total) * 100);
    const score10 = Number(((score / total) * 10).toFixed(1));

    const record = {
      id: `${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      mssv: session.mssv,
      grade: session.grade,
      categoryLabel: session.categoryLabel,
      subject: session.subject,
      score,
      total,
      percentage,
      score10,
      durationMinutes: session.durationMinutes,
      timeSpentSeconds,
      timedOut,
      submittedAt: new Date().toISOString(),
      details
    };

    let history = [];
    try {
      history = JSON.parse(localStorage.getItem(RESULTS_STORAGE_KEY) || "[]");
      if (!Array.isArray(history)) history = [];
    } catch {
      history = [];
    }

    history.unshift(record);
    localStorage.setItem(RESULTS_STORAGE_KEY, JSON.stringify(history.slice(0, 50)));
    localStorage.setItem(LATEST_RESULT_KEY, record.id);

    window.location.href = "ket-qua.html";
  }

  function updateTimerDisplay() {
    if (!session) return;
    runnerTimer.textContent = formatDuration(session.remainingSeconds);
    runnerTimer.classList.toggle("warning", session.remainingSeconds <= 60);
  }

  setupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const mssv = setupMssv.value.trim();
    const subject = setupSubject.value;
    const needsGrade = activeCategoryKey === "thcs";
    const grade = needsGrade && setupGrade ? setupGrade.value : "";
    const count = Number(setupCount.value) || 10;
    const durationMinutes = Number(setupDuration.value) || 10;

    if (!mssv) {
      setupFeedback.textContent = "Vui lòng nhập mã số sinh viên trước khi bắt đầu làm bài.";
      setupFeedback.classList.remove("good");
      setupFeedback.classList.add("bad");
      setupMssv.focus();
      return;
    }

    if (!subject) {
      setupFeedback.textContent = "Vui lòng chọn môn học cụ thể.";
      setupFeedback.classList.remove("good");
      setupFeedback.classList.add("bad");
      setupSubject.focus();
      return;
    }

    if (needsGrade && !grade) {
      setupFeedback.textContent = "Vui lòng chọn lớp trước khi bắt đầu làm bài.";
      setupFeedback.classList.remove("good");
      setupFeedback.classList.add("bad");
      setupGrade?.focus();
      return;
    }

    localStorage.setItem(LAST_MSSV_KEY, mssv);
    const questionsList = buildQuestionSet(activeCategoryKey, subject, count);

    session = {
      mssv,
      grade,
      categoryLabel: EXAM_CATEGORIES[activeCategoryKey].label,
      subject,
      questions: questionsList,
      answers: Array(questionsList.length).fill(null),
      currentIndex: 0,
      durationMinutes,
      totalSeconds: durationMinutes * 60,
      remainingSeconds: durationMinutes * 60
    };

    setupDialog.close();
    directory.hidden = true;
    runner.hidden = false;

    runnerCategory.textContent = session.categoryLabel;
    runnerSubject.textContent = session.subject;
    runnerMssv.textContent = session.mssv;
    if (runnerGradeWrap && runnerGrade) {
      runnerGradeWrap.hidden = !session.grade;
      runnerGrade.textContent = session.grade;
    }

    updateTimerDisplay();
    renderRunner();

    if (timerId) clearInterval(timerId);
    timerId = setInterval(() => {
      if (!session) return;
      session.remainingSeconds -= 1;
      updateTimerDisplay();
      if (session.remainingSeconds <= 0) {
        finishExam(true);
      }
    }, 1000);
  });

  prevBtn?.addEventListener("click", () => {
    if (!session || session.currentIndex <= 0) return;
    session.currentIndex -= 1;
    renderRunner();
  });

  nextBtn?.addEventListener("click", () => {
    if (!session || session.currentIndex >= session.questions.length - 1) return;
    session.currentIndex += 1;
    renderRunner();
  });

  submitBtn?.addEventListener("click", () => {
    if (!session) return;
    const firstUnanswered = session.answers.indexOf(null);
    if (firstUnanswered !== -1) {
      session.currentIndex = firstUnanswered;
      renderRunner();
      return;
    }
    finishExam(false);
  });
}

function initResultsPage() {
  const root = document.querySelector("#results-root");
  if (!root) return;

  function loadHistory() {
    try {
      const parsed = JSON.parse(localStorage.getItem(RESULTS_STORAGE_KEY) || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  let history = loadHistory();
  if (!history.length) {
    root.innerHTML = `
      <div class="empty-results">
        <h2>Chưa có kết quả bài kiểm tra nào</h2>
        <p>Hãy chọn môn học, nhập mã số sinh viên và hoàn thành bài kiểm tra để xem điểm tại đây.</p>
        <a class="button auth-submit" style="width:auto;display:inline-flex" href="kiem-tra.html">Đến trang kiểm tra <span aria-hidden="true">→</span></a>
      </div>
    `;
    return;
  }

  let selectedId = null;
  let activeMssvFilter = "all";
  let searchQuery = "";

  function getGradeInfo(percentage) {
    if (percentage >= 80) return { label: "Xuất sắc", cls: "good" };
    if (percentage >= 50) return { label: "Đạt yêu cầu", cls: "warn" };
    return { label: "Cần ôn tập thêm", cls: "bad" };
  }

  function renderDetailCard(activeRecord) {
    if (!activeRecord) return "";
    const grade = getGradeInfo(activeRecord.percentage);
    const submittedDate = new Date(activeRecord.submittedAt).toLocaleString("vi-VN");

    return `
      <article class="result-summary-card" id="result-detail-card">
        <div class="result-summary-top">
          <div>
            <span class="runner-badge">${escapeHtml(activeRecord.categoryLabel)}</span>
            <h2>${escapeHtml(activeRecord.subject)}${activeRecord.grade ? ` — ${escapeHtml(activeRecord.grade)}` : ""}</h2>
            <div class="result-meta-line">
              <span>MSSV: <strong>${escapeHtml(activeRecord.mssv)}</strong></span>
              ${activeRecord.grade ? `<span>Lớp: <strong>${escapeHtml(activeRecord.grade)}</strong></span>` : ""}
              <span>Nộp lúc: <strong>${escapeHtml(submittedDate)}</strong></span>
              ${activeRecord.timedOut ? "<span>Trạng thái: <strong>Hết giờ (tự động nộp)</strong></span>" : ""}
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:10px;">
            <span class="result-grade-badge ${grade.cls}">${grade.label}</span>
            <button type="button" class="icon-button" id="close-detail" aria-label="Đóng chi tiết bài làm">×</button>
          </div>
        </div>

        <div class="result-metrics">
          <div class="metric-box">
            <span>ĐIỂM SỐ (HỆ 10)</span>
            <strong>${activeRecord.score10} / 10</strong>
          </div>
          <div class="metric-box">
            <span>SỐ CÂU ĐÚNG</span>
            <strong>${activeRecord.score} / ${activeRecord.total}</strong>
          </div>
          <div class="metric-box">
            <span>TỶ LỆ CHÍNH XÁC</span>
            <strong>${activeRecord.percentage}%</strong>
          </div>
          <div class="metric-box">
            <span>THỜI GIAN LÀM</span>
            <strong>${formatDuration(activeRecord.timeSpentSeconds)} / ${activeRecord.durationMinutes}p</strong>
          </div>
        </div>

        <div class="result-actions-row">
          <a class="button runner-btn-submit" style="margin-left:0" href="kiem-tra.html">Làm bài kiểm tra khác →</a>
        </div>

        <div class="result-review-list">
          ${activeRecord.details
            .map((detail, idx) => {
              const userChoice =
                detail.selectedIndex !== null && detail.selectedIndex !== undefined
                  ? detail.answers[detail.selectedIndex]
                  : "Chưa chọn";
              const correctChoice = detail.answers[detail.correctIndex];
              return `
                <div class="review-item ${detail.isCorrect ? "is-correct" : "is-wrong"}">
                  <h3>Câu ${idx + 1}: ${escapeHtml(detail.question)}</h3>
                  <div class="review-answers">
                    <span>Bạn chọn: <strong>${escapeHtml(userChoice)}</strong></span>
                    <span>Đáp án đúng: <strong>${escapeHtml(correctChoice)}</strong></span>
                  </div>
                  <p class="review-explain">${escapeHtml(detail.explanation)}</p>
                </div>
              `;
            })
            .join("")}
        </div>
      </article>
    `;
  }

  function render() {
    const activeRecord = selectedId ? history.find((item) => item.id === selectedId) : null;
    const uniqueMssvs = [...new Set(history.map((item) => item.mssv))];

    const filteredHistory = history.filter((item) => {
      if (activeMssvFilter !== "all" && item.mssv !== activeMssvFilter) return false;
      const q = searchQuery.trim().toLowerCase();
      if (!q) return true;
      return (
        item.mssv.toLowerCase().includes(q) ||
        item.subject.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q)
      );
    });

    root.innerHTML = `
      <section class="history-card" aria-labelledby="history-heading">
        <div class="history-header">
          <div>
            <h2 id="history-heading">Danh sách kết quả theo Mã sinh viên (${filteredHistory.length})</h2>
            <p class="history-hint">Bấm vào một dòng bên dưới để xem chi tiết kết quả bài làm.</p>
          </div>
          <div class="history-tools">
            <input type="search" class="history-search" id="history-search" placeholder="Tìm theo MSSV hoặc môn học..." value="${escapeHtml(searchQuery)}">
            <button type="button" class="button runner-btn-secondary" id="clear-history">Xóa lịch sử</button>
          </div>
        </div>

        ${uniqueMssvs.length > 1
          ? `<div class="mssv-filter-pills" role="group" aria-label="Lọc theo mã sinh viên">
              <button type="button" class="mssv-pill ${activeMssvFilter === "all" ? "active" : ""}" data-mssv-filter="all">Tất cả (${history.length})</button>
              ${uniqueMssvs
                .map((mssv) => {
                  const count = history.filter((item) => item.mssv === mssv).length;
                  return `<button type="button" class="mssv-pill ${activeMssvFilter === mssv ? "active" : ""}" data-mssv-filter="${escapeHtml(mssv)}">${escapeHtml(mssv)} (${count})</button>`;
                })
                .join("")}
            </div>`
          : ""}

        <div class="history-table-wrap">
          <table class="history-table">
            <thead>
              <tr>
                <th>Mã SV</th>
                <th>Môn học</th>
                <th>Điểm</th>
                <th>Số câu đúng</th>
                <th>Ngày nộp</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${filteredHistory.length
                ? filteredHistory
                    .map((item) => {
                      const rowCls = activeRecord && item.id === activeRecord.id ? "history-row-active" : "";
                      const dateLabel = new Date(item.submittedAt).toLocaleString("vi-VN");
                      return `
                        <tr class="${rowCls}" data-view-result="${escapeHtml(item.id)}" tabindex="0">
                          <td><strong>${escapeHtml(item.mssv)}</strong></td>
                          <td>${escapeHtml(item.subject)}${item.grade ? ` (${escapeHtml(item.grade)})` : ""}</td>
                          <td><strong>${item.score10} / 10</strong></td>
                          <td>${item.score}/${item.total} (${item.percentage}%)</td>
                          <td>${escapeHtml(dateLabel)}</td>
                          <td><span class="text-action">${activeRecord && item.id === activeRecord.id ? "Đang xem" : "Xem bài làm →"}</span></td>
                        </tr>
                      `;
                    })
                    .join("")
                : `<tr><td colspan="6" style="text-align:center;color:var(--muted);padding:24px;">Không tìm thấy kết quả phù hợp.</td></tr>`}
            </tbody>
          </table>
        </div>
      </section>

      ${renderDetailCard(activeRecord)}
    `;

    const searchInput = document.querySelector("#history-search");
    searchInput?.addEventListener("input", (event) => {
      searchQuery = event.target.value;
      render();
      const refreshed = document.querySelector("#history-search");
      if (refreshed) {
        refreshed.focus();
        refreshed.setSelectionRange(searchQuery.length, searchQuery.length);
      }
    });

    document.querySelectorAll("[data-mssv-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeMssvFilter = btn.dataset.mssvFilter;
        selectedId = null;
        render();
      });
    });

    document.querySelector("#clear-history")?.addEventListener("click", () => {
      localStorage.removeItem(RESULTS_STORAGE_KEY);
      localStorage.removeItem(LATEST_RESULT_KEY);
      history = [];
      initResultsPage();
    });

    document.querySelectorAll("[data-view-result]").forEach((row) => {
      const openRow = () => {
        selectedId = row.dataset.viewResult;
        render();
        document.querySelector("#result-detail-card")?.scrollIntoView({ behavior: "smooth", block: "start" });
      };
      row.addEventListener("click", openRow);
      row.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openRow();
        }
      });
    });

    document.querySelector("#close-detail")?.addEventListener("click", () => {
      selectedId = null;
      render();
    });
  }

  render();
}

function initAuthPage() {
  const loginPanel = document.querySelector("#panel-login");
  const registerPanel = document.querySelector("#panel-register");
  if (!loginPanel || !registerPanel) return;

  function setMode(mode) {
    const isRegister = mode === "register";
    loginPanel.hidden = isRegister;
    registerPanel.hidden = !isRegister;
  }

  document.querySelectorAll("[data-auth-switch]").forEach((button) => {
    button.addEventListener("click", () => setMode(button.dataset.authSwitch));
  });

  document.querySelectorAll(".password-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const input = button.previousElementSibling;
      if (!input) return;
      const show = input.type === "password";
      input.type = show ? "text" : "password";
      button.textContent = show ? "Ẩn" : "Hiện";
      button.setAttribute("aria-label", show ? "Ẩn mật khẩu" : "Hiện mật khẩu");
    });
  });

  const loginForm = document.querySelector("#login-form");
  const registerForm = document.querySelector("#register-form");
  const forgotButton = document.querySelector("[data-forgot-password]");

  function setFeedback(form, message, type) {
    const feedback = form.querySelector(".auth-feedback");
    if (!feedback) return;
    feedback.textContent = message;
    feedback.classList.remove("good", "bad");
    if (type) feedback.classList.add(type);
  }

  forgotButton?.addEventListener("click", () => {
    if (loginForm) {
      setFeedback(loginForm, "Vui lòng liên hệ giảng viên hoặc quản trị viên Khoa CNTT để được cấp lại mật khẩu.", "good");
    }
  });

  loginForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = loginForm.username.value.trim();
    const password = loginForm.password.value;
    if (!username || !password) {
      setFeedback(loginForm, "Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.", "bad");
      return;
    }
    setFeedback(loginForm, `Xin chào ${username}! Thông tin đăng nhập hợp lệ (chế độ giao diện mẫu).`, "good");
  });

  registerForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const fullname = registerForm.fullname.value.trim();
    const level = registerForm.level.value;
    const email = registerForm.email.value.trim();
    const password = registerForm.password.value;
    const confirmPassword = registerForm.confirmPassword.value;

    if (!fullname || !level || !email || !password || !confirmPassword) {
      setFeedback(registerForm, "Vui lòng điền đầy đủ tất cả các thông tin đăng ký.", "bad");
      return;
    }
    if (password.length < 6) {
      setFeedback(registerForm, "Mật khẩu phải có ít nhất 6 ký tự.", "bad");
      return;
    }
    if (password !== confirmPassword) {
      setFeedback(registerForm, "Mật khẩu xác nhận chưa khớp.", "bad");
      return;
    }
    setFeedback(registerForm, `Đăng ký thành công cho ${fullname}! Bạn có thể chuyển sang liên kết Đăng nhập.`, "good");
  });

  const params = new URLSearchParams(window.location.search);
  if (window.location.hash === "#register" || params.get("mode") === "register") {
    setMode("register");
  }
}

initExamPage();
initResultsPage();
initAuthPage();
