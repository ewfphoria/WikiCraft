function showConstructionMessage(section) {
    const modal = document.getElementById('constructionModal');
    const sectionName = document.getElementById('sectionName');
    
    sectionName.textContent = section;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('constructionModal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('constructionModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');
    
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function() {
            if (searchInput.value.trim() !== '') {
                alert('Buscando por: ' + searchInput.value);
                searchInput.value = '';
            } else {
                alert('Por favor, digite algo para buscar');
            }
        });
        
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter' && searchInput.value.trim() !== '') {
                searchButton.click();
            }
        });
    }
    
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
});
