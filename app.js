// select modal-btn,modal-overlay,close-btn
const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

// listen for click events on modal-btn
modalBtn.addEventListener('click', function(){
    modalOverlay.classList.add('open-modal');
});

// listen for click events on close-btn
closeBtn.addEventListener('click', function(){
    modalOverlay.classList.remove('open-modal');
})
