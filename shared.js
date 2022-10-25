let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let noButton = document.querySelector('.modal__action--negative');
let selectPlanButton = document.querySelectorAll('.plan button');
let toggleNavButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

// console.dir(backdrop);
for (let i = 0; i < selectPlanButton.length; i++) {
   selectPlanButton[i].addEventListener('click', function () {
      modal.classList.add('open');
      backdrop.style.display = 'block';
      setTimeout(function () {
         backdrop.classList.add('open');
      }, 10);
   });
}

backdrop.addEventListener('click', function () {
   mobileNav.classList.remove('open');
   closeModal();
});

function closeModal() {
   if (modal) {
      modal.classList.remove('open');
   }
   backdrop.classList.remove('open');
   setTimeout(function () {
      backdrop.style.display = 'none';
   }, 200);
}
noButton.addEventListener('click', closeModal);

function openModal() {
   mobileNav.classList.add('open');
   backdrop.classList.add('open');
}

toggleNavButton.addEventListener('click', openModal);
