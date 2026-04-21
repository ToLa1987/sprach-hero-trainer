window.app = {
  renderDashboard() {
    import("./src/pages/Dashboard.js").then(m => {
      document.getElementById("app").innerHTML = "";
      document.getElementById("app").appendChild(m.default());
    });
  },
  renderTrainer() {
    import("./src/pages/Trainer.js").then(m => {
      document.getElementById("app").innerHTML = "";
      document.getElementById("app").appendChild(m.default());
    });
  },
  renderStory() {
    import("./src/pages/StoryMode.js").then(m => {
      document.getElementById("app").innerHTML = "";
      document.getElementById("app").appendChild(m.default());
    });
  },
  renderImport() {
    import("./src/pages/Import.js").then(m => {
      document.getElementById("app").innerHTML = "";
      document.getElementById("app").appendChild(m.default());
    });
  }
};

window.onhashchange = () => {
  const route = location.hash.replace("#/", "");
  if (route === "trainer") app.renderTrainer();
  else if (route === "story") app.renderStory();
  else if (route === "import") app.renderImport();
  else app.renderDashboard();
};

window.onload = () => app.renderDashboard();
