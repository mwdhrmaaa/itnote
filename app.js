import itTerms from './terms.js';

const termsGrid = document.getElementById('terms-grid');
const searchInput = document.getElementById('search-input');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalDefinition = document.getElementById('modal-definition');

function renderTerms(filteredTerms) {
    termsGrid.innerHTML = '';
    
    if (filteredTerms.length === 0) {
        termsGrid.innerHTML = `
            <div class="empty-state">
                <p>Istilah tidak ditemukan. Coba kata kunci lain.</p>
            </div>
        `;
        return;
    }

    filteredTerms.forEach(item => {
        const card = document.createElement('div');
        card.className = 'term-card';
        card.innerHTML = `
            <div class="term-header">
                <span class="term-title">${item.term}</span>
                <span class="term-category">${item.category}</span>
            </div>
            <p class="term-definition">${item.definition}</p>
        `;
        
        card.addEventListener('click', () => showDetails(item));
        termsGrid.appendChild(card);
    });
}

function showDetails(item) {
    modalTitle.textContent = item.term;
    modalCategory.textContent = item.category;
    modalDefinition.textContent = item.definition;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function hideDetails() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = itTerms.filter(item => 
        item.term.toLowerCase().includes(query) || 
        item.definition.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );
    renderTerms(filtered);
});

closeModal.addEventListener('click', hideDetails);
modal.addEventListener('click', (e) => {
    if (e.target === modal) hideDetails();
});

// Initial render
renderTerms(itTerms);
