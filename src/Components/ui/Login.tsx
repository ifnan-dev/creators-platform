import Header from "../common/Header"

const Login=()=>{
    return (
        <>
        <Header/>
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <div className="flex flex-col w-1/4">
                <form action="/login" method="POST" className="flex flex-col">
                    <input type="text" placeholder="Username" className="border p-2 mb-4"/>
                    <input type="password" placeholder="Password" className="border p-2 mb-4"/>
                    <button type="submit" className="bg-blue-500 text-white p-2">Login</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login