import { useState } from "react"

export const GroceryInput = ({addItem}) => {
  const [text , setText] = useState("") ;

    return(

        <div>
            <input onChange={(e) =>{
             setText(e.target.value) 
            }}></input>
            
            <button onClick={() => {
               addItem(text) ;
            }}> Add to List </button>

        </div>
        
    )
}