import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllCategory, getAllTodo } from '../APIServices/todoApi'
import TaskList from './TaskList'
import { Filter } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'
function InboxComponent({ searchQuery, setSearchQuery ,todoData, setTodoData}) {
    const { theme } = useSelector((state) => state.theme)
    const [activeFilter, setActiveFilter] = useState("All")
    // const [todoData, setTodoData] = useState([]);
    const [FilterData, setFilterData] = useState([])
    const [showfilter, setshowfliter] = useState(false)
    const [allcategories, setAllcategory] = useState([]);
    const [selectedCategories, setselectedCategory] = useState([]);
    useEffect(() => {
        const fetchtodos = async () => {
            const res = await getAllTodo();
            setTodoData(res.data?.data)

        }

        fetchtodos()

    }, [todoData])


    useEffect(() => {
        const fetchAllcategory = async () => {
            const res = await getAllCategory();
            console.log("all category is", res.data?.data)
            setAllcategory(res.data?.data);

        }
        fetchAllcategory()
    }, [])

    useEffect(() => {
        let filtered = [...todoData];
        if (activeFilter !== "All") {
            filtered = todoData.filter((todo) => todo.status === activeFilter)
        }
        if (searchQuery.trim() !== "") {
            filtered = filtered.filter(todo => {
                return (todo.title.toLowerCase().includes(searchQuery.toLowerCase()) || todo.description.toLowerCase().includes(searchQuery.toLowerCase()))
            })
        }

        if (selectedCategories.length > 0) {
            filtered = filtered.filter((todo) =>
                selectedCategories.includes(todo.category)
            );
        }

        
        filtered.sort((a, b) => {
            if (!a.endDate) return 1;
            if (!b.endDate) return -1;
            return new Date(a.endDate) - new Date(b.endDate);
        })


        setFilterData(filtered)
    }, [activeFilter, todoData, searchQuery,selectedCategories])



    const handleChange = (id) => {
        setTodoData((prev) => prev.filter((todo) => todo._id !== id))
    }


    console.log("Todo data is", todoData)
    console.log("Filter Data is ", FilterData)
    console.log("selectedCategories", selectedCategories);
    return (
        <div className='w-[100%] p-8'>
            <Toaster position='top-right' />
            <div className='ml-4 w-[90%] flex flex-row  justify-between item-center taskListMainDiv'>
                <div className=' ml-4 w-[60%] flex flex-row gap-4 justify-start item-center taskListMainDiv'>

                    <button className='hover:text-green-600' onClick={() => {
                        setActiveFilter("All");
                        toast.success("All Todo")
                    }} >All</button>
                    <button className='hover:text-green-600' onClick={() => {
                        setActiveFilter("Pending");
                        toast.success("You all Pending Task")
                    }}>Pending</button>
                    <button className='hover:text-green-600' onClick={() => {
                        setActiveFilter("Completed");
                        toast.success("You all Completed Task")

                    }}>Completed</button>



                </div>
                <div className='relative w-[15%] filterApplied'>
                    <button onClick={() => setshowfliter(!showfilter)} className='w-full p-2 cursor-pointer '>
                        <div className=' border-2 flex justify-evenly items-center  p-2  rounded-xl '>
                            <Filter size={25} />
                            <p className='text-md'>Apply Filter</p>

                        </div>
                    </button>

                    {
                        showfilter && (
                            <div className='absolute filteroption  top-14 flex flex-col justify-evenly bg-blue-600 rounded-md items-start border-2'>
                                {
                                    allcategories && (
                                        allcategories.map((categoryi, index) => (
                                            <div className='p-2 border-2 flex justify-center items-center w-full rounded-md gap-4 '>

                                                <label htmlFor="category">{categoryi.name}</label>
                                                <input type="checkbox" id={categoryi.name} checked={selectedCategories.includes(categoryi.name)}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setselectedCategory((prev) => [...prev, categoryi.name])
                                                        } else {
                                                            setselectedCategory((prev) => prev.filter((c) => {
                                                                return c !== categoryi.name
                                                            }))
                                                        }
                                                    }} className='text-xl scale-110' value={categoryi.name} />
                                            </div>

                                        ))
                                    )
                                }
                            </div>
                        )
                    }
                </div>


            </div>

            <div className={`ml-4 mt-2 ${theme === 'light' ? "bg-[#e4e4e7] " : "bg-[#2c2c2c]"} w-[95%]  h-[2px] taskListMainDiv`}></div>


            {
                FilterData.length > 0 ? (<div className='w-[90%] p-8 flex flex-col gap-4 taskListMainDiv'>
                    {
                        FilterData.map((value, index) => (
                            <TaskList key={index} todo={value} onChange={handleChange} />
                        ))
                    }

                </div>) : (<div className='p-8 text-xl'>No Todos Found</div>)
            }





        </div>
    )
}

export default InboxComponent
