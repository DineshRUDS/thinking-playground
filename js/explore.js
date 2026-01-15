// GLOBAL function (required for inline onclick)
function loadExplore() {
  const container = document.getElementById("exploreCards");

  if (!container) {
    console.error("Explore container not found");
    return;
  }

  if (!window.DATA || !Array.isArray(DATA.explore)) {
    container.innerHTML =
      "<div class='card'>Explore data is unavailable.</div>";
    return;
  }

  // Clear current cards
  container.innerHTML = "";

  // Shuffle ideas
  const ideas = DATA.explore
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  // Render cards
  ideas.forEach((idea) => {
    const card = document.createElement("div");
    card.className = "card fade-in";
    card.textContent = idea;
    container.appendChild(card);
  });
}

// Initial load (works even without DOMContentLoaded edge cases)
loadExplore();
