import React, {createContext, useState} from 'react'

export const AccountContext=createContext()

function AccountContextProvider(props){
    const [user, setUser]=useState(null)

    const toogleUser=(name)=>{
        setUser(name)
    }
    return(
        <AccountContext.Provider value={{user,toogleUser}}>
            {props.children}

        </AccountContext.Provider>

    )
}
export default AccountContextProvider