// Virtual Mix Simulation
const mixSlider = document.getElementById('mixSlider');
const beakerFill = document.getElementById('beakerFill');
mixSlider.addEventListener('input', () => {
  const pct = mixSlider.value;
  beakerFill.style.height = pct + '%';
  beakerFill.style.background = `rgba(255,136,0,${0.3 + pct/200})`;
});

// CO₂ Reduction Slider
const blendSlider = document.getElementById('blendSlider');
const blendPercent = document.getElementById('blendPercent');
const co2Reduction = document.getElementById('co2Reduction');
blendSlider.addEventListener('input', () => {
  const pct = blendSlider.value;
  blendPercent.textContent = pct;
  const maxSave = 78;
  co2Reduction.textContent = Math.round((pct/100) * maxSave);
});

// Quiz Logic
function checkAnswer(choice, idx) {
  const correct = ['Corn','Algae'];
  const resultEl = document.getElementById(`quiz${idx}`);
  if (choice === correct[idx]) {
    resultEl.textContent = '✅ Correct!';
    resultEl.style.color = 'green';
  } else {
    resultEl.textContent = '❌ Try again!';
    resultEl.style.color = 'red';
  }
}

// “Learn more” toggle (if you ever add one)
document.getElementById('learnMoreBtn')?.addEventListener('click', () => {
  document.getElementById('moreIntro')?.classList.toggle('hidden');
});

// Fun Facts Array
const funFacts = [
  "In Brazil, cars can run on 100% ethanol—no gasoline needed!",
  "Algae can produce 10–20 times more fuel per acre than corn.",
  "Used cooking oil once fried your fries—now it can fuel a car!",
  "Mixing just 10% ethanol into gasoline can cut CO₂ emissions by about 5%.",
  "Biodiesel is biodegradable and non-toxic—fish can swim in spills safely!"
];

// Show a random fun fact
function showFunFact() {
  const idx = Math.floor(Math.random() * funFacts.length);
  document.getElementById('funFactText').textContent = funFacts[idx];
}
