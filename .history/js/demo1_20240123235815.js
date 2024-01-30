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
        sections.forEach((section, index) => {
            const bounds = section.getBoundingClientRect();
            const middleOfElement = bounds.top + bounds.height / 2;
            const middleOfViewport = window.innerHeight / 2;
            const isInMiddle = middleOfElement > middleOfViewport * 0.4 && middleOfElement < middleOfViewport * 0.6;

            if (isInMiddle) {
                console.log("Element in middle:", section);
                if (index === current) return;
                const direction = index > current;
                if (current >= 0) {
                    allentries[current].exit(direction ? 'down' : 'up');
                }
                allentries[index].enter(direction ? 'down' : 'up');
                current = index;
            }
        });
    }

    function initialCheckElementsOnScroll() {
        console.console("initial");
        sections.forEach((section, index) => {
            console.log("initialCheckElementsOnScroll");
            const lastChild = section.querySelector(':last-child');
            if (lastChild) {
                lastChild.style.opacity = '0';
            }
        });
        
    }

    document.addEventListener('DOMContentLoaded', () => {
        console.log("DOMContentLoaded");
        document.body.classList.remove('loading');
        sections.forEach(section => allentries.push(new Entry(section)));
        initialCheckElementsOnScroll(); // Run once on initial load
        window.addEventListener('scroll', checkElementsOnScroll);
    });
}
