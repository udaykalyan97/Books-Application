import './demo.css';
import { useState, useRef } from 'react';

function Demo(){
    let x =0;
    const [y,setY] = useState(0);

    const z = useRef(0);

    function handleX(){
        x = x+1;
    }

    function handleY(){
        setY(y+1);
    }

    function handleZ(){
        z.current = z.current + 1;
    }

    return(
        <>
            <div className="container">
                <h1>X: {x}</h1>
                <button onClick={handleX}>Increase X</button>
                <h1>Y: {y}</h1>
                <button onClick={handleY}>Increase Y</button>
                <h1>Z: {z.current}</h1>
                <button onClick={handleZ}>Increase Z</button>
            </div>
        </>
    )
}

export default Demo