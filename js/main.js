let randomQuote = document.querySelector('#random-quote');
let quoteText = randomQuote.textContent;
randomQuote.textContent = "";
let newDom = '';
let animationDelay = 50;

console.log('Zitattext: ' + quoteText);

for(let i = 0; i < quoteText.length; i++) {
    newDom += '<span class="char">' + (quoteText[i] === ' ' ? '&nbsp;' : quoteText[i]) + '</span>';
}

randomQuote.innerHTML = newDom;
let length = randomQuote.children.length;

for(let i = 0; i < length; i++) {
    randomQuote.children[i].style['animation-delay'] = animationDelay * i + 'ms';
}

let wordStart = quoteText.indexOf("Münze");
let wordLength = "Münze".length;

console.log('Position des Wortes "Münze": ' + wordStart);

if(wordStart !== -1) {
    setTimeout(() => {
        for(let i = wordStart; i < wordStart + wordLength; i++) {
            randomQuote.children[i].classList.add('strikethrough');
        }
    }, animationDelay * (wordStart + wordLength) + 1000);
}


