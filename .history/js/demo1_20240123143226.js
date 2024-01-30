/**
 * demo1.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2018, Codrops
 * http://www.codrops.com
 */
{
    const chars = ['$','%','#','@','&','(',')','=','*','/'];
    const charsTotal = chars.length;
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    class Entry {
        constructor(el) {
            this.DOM = {el: el};
            this.DOM.image = this.DOM.el.querySelector('.content__img');
            this.DOM.title = {word: this.DOM.el.querySelector('.content__text')};
            charming(this.DOM.title.word);
            this.DOM.title.letters = Array.from(this.DOM.title.word.querySelectorAll('span'));
            this.DOM.title.letters.forEach(letter => letter.dataset.initial = letter.innerHTML);
            this.lettersTotal = this.DOM.title.letters.length;
            observer.observe(this.DOM.el);
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

    let observer;
    let current = -1;
    let allentries = [];
    const sections = Array.from(document.querySelectorAll('.content__section'));
    sections.forEach(section => allentries.push(new Entry(section)));

    const updateHighlightedText = () => {
        let closestToMiddle = null;
        let closestDistanceToMiddle = Infinity;
        let middleOfViewport = window.innerHeight / 2;

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const middleOfElement = rect.top + rect.height / 2;
            const distanceToMiddle = Math.abs(middleOfViewport - middleOfElement);

            if (distanceToMiddle < closestDistanceToMiddle) {
                closestDistanceToMiddle = distanceToMiddle;
                closestToMiddle = index;
            }
        });

        if (closestToMiddle !== null) {
            const textToHighlight = allentries[closestToMiddle].DOM.title.word;
            // Reset all texts to default style
            allentries.forEach(entry => entry.DOM.title.word.style.opacity = 0.5);
            // Highlight the text of the closest element
            textToHighlight.style.opacity = 1;
        }
    };

    // Initialize Intersection Observer
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                const index = sections.indexOf(entry.target);
                if (entry.isIntersecting) {
                    allentries[index].enter('down');
                } else {
                    allentries[index].exit('up');
                }
            }
        });
        updateHighlightedText(); // Call this function inside the observer callback
    }, { threshold: [0, 0.5, 1] });

    // Observe all sections
    sections.forEach(section => observer.observe(section));

    // Listen for scroll events to update text
    window.addEventListener('scroll', updateHighlightedText);
    window.addEventListener('resize', updateHighlightedText);

    // Initial call to set the highlighted text
    updateHighlightedText();
}