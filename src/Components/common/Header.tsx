import { useNavigate } from "react-router"
import Button from "../ui/Button"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { PlusIcon } from "lucide-react"
import { frontendRoutes } from "../../model/frontendRoutes"

const Header =()=>{
  const [isWritingPost,setWritingPost]=useState(false);
  const navigate = useNavigate()
 const onSigninCLick=()=>{
  navigate("/login")
  }
  const onSignupClick=()=>{
  navigate("/signup")
  }
  const onLogoutClick=()=>{
    setUser(null)
    setIsLoggedIn(false)
  }
  const onCreatePostClick=()=>{
    navigate(frontendRoutes.post)
    if(isWritingPost){
      setWritingPost(false)
    }
    else{
      setWritingPost(true)
    }
  }

  const {user,isLoggedIn,setUser,setIsLoggedIn} = useContext(AuthContext)
    return (
      <>
        <div className="flex flex-row p-4 justify-between items-center shadow-xs">
      <div>
        <h1 className="text-4xl font-bold text-blue-500 text-font-700 cursor-pointer" onClick={() => navigate("/")}>
          .web
        </h1>
      </div>
      <div className="flex flex-row bg-blue-400 px-2 py-1 text-white cursor-pointer " onClick={onCreatePostClick}>
        <PlusIcon color="#ffffff"/>
        <p>Create new post</p>
      </div>
      
      <div className="gap-2 flex flex-row">
        {(isLoggedIn)?<>
        <h1>Welcome {user?.username}</h1>
        <Button text="Logout" variant="danger" buttonClick={onLogoutClick} />
        </>:<>
        <Button text="Login" buttonClick={onSigninCLick} />
        <Button text="Signup" variant="secondary" buttonClick={onSignupClick} />
        </>}
        
      </div>

    </div>
    {(isWritingPost)?<>
    <div className="flex flex-row justify-center transition-discrete delay-150 duration-300 ease-in-out">
     <div className="flex flex-row justify-center">
      
     </div>
    </div></>:<></>}
   
    
      </>
    )
}
export default Header;