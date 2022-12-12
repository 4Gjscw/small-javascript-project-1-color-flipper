const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const colorName = document.querySelector('.color');

btn.addEventListener('click', function () {
    const number = Math.floor(Math.random() * colors.length);
    colorName.textContent = colors[number];
    document.body.style.backgroundColor = colors[number];
});

btn.addEventListener('mouseenter', function (event) {
    event.target.style.backgroundColor = '#222222';
    event.target.style.color = '#ffffff';
});

btn.addEventListener('mouseleave', function (event) {
    event.target.style.backgroundColor = colorName.textContent;
    event.target.style.color = '#222222';
});