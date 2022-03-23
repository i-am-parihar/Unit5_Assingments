import { createContext, useState} from "react";

export const AuthContext = createContext() ;  //Context-Box Create

export const AuthContextProvider = ({children}) => {
    const [feed, setfeed] = useState(false) ;    //feed for print give to status

    const handlechange = (value) => {            //handlechange for change feed give to button
        setfeed(value) ;
    }

    return(                        //pack feed and handlechange in value
            <AuthContext.Provider value={{feed,handlechange}}>   
                    {children}
            </AuthContext.Provider>
           )
}



//points:
//1. Structure = (AuthContext + App + index) + (Buttons+Status) ;
//2. Work:
//a. create a box AuthContext
//b. create value and function who change the value and pass by value
//c. so button require function ,it take the function by useContext
//d. Status require value ,it take the value by useContext

