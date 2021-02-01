import React, {createContext, useState} from 'react'

export const AccountContext=createContext()

function AccountContextProvider(props){
    const [user, setUser]=useState(null)

    const toogleUser=(name, firstName, lastName, adress, zip, city)=>{
        setUser({'name': name, 'firstName':firstName, 'lastName': lastName, 'adress': adress, 'zip': zip, 'city': city})
    }
    return(
        <AccountContext.Provider value={{user,toogleUser}}>
            {props.children}

        </AccountContext.Provider>

    )
}
export default AccountContextProvider