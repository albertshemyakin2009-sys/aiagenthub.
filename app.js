document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("agents");
  fetch("agents/agents.json")
    .then(res => res.json())
    .then(data => {
      data.forEach(agent => {
        const card = document.createElement("div");
        card.className = "agent-card";
        card.innerHTML = `
          <h3>${agent.name}</h3>
          <p>${agent.description}</p>
          <button>Купить за 0₽</button>
        `;
        container.appendChild(card);
      });
    });
});
