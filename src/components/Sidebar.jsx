import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Inbox, Grid, CircleCheck } from 'lucide-react'

import { useForm } from 'react-hook-form';
import { addTodo, getAllCategory } from '../APIServices/todoApi';
import toast, { Toaster } from 'react-hot-toast';




const navigationItems = [
    { id: 'inbox', label: "Inbox", icon: <Inbox size={20} /> },
    { id: 'Category', label: "Category", icon: <Grid size={20} /> }
]
function Sidebar({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen,mobileMode, setTodoData }) {
    const { theme } = useSelector((state) => state.theme)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showAddTodo, setShowAddTodo] = useState(false);
    const [allCategory, setAllcategory] = useState([])
    // const [mobileMode, setMobileMode] = useState(false);
    const handleShowAddTodo = async () => {
        setShowAddTodo(true)
    }
    const onSubmit = async (data) => {
        try {
            const res = await addTodo(data);
            console.log("response is ",res)
            if (res.data?.success) {
                toast.success("Added Todo Successfully")
                setTodoData((prev)=>[...prev,res.data.data])
            }else{
                 toast.error("Error in adding Todo")
            }
            console.log("Respons eof add is ".res)
            setShowAddTodo(false)

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
    }, [showAddTodo])
    console.log("all category is  ravi", allCategory)
    return (

        <div className={` w-[100%] h-screen flex flex-wrap flex-col justify-start items-center SideBar  p-4`}>

            <div className=' flex  justify-between items-center gap-1   font-bold text-2xl'><CircleCheck color='green ' size={32} /> Task Master  <span className='top-0 right-0'>{sidebarOpen && mobileMode && <button className='text-xl' onClick={() => setSidebarOpen(!sidebarOpen)}>X</button>
            }


            </span> </div>
            <div className='flex flex-col justify-start items-start gap-4 p-6 w-[100%]'>
                {
                    navigationItems.map((value) => (
                        <button onClick={() => {setActiveTab(value.label)
                            setSidebarOpen(false)}} key={value.id} className={`${theme === 'light' ? "bg-[#f0f2f5] hover:bg-[#e4e4e7]" : " hover:bg-[#1a1a1a]"} flex justify-start ml-4 item-center gap-2  p-2 rounded-xl text-md w-full`}><span className=''>{value.icon}</span> <span> {value.label}</span></button>

                    ))
                }
            </div>
            <button onClick={() => { handleShowAddTodo() }} className='text-md bg-green-600 rounded-xl p-3 font-semibold text-white w-[60%] cursor-pointer'>+ New Task</button>




            {
                showAddTodo && (
                    <div className='fixed top-2 inset-0 z-[9999] flex mt-24  justify-center items-center   bg-opacity-50 w-screen '>
                        <div className={`${theme === 'light' ? "bg-[#f0f2f5]" : "bg-[#1a1a1a]"} ${mobileMode?" ml-10 w-[100%]":"w-[40%]"}   p-4 rounded-xl z-100  border-[2px]`}>
                            <div className='flex justify-center items-center text-xl font-semibold relative'>
                                <p>Add Your Todo</p><button className='ml-10 absolute right-1' onClick={() => setShowAddTodo(false)}>X</button>
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
                                        <select className={`${theme === 'light' ? "bg-white" : "bg-[#111111]"} w-full rounded-xl outline-none p-3 `}  {...register("category")} name="category" id="category">
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
                                    <div className='w-full flex flex-col  gap-2 justify-start items-start'>
                                        <label className='text-md font-semibold' htmlFor="startDate">Task Start date<span className='text-red-600 text-xl'>*</span></label>
                                        <input className={`${theme === 'light' ? "bg-white" : "text-black"} w-full rounded-xl outline-none p-3 `}  {...register("startDate")} type="date" id='startDate' />
                                    </div>
                                    <div className='w-full flex flex-col  gap-2 justify-start items-start'>
                                        <label className='text-md font-semibold' htmlFor="endDate">Task EndDate <span className='text-red-600 text-xl'>*</span></label>
                                        <input className={`${theme === 'light' ? "bg-white" : "text-black"} w-full rounded-xl outline-none p-3 `}  {...register("endDate")} type="date" id='endDate' />
                                    </div>
                                </div>

                                <input type="submit" className='cursor-pointer bg-green-700 text-white rounded-xl p-2 w-[100%]' />
                            </form>


                        </div>


                    </div>
                )
            }
        </div>
    )
}

export default Sidebar
