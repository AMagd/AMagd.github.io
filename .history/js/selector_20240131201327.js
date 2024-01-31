function updateSelectorWidth() {
    var elements = document.querySelectorAll('a');
    elements.forEach(function(aElement) {
        var aLeft = parseFloat(window.getComputedStyle(aElement).left);
        if (aLeft > 75 * window.innerWidth / 100) { // Check if left is greater than 75vw
            var strongElements = aElement.querySelectorAll('strong');
            strongElements.forEach(function(strongElement) {
                // Create a temporary element for measuring content width
                var temp = document.createElement('span');
                temp.style.visibility = 'hidden';
                temp.style.position = 'absolute';
                temp.style.whiteSpace = 'nowrap';
                temp.innerHTML = strongElement.innerHTML;

                // Copy font styles to match width accurately
                var computedStyle = window.getComputedStyle(strongElement);
                temp.style.fontSize = computedStyle.fontSize;
                temp.style.fontFamily = computedStyle.fontFamily;
                temp.style.fontWeight = computedStyle.fontWeight;
                temp.style.letterSpacing = computedStyle.letterSpacing;

                // Append to the DOM, measure, and remove
                document.body.appendChild(temp);
                var contentWidth = temp.offsetWidth * 0.93; // 90% of the content width
                document.body.removeChild(temp);

                strongElement.style.setProperty('--selector-width', -contentWidth + 'px');
                strongElement.style.setProperty('--selector-before-width', contentWidth + 5 + 'px');
            });
        }
    });
}

// Run the function on load and on window resize
window.addEventListener('load', updateSelectorWidth);
window.addEventListener('resize', updateSelectorWidth);
