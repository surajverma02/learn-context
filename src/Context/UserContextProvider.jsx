import React, { useState } from 'react'
import UserContext from './userContext';

const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [userPassword, setUserPassword] = useState(null)

    return (
        <UserContext.Provider value={{user, setUser, userPassword, setUserPassword}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;