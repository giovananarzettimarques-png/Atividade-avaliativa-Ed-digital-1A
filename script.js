// --- GESTÃO DE DADOS (ARRAY DE OBJETOS) ---
const festivais = [
    { nome: "Festival de Teatro de Curitiba", local: "Curitiba", desc: "Um dos maiores festivais de artes cênicas da América Latina." },
    { nome: "Festa Nacional do Carneiro no Buraco", local: "Campo Mourão", desc: "Tradicional evento gastronômico e cultural da região central." },
    { nome: "Festival Internacional de Londrina (FILO)", local: "Londrina", desc: "Referência em intercâmbio cultural e espetáculos internacionais." }
];

const faqs = [
    { pergunta: "Qual a melhor época para visitar?", resposta: "Entre junho e agosto para festivais de inverno e outubro para festas étnicas." },
    { pergunta: "Onde encontro o calendário oficial?", resposta: "No portal da Secretaria da Cultura do Estado do Paraná." }
];

// --- RENDERIZAÇÃO DINÂMICA ---
function initData() {
    const container = document.getElementById('festivais-container');
    festivais.forEach(fest => {
        container.innerHTML += `
            <article class="card">
                <h3>${fest.nome}</h3>
                <p><strong>Local:</strong> ${fest.local}</p>
                <p>${fest.desc}</p>
            </article>
        `;
    });

    const faqContainer = document.getElementById('accordion-container');
    faqs.forEach((item, index) => {
        faqContainer.innerHTML += `
            <div class="accordion-item">
                <button class="accordion-header" aria-expanded="false" onclick="toggleAccordion(this)">
                    ${item.pergunta}
                </button>
                <div class="accordion-content" style="display:none; padding:1rem;">
                    ${item.resposta}
                </div>
            </div>
        `;
    });
}

// --- ACESSIBILIDADE: FONTE E CONTRASTE ---
let currentFontSize = 100;
function changeFontSize(action) {
    currentFontSize += (action === 'increase' ? 10 : -10);
    document.documentElement.style.fontSize = `${currentFontSize}%`;
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// --- COMPONENTES: ACORDEÃO ---
function toggleAccordion(btn) {
    const content = btn.nextElementSibling;
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !isExpanded);
    content.style.display = isExpanded ? 'none' : 'block';
}

// --- ANIMAÇÃO DE SCROLL (REVEAL) ---
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if
