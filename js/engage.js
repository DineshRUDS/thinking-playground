let currentCategory = null;
let currentChallenge = null;

const session = JSON.parse(
  sessionStorage.getItem("thinkingSession") ||
  '{"count":0,"categories":{}}'
);

function saveSession() {
  sessionStorage.setItem("thinkingSession", JSON.stringify(session));
}

function updateStatusChip() {
  const chip = document.getElementById("statusChip");

  // Don’t show too early
  if (session.count < 3) {
    chip.classList.add("hidden");
    return;
  }

  const topCategory = Object.entries(session.categories)
    .sort((a, b) => b[1] - a[1])[0]?.[0];

  chip.innerHTML = `🧠 Exploring <strong>${topCategory}</strong> • ${session.count} ideas`;
  chip.classList.remove("hidden");
}

function startCategory(category) {
  currentCategory = category;

  session.count += 1;
  session.categories[category] = (session.categories[category] || 0) + 1;
  saveSession();
  updateStatusChip();

  const list = window.DATA[category];
  if (!Array.isArray(list) || list.length === 0) return;

  currentChallenge = list[Math.floor(Math.random() * list.length)];

  document.getElementById("categoryGrid").style.display = "none";
  renderChallenge();
}

function renderChallenge() {
  document.getElementById("challengeTitle").innerText =
    currentChallenge.title || "Think about this";

  document.getElementById("challengeQuestion").innerText =
    currentChallenge.question;

  const optionsEl = document.getElementById("options");
  optionsEl.innerHTML = "";

  currentChallenge.options.forEach((opt) => {
    const btn = document.createElement("button");
    const label = typeof opt === "string" ? opt : opt.label;
    btn.innerText = label;
    btn.onclick = () => handleChoice(opt, btn);
    optionsEl.appendChild(btn);
  });

  document.getElementById("challengeArea").classList.remove("hidden");
  document.getElementById("reflectionBox").classList.add("hidden");
}

function handleChoice(option, btn) {
  document.querySelectorAll(".options button").forEach(b => {
    b.disabled = true;
    b.classList.remove("selected");
  });

  btn.classList.add("selected");

  const reaction = document.getElementById("reaction");
  const text = document.getElementById("reflectionText");

  if (currentCategory === "riddle") {
    const isCorrect = option === currentChallenge.correct;
    reaction.innerText = isCorrect ? "✨ Nice insight" : "🧠 Interesting choice";

    text.innerHTML = `
      <strong>Answer:</strong> ${currentChallenge.correct}<br><br>
      ${currentChallenge.explanation}<br><br>
      <em>${currentChallenge.cognitiveTrap}</em>
    `;
  } else {
    reaction.innerText = "💡 That makes sense";
    text.innerHTML = `
      ${option.insight}<br><br>
      <strong>Bigger picture:</strong><br>
      ${currentChallenge.metaInsight}
    `;
  }

  showReflection();
}

function showReflection() {
  const box = document.getElementById("reflectionBox");
  box.classList.remove("hidden");
  box.classList.remove("fade-in");
  void box.offsetWidth;
  box.classList.add("fade-in");
}

function nextInSameCategory() {
  startCategory(currentCategory);
}

function resetToCategories() {
  document.getElementById("challengeArea").classList.add("hidden");
  document.getElementById("categoryGrid").style.display = "grid";
}
