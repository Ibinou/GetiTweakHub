// Script pour l'accordéon FAQ 
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les éléments accordéon
    const accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(accordion => {
        const question = accordion.querySelector('.accordion__question');
        const answer = accordion.querySelector('.accordion__answer');
        
        accordion.classList.remove('active');
        
        // Ajouter l'événement click
        question.addEventListener('click', function() {
            const isOpen = accordion.classList.contains('active');
            
            if (isOpen) {
                // Fermer l'accordéon
                accordion.classList.remove('active');
            } else {
                // Ouvrir l'accordéon
                accordion.classList.add('active');
            }
        });
    });
});

