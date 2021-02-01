import React, {createContext, useState} from 'react'

export const AccountContext=createContext()

function AccountContextProvider(props){
    const [user, setUser]=useState(null)

    const toogleUser=(name, lastName, adress, zip, city)=>{
        setUser({'firstName':name, 'lastName': lastName, 'adress': adress, 'zip': zip, 'city': city})
    }
    return(
        <AccountContext.Provider value={{user,toogleUser}}>
            {props.children}

        </AccountContext.Provider>

    )
}
export default AccountContextProvider