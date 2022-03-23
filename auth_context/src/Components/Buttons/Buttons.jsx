import { useContext } from "react"
import { AuthContext } from "../../Contexts/AuthContext";

export const Buttons = () => {
    const {handlechange} = useContext(AuthContext) ;

    return(
        <div>
            
        <button onClick={() => {
        handlechange(true)
       }}> Login </button>

        <button onClick={() => {
        handlechange(false)
       }}> Logout </button>

        </div>
    )

}