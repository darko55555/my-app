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
        <div className="flex flex-wrap bg-gray-200"> 
            <div>{user.displayName}</div>
            <div><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded absolute top-0 right-0" onClick={logOutUser}>Logout</button></div>
        </div>
    )
}

export default UserHeader