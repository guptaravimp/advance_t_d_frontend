import { useDispatch, useSelector } from 'react-redux'
import { Sun, Moon, Search, Menu } from 'lucide-react'
import { setThemeToggle } from '../slices/themeSlice'
import { useState } from 'react'

function Header({ mobileMode, activeTab, setSidebarOpen, sidebarOpen, searchQuery, setSearchQuery }) {
    const { theme } = useSelector((state) => state.theme)
    const [searching, setsearching] = useState(false)
    const dispatch = useDispatch()
    return (
        <div className='w-[95%] flex flex-row justify-between item-center p-2 mt-6 mobileHeader'>
            <div className='flex justify-between'>
                {mobileMode && !sidebarOpen && (
                    <div className='flex justify-center items-center'>
                        <button
                            className="m-2  rounded-md  text-white z-50  cursor-pointer"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            <Menu size={25} />
                        </button>
                    </div>

                )}




                <div className='text-xl font-bold'>{activeTab}</div>
            </div>
            <div className='flex justify-between items-center gap-6'>

                <div className={`${theme == 'light' ? "text-black " : "text-white bg-black"} relative `}>
                    {!searching ? <span className='absolute top-2 left-2'><Search /></span> : <></>}
                    <input type="Search" value={searchQuery} onChange={(e) => {
                        setsearching(true);
                        setSearchQuery(e.target.value);
                    }
                    } placeholder='      Search task' className={`p-2 rounded-md outline-none  border-2 ${theme == 'light' ? "text-black " : "text-white bg-black"}`
                    } />
                </div>


                <div className='flex flex-row justify-between item-center gap-8 mr-4 '>



                    <span>
                        <button className=''
                            onClick={() => {
                                dispatch(setThemeToggle())
                            }}>


                            {
                                theme === 'light' ? <Sun size={30} /> : <Moon size={30} />
                            }

                        </button>
                    </span></div>
            </div>





        </div>
    )
}

export default Header
