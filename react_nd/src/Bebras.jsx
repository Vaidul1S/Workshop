export default function Bebras() {

    let a = 1;
    if (a > 0) {
        a = 4;
    }

    const fun = _ => {
        return 'upinis';
    }

    return (
        <>
            <h2>Bebras {fun()}</h2>
            <p>yra gražus</p>
            <p>Bebras yra {a < 3 ? 'senas' : 'jaunas'} metų</p>
        </>
        
    );
}