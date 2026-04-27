import { useNavigate } from "react-router"
import Button from "../ui/Button"

const Header =()=>{
  const navigate = useNavigate()
 const onSigninCLick=()=>{
  navigate("/login")
  }
  const onSignupClick=()=>{
  navigate("/signup")
  }

    return (
        <div className="flex flex-row p-4 justify-between items-center shadow-xs">
      <div>
        <h1 className="text-4xl font-bold text-blue-500 text-font-700 cursor-pointer" onClick={() => navigate("/")}>
          .web
        </h1>
      </div>
      <div className="gap-2 flex flex-row">
        <Button text="Login" buttonClick={onSigninCLick} />
        <Button text="Signup" variant="secondary" buttonClick={onSignupClick} />
      </div>
    </div>
    )
}
export default Header;