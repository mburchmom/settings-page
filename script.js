document.getElementById('menu-toggle').addEventListener('click', function() {
    let sidebar = document.getElementById('sidebar');
    sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
});

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.settings-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');

    // Close the sidebar after selection (for mobile)
    let sidebar = document.getElementById('sidebar');
    if (window.innerWidth <= 768) { // Only close on small screens
        sidebar.style.display = 'none';
    }
}

// Close menu when clicking outside (optional)
document.addEventListener('click', function(event) {
    let sidebar = document.getElementById('sidebar');
    let menuToggle = document.getElementById('menu-toggle');

    if (window.innerWidth <= 768) {
        if (sidebar.style.display === 'block' && !sidebar.contains(event.target) && event.target !== menuToggle) {
            sidebar.style.display = 'none';
        }
    }
});
