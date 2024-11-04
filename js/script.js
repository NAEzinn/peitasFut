const toggleButton = document.getElementById('toggleButton');
const closeButton = document.getElementById('closeButton');
const navbarNav = document.getElementById('navbarNav');

toggleButton.addEventListener('click', ()=> {
    navbarNav.classList.toggle('open');
});

closeButton.addEventListener('click', () =>{
    navbarNav.classList.remove('open');
})

