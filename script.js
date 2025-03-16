// Add hover effects to folder icons
document.querySelectorAll('.folder').forEach(folder => {
    folder.addEventListener('mouseenter', () => {
        folder.style.background = 'rgba(0, 255, 0, 0.2)';
    });
    folder.addEventListener('mouseleave', () => {
        folder.style.background = 'rgba(0, 255, 0, 0.1)';
    });
});
