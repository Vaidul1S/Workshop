
export default function Bala({ array }) {

    const bala = e => {

        for (let i = 0; i < e.length; i++) {
            const text = document.createElement('div');
            text.innerText = `${e[i].id} ${e[i].type} ${e[i].name} ${e[i].color}`;
            console.log(text);
            
        }
        
    }

    return (
        <div></div>

    )
}