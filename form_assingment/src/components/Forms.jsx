import { useEffect, useState } from "react"
import axios from "axios" 
import { FormList } from "./FormList";

export const Forms = () => {

const [forData , setFormData] = useState({          //3.Set the required key and value 
    name:"" ,
    age:"" ,
    address:"",
    department:"",
    salary:"" ,
    marital:"of",
}); 


const [data , setData] = useState([]) ;            //5.Fetch the data from server and store in the data and display on the screen
useEffect(() => {
   axios.get("http://localhost:3000/list").then(res => {
    setData(res.data) ;
   })
},[]) ;


const handleChange = (e) =>{                  //2.Take the data as soon as data change and save to forData with key and value
    const{id,value} = e.target ;   
    setFormData({
        ...forData,
        [id]:value,
    });
}; 
 
const handelSubmit = (e) => {              //4.Post the data to the server after click on submit button
   e.preventDefault() ;
   axios.post("http://localhost:3000/list", forData).then(()=>{
       alert("successful") ;
   })
}

    return(                                      //1.Form build by basic HTML
    <div>
    <form onSubmit={handelSubmit}>
      <h3>Employee Detail</h3>

      <input
      id="name"
      type="text"
      onChange={handleChange}
      placeholder="entername"
      />

      <input
      id="age"
      type="number"
      onChange={handleChange}
      placeholder="enterage"
      />

      <input
      id="address"
      type="text"
      onChange={handleChange}
      placeholder="enteraddress"
      />

      <select id="department" onChange={handleChange} >
          <option value="engineering" onChange={handleChange}>engineering</option>
          <option value="doctor" onChange={handleChange}>doctor</option>
          <option value="business"  onChange={handleChange}>business</option>
      </select>

      <input
      id="salary"
      type="number"
      onChange={handleChange}
      placeholder="Salary"
      />

     <label> Marital Status
     <input
      id="marital"
      type="checkbox"
      onChange={handleChange}
      placeholder="marital state"
      />  
      </label> 

      <input
      type="submit"
      value={"Submit"}
      />

    </form>

    {data.map((el) => (
                <FormList data={el}/>
            ))}
    </div>)
}