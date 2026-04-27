import { createContext, useState } from "react"

type UserType={
    username: string,
    isLoggedIn: boolean
}

type AuthContextType={
    user: UserType|null,
    isLoggedIn:boolean,
    setUser:(value: UserType|null) => void,
    setIsLoggedIn:(value: boolean) => void
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    isLoggedIn: false,
    setUser: (value:UserType|null) => {},
    setIsLoggedIn: (value:boolean) => {}
})

type Props={
    children:React.ReactNode
}

export const AuthContextProvider=({children}:Props)=>{
    const [value, setUser] = useState<UserType|null>(null)
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)   
    return(
        <AuthContext.Provider value={{user:value, setUser:setUser, isLoggedIn:isLoggedIn, setIsLoggedIn:setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}