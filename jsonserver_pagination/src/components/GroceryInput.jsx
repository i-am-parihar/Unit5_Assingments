import { useState } from "react"
import axios from "axios" 

export const GroceryInput = ({addItem}) => {
  const [text , setText] = useState("") ;

    return(

        <div>
            <input onChange={(e) =>{
             setText(e.target.value) 
            }}></input>
            
            <button onClick={() => {
           axios.post("http://localhost:3000/grocery",{item:text}) 
           addItem() ;
            }}> Add to List </button>

        </div>
        
    )
}