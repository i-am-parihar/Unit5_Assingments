import { useEffect, useState } from "react"
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import axios from "axios" 

export const Grocery = () => {
   const [list , setList] = useState([]) ;
   const [page, setPage] = useState(1) ;


  useEffect(() => {
     getData() ;
  },[page]) ;

  const getData = () => {
    axios.get(`http://localhost:3000/grocery?_limit=3&_page=${page}`).then(res =>{
        setList(res.data) ;
    }) 
  }
//   console.assert.

   return(
       <div>
           <GroceryInput addItem={getData}/>
            {list.map((el) => (
                <GroceryList groc={el}/>
            ))}

         <button  onClick={() => {
             setPage(page-1) ;
            }}>Prev</button> 

         <button onClick={() => {
             setPage(page+1) ;
            }}>Next</button>

       </div>
   )

}