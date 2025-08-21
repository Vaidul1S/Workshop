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

// console.log("Secret Santa Pairs:");
// secretSantaPairs.forEach(pair => {
//     console.log(`${pair.dovanotojas} -> ${pair.receiver}`);
// });

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
    const dovanotojai = [...poolRestriction].flat();
    let receivers = shuffle(shuffleR([...poolRestriction])).flat();
    while (receivers.some((person, index) => person === dovanotojai[index])) {
        receivers = shuffle(shuffleR([...poolRestriction])).flat();
    };
    
    const poros = dovanotojai.map((dovanotojas, index) => ({ dovanotojas, receiver: receivers[index] }));
    return poros;
};

const secretSantaPairsR = assignSecretSantaR(poolRestriction);

console.log('------------------------');
console.log("Secret Santa Pairs R:");
console.log('------------------------');

secretSantaPairsR.forEach(pair => {
    console.log(`${pair.dovanotojas} -> ${pair.receiver}`);
});

btn2.addEventListener('click', e => {
    e.preventDefault();
    let ivestis = vardas2.value
    secretSantaPairsR.forEach(pair => {
        if (ivestis == pair.dovanotojas) {
            vardas2.value = pair.receiver;
        }
    })
});

function randomPairing(groups) {
    const people = groups.flat();
    const pairs = [];
    const used = new Set();

    while (used.size < people.length) {
        const available = people.filter(p => !used.has(p));
        if (available.length < 2) break; // safety

        const a = available[0];
        const groupA = groups.find(g => g.includes(a));

        // pick random partner from a different group
        const possiblePartners = available.filter(
            p => !groupA.includes(p)
        );

        if (possiblePartners.length === 0) {
            // fallback if stuck
            break;
        }

        const b = possiblePartners[Math.floor(Math.random() * possiblePartners.length)];
        pairs.push([a, b]);
        used.add(a);
        used.add(b);
    }

    return pairs;
}

const pairs = randomPairing(poolRestriction);
console.log(pairs);
console.log('------------------------');
console.log("Total pairs:", pairs.length);
console.log('------------------------');
