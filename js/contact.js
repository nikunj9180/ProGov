const btn = document.getElementById('contact-btn');
const btn2 = document.getElementById('submit');
const card =document.getElementById('contact-form')


btn.addEventListener('click', () => {
   card.classList.add("active");
});


btn2.addEventListener('click', () => {
   card.classList.remove("active");
});