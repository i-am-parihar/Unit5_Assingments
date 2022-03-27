import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export const TodoItem = () => {
    const {id} = useParams() ;
    console.log(id) ;
    return(
        <div>
            <h2>Todo_item</h2>
        </div>
    )
}