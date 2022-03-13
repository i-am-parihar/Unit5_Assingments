import { useState } from "react";     // useState as a hook 
import '../App.css';

export function Counter(prop){        //prop = {value: 0}
   
    const[counter , setCounter] = useState(prop.value) ;
    const handelchange = (value) =>{
        setCounter(counter+value) ;       //setCounter is function, it re-render all
    }
    const doublechange = () =>{
        setCounter(counter*2) ;
    }

    return(
        <div className="maindiv">
            <h3>Counter:{counter}</h3> ;

            <button
             onClick={
                ()=> handelchange(1)
             } className="add">
             Add
            </button>

            <button
             onClick={
                ()=> handelchange(-1)
             } className="add">
             Sub
            </button>

            <button
             onClick={
                ()=> doublechange()
             } className="add">
             Double
            </button>

        </div>
    );
}