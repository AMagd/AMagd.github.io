/**
 * Revised demo1.js
 */
{
    const chars = ['$','%','#','@','&','(',')','=','*','/'];
    const charsTotal = chars.length;
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    class Entry {
        constructor(el) {
            this.DOM = {el: el};
            this.DOM.title = {word: this.DOM.el.querySelector('.content__text')};
            charming(this.DOM.title.word);
            this.DOM.title.letters = Array.from(this.DOM.title.word.querySelectorAll('span'));
            this.DOM.title.letters.forEach(letter => letter.dataset.initial = letter.innerHTML);
            this.lettersTotal = this.DOM.title.letters.length;
        }  
        enter(direction = 'down') {
            this.DOM.title.word.style.opacity = 1;
            this.timeouts = [];
            this.complete = false;
            let cnt = 0;
            this.DOM.title.letters.forEach((letter, pos) => {
                const timeout = setTimeout(() => {
                    letter.innerHTML = chars[getRandomInt(0,charsTotal-1)];
                    setTimeout(() => {
                        letter.innerHTML = letter.dataset.initial;
                        ++cnt;
                        if ( cnt === this.lettersTotal ) {
                            this.complete = true;
                        }
                    }, 100);
                }, pos*80);
                this.timeouts.push(timeout);
            });
        }
        exit(direction = 'down') {
            this.DOM.title.word.style.opacity = 0;
            if ( this.complete ) return;
            for ( let i = 0, len = this.timeouts.length; i <= len - 1; ++i ) {
                clearTimeout(this.timeouts[i]);
            }
        }  
    }

    let current = -1;
    let allentries = [];
    const sections = Array.from(document.querySelectorAll('.content__section'));

    function checkElementsOnScroll() {
        console.log("checkElementsOnScroll");
        sections.forEach((section, index) => {
            const bounds = section.getBoundingClientRect();
            const middleOfElement = bounds.top + bounds.height / 2;
            const middleOfViewport = window.innerHeight / 2;
            const isInMiddle = middleOfElement > middleOfViewport * 0.3 && middleOfElement < middleOfViewport * 0.7;
            console.log("section", section);
            console.log("bounds", bounds);
            console.log("isInMiddle", isInMiddle);
    
            if (isInMiddle) {
                // Get the text content of the current and new section's .content__text element
                const newText = section.querySelector('.content__text').textContent.trim();
                const currentText = current !== -1 ? sections[current].querySelector('.content__text').textContent.trim() : '';
    
                // Check if the new section's text is different from the current one
                if (index !== current && newText !== currentText) {
                    const direction = index > current;
                    if (current >= 0) {
                        allentries[current].exit(direction ? 'down' : 'up');
                    }
                    allentries[index].enter(direction ? 'down' : 'up');
                    current = index;
                }
            }
        });
    }
    

    function initialCheckElementsOnScroll() {
        console.log("initial");
        console.log("sections", sections);
        sections.forEach((section, index) => {
            const textElement = section.querySelector('.content__text');
            if (textElement) {
                textElement.style.opacity = '0';
            }
        });
        
        
    }

    document.addEventListener('DOMContentLoaded', () => {
        console.log("window innerHeight", window.innerHeight);
        document.body.classList.remove('loading');
        sections.forEach(section => allentries.push(new Entry(section)));
        initialCheckElementsOnScroll(); // Run once on initial load
        window.addEventListener('scroll', checkElementsOnScroll);
    });
}
