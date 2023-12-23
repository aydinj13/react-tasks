import { useState } from "react"

export function NewTodoForm({onSubmit}) {

    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return 

        onSubmit(newItem)

        setNewItem("")
      }

    return (
    <form onSubmit={handleSubmit} className="new-item-form">
    <label htmlFor="item">Add a To-do:</label>
    <input 
    value={newItem} 
    onChange={e => setNewItem(e.target.value) } 
    type="text" 
    id="item" 
    />
    <button className="btn">Add</button>
   </form>
    );
}