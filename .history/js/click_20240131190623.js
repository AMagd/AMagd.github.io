document.querySelectorAll('.timeline > li').forEach(item => {
    item.addEventListener('click', event => {
        let projectDesc = event.target.parentNode.nextElementSibling;
        if (projectDesc.style.display === 'none' || projectDesc.style.display === '') {
            projectDesc.style.display = 'block';
        } else {
            projectDesc.style.display = 'none';
        }
    });
});
