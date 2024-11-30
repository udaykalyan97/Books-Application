import './memo.css'
import { findPrime } from '../utils/helper'
import { useState, useMemo } from 'react'

function Memo(){
    
    const [value, setValue] = useState(0);
    const [isDarkTheme, setDarkTheme] = useState(true);
    const prime = useMemo(()=>findPrime(value), [value]);

    return(
        <>
            <h1>Learning Use Memo Hook</h1>
            <div className="container" style={isDarkTheme ? {backgroundColor: "lightgray"} : {backgroundColor: "white"}}>
                <input 
                    type="number" 
                    name="" id="" 
                    onChange={(e)=>setValue(e.target.value)}
                />
                <h2>nth Prime number: {prime}</h2>
                <button onClick={()=>setDarkTheme(!isDarkTheme)}>Toggle Theme</button>
            </div>
        </>
    )
}


export default Memo