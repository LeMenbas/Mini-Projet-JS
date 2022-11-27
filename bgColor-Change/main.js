const button = document.querySelector('button')
const colors = ["green", "red", "blue", "yellow","grey"]
const color = document.querySelector('.color')
const main = document.querySelector('main')

button.addEventListener('click', function() {
    const numRandom = getRandomNumber();
    console.log(numRandom)
    main.style.backgroundColor = colors[numRandom];
    color.textContent = colors[numRandom]
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
};