//Create a list of task
// The list must add other task
// The list should be able to remove other task



// import "./App.css"
import { useState } from "react"
import List from "./components/List"
import UserInput from "./components/UserInput"


const To_do_list = () => {
  const [list, setList] = useState([])

  const handleForm = (newItem) => {
    setList([...list, { value: newItem, checked: false, date: new Date() }])
  }

  const handleChecked = (index) => {
    let storedList = [...list]
    storedList[index].checked = !storedList[index].checked
    setList(storedList)
  }

  const handleDelete = (index) => {
    let storedList = [...list]
    storedList.splice(index, 1)
    setList(storedList)
  }

  return (
    <div className="wrapper">
      <h1>To-Do-List</h1>
      <UserInput handleForm={handleForm} />
      <List items={list} handleDelete={handleDelete} handleChecked={handleChecked} />
    </div>
  )
}

export default To_do_list;

