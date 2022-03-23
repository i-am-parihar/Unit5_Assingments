import { useContext } from "react"
import { AuthContext } from "../../Contexts/AuthContext";


export const Status = () => {
    const {feed} = useContext(AuthContext) ;

    if(feed){
      return(
          <h2>"Logged in"</h2>
      )
    }
    else{
        return(
            <h2>"Logged out"</h2>
        )
    }
    
}

