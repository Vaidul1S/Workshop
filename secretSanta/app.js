import { poolRestriction } from "./pool.js";

localStorage.setItem('santa', JSON.stringify(null));

const vardas2 = document.querySelector('.input2');
const btn2 = document.querySelector('.btn2');
const result = document.querySelector('.result');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

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
            } else if(giver === 'Vaidas' && receiver === 'Radvilė'){
                valid = false;
                break;
            } else if(giver === 'Ramunė' && receiver === 'Dovydas'){
                valid = false;
                break;
            } else if(giver === 'Jurga' && receiver === 'Evaldas'){
                valid = false;
                break;
            } else if(giver === 'Tomas' && receiver === 'Evaldas'){
                valid = false;
                break;
            }
            pairs.push([giver, receiver]);
        }

        if (valid) return pairs;
    }
}

const pairs = makeSecretSanta(poolRestriction);
console.log('-------------------');
console.log("Secret Santa Pairs:");
console.log('-------------------');

pairs.forEach(pair => {
    console.log(`${pair[0]} -> ${pair[1]}`);
});
console.log('-------------------------------------');

vardas2.addEventListener('keydown', e => {
    if(e.key === "Enter"){
        if (e.key === "Enter") e.preventDefault();
    }
});

btn2.addEventListener('click', e => {
    e.preventDefault();
    let ivestis = vardas2.value;

    pairs.forEach(pair => {
            if (ivestis != pair[0]) {
                result.style.color = 'white';
                result.innerHTML = "Tokia varda niera!";
            }
        });
    

    if (localStorage.getItem('santa').includes(ivestis) || JSON.parse(localStorage.getItem('santa')) == null) {
        pairs.forEach(pair => {
            if (ivestis == pair[0]) {
                result.style.color = 'white';
                result.innerHTML = pair[0] + ' -> 🎁 ' + pair[1];
            }
        });

    } else {
        poolRestriction.forEach(e => {
            if (e.includes(ivestis)) {
                result.style.color = 'red';
                result.innerHTML = "Nešnipiniek!";

            }
        });
    }

    if (JSON.parse(localStorage.getItem('santa')) == null) {
        let poolIndex;
        poolRestriction.forEach(e => {
            if (e.indexOf(ivestis) >= 0) {
                poolIndex = e;
            };
        })
        if (poolIndex == undefined) {
            poolIndex = null;
        }

        localStorage.setItem('santa', JSON.stringify(poolIndex));
    }

    vardas2.value = '';

});