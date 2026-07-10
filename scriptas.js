const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.95)";
    } else {
        header.style.background = "rgba(0,0,0,0.6)";
    }
});

const btn = document.querySelector('.btn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closePopup');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
});