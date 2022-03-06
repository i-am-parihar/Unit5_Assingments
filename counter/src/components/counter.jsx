import { useState } from "react";
import '../App.css';

export function Counter(pop){
   
    const[counter , setCounter] = useState(pop.value) ;
    const handelchange = (value) =>{
        setCounter(counter+value) ;
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
             Duble
            </button>
        </div>
    );
}