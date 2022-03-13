export const GroceryList = ({groc , indics , del}) => {
    // console.log(groc)
   return(
       <div>
           <h4>{groc}</h4>
           <button onClick={() =>{
               del(indics)
           }}>Delete</button>
       </div>
   )
}