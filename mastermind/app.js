const guess = document.querySelector('#guess');
const btn = document.querySelector('#btn');
const ats = document.querySelector('#ats');
const naujas = document.querySelector('#naujas');
const attempts = document.querySelector('#bandymai');

const rand = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

const endGame = _ => {
    if (bandymai > 0) {
        attempts.innerText = `Likę bandymų ${bandymai}`
    } else {
        btn.style.pointerEvents = 'none';
        attempts.innerText = ` Apgailestaujame, jūs pralaimėjote 😧, spauskite "Naujas žaidimas"`
    }
};

let skaicius = `${rand(1000, 9999)}`;
let bandymai = 10;
console.log(skaicius);

btn.addEventListener('click', _ => {
    
    if (guess.value.length != 4) {
        ats.innerText = 'Spėjimas turi būti keturženklis skaičius!';
    } else {
        let teisingas = 0;
        let pozicija = 0;
        for (let i = 0; i < guess.value.length; i++) {
            if (skaicius.includes(guess.value[i]) && guess.value[i] != guess.value[i + 1] && guess.value[i] != guess.value[i + 2] && guess.value[i] != guess.value[i + 3]) {
                teisingas++;
                if (skaicius[i] === guess.value[i]) {
                    pozicija++;
                }
            }
        }
        console.log(pozicija);

        if (pozicija === 4) {
            ats.innerText = 'Valio! Jūs atspėjote!';
        } else {
            ats.innerText = `Jūs atpėjote ${teisingas} skaičius ir iš jų ${pozicija} yra teisingoje pozicijoje.`
        }
        bandymai--;
    }
    endGame();
});



naujas.addEventListener('click', _ => {
    document.location.reload();
});


// Loginis žaidimas Mastermind

// Žaidimo esmė atspėti keturženklį skaičių sudarytą iš keturių unikalių skaitmenų
// Skaičių "sugalvoja" programa. Po kiekvieno bandymo spėti programa pasako kiek skaitmenų atspėta ir kiek iš jų yra savo vietoje.

// Jei nežaidėte niekad tai žaidimas atrodytų daug maž taip:
// Programa sugalvojo   => XXXX
// Žaidėjas spėja            => 5678
// Programa atsako       => 2 skaitmenis atspėjote, 1 iš jų savo vietoje
// Žmogus spėja            => 5612
// Programa atsako       => 2 skaitmenis atspėjote, 0 iš jų savo vietoje
// ir t.t.

// Reikalavimai HTML + CSS:
// Laukelis vartotojui įvesti keturženklį skaičių.
// Mygtuką, kuris patvirtina spėjimą.
// Sritį, kurioje bus išvedami atspėjimai ir rezultatai.
// Mygtukas, naujo žaidimo pradėjimui.
// CSS stilius savo nuožiūra
// JavaScript logika:
// Generuokite atsitiktinį keturženkį skaičių (su unikaliais skaitmenimis), kitas variantas generuoti atsitiktinius keturis vienženklius skaičius ir juos sulipdyti į keturženklį.
// Patikrinkite, ar vartotojo įvestas skaičius turi keturis skaitmenis ir ar jie yra unikalūs.
// Patikrinkite, kiek skaičių iš įvesto atspėjimo yra teisingi ir kiek jų yra teisingose vietose.
// Atnaujinkite DOM, kad parodytumėte rezultatus.
// Papildomos idėjos:
// Spėjimų skaitiklis. Galima pridėti limitą atspėjimams (pvz., 10 bandymų), po kurių žaidimas baigiasi.
// Pritaikymas: Suteikite žaidėjui galimybę pasirinkti, kiek skaitmenų norėtų atspėti (pvz., 3 ar 5), o ne tik 4.
