import { useNavigate } from "react-router"
import Button from "../ui/Button"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { PlusIcon } from "lucide-react"

const Header =()=>{
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

  const {user,isLoggedIn,setUser,setIsLoggedIn} = useContext(AuthContext)

    return (
        <div className="flex flex-row p-4 justify-between items-center shadow-xs">
      <div>
        <h1 className="text-4xl font-bold text-blue-500 text-font-700 cursor-pointer" onClick={() => navigate("/")}>
          .web
        </h1>
        
      </div>
      <div className="flex flex-row bg-blue-400 px-2 py-1 text-white">
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
    )
}
export default Header;