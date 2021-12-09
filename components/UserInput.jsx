import { useState } from "react"

const UserInput = ({ handleForm }) => {
  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    handleForm(input)
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className="text" placeholder='Add Task' name="added" type="text" onChange={(e) => setInput(e.target.value)} value={input} />
      <button type="submit">+</button>
    </form>
  )
}

export default UserInput






























// import { useState } from "react";


// const Task = ({handleForm}) => {
//     const [inputs, setInput] = useState("");
//     const [timeTodo, setTime] = useState("")

//     const handleInput = (event) => {
//         event.preventDefault();
//         handleForm(inputs)
//         setInput("")
//     }

//     return(
//         <form onSubmit={handleInput}> 
//             <input type="text" placeholder="Add new task" value={inputs} onChange={(e) => {setInput(e.target.value)}}/>
//             {/* <input type="time" value={timeTodo} onClick={(e) => {setTime(e.target.value)}}/> */}
//             <button type="submit">+</button>
//         </form>
//     )
    

// }

// export default Task;