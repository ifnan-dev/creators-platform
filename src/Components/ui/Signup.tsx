import { useState } from "react"
import { API_URL } from "../../config/dot-env.config"
import { useForm } from "../../hooks/use-form"
import Header from "../common/Header"
import { useNavigate } from "react-router"

const Signup=()=>{

    const navigate=useNavigate();
const {values,isSubmitting,handleChange,handleSubmit}=useForm({
    initialValues:{
        username:"",
        password:""
    },
    onSubmit:(values:any)=>{
       onHandleSubmit(values)
    }
})

const [repassword,setRePassword]=useState("");

const handleRePasswordChange=(e: any)=>{
    setRePassword(e.target.value)
}


const onHandleSubmit= async(e: any)=>{
    e.preventDefault();
    if(values.password !== repassword){
        alert("Passwords do not match")
    }
    else{
        const apiResponse= await fetch(`${API_URL}/users`,{
            method:"POST",
            body:JSON.stringify(values),});
            alert("Signup successful")
            navigate("/login");
    }
}




    return (
        <>
        <Header/>
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Signup</h1>
            <div className="flex flex-col w-1/4">
                <form onSubmit={onHandleSubmit} method="POST" className="flex flex-col">
                <span className="text-sm text-gray-500 mb-2">Please enter your details to create an account.</span>
                    <input value={values.username}  name="username" type="text" placeholder="Username"  onChange={handleChange} className="border p-2 mb-4"/>
                    <input value={values.password}  type="password" name="password" placeholder="Password" onChange={handleChange} className="border p-2 mb-4"/>
                    <input value={repassword} type="password" name="reEnteredPassword" placeholder="Re-enter Password" onChange={handleRePasswordChange} className="border p-2 mb-4"/>
                    <button type="submit" className="bg-blue-500 text-white p-2 cursor-pointer">Signup</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Signup