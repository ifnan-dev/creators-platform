import { useState } from "react";

type Props={
    initialValues: any,
    onSubmit: (e: any) => void
}

export function useForm({initialValues,onSubmit}:Props){
    const [values, setValues] = useState(initialValues)
    const [isSubmitting, setISubmitting] = useState(false)

    const handleChange=(e: any)=>{
        const {name,value}=e.target;
        setValues((prevValues: any) => ({
            ...prevValues,
            [name]:value
        }))
    }
    const handleSubmit=(e: any)=>{
        e.preventDefault()
        try{
            setISubmitting(true)
            onSubmit(e)
        }
        catch(error){
            console.error("Error submitting form", error)
        }
        
        finally {
            setISubmitting(false)
        }
    }
    
    return { values, handleChange, handleSubmit, isSubmitting };
}