function updateSelectorWidth() {
    var elements = document.querySelectorAll('a');
    elements.forEach(function(aElement) {
        var aLeft = parseFloat(window.getComputedStyle(aElement).left);
        if (aLeft > 75 * window.innerWidth / 100) { // Check if left is greater than 75vw
            var strongElements = aElement.querySelectorAll('strong');
            strongElements.forEach(function(strongElement) {
                // ... existing code to create temp element and measure width ...

                var contentWidth = temp.offsetWidth - 5; // Subtract 5 pixels from the content width
                document.body.removeChild(temp);

                strongElement.style.setProperty('--selector-width', -contentWidth + 'px');
                strongElement.style.setProperty('--selector-before-width', contentWidth + 'px');
            });
        }
    });
}

// Run the function on load and on window resize
window.addEventListener('load', updateSelectorWidth);
window.addEventListener('resize', updateSelectorWidth);
