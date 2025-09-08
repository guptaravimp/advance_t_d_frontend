import { useSelector } from 'react-redux'
import './App.css'
import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import MainComponent from './components/MainComponent'
import Header from './components/Header'
import { Menu } from 'lucide-react'
import { getAllTodo } from './APIServices/todoApi'
function App() {

  const { theme } = useSelector((state) => state.theme)
  console.log("theme is ", theme)
  const [mobileMode, setMobileMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("");
  const [todoData,setTodoData]=useState([])
  useEffect(() => {
          const fetchtodos = async () => {
              const res = await getAllTodo();
              setTodoData(res.data?.data)
  
          }
  
          fetchtodos()
  
      }, [])
  useEffect(() => {
    document.body.className = theme;
  }, [theme])
  const [activeTab, setActiveTab] = useState("Inbox")



  useEffect(() => {
    const handleResize = () => {
      setMobileMode(window.innerWidth <= 838) // e.g., <= 768px = mobile
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])



  return (
    <div className='flex flex-row justify-between aligh-center'>
      <div className={`${mobileMode ? "fixed top-0 h-full w-[40%]  z-50 transform transition-transform duration-300" : "w-[18%]"} 
      ${sidebarOpen || !mobileMode ? "translate-x-0" : "-translate-x-full"}
      ${theme === 'light' ? "bg-[#f0f2f5]" : "bg-[#111111]"} `}>
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} mobileMode={mobileMode} setTodoData={setTodoData}/>
      </div>



      <div className="flex flex-col justify-start items-center  w-full">
        
        <Header mobileMode={mobileMode} activeTab={activeTab} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <MainComponent activeTab={activeTab} setActiveTab={setActiveTab} searchQuery={searchQuery} setSearchQuery={setSearchQuery} todoData={todoData} setTodoData={setTodoData}/>
      </div>

    </div>
  )
}

export default App
