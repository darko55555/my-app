import { auth } from '../firebase'
import React, { useEffect }  from 'react'
import { useStateValue } from "../StateProvider"
import { useHistory } from "react-router-dom";

function UserHeader(){
    // const[{user}, dispatch] = useStateValue()
    const user = JSON.parse(localStorage.getItem("user"))
    const history = useHistory();   

    const logOutUser = (e) => {
        e.preventDefault()

        auth
            .signOut()
            .then(function(){
                console.log("Cleaning local storage")
                history.push("/login")
                localStorage.clear()
            })

    }

    useEffect(() => {
        console.log(user)
      },[]);

    return(
        // console.log(user)
        <div>
            
            <div>{user.displayName}</div>
            <div> <button onClick={logOutUser}>Logout</button> </div>
        </div>
    )
}

export default UserHeader