
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.navbar__link');

    function showSection(id) {
        sections.forEach(section => {
            section.style.display = section.id === id ? 'block' : 'none';
        });
    }

    // Show the first section by default
    showSection('about');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').replace('#', '');
            if (document.getElementById(targetId)) {
                e.preventDefault();
                showSection(targetId);
                // Optionally update the URL hash
                history.pushState(null, '', '#' + targetId);
            }
        });
    });

    // Handle browser navigation (back/forward)
    window.addEventListener('popstate', function () {
        const hash = location.hash.replace('#', '') || 'about';
        showSection(hash);
    });
});