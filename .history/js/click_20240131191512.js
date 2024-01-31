document.addEventListener('DOMContentLoaded', function() {
    // Select all the strong span elements inside the timeline list items
    var projectTitles = document.querySelectorAll('.timeline > li');

    projectTitles.forEach(function(titleSpan) {
        // Get the project description related to this title span
        var projectDescription = titleSpan.parentNode.nextElementSibling;

        // Set the initial display state based on the presence of the 'hidden' class
        if (projectDescription.classList.contains('hidden')) {
            projectDescription.style.display = 'none';
        } else {
            projectDescription.style.display = 'block';
        }

        // Add click event listener to the title span
        titleSpan.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent event from bubbling up to parent elements
            // Toggle the visibility of the project description
            if (projectDescription.style.display === 'none') {
                projectDescription.style.display = 'block';
            } else {
                projectDescription.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Select all the strong span elements inside the timeline list items
    var projectTitles = document.querySelectorAll('.timeline > li');

    projectTitles.forEach(function(title) {
        // Add click event listener to each title
        title.addEventListener('click', function() {
            // Find the project description related to the clicked title
            var projectDescription = this.closest('li').querySelector('.project-description');

            if (projectDescription) {
                // Toggle the visibility of the project description
                projectDescription.style.display = projectDescription.style.display === 'none' ? 'block' : 'none';
            }
        });
    });
});
