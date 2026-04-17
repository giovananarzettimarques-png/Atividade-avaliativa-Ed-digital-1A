// Banco de Dados Complexo
const APP_DATA = {
    festivais: [
        { id: 1, nome: "Festival de Teatro", regiao: "curitiba", mes: "Março", tags: ["Cultura", "Artes"], desc: "O maior festival das artes cênicas do Brasil." },
        { id: 2, nome: "Festa do Carneiro no Buraco", regiao: "norte", mes: "Julho", tags: ["Gastronomia"], desc: "Tradição paranaense em Campo Mourão com pratos típicos." },
        { id: 3, nome: "Fandango Caiçara", regiao: "litoral", mes: "Agosto", tags: ["Música", "Dança"], desc: "Expressão cultural do litoral reconhecida pelo IPHAN." },
        { id: 4, nome: "Munchenfest", regiao: "campos", mes: "Novembro", tags: ["Tradição Alemã"], desc: "A grande festa do chopp em Ponta Grossa." }
    ],
    tradicoes: [
        { id: "t1", label: "Culinária", content: "O Barreado e o Pinhão são pilares da nossa identidade gastronômica." },
        { id: "t2", label: "Artesanato", content: "Cestarias em fibra de taquara e as famosas rendas de bilro do litoral." },
        { id: "t3", label: "Arquitetura", content: "A influência europeia (polonesa, ucraniana e alemã) em nossas casas de madeira." }
    ]
};

// Renderização de Cards com Filtro
function renderFestivals(filter = 'todos') {
    const grid = document.getElementById('grid-festivais');
    const filtered = filter === 'todos' ? APP_DATA.festivais : APP_DATA.festivais.filter(f => f.regiao === filter);
    
    grid.innerHTML = filtered.map(f => `
        <article class="festival-card reveal">
            <div class="card-body">
                <span class="badge">${f.mes}</span>
                <h3>${f.nome}</h3>
                <p>${f.desc}</p>
                <div style="margin-top:15px">
                    ${f.tags.map(t => `<small>#${t} </small>`).join('')}
                </div>
            </div>
        </article>
    `).join('');
}

// Sistema de Abas (Tabs)
function renderTabs() {
    const tabList = document.getElementById('tab-list');
    const tabPanels = document.getElementById('tab-panels');

    APP_DATA.tradicoes.forEach((t, index) => {
        const isSelected = index === 0;
        
        // Botões
        tabList.innerHTML += `
            <button role="tab" aria-selected="${isSelected}" aria-controls="panel-${t.id}" id="tab-${t.id}" onclick="switchTab(event, '${t.id}')">
                ${t.label}
            </button>
        `;

        // Painéis
        tabPanels.innerHTML += `
            <div id="panel-${t.id}" role="tabpanel" aria-labelledby="tab-${t.id}" ${isSelected ? '' : 'hidden'}>
                <p style="padding: 20px;">${t.content}</p>
            </div>
        `;
    });
}

function switchTab(e, id) {
    const parent = e.target.parentNode;
    parent.querySelectorAll('[role="tab"]').forEach(t => t.setAttribute('aria-selected', false));
    e.target.setAttribute('aria-selected', true);
    
    document.querySelectorAll('[role="tabpanel"]').forEach(p => p.hidden = true);
    document.getElementById(`panel-${id}`).hidden = false;
}

// Acessibilidade: Tema e Fonte
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

let fontScale = 100;
function adjustFont(type) {
    fontScale = type === 'inc' ? fontScale + 5 : fontScale - 5;
    document.documentElement.style.fontSize = `${fontScale}%`;
}

// Inicialização
window.addEventListener('DOMContentLoaded', () => {
    renderFestivals();
    renderTabs();
    
    // Observer para scroll reveal suave
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('active'); });
    });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
