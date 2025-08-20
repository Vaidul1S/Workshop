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

const poolRestriction = [
    ['Močiutė'],
    ['Dalia', 'Algirdas', 'Ramunė', 'Ernestas', 'Vaidas'],
    ['Algimantas', 'Gražina', 'Darius', 'Darija', 'Evaldas', 'Austėja', 'Neringa', 'Emilis'],
    ['Jurga', 'Tomas', 'Dovydas', 'Radvilė']
];

const vardas = document.querySelector('.input');
const btn = document.querySelector('.btn');
const vardas2 = document.querySelector('.input2');
const btn2 = document.querySelector('.btn2');

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

function assignSecretSanta(pool) {
    const dovanotojai = [...pool];
    let receivers = pool;
    while (receivers.some((person, index) => person === dovanotojai[index])) {
        receivers = shuffle([...pool]);
    };
    const poros = dovanotojai.map((dovanotojas, index) => ({ dovanotojas, receiver: receivers[index] }));
    return poros;
};

const secretSantaPairs = assignSecretSanta(pool);

console.log("Secret Santa Pairs:");
secretSantaPairs.forEach(pair => {
    console.log(`${pair.dovanotojas} -> ${pair.receiver}`);
});

btn.addEventListener('click', e => {
    e.preventDefault();
    let ivestis = vardas.value
    secretSantaPairs.forEach(pair => {
        if (ivestis == pair.dovanotojas) {
            vardas.value = pair.receiver;
        }
    })
});

function shuffleR(arrays) {
    arrays.forEach(array => {
       for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    } 
    });    
    return arrays;
};

function assignSecretSantaR(poolRestriction) {
    const dovanotojai = [...poolRestriction];
    let receivers = poolRestriction;
    while (receivers.some((person, index) => person === dovanotojai[index])) {
        receivers = shuffle([...poolRestriction]);
    };
    const poros = dovanotojai.map((dovanotojas, index) => ({ dovanotojas, receiver: receivers[index] }));
    return poros;
};

const secretSantaPairsR = assignSecretSanta(poolRestriction);

console.log("Secret Santa Pairs R:");
secretSantaPairsR.forEach(pair => {
    console.log(`${pair.dovanotojas} -> ${pair.receiver}`);
});

btn2.addEventListener('click', e => {
    e.preventDefault();
    let ivestis = vardas.value
    secretSantaPairsR.forEach(pair => {
        if (ivestis == pair.dovanotojas) {
            vardas.value = pair.receiver;
        }
    })
});
