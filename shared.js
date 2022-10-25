let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let noButton = document.querySelector('.modal__action--negative');
let selectPlanButton = document.querySelectorAll('.plan button');
let toggleNavButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

// console.dir(backdrop);
for (let i = 0; i < selectPlanButton.length; i++) {
   selectPlanButton[i].addEventListener('click', function () {
      modal.style.display = 'flex';
      backdrop.style.display = 'flex';
   });
}
function closeModal() {
   modal.style.display = 'none';
   backdrop.style.display = 'none';
}
backdrop.addEventListener('click', function () {
   mobileNav.style.display = 'none';
   closeModal();
});
noButton.addEventListener('click', closeModal);

function openModal() {
   mobileNav.style.display = 'flex';
   backdrop.style.display = 'flex';
}

toggleNavButton.addEventListener('click', openModal);
toggleNavButton.addEventListener('click', console.log('clicked'));
