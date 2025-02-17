function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.settings-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
}

// Show Profile section by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('profile');
});
