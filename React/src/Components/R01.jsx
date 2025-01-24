import { useState } from "react";
import Circle from "./Circle";
import rand from '../Functions/rand';
import Square from "./Square";

// Sukurti aplikaciją, kuri turi mygtuką change ir atvaizduoja apskritimą. Paspaudus mygtuką change apskritimas turi pavirsti į kvadratą, o paspaudus dar kartą vėl pavirsti apskritimu.

// Sukurti aplikaciją, kuri turi mygtukus change ir random bei atvaizduoja apskritimą su random skaičiumi viduje. Paspaudus change mygtuką apskritimas keičiasi į stačiakampį kaip pirmame uždavinyje, o paspaudus random mygtuką, skaičius pasikeičia į rand 5 - 25

// Sukurti aplikaciją, kuri turi mygtukus plus ir minus, bei atvaizduoja skaičių 0. Paspaudus plus mygtuką, skaičius padidėja 1, o paspaudus minus- sumažėja 3

// Sukurti aplikaciją, kuri turi mygtuką add, kurį paspaudus vieną kartą atsiranda mėlynas kvadratas, paspaudus dar kartą- dar vienas ir t.t.

// Sukurti aplikaciją, kuri turi mygtukus add red, add blue ir reset. Paspaudus add red, prisideda raudonas kvadratas, paspaudus add blue - mėlynas ir t.t. Spaudinėjant prisideda vis daygiau kvadratų. Paspaudus reset viskas išsitrina

export default function Nd01() {

    const [shape, setShape] = useState(50);
    const [number, setNumber] = useState(rand(5, 25));
    const [counter, setCounter] = useState(0);
    const [square, setSquare] = useState([]);

    const change = _ => {
        console.log('click');
        if (shape === 50) {
            setShape(0);
        } else {
            setShape(50);
        }

    }

    const addNumber = _ => {
        setNumber(rand(5, 25));

    }

    const handleNumber = e => {
        setCounter(c => c + e);
    }

    const addSq = e => {
        setSquare(square => [...square, { color: e }])
    }

    return (
        <>
            <Circle shape={shape} number={number}/>
            <div>
                <button className="button91 tang" onClick={change}>Click</button>
                <button className="button91 tang" onClick={addNumber}>Click</button>
                <h3>{counter}</h3>
                <button className="button91 tang" onClick={_ => handleNumber(+1)}>+1</button>
                <button className="button91 tang" onClick={_ => handleNumber(-3)}>-3</button>
            </div>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
            }}>{square.map((square, index) => <Square key={index} color={square.color}/>)}</div>
            <div>
                <button className="button91 tang" onClick={_ => addSq('red')}>Add Red</button>
                <button className="button91 tang" onClick={_ => addSq('blue')}>Add Blue</button>
                <button className="button91 tang" onClick={_ => setSquare([])}>Reset</button>
            </div>


        </>
    );
}