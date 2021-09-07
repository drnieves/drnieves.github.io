const app = document.getElementById("typewriter");
const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter.typeString("La capital mundial del llanero").pauseFor(200).start();
