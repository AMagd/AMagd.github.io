function updateSelectorWidth() {
    var elements = document.querySelectorAll('a');
    elements.forEach(function(aElement) {
        var aLeft = parseFloat(window.getComputedStyle(aElement).left);
        if (aLeft > 75 * window.innerWidth / 100) { // Check if left is greater than 75vw
            var strongElements = aElement.querySelectorAll('strong');
            strongElements.forEach(function(strongElement) {
                var width = strongElement.offsetWidth;
                strongElement.style.setProperty('--selector-width', -width + 'px');
                strongElement.style.setProperty('--selector-before-width', width + 'px'); // Opposite sign for before pseudo-element
            });
        }
    });
}

// Run the function on load and on window resize
window.addEventListener('load', updateSelectorWidth);
window.addEventListener('resize', updateSelectorWidth);
