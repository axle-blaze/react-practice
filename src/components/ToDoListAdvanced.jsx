import React, { useState } from 'react'

function ToDoListAdvanced() {

    const [todo, settodo] = useState([])
    const [ task_done, settask_done] = useState([])
    const [curr, setCurr] = useState("")

    function thisChange(index) {
        settask_done([...task_done, todo[index]])
        let new_todo = []
        for (let i = 0 ; i < todo.length; i ++){
            if (i !== index){
                new_todo.push(todo[i])
            }
        }

        settodo(new_todo)
    }

  return (
    <div 
    style = {{
        display : "flex",
        align : "center",
        flexDirection : "row"
    }}>
    <div> 
        <p>This is the todo list</p>  
        {todo.map((val, index) =>
        (<div
        style={{
            background : "green",
            fontSize : "10vh",
            width : "500px",
            display : "flex",
            align : "center",
            flexDirection : "row",
            verticalAlign : "center"
        }
        }
         key = {index}>
            {val}
            <button
            style = {{
                height : "5vh"

            }}
            onClick={ () => thisChange(index)}>
                Even I dont know about this
            </button>
         </div>
        )
        )}
        <input
        placeholder='Put in this task in this'
        onChange={(e) => setCurr(e.target.value)}
        />
        <button
        onClick={ () => {settodo([...todo, curr])
            setCurr("")
        }}>
            I dont know what this button will do
        </button>
    </div>
    <div>   
        <p>This is the done list</p>
        {task_done.map((val, index) =>
        (<div
         key = {index}>
            {val}
         </div>
        )
        )}
    </div>
    </div>
  )
}

export default ToDoListAdvanced