document.addEventListener('DOMContentLoaded', function() {
    // Select all the strong span elements inside the timeline list items
    var projectTitles = document.querySelectorAll('.timeline > li > strong span');

    projectTitles.forEach(function(titleSpan) {
        // Get the project description related to this title span
        var projectDescription = titleSpan.parentNode.nextElementSibling;

        // If the project description is meant to be hidden initially, set its display to 'none'
        if (projectDescription.classList.contains('initially-hidden')) {
            projectDescription.style.display = 'none';
        }

        // Add click event listener to the title span
        titleSpan.addEventListener('click', function() {
            // Toggle the visibility of the project description
            projectDescription.style.display = projectDescription.style.display === 'none' ? 'block' : 'none';
        });
    });
});
