import React from 'react'
import { useSelector } from 'react-redux'
import InboxComponent from './InboxComponent'
import CategoryComponent from './CategoryComponent'
function MainComponent({activeTab, setActiveTab, searchQuery, setSearchQuery, todoData, setTodoData}) {
  console.log("searchQuery ",searchQuery)
  return (
    <div className={`w-[100%] `}>
      {
        activeTab==="Inbox" && <InboxComponent activeTab={activeTab} searchQuery={searchQuery} setSearchQuery={setSearchQuery} todoData={todoData} setTodoData={setTodoData}/>
      }
      {
        activeTab==="Category" && <CategoryComponent activeTab={activeTab}/>
      }
      
    </div>
  )
}

export default MainComponent
