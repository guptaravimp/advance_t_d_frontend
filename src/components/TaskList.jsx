import React, { useState } from 'react'
import { Edit, Trash2 } from "lucide-react"
import { useSelector } from 'react-redux'
import { deleteTodo ,getTodoById} from '../APIServices/todoApi'
import { toast } from 'react-hot-toast'
import EditTodosForm from './EditTodosForm'
function TaskList({ key, todo, onChange }) { 
  if(!todo || !todo._id)return null;
    console.log("Todo is ",todo)
    const { theme } = useSelector((state) => state.theme)
    const [editMode,setEditMode]=useState(false)
    const [edittodoData,seteditTodoData]=useState({})
    const idtodo=todo?._id;
    const handleDeleteTodo = async (id) => {
        const res = await deleteTodo(id);
        if (res) {
            toast.success("Todo Deleted Successfully");
            onChange(id)
        }
    }
    const handleEditTodo = async(id) => {
        try{
            const res=await getTodoById(id);
            console.log("response is ",res.data?.data)
            seteditTodoData(res.data?.data)
        }catch(error){
            console.log("Error occured during getting TOdo by id")
        }
           setEditMode(true);
    }

    console.log("edittodoData", edittodoData)
    return (
        <div key={key} className={`${theme === 'light' ? "bg-[#f0f2f5]" : "bg-[#111111]"} w-[100%] border-[1px]  flex justify-between items-center p-3 rounded-md taskList`}>
            <div className='flex flex-col justify-start items-start ml-4'>
                <p className='text-md font-semibold'>{todo.title}</p>
                <p>{todo.description?.slice(0, 40)}...</p>
            </div>

            <div className='CategoryandStatus flex justify-between items-center gap-4 '>
                
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-md font-semibold'>Status</p>
                    <p className={`${todo.status === 'Pending' ? "text-red-600 " : "text-green-600"} `}>{todo.status}</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-md font-semibold'>Category</p>
                    <p className='text-green-600  '>{todo.category}</p>
                </div>


            </div>
            <div className='CategoryandStatus flex justify-between items-center gap-4 '>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-md font-semibold'>Start Date</p>
                    <p className='text-green-600 rounded-xl p-1 '>{todo.startDate?.slice(0, 10)}</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-md font-semibold'>End Date</p>
                    <p className='text-green-600 rounded-xl p-1 '>{todo.endDate?.slice(0, 10)}</p>
                </div>
            </div>

            <div className='flex  justify-center gap-4 items-start'>
                <button onClick={()=>handleEditTodo(todo._id)}> <Edit size={25} /></button>
                <button onClick={() => handleDeleteTodo(todo._id)}> <Trash2 size={25} /></button>
            </div>


            {
                editMode && (
                    <EditTodosForm id={idtodo} editMode={editMode} setEditMode={setEditMode} edittodoData={edittodoData}/>
                )
            }
        </div>
    )
}

export default TaskList;
