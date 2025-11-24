import BetKoks from "./BetKoks";
import Text from "./Text";
import ZaB from "./ZaB";

// Sukurti komponentą, kuris užrašytų “LABAS, ZUIKI!”. Raidžių spalva pink. Spalva tekstui nurodoma komponento viduje naudojant style.

// Sukurti komponentą, kuris gauną vieną props. Props yra bet koks tekstas, kuris komponente atvaizduojamas h1 tage.

// Sukurti komponentą rodantį tekstą h1 tage- “Zebrai ir Bebrai”, kuris gauna vieną props, kuris lygus 1 arba 2. Jeigu props lygus 1 tekstas nudažomas mėlynai, o jeigu 2 - raudonai.

// Sukurti komponentą, kuris gauna du props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage.

// Sukurti komponentą, kuris gauna tris props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage, o trečias yra spalva, kuria nudažomi abu tekstai.


export default function R02() {

    return (
        <>
            <Text tekstas={' Nelabai čia Pink'}/>
            <ZaB color={2}/>
            <BetKoks pirmas={'Pirmas bet koks tekstas'} antras={'Antras bet koks tekstas'} color={'skyblue'}/>
        </>
    )
}