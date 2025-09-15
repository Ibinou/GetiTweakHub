// Script pour l'accordéon FAQ
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les éléments accordéon
    const accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(accordion => {
        const question = accordion.querySelector('.accordion__question');
        const answer = accordion.querySelector('.accordion__answer');
        
        // Masquer toutes les réponses au chargement
        answer.style.display = 'none';
        answer.style.maxHeight = '0';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'max-height 0.3s ease-out, padding 0.3s ease-out';
        
        // Ajouter un curseur pointer sur les questions
        question.style.cursor = 'pointer';
        
        // Ajouter l'événement click
        question.addEventListener('click', function() {
            const isOpen = answer.style.display === 'block';
            
            if (isOpen) {
                // Fermer l'accordéon
                answer.style.maxHeight = '0';
                setTimeout(() => {
                    answer.style.display = 'none';
                }, 300);
                question.style.fontWeight = 'normal';
            } else {
                // Ouvrir l'accordéon
                answer.style.padding = '10px';
                answer.style.display = 'block';
                answer.style.maxHeight = answer.scrollHeight + 'px';
                question.style.fontWeight = 'bold';
            }
        });
        
        // Effet hover sur les questions
        question.addEventListener('mouseenter', function() {
            question.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
            question.style.borderRadius = '8px';
            question.style.transition = 'background-color 0.2s ease';
        });
        
        question.addEventListener('mouseleave', function() {
            question.style.backgroundColor = 'transparent';
        });
    });
});


function initAccordionExclusive() {
    document.addEventListener('DOMContentLoaded', function() {
        const accordions = document.querySelectorAll('.accordion');
        
        accordions.forEach((accordion, index) => {
            const question = accordion.querySelector('.accordion__question');
            const answer = accordion.querySelector('.accordion__answer');
            
            // Configuration initiale
            answer.style.display = 'none';
            answer.style.maxHeight = '0';
            answer.style.overflow = 'hidden';
            answer.style.transition = 'max-height 0.3s ease-out';
            question.style.cursor = 'pointer';
            
            question.addEventListener('click', function() {
                const isCurrentlyOpen = answer.style.display === 'block';
                
                // Fermer tous les autres accordéons
                accordions.forEach((otherAccordion, otherIndex) => {
                    if (otherIndex !== index) {
                        const otherAnswer = otherAccordion.querySelector('.accordion__answer');
                        const otherArrow = otherAccordion.querySelector('.accordion__question span');
                        const otherQuestion = otherAccordion.querySelector('.accordion__question');
                        
                        otherAnswer.style.maxHeight = '0';
                        setTimeout(() => {
                            otherAnswer.style.display = 'none';
                        }, 300);
                        otherQuestion.style.fontWeight = 'normal';
                    }
                });
                
                // Toggle l'accordéon actuel
                if (isCurrentlyOpen) {
                    answer.style.maxHeight = '0';
                    setTimeout(() => {
                        answer.style.display = 'none';
                    }, 300);
                    question.style.fontWeight = 'normal';
                } else {
                    answer.style.padding = '10px';
                    answer.style.display = 'block';
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    question.style.fontWeight = 'bold';
                }
            });
            
            // Effet hover
            question.addEventListener('mouseenter', function() {
                question.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
                question.style.borderRadius = '8px';
                question.style.transition = 'background-color 0.2s ease';
            });
            
            question.addEventListener('mouseleave', function() {
                question.style.backgroundColor = 'transparent';
            });
        });
    });
}
