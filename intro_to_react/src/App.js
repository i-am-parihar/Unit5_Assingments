
function App() {
  const data = [
    {heading:"Mobile Operating System",
     arr:["Android","Blackberry","iPhone","Windows"]},
     {heading:"Mobile Manufacturers",
     arr:["Samsung","HTC","Micromax","Apple"]}
  ];

  return (
    <div>
    {data.map((el) => displayscreen(el))}
    </div>
  );
}

function displayscreen({heading,arr}){
 return(
   <div className="App">
     <h1>{heading}</h1>
     <div>
     <ul>
       <li>{arr[0]}</li>
       <li>{arr[1]}</li>
       <li>{arr[2]}</li>
       <li>{arr[3]}</li>
     </ul>
     </div>
   </div>
 )
}

export default App;
