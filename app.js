const questions = [
  {
    question: "Thiết bị nào được xem là “bộ não” của máy tính?",
    answers: ["RAM", "CPU", "Ổ cứng", "Bàn phím"],
    correct: 1,
    explanation: "CPU xử lý lệnh và điều phối hoạt động của các thành phần trong máy tính."
  },
  {
    question: "Đơn vị nào thường dùng để đo dung lượng bộ nhớ?",
    answers: ["Pixel", "Hertz", "Byte", "Volt"],
    correct: 2,
    explanation: "Byte và các bội số như KB, MB, GB được dùng để biểu thị dung lượng dữ liệu."
  },
  {
    question: "Phím tắt nào thường dùng để sao chép văn bản đã chọn?",
    answers: ["Ctrl + C", "Ctrl + V", "Ctrl + Z", "Ctrl + S"],
    correct: 0,
    explanation: "Ctrl + C sao chép nội dung đã chọn vào bộ nhớ tạm."
  },
  {
    question: "Phần mềm nào sau đây là một trình duyệt web?",
    answers: ["Microsoft Excel", "Google Chrome", "Adobe Photoshop", "Windows Explorer"],
    correct: 1,
    explanation: "Google Chrome là trình duyệt dùng để truy cập và xem các trang web."
  },
  {
    question: "Mật khẩu nào an toàn hơn?",
    answers: ["12345678", "nguyenvana", "password", "MuaHe!2026xanh"],
    correct: 3,
    explanation: "Mật khẩu dài, khó đoán và kết hợp nhiều loại ký tự sẽ an toàn hơn."
  }
];

const quizDialog = document.querySelector("#quiz-dialog");
const quizContent = document.querySelector("#quiz-content");
const startQuizButton = document.querySelector("#start-quiz");
const closeQuizButton = document.querySelector("#close-quiz");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
let currentQuestion = 0;
let score = 0;
let answered = false;

function renderQuestion() {
  const item = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const letters = ["A", "B", "C", "D"];

  quizContent.innerHTML = `
    <div class="quiz-progress-label"><span>Câu ${currentQuestion + 1} / ${questions.length}</span><span>${Math.round(progress)}%</span></div>
    <div class="progress-track" role="progressbar" aria-label="Tiến độ bài kiểm tra" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(progress)}"><div class="progress-fill" style="width:${progress}%"></div></div>
    <h2 class="quiz-question">${item.question}</h2>
    <div class="answer-list">${item.answers.map((answer, index) => `
      <button class="answer-option" type="button" data-answer="${index}">
        <span class="answer-letter">${letters[index]}</span><span>${answer}</span>
      </button>`).join("")}
    </div>
    <div class="quiz-feedback" role="status" aria-live="polite"></div>
    <button class="button quiz-next" type="button" disabled>${currentQuestion === questions.length - 1 ? "Xem kết quả" : "Câu tiếp theo"} <span aria-hidden="true">→</span></button>
  `;

  quizContent.querySelectorAll(".answer-option").forEach((button) => {
    button.addEventListener("click", () => selectAnswer(Number(button.dataset.answer)));
  });
  quizContent.querySelector(".quiz-next").addEventListener("click", nextQuestion);
}

function selectAnswer(index) {
  if (answered) return;
  answered = true;
  const item = questions[currentQuestion];
  const options = quizContent.querySelectorAll(".answer-option");
  const feedback = quizContent.querySelector(".quiz-feedback");

  options.forEach((option, optionIndex) => {
    option.disabled = true;
    if (optionIndex === item.correct) option.classList.add("correct");
  });

  if (index === item.correct) {
    score += 1;
    feedback.textContent = `Chính xác! ${item.explanation}`;
    feedback.classList.add("good");
  } else {
    options[index].classList.add("incorrect");
    feedback.textContent = `Chưa chính xác. ${item.explanation}`;
    feedback.classList.add("bad");
  }
  quizContent.querySelector(".quiz-next").disabled = false;
}

function nextQuestion() {
  if (!answered) return;
  if (currentQuestion === questions.length - 1) {
    renderResult();
    return;
  }
  currentQuestion += 1;
  answered = false;
  renderQuestion();
}

function renderResult() {
  const percentage = Math.round((score / questions.length) * 100);
  const message = score === questions.length
    ? "Xuất sắc! Bạn đã nắm rất vững kiến thức cơ bản."
    : score >= 3
      ? "Làm tốt lắm! Tiếp tục ôn tập để nhớ lâu hơn nhé."
      : "Đừng nản nhé — xem lại bài học rồi thử sức lần nữa!";

  quizContent.innerHTML = `
    <div class="quiz-result">
      <div class="result-icon" aria-hidden="true">${score >= 3 ? "✦" : "✓"}</div>
      <div class="section-kicker">HOÀN THÀNH BÀI KIỂM TRA</div>
      <h2>${score === questions.length ? "Tuyệt vời!" : "Bạn đã hoàn thành!"}</h2>
      <div class="result-score">${score}<span style="color:#a1a7b9;font-size:18px"> / ${questions.length}</span></div>
      <p>${message}<br>Điểm của bạn: ${percentage}%</p>
      <button class="button quiz-restart" type="button">Làm lại bài kiểm tra <span aria-hidden="true">↻</span></button>
    </div>
  `;
  quizContent.querySelector(".quiz-restart").addEventListener("click", startQuiz);
}

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  answered = false;
  renderQuestion();
  if (!quizDialog.open) quizDialog.showModal();
}

startQuizButton.addEventListener("click", startQuiz);
closeQuizButton.addEventListener("click", () => quizDialog.close());
quizDialog.addEventListener("click", (event) => {
  if (event.target === quizDialog) quizDialog.close();
});
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
