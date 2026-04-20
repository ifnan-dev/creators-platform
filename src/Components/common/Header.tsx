import Button from "../ui/Button"

const Header =()=>{
    return (
        <div className="flex flex-row p-4 justify-between items-center shadow-xs">
      <div>
        <h1 className="text-4xl font-bold text-blue-500 text-font-700">
          .web
        </h1>
      </div>
      <div className="gap-2 flex flex-row">
        <Button text="Login "/>
        <Button text="Signup " variant="secondary" />
      </div>
    </div>
    )
}
export default Header;