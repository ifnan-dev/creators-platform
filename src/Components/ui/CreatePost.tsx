import { FileIcon } from "lucide-react"
import Button from "./Button"
import { useForm } from "../../hooks/use-form"
import { API_URL } from "../../config/dot-env.config"






const CreatePost=()=>{
    const {values,isSubmitting,handleChange,handleSubmit }=useForm(
    {
        initialValues:{
          title:"",
          description:"",
          imageUrl:""
          
        },
        onSubmit:(values:any)=>{
            onHandleSubmit(values)
        }
    }
)



const onHandleSubmit = async(e:any)=>{
    e.preventDefault();

    const apiResponse = await fetch(`${API_URL}/posts`,{
        method:"POST",
        body:JSON.stringify(values)
    })
    alert('post successful');
}
    return(
        
        <div className="flex flex-col justify-center items-center w-full ">
            <form onSubmit={onHandleSubmit} className=" flex flex-col items-center border-2 gap-2 border-blue-400 rounded-2xl w-1/2 px-2 py-5 my-5">
            <span>hey there</span>
                <input name="title" value={values.title} onChange={handleChange} className="flex flex-row  items-start border-1 w-1/2 border-blue-300 rounded-lg px-4 py-2 h-8 w-2/3 placeholder-blue-200" placeholder="Title..." />
                <input name="description" value={values.description} onChange={handleChange} className=" border-1 min-h-50  border-blue-300 rounded-lg px-4 h-8 w-2/3 placeholder-blue-200 " placeholder="Title..." />
                <div className="flex flex-col">

                <span>Upload image</span>
                <div className="flex flex-row gap-2 border border-blue-400 px-3 py-1">
                <FileIcon color="orange"/>
                      <input name="imageUrl" value={values.imageUrl} onChange={handleChange} className="flex flex-row  items-start border-1 w-1/2 border-blue-300 rounded-lg px-4 py-2 h-8 w-2/3 placeholder-blue-200" placeholder="paste image url from ..." />
          </div>
                </div>
                <div className="flex gap-2">
                <Button text={"Cancel"} variant="secondary"/>
               <button type="submit" className="bg-blue-500 text-white p-2 cursor-pointer" >Post</button>
                </div>
            </form>
            <img src={values.imageUrl} className="w-full " alt="image" />
        </div>
        
    )
}


export default CreatePost