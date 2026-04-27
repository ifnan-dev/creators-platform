import { useContext } from "react";
import { API_URL } from "../../config/dot-env.config";
import { useForm } from "../../hooks/use-form"
import Header from "../common/Header"
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { frontendRoutes } from "../../model/frontendRoutes";

const Login=()=>{
    const navigate = useNavigate();
    const {user,setUser,isLoggedIn,setIsLoggedIn}=useContext(AuthContext)
    const {values,isSubmitting,handleChange,handleSubmit}=useForm({
        initialValues:{
            username:'',
            password:''
        },
        onSubmit:(value:any)=>{
            onHandleSubmit(value);
        }
    })
    const onHandleSubmit= async (e:any)=>{
        e.preventDefault();
        const userList= await fetch(`${API_URL}/users`,{
            method:"GET",
        })
        const userData = await userList.json();
        const currentUser = userData.filter(
            (user:any)=>user.username===values.username && user.password === values.password
        );
        if(currentUser){
            setUser({username:currentUser[0]["username"],isLoggedIn:true})
            setIsLoggedIn(true)
            navigate(frontendRoutes.home)
            console.log(isLoggedIn)   
        }
        else{
            alert('username or password incorrect')
        }
    }
    return (
        <>
        <Header/>
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <div className="flex flex-col w-1/4">
                <form action="/login" method="GET" className="flex flex-col" onSubmit={onHandleSubmit}>
                    <input value={values.username} onChange={handleChange} type="text" name="username" placeholder="Username" className="border p-2 mb-4"/>
                    <input value={values.password} onChange={handleChange} type="password" name="password" placeholder="Password" className="border p-2 mb-4"/>
                    <button type="submit" className="bg-blue-500 text-white p-2 cursor-pointer">Login</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login