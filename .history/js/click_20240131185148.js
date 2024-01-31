document.addEventListener('DOMContentLoaded', function() {
    // Select all the strong span elements inside the timeline list items
    var projectTitles = document.querySelectorAll('.timeline > li > strong span');

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
