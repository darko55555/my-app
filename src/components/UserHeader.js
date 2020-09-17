import React, { useEffect }  from 'react'
import { useStateValue } from "../StateProvider"

function UserHeader(){
    const[{user}, dispatch] = useStateValue()

    useEffect(() => {
        console.log(user)
      },[]);

    return(
        // console.log(user)
        <div>{user.displayName}</div>
    )
}

export default UserHeader