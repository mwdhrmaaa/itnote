import itTerms, { uiLabels } from './terms.js';

const termsGrid = document.getElementById('terms-grid');
const searchInput = document.getElementById('search-input');
const langSelect = document.getElementById('lang-select');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalDefinition = document.getElementById('modal-definition');

// UI Elements to localize
const uiTitle = document.getElementById('ui-title');
const uiSubtitle = document.getElementById('ui-subtitle');

let currentLang = 'en';

function updateUILabels() {
    const labels = uiLabels[currentLang];
    uiTitle.textContent = labels.title;
    uiSubtitle.textContent = labels.subtitle;
    searchInput.placeholder = labels.placeholder;
    
    // Handle RTL
    if (currentLang === 'ar') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
}

function renderTerms(filteredTerms) {
    termsGrid.innerHTML = '';
    
    if (filteredTerms.length === 0) {
        const labels = uiLabels[currentLang];
        termsGrid.innerHTML = `
            <div class="empty-state">
                <p>${labels.noResults}</p>
            </div>
        `;
        return;
    }

    filteredTerms.forEach(item => {
        const card = document.createElement('div');
        card.className = 'term-card';
        card.innerHTML = `
            <div class="term-header">
                <span class="term-title">${item.term[currentLang] || item.term['en']}</span>
                <span class="term-category">${item.category[currentLang] || item.category['en']}</span>
            </div>
            <p class="term-definition">${item.definition[currentLang] || item.definition['en']}</p>
        `;
        
        card.addEventListener('click', () => showDetails(item));
        termsGrid.appendChild(card);
    });
}

function showDetails(item) {
    modalTitle.textContent = item.term[currentLang] || item.term['en'];
    modalCategory.textContent = item.category[currentLang] || item.category['en'];
    modalDefinition.textContent = item.definition[currentLang] || item.definition['en'];
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function hideDetails() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function filterTerms() {
    const query = searchInput.value.toLowerCase();
    const filtered = itTerms.filter(item => {
        const term = (item.term[currentLang] || item.term['en']).toLowerCase();
        const def = (item.definition[currentLang] || item.definition['en']).toLowerCase();
        const cat = (item.category[currentLang] || item.category['en']).toLowerCase();
        return term.includes(query) || def.includes(query) || cat.includes(query);
    });
    renderTerms(filtered);
}

searchInput.addEventListener('input', filterTerms);

langSelect.addEventListener('change', (e) => {
    currentLang = e.target.value;
    updateUILabels();
    filterTerms();
});

closeModal.addEventListener('click', hideDetails);
modal.addEventListener('click', (e) => {
    if (e.target === modal) hideDetails();
});

// Initial render
updateUILabels();
renderTerms(itTerms);

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('SW Registered!', reg))
            .catch(err => console.log('SW Registration Failed!', err));
    });
}
