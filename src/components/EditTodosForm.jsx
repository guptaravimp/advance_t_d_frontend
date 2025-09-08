import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { addTodo, getAllCategory, updateTodo } from '../APIServices/todoApi'
function EditTodosForm({ id, editMode, setEditMode, edittodoData }) {
    const { theme } = useSelector((state) => state.theme)
    const [allCategory, setAllcategory] = useState([])
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            title: "",
            description: "",
            category: "",
            status:"",
            startDate: "",
            endDate: ""
        }
    });

    useEffect(() => {
        console.log("EDIt to od data",edittodoData)
        if (edittodoData) {
            reset({
                title: edittodoData?.title,
                description: edittodoData?.description,
                category: edittodoData?.category,
                status:edittodoData?.status,
                startDate: edittodoData?.startDate?.slice(0, 10),
                endDate: edittodoData?.endDate?.slice(0, 10)
            })
        }
    }, [edittodoData, reset])


    const onSubmit = async (data) => {
        try {
            console.log("data is ",data)
            const res = await updateTodo(id, data);
            console.log("response is  bro", res)
            if (res.data?.success) {
                toast.success(" Todo Updated Successfully")
            } else {
                toast.error("Error in adding Todo")
            }
            setEditMode(false)

        } catch (error) {
            console.log("error in while adding todo")
        }
        console.log("Data is ", data)
    }
    useEffect(() => {
        const fetchAllcategory = async () => {
            const res = await getAllCategory();
            console.log("all category is", res.data?.data)
            setAllcategory(res.data?.data);

        }
        fetchAllcategory()
    }, [editMode])
    console.log("all category is  ravi", allCategory)
    return (
        <div>
            <div className='fixed inset-0 z-50 flex  justify-center items-center   bg-opacity-50 w-[100%] '>
                <div className={`${theme === 'light' ? "bg-[#f0f2f5]" : "bg-[#1a1a1a]"}  w-[40%] EditTodoS  p-4 rounded-xl  border-[2px]`}>
                    <div className='flex justify-center items-center text-xl font-semibold relative'>
                        <p>Edit Your Todo</p><button className='ml-10 absolute right-1' onClick={() => setEditMode(!editMode)}>X</button>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='gap-4'>
                        <div className='flex flex-col justify-between items-center gap-3 p-4 w-[100%] '>
                            <div className='w-full flex flex-col justify-start items-start  gap-2 '>
                                <label className='text-md font-semibold' htmlFor="title">Task Title<span className='text-red-600 text-xl'>*</span></label>
                                <input className={`${theme === 'light' ? "bg-white" : "bg-[#111111]"} w-full rounded-xl outline-none p-3 `} {...register("title")} type="text" id='title' />
                            </div>
                            <div className='w-full flex flex-col  gap-2 justify-start items-start'>
                                <label className='text-md font-semibold' htmlFor="description">Task Description<span className='text-red-600 text-xl'>*</span></label>
                                <input className={`${theme === 'light' ? "bg-white" : "bg-[#111111]"} w-full rounded-xl outline-none p-3 `}  {...register("description")} type="text" id='description' />
                            </div>
                            <div className='w-full flex flex-col justify-start items-start gap-2 ' >
                                <label className='text-md font-semibold' htmlFor="category">Task Category<span className='text-red-600 text-xl'>*</span></label>
                                <select className={`${theme === 'light' ? "bg-white" : "bg-[#111111]"} w-full rounded-xl outline-none p-3 `}  {...register("category")} name="category" id="category" >
                                    <option value="">Select category</option>
                                    {

                                        allCategory && (

                                            allCategory.map((value, index) => (
                                                // console.log("{value.name}", value.name)
                                                <option className="w-[70px]" key={index} value={value.name}>{value.name}</option>

                                            ))
                                        )
                                    }
                                </select>
                            </div>
                            <div className='w-full flex flex-col justify-start items-start gap-2 ' >
                                <label className='text-md font-semibold' htmlFor="status">Task Status<span className='text-red-600 text-xl'>*</span></label>
                                <select className={`${theme === 'light' ? "bg-white" : "bg-[#111111]"} w-full rounded-xl outline-none p-3 `}  {...register("status")} name="status" id="status" >
                                    <option value="Pending">Pending</option>
                                    <option value="Completed">Completed</option>

                                </select>
                            </div>

                            <div className='w-full flex flex-col  gap-2 justify-start items-start'>
                                <label className='text-md font-semibold' htmlFor="startDate">Task Start date<span className='text-red-600 text-xl'>*</span></label>
                                <input className={`${theme === 'light' ? "bg-white" : "text-black"} w-full rounded-xl outline-none p-3 `}  {...register("startDate")} type="date" id='startDate' />
                            </div>
                            <div className='w-full flex flex-col  gap-2 justify-start items-start'>
                                <label className='text-md font-semibold' htmlFor="endDate">Task EndDate <span className='text-red-600 text-xl'>*</span></label>
                                <input className={`${theme === 'light' ? "bg-white text-black" : " text-black"} w-full rounded-xl outline-none p-3 `}  {...register("endDate")} type="date" id='endDate' />
                            </div>
                        </div>

                        <input type="submit" className='cursor-pointer bg-green-700 text-white rounded-xl p-2 w-[100%]' />
                    </form>


                </div>


            </div>
        </div>
    )
}

export default EditTodosForm
