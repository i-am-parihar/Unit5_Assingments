import {useEffect, useState} from "react" ;
import { useDispatch, useSelector } from "react-redux";
// import { addTodo } from "./Redux/action";
import axios from "axios" ;
import { addTodo } from "../Redux/action";
import { Link } from "react-router-dom";
import { TodoItem } from "./todo_item";

export const Home = () => {
    const [text , setText] = useState("") ;
    const todos = useSelector((store) => store.todo) ;
    const dispatch = useDispatch() ;

    useEffect(() => {
        getTodos() ;
    } ,[])

    const addTodos = () => {
        axios.post("http://localhost:4000/todos", {
            title: text ,
            status:"not Done" ,
        }).then(() => getTodos()) ;
    }
    
    const getTodos = () => {
        axios.get("http://localhost:4000/todos").then(({data}) => {
            dispatch(addTodo(data)) ;
        })
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:4000/todos/${id}`).then(getTodos) ;
    }

    const handleChange = (id, status) => {
        if(status=="not Done"){
            axios.patch(`http://localhost:4000/todos/${id}`, {
            status:"Done" ,
            }).then(() => getTodos())
        }
        else{
             axios.patch(`http://localhost:4000/todos/${id}`, {
             status:"not Done" ,
            }).then(() => getTodos()) ;
        }
    }

    return(
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)}/>
            <button onClick={() =>{
              addTodos() ;
            }}>
                Add Todo
            </button>
           {todos.map((e) => (
               <div>
                   <Link to={`/todo/${e.id}`}>{e.title}</Link>
                   <button onClick={() => {handleDelete(e.id)}}>Delete</button>
                   <button onClick={() => {handleChange(e.id , e.status)}}>{e.status}</button>
                </div>
           ))}
        </div>
    )
}