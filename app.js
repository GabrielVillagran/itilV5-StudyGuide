
function renderQuiz(containerId, quizKey) {
  const container = document.getElementById(containerId);
  if (!container || !quizzes[quizKey]) return;

  const questions = quizzes[quizKey];
  const form = document.createElement("form");
  form.className = "quiz-form";

  questions.forEach((item, index) => {
    const block = document.createElement("div");
    block.className = "quiz-question";

    const title = document.createElement("p");
    title.textContent = `${index + 1}. ${item.question}`;
    block.appendChild(title);

    item.options.forEach((option, optionIndex) => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="radio" name="${quizKey}-${index}" value="${optionIndex}"> ${option}`;
      block.appendChild(label);
    });

    form.appendChild(block);
  });

  const actions = document.createElement("div");
  actions.className = "quiz-actions";

  const submit = document.createElement("button");
  submit.type = "submit";
  submit.className = "button primary";
  submit.textContent = "Calificar quiz";

  const reset = document.createElement("button");
  reset.type = "button";
  reset.className = "button secondary";
  reset.textContent = "Reiniciar";

  actions.appendChild(submit);
  actions.appendChild(reset);
  form.appendChild(actions);

  const result = document.createElement("div");
  result.className = "quiz-result";

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let score = 0;
    const review = [];

    questions.forEach((item, index) => {
      const selected = form.querySelector(`input[name="${quizKey}-${index}"]:checked`);
      const selectedValue = selected ? Number(selected.value) : null;

      if (selectedValue === item.answer) {
        score++;
      } else {
        review.push({
          number: index + 1,
          correct: item.options[item.answer],
          explanation: item.explanation
        });
      }
    });

    const percent = Math.round((score / questions.length) * 100);
    result.className = `quiz-result show ${percent >= 80 ? "good" : "review"}`;

    result.innerHTML = `
      <h3>Resultado: ${score}/${questions.length} (${percent}%)</h3>
      <p>${percent >= 80 ? "Buen resultado. Puedes avanzar o reforzar con escenarios más difíciles." : "Repasa los conceptos y vuelve a intentarlo antes de avanzar."}</p>
      ${review.length ? `
        <h4>Revisión</h4>
        <ol class="answer-review">
          ${review.map(item => `<li><strong>Pregunta ${item.number}:</strong> respuesta correcta: ${item.correct}. ${item.explanation}</li>`).join("")}
        </ol>
      ` : ""}
    `;

    result.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  reset.addEventListener("click", () => {
    form.reset();
    result.className = "quiz-result";
    result.innerHTML = "";
  });

  container.appendChild(form);
  container.appendChild(result);
}

document.addEventListener("DOMContentLoaded", () => {
  Object.keys(quizzes).forEach(key => renderQuiz(`quiz-${key}`, key));

  const mobileMenu = document.getElementById("mobileMenu");
  const sidebar = document.getElementById("sidebar");

  mobileMenu?.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  sidebar?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => sidebar.classList.remove("open"));
  });
});
