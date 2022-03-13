import { useState } from "react"
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";

export const Grocery = () => {
   const [list , setList] = useState([]) ;

   const addItem = (data) => {
       setList([...list,data]) ;
   }

   const del = (inc) =>{
    list.splice(inc,1)
    setList(list) ;
   }
//    console.log(list) ;

   return(
       <div>
           <GroceryInput addItem={addItem}/>
            {list.map((el , id) => (
                <GroceryList groc={el} indics={id} del={del}/>
            ))}
       </div>
   )

}