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
            observer.observe(this.DOM.el); // No change here
        }  
        enter(direction = 'down') {
            // No change in the enter method
            this.DOM.title.word.style.opacity = 1;
            
            // ...
        }
        exit(direction = 'down') {
            // No change in the exit method
            this.DOM.title.word.style.opacity = 0;
            
            // ...
        }  
    }

    let observer;
    let current = -1;
    let allentries = [];
    const sections = Array.from(document.querySelectorAll('.content__section'));
    // Preload all the images in the page..
	imagesLoaded(document.querySelectorAll('.content__img'), () => {
        // No change here
        document.body.classList.remove('loading');
        if ('IntersectionObserver' in window) {
            // No change here
            document.body.classList.add('ioapi');

            // Modified observer initialization
            observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    // Dynamically calculate the rootMargin for each section based on its height
                    const targetHeight = entry.target.clientHeight;
                    const viewportHeight = window.innerHeight;
                    const margin = (viewportHeight - targetHeight) / 2;
                    const marginPercentage = (margin / viewportHeight) * 100;
                    observer.rootMargin = `-${marginPercentage}% 0px -${marginPercentage}% 0px`; // Added: Dynamic rootMargin calculation

                    if (entry.isIntersecting) {
                        // No change in the logic inside
                        const newcurrent = sections.indexOf(entry.target);
                        if (newcurrent === current) return;
                        const direction = newcurrent > current;
                        if (current >= 0) {
                            allentries[current].exit(direction ? 'down' : 'up');
                        }
                        allentries[newcurrent].enter(direction ? 'down' : 'up');
                        current = newcurrent;
                    }
                });
            }, { threshold: 0.5 }); // Kept the threshold; may need fine-tuning
            
            sections.forEach(section => allentries.push(new Entry(section))); // No change here
        }
    });

    // Added: Window resize event listener to handle dynamic resizing
    window.addEventListener('resize', () => {
        sections.forEach(section => {
            const targetHeight = section.clientHeight;
            const viewportHeight = window.innerHeight;
            const margin = (viewportHeight - targetHeight) / 2;
            const marginPercentage = (margin / viewportHeight) * 100;
            observer.rootMargin = `-${marginPercentage}% 0px -${marginPercentage}% 0px`;
        });
    });
}
