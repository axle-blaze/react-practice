import React from 'react'
import { useState } from 'react'

function ToDoList() {
    const [data, setData] = useState({
        name : "",
        deadline : "",
        isDone : ""
    })

    const [list,setList] = useState([])

    console.log(list)

    function newList(index) {
        const newer = []
        console.log("This is the index",index)
        for (let i = 0; i < list.length; i++) {
            if (i !== index){
                newer.push(list[i])
            }
        }
        setList(newer)

    }

  return (
    <div>   
    <div>ToDoList</div>

    <input
     placeholder='Gice mee something'
     onChange = { (e) => setData({...data, name : e.target.value})}
    />
    <input
     placeholder='Gice mee something'
     onChange = { (e) => setData({...data, deadline : e.target.value})}
     />
    <input
     placeholder='Gice mee something'
     onChange = { (e) => setData({...data, isDone : e.target.value})}
     />
    <button
        style={{ height: '10vh', marginTop: '10px' }}
        onClick={() => {
          setList([...list, data]);
          setData({ name: '', deadline: '', isDone: false });
        }}
      >
        Add Task
    </button>

    <div > 
     {list.map((value, index) => (
        <div key = {index}>
           {value.name} - {value.deadline} - {value.isDone ? '✅' : '❌'}
           <button 
           onClick = { () => newList(index)}>
            Delete Button
           </button>
        </div>
     ))} 
    </div>
    </div>
  )
}

export default ToDoList