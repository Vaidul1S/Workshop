console.log('Birbinam............');

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const section1 = document.querySelector('#section1');

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    let div = document.createElement('span')
    div.innerText = array[i];
    section1.appendChild(div);

}

// Lyginių skaičių radimas sąraše
// Sukurkite sąrašą skaičių. Naudodami for ciklą ir if sąlygą, išrinkite ir išspausdinkite tik lyginius skaičius iš sąrašo.
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const section2 = document.querySelector('#section2');

for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] % 2 == 0) {
        let div = document.createElement('span')
        div.innerText = numbers1[i];
        section2.appendChild(div);
    }
}

// Žodžių, ilgesnių nei 5 raidės, spausdinimas
// Sukurkite sąrašą žodžių. Išspausdinkite tik tuos žodžius, kurių ilgis yra didesnis nei 5 raidės.
let words = ["apple", "banana", "kiwi", "watermelon", "pear"];
const section3 = document.querySelector('#section3');

for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
        let div = document.createElement('span')
        div.innerText = words[i];
        section3.appendChild(div);
    }
}

// Skaičių dalinimas iš 3 be liekanos
// Sukurkite sąrašą skaičių nuo 1 iki 20. Išrinkite ir išspausdinkite tik tuos skaičius, kurie dalijasi iš 3 be liekanos.
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const section4 = document.querySelector('#section4');

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] % 3 == 0) {
        let div = document.createElement('span')
        div.innerText = numbers2[i];
        section4.appendChild(div);
    }
}

// Neigiamų skaičių suradimas sąraše
// Sukurkite sąrašą teigiamų ir neigiamų skaičių. Išspausdinkite tik neigiamus skaičius.
let numbers3 = [4, -3, 2, -1, 0, -5, 8, -9];
const section5 = document.querySelector('#section5');

for (let i = 0; i < numbers3.length; i++) {
    if (numbers3[i] < 0) {
        let div = document.createElement('span')
        div.innerText = numbers3[i];
        section5.appendChild(div);
    }
}

// Teksto paieška sąraše
// Sukurkite sąrašą sakinių. Išspausdinkite tik tuos sakinius, kurie turi žodį „JavaScript“.
let sentences = ["I love programming", "JavaScript is awesome", "Coding is fun", "Learn JavaScript"];
const section6 = document.querySelector('#section6');

for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].includes('JavaScript')) {
        let div = document.createElement('span')
        div.innerText = sentences[i];
        section6.appendChild(div);
    }
}

// Skaičių kvadratų suradimas
// Sukurkite sąrašą skaičių. Išspausdinkite tik tuos skaičius, kurių kvadratas yra didesnis nei 50.
let numbers4 = [2, 5, 7, 8, 10, 12];
const section7 = document.querySelector('#section7');

for (let i = 0; i < numbers4.length; i++) {
    if (numbers4[i] * numbers4[i] > 50) {
        let div = document.createElement('span')
        div.innerText = numbers4[i];
        section7.appendChild(div);
    }
}

// Didžiausio skaičiaus paieška sąraše
// Sukurkite sąrašą skaičių ir raskite didžiausią skaičių. Tikrinkite kiekvieną reikšmę cikle.
let numbers5 = [3, 45, 23, 67, 12, 90, 34];
let didziausias = 0;
const section8 = document.querySelector('#section8');

for (let i = 0; i < numbers5.length; i++) {
    if (numbers5[i] > didziausias) {
        didziausias = numbers5[i];
    }
}
let biggest = document.createElement('span')
biggest.innerText = didziausias;
section8.appendChild(biggest);

// Raidžių skaičiavimas žodyje
// Sukurkite žodį ir suskaičiuokite, kiek kartų žodyje pasikartoja raidė „a“.
let word = "banana";
let countA = 0;
const section9 = document.querySelector('#section9');

for (let i = 0; i < word.length; i++) {
    if (word[i].includes('a')) {
        countA += 1;
    }
}
let Count = document.createElement('span')
Count.innerText = countA;
section9.appendChild(Count);

// Amžių filtravimas sąraše
// Sukurkite sąrašą žmonių amžių. Išspausdinkite tik tuos, kurie yra vyresni nei 18.
let ages = [12, 17, 22, 19, 15, 30, 18];
let pilnaprociai = 0;
const section10 = document.querySelector('#section10');

for (let i = 0; i < ages.length; i++) {
    if (ages[i] > 18) {
        let div = document.createElement('span')
        div.innerText = ages[i];
        section10.appendChild(div);
    }
}

// Skaičių dalybos liekanos tikrinimas
// Sukurkite sąrašą skaičių. Išspausdinkite tik tuos skaičius, kurie, dalijant iš 2, turi liekaną.
let numbers6 = [5, 8, 13, 22, 31, 40];
const section11 = document.querySelector('#section11');

for (let i = 0; i < numbers6.length; i++) {
    if (numbers6[i] % 2) {
        let div = document.createElement('span')
        div.innerText = numbers6[i];
        section11.appendChild(div);
    }
}