import React from "react";
function AddTodo({setTodos}) {
    const inputRef = React.useRef();
  
    function handleAddTodo(event){
      event.preventDefault();
      const text = event.target.elements.addTodo.value;
      const todo = {
        id: setTodos.length,
        text,
        done:false
      };
      setTodos(prevTodos => {
        return prevTodos.concat(todo)
      })
      inputRef.current.value = " ";
    }
  
    return(
      <form onSubmit={handleAddTodo}>
        <input ref={inputRef} name="addTodo" placeholder='Add todo'/>
        <button type='submit'>Submit</button>
      </form>
    );
  }

  export default AddTodo