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



  
// Function to shuffle an array - maiso eiles tvarka del gaveju.
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
    return array;       
};

// Function to assign Secret Santa pairs
function assignSecretSanta(pool) {
    const givers = [...pool];
    let receivers = pool;    
    while (receivers.some((person, index) => person === givers[index])) {
        receivers = shuffle([...pool]);
    };      
    const pairs = givers.map((giver, index) => ({giver, receiver: receivers[index]}));  
    return pairs;
};

const secretSantaPairs = assignSecretSanta(pool);

console.log("Secret Santa Pairs:");
secretSantaPairs.forEach(pair => {
    console.log(`${pair.giver} -> ${pair.receiver}`);
});