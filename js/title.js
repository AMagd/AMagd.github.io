document.addEventListener("DOMContentLoaded", function() {
    var liElements = document.querySelectorAll('.timeline .content__section .content__main li');
    liElements.forEach((li, index) => {
        if (index % 2 == 1) { // 0-based index, so even items will have odd indices
            li.style.cssText = "/* Your CSS styles here */";
        }
    });
});
