document.querySelectorAll('.faq-item').forEach(item => {
    const summary = item.querySelector('.faq-question');
    const wrapper = item.querySelector('.faq-answer-wrapper');

    summary.addEventListener('click', (e) => {
        // 1. On bloque l'ouverture/fermeture instantanée du navigateur
        e.preventDefault();

        // 2. Si c'est déjà ouvert, on ferme avec animation
        if (item.hasAttribute('open')) {
            wrapper.style.gridTemplateRows = '0fr';
            wrapper.style.opacity = '0';
            
            // On attend la fin de la transition CSS (300ms) pour supprimer l'attribut
            setTimeout(() => {
                item.removeAttribute('open');
            }, 300);
        } 
        // 3. Si c'est fermé, on ouvre avec animation
        else {
            item.setAttribute('open', '');
                    
            // On laisse un très court délai au navigateur pour appliquer l'attribut avant d'animer
            requestAnimationFrame(() => {
                wrapper.style.gridTemplateRows = '1fr';
                wrapper.style.opacity = '1';
            });
        }
    });
});