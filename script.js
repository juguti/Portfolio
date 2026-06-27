// Attendre que le contenu de la page soit chargé
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mise à jour automatique de l'année dans le footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Petit effet : afficher une alerte ou agrandir au clic (optionnel)
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            // Tu peux ajouter ici une logique pour ouvrir une modale par exemple
            // console.log("Projet cliqué !");
        });
    });

});