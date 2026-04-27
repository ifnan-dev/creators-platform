import { createContext, useState, type ReactNode } from "react"

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
    children:ReactNode
}

export const AuthProvider=({children}:Props)=>{
    const [user, setUser] = useState<UserType|null>(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)   
    return(
        <AuthContext.Provider value={{user:user, setUser:setUser, isLoggedIn:isLoggedIn, setIsLoggedIn:setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}