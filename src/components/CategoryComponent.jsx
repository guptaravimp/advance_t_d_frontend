import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { addCategories, addTodo, getAllCategory } from '../APIServices/todoApi';
function CategoryComponent({ activeTab }) {
  const { theme } = useSelector((state) => state.theme)
  const [allCategory, setAllcategory] = useState([])
  const [addingCategories,setAddingCategories]=useState(false);
  const [name,setName]=useState("");
  useEffect(() => {
    const fetchAllcategory = async () => {
      const res = await getAllCategory();
      console.log("all category is", res.data?.data)
      setAllcategory(res.data?.data);

    }
    fetchAllcategory()
  }, [addCategories])
  const handleAddcategories=()=>{
    setAddingCategories(true)
  }
  const handleAddCategories=async()=>{
    try{
       const res=await addCategories(name);
       if(res.data?.success){
        toast.success("Category Added Successfully")
        setAddingCategories(false)
       }
    }catch(error){
      console.log("Error Occured During Categories adding")
    }
  }
  return (
    <div className='w-[100%] p-8'>
      <Toaster position='top-right' />
      <div className=' ml-4 w-[90%] flex flex-row gap-4 justify-start item-center taskListMainDiv'>
        <div className='flex justify-between items-center w-full '>
          <button>All Categories</button>
          <button className='text-md p-2 rounded-md bg-green-600' onClick={handleAddcategories}>+ Add Categories</button>
        </div>
      </div>
      <div className={`ml-4 mt-4 ${theme === 'light' ? "bg-[#e4e4e7] " : "bg-[#2c2c2c]"} w-[95%]  h-[2px] taskListMainDiv`}></div>
      <div className='p-4 flex flex-wrap justify-start  items-center gap-3  '>
        {
          allCategory.map((name,idx)=>(
            <div className='p-2 border-[1px] rounded-xl'> {name.name}</div>
          ))
        }
      </div>
       {
        addingCategories&&(
          <div className='p-4 rounded-xl border-2 z-50 w-[30%] flex flex-col justify-evenly gap-4 items-start pl-2'>
            <p className='flex justify-between w-full items-center p-4'><p>Add Your Categories</p> <button onClick={()=>setAddingCategories(false)}><span>X</span></button></p>
            <input type="text" className='p-2 ml-3 rounded-xl border-[2px] outline-none text-black' onChange={(e)=>setName(e.target.value)} placeholder='Write Category'/>
            <button onClick={handleAddCategories} className='p-2 ml-3 bg-green-600 w-[50%] text-white rounded-md'>Save</button>
          </div>
        )
       }
    </div>
  )
}

export default CategoryComponent
