import React, {createContext, useState} from 'react'

export const AccountContext=createContext()

function AccountContextProvider(props){
    const [user, setUserState]=useState(null)

    const toogleUser=(user)=>{
        setUserState(user)
    }
    const setUser=(name, firstName, lastName, adress, zip, city)=>{
        setUserState({'user':user, 'name': name, 'firstName':firstName, 'lastName': lastName, 'adress': adress, 'zip': zip, 'city': city})
    }
    return(
        <AccountContext.Provider value={{user,toogleUser,setUser}}>
            {props.children}

        </AccountContext.Provider>

    )
}
export default AccountContextProvider