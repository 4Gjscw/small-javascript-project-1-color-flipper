const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const colorName = document.querySelector('.color');


btn.addEventListener('click', function () {
    let randomColor = '#';
    for (let i = 0; i < 6; i++) {
        const randomEl = hex[Math.floor(Math.random() * hex.length)];
        randomColor += randomEl;
    };
    colorName.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
});

// Another way to generate the color:
//btn.addEventListener('click', function () {
//     const randomNum = Math.floor(Math.random()*16777215).toString(16);
//     const randomColor = `#${randomNum.padStart(6, 0).toUpperCase()}`;
//     colorName.textContent = randomColor;
//     document.body.style.backgroundColor = randomColor;
// });

btn.addEventListener('mouseenter', function (event) {
    event.target.style.backgroundColor = '#222222';
    event.target.style.color = '#ffffff';
});

btn.addEventListener('mouseleave', function (event) {
    event.target.style.backgroundColor = colorName.textContent;
    event.target.style.color = '#222222';
});