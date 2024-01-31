document.addEventListener('DOMContentLoaded', function() {
    // Select all the strong span elements inside the timeline list items
    var projectTitles = document.querySelectorAll('.timeline > li');

    projectTitles.forEach(function(title) {
        // Add click event listener to each title
        title.addEventListener('click', function() {
            // Find the project description related to the clicked title
            var projectDescription = this.closest('li').querySelector('.project-description');

            if (projectDescription) {
                // Check if the element is initially hidden by CSS and has no inline display style
                if (projectDescription.classList.contains('hidden') && projectDescription.style.display === '') {
                    projectDescription.style.display = 'block'; // Show it
                    projectDescription.classList.remove('hidden'); // Remove the 'hidden' class
                } else {
                    // Toggle the visibility of the project description
                    projectDescription.style.display = projectDescription.style.display === 'none' ? 'block' : 'none';
                }
            }
        });
    });
});
