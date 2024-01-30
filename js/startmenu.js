document.addEventListener('DOMContentLoaded', function() {
    // Get the middle row element
    var middleRow = document.getElementById('middle-row');
    
    // Fill out the middle row with links from a JSON array
    var links = [
        { name: 'Link 1', url: 'https://example.com/1' },
        { name: 'Link 2', url: 'https://example.com/2' },
        // Add more links as needed
    ];
    links.forEach(function(link) {
        var a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.name;
        a.addEventListener('click', function() {
            // Hide the start menu overlay when a link is clicked
            startMenuOverlay.style.display = 'none';
        });
        middleRow.appendChild(a);
    });

    // Get the start button element
    var startButton = document.getElementById('start-button-section');

    // Get the start menu overlay element
    var startMenuOverlay = document.getElementById('start-menu-overlay');

    // Initially hide the start menu overlay
    startMenuOverlay.style.display = 'none';

    // Add a click event listener to the start button
    startButton.addEventListener('click', function() {
        // Toggle the start menu overlay
        if (startMenuOverlay.style.display === 'none') {
            startMenuOverlay.style.display = 'flex';
        } else {
            startMenuOverlay.style.display = 'none';
        }
    });
});