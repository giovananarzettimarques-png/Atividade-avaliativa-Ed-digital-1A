// ===========================
// Dados Dinâmicos
// ===========================
const festivais = [
  { titulo: "Festival de Teatro de Curitiba", descricao: "Um dos maiores eventos de artes cênicas da América Latina." },
  { titulo: "Festa da Uva de Colombo", descricao: "Celebração da imigração italiana com música, dança e gastronomia." },
  { titulo: "Festival de Música de Londrina", descricao: "Evento tradicional que reúne músicos e estudantes de todo o Brasil." }
];

// Renderização dos Cards
const container = document.getElementById("festivais-container");
festivais.forEach(f => {
  const card = document.createElement("article");
  card.className = "card reveal";
  card.setAttribute("role", "listitem");
  card.innerHTML = `<h3>${f.titulo}</h3><p>${f.descricao}</p>`;
  container.appendChild(card);
});

// ===========================
// Acessibilidade: Fonte
// ===========================
let fontSize = 100;
document.getElementById("increase-font").addEventListener("click", () => {
  fontSize += 10;
  document.body.style.fontSize = fontSize + "%";
});
document.getElementById("decrease-font").addEventListener("click", () => {
  fontSize = Math.max(80, fontSize - 10);
  document.body.style.fontSize = fontSize + "%";
});

// ===========================
// Alto Contraste
// ===========================
document.getElementById("toggle-contrast").addEventListener("click", (e) => {
  document.body.classList.toggle("high-contrast");
  e.target.setAttribute("aria-pressed", document.body.classList.contains("high-contrast"));
});

// ===========================
// Carrossel
// ===========================
const track = document.getElementById("carousel-track");
const imagens = ["img1.jpg", "img2.jpg", "img3.jpg"]; // substitua por imagens reais
imagens.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Imagem cultural do Paraná";
  track.appendChild(img);
});

let index = 0;
function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}
document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % imagens.length;
  updateCarousel();
});
document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + imagens.length) % imagens.length;
  updateCarousel();
});

// ===========================
// Accordion
// ===========================
const curiosidades = [
  { titulo: "Culinária típica", conteudo: "O barreado é um prato tradicional do litoral paranaense." },
  { titulo: "Artesanato", conteudo: "O pinhão inspira diversas peças artesanais." }
];

const accordion = document.getElementById("accordion");
curiosidades.forEach(c => {
  const item = document.createElement("div");
  item.className = "accordion-item";
  item.innerHTML = `
    <div class="accordion-header" tabindex="0">${c.titulo}</div>
    <div class="accordion-content">${c.conteudo}</div>
  `;
  accordion.appendChild(item);

  item.querySelector(".accordion-header").addEventListener("click", () => {
    const content = item.querySelector(".accordion-content");
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

// ===========================
// Scroll Reveal
// ===========================
function revealOnScroll() {
  document.querySelectorAll(".reveal").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el
