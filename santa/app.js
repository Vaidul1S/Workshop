const pool = [
    'Močiutė',
    'Dalia',
    'Algirdas',
    'Ramunė',
    'Ernestas',
    'Vaidas',
    'Algimantas',
    'Gražina',
    'Darius',
    'Darija',
    'Evaldas',
    'Austėja',
    'Neringa',
    'Emilis',
    'Jurga',
    'Tomas',
    'Dovydas',
    'Radvilė'
];

const vardas = document.querySelector('input');
const btn = document.querySelector('.btn');

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

btn.addEventListener('click', e => {
    e.preventDefault();
    let x = rand (0, 17);
    vardas.value = pool[x];    
});

console.log(pool);
