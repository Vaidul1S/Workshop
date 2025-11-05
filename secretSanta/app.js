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
    ['Algimantas', 'Gražina', 'Darius', 'Darija', 'Evaldas', 'Austėja'],
    ['Jurga', 'Tomas', 'Dovydas', 'Radvilė']
];

localStorage.setItem('santa', JSON.stringify(null));

const vardas = document.querySelector('.input');
const btn = document.querySelector('.btn');
const vardas2 = document.querySelector('.input2');
const btn2 = document.querySelector('.btn2');
const result = document.querySelector('.result');

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

// console.log("Secret Santa Pairs FFA:");
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

function makeSecretSanta(groups) {
    const people = groups.flat();

    while (true) { 
        const givers = shuffle([...people]);
        const receivers = shuffle([...people]);
        const pairs = [];
        let valid = true;

        for (let i = 0; i < givers.length; i++) {
            const giver = givers[i];
            const receiver = receivers[i];

            const groupG = groups.find(g => g.includes(giver));
            const groupR = groups.find(g => g.includes(receiver));

            if (giver === receiver || groupG === groupR) {
                valid = false;
                break;
            }
            pairs.push([giver, receiver]);
        }

        if (valid) return pairs;
    }
}

const pairs = makeSecretSanta(poolRestriction);
console.log('-------------------------------------');
console.log("Secret Santa Pairs with restrictions:");
console.log('-------------------------------------');

pairs.forEach(pair => {
    console.log(`${pair[0]} -> ${pair[1]}`);
});
console.log('-------------------------------------');

btn2.addEventListener('click', e => {
    e.preventDefault();
    let ivestis = vardas2.value;

    pairs.forEach(pair => {
        if (ivestis == pair[0]) {
            result.innerHTML = pair[1];
        }
    });

    if (localStorage.getItem('santa') == null){
        localStorage.setItem('santa', JSON.stringify(ivestis));
    }
    
    vardas2.value = '';

});