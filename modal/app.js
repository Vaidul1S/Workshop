console.log('modal');

const btn = document.querySelector('button');
const modal = document.querySelector('.modal');
const x = document.querySelector('.close');
const modalContent = document.querySelector('.modalContent');

btn.addEventListener('click', _ => {
    modal.style.display = 'block';
});

x.addEventListener('click', _ => {    
    modalContent.classList.add('slideUp')
    setTimeout( _ => {
        modalContent.classList.remove('slideUp');
        modal.style.display = 'none';
    }, 950);
});