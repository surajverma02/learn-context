import React, { useContext } from 'react'
import UserContext from '../Context/userContext'

function Profile() {

    const {user, userPassword} = useContext(UserContext);

    if(user && userPassword){
        return (
            <h1>Welcome, {user}, {userPassword}</h1>
        )
    }else{
        return <h1>Please login</h1>
    }
    
}

export default Profile
