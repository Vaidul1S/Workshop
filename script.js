console.log('Birbinam............');

let array = [1,2,3,4,5,6,7,8,9,0];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
    
}
console.log('------------------------------------------------------------');

// Lyginių skaičių radimas sąraše
// Sukurkite sąrašą skaičių. Naudodami for ciklą ir if sąlygą, išrinkite ir išspausdinkite tik lyginius skaičius iš sąrašo.
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
 
for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] % 2 == 0) {
        console.log(numbers1[i]);        
    }
}
 
// Žodžių, ilgesnių nei 5 raidės, spausdinimas
// Sukurkite sąrašą žodžių. Išspausdinkite tik tuos žodžius, kurių ilgis yra didesnis nei 5 raidės.
let words = ["apple", "banana", "kiwi", "watermelon", "pear"];
 
for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
        console.log(words[i]);        
    }    
}
 
// Skaičių dalinimas iš 3 be liekanos
// Sukurkite sąrašą skaičių nuo 1 iki 20. Išrinkite ir išspausdinkite tik tuos skaičius, kurie dalijasi iš 3 be liekanos.
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
 
for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] % 3 == 0) {
        console.log(numbers2[i]);        
    }    
}
console.log('------------------------------------------------------------');

 
// Neigiamų skaičių suradimas sąraše
// Sukurkite sąrašą teigiamų ir neigiamų skaičių. Išspausdinkite tik neigiamus skaičius.
let numbers3 = [4, -3, 2, -1, 0, -5, 8, -9];
 
 for (let i = 0; i < numbers3.length; i++) {
    if (numbers3[i] < 0) {
        console.log(numbers3[i]);        
    }    
 }
 console.log('------------------------------------------------------------');

// Teksto paieška sąraše
// Sukurkite sąrašą sakinių. Išspausdinkite tik tuos sakinius, kurie turi žodį „JavaScript“.
let sentences = ["I love programming", "JavaScript is awesome", "Coding is fun", "Learn JavaScript"];

for (let i = 0; i <sentences.length; i++) {
    if (sentences[i].includes('JavaScript')) {
        console.log(sentences[i]);        
    }    
}
console.log('------------------------------------------------------------');

// Skaičių kvadratų suradimas
// Sukurkite sąrašą skaičių. Išspausdinkite tik tuos skaičius, kurių kvadratas yra didesnis nei 50.
let numbers4 = [2, 5, 7, 8, 10, 12];
 
 for (let i = 0; i < numbers4.length; i++) {
    if (numbers4[i]*numbers4[i] > 50) {
        console.log(numbers4[i]);        
    }
 }
 console.log('------------------------------------------------------------');

// Didžiausio skaičiaus paieška sąraše
// Sukurkite sąrašą skaičių ir raskite didžiausią skaičių. Tikrinkite kiekvieną reikšmę cikle.
let numbers5 = [3, 45, 23, 67, 12, 90, 34];
let didziausias = 0;

 for (let i = 0; i < numbers5.length; i++) {    
    if (numbers5[i] > didziausias) {
        didziausias = numbers5[i];
    }       
 }
 console.log(didziausias); 
 console.log('------------------------------------------------------------');

// Raidžių skaičiavimas žodyje
// Sukurkite žodį ir suskaičiuokite, kiek kartų žodyje pasikartoja raidė „a“.
let word = "banana";
let countA = 0;

for (let i = 0; i < word.length; i++) {
    if (word[i].includes('a')) {
        countA +=1;
    }    
}
console.log(countA);
console.log('------------------------------------------------------------');

// Amžių filtravimas sąraše
// Sukurkite sąrašą žmonių amžių. Išspausdinkite tik tuos, kurie yra vyresni nei 18.
let ages = [12, 17, 22, 19, 15, 30, 18];
let pilnaprociai = 0;

for (let i = 0; i < ages.length; i++) {
    if (ages[i] > 18) {
        console.log(ages[i]);        
    }
}
console.log('------------------------------------------------------------');

// Skaičių dalybos liekanos tikrinimas
// Sukurkite sąrašą skaičių. Išspausdinkite tik tuos skaičius, kurie, dalijant iš 2, turi liekaną.
let numbers6 = [5, 8, 13, 22, 31, 40];

for (let i = 0; i < numbers6.length; i++) {
    if (numbers6[i] % 2) {
        console.log(numbers6[i]);        
    }
}