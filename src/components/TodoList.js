import DeleteTodo from "./DeleteTodo";
function TodoList({todos,setTodos}) {
    function handleToggleTodo(todo) {
  
    const updatedTodos = todos.map(td => 
    td.id === todo.id
    ?{
      ...td,
      done: !td.done
    }: td);
    setTodos(updatedTodos)
  }
  
  if (!todos.length){
    return <p>No todos left!</p>
  }
    return(
      <ul>
        {todos.map((todo) => (
          <li 
          onClick={() => handleToggleTodo(todo)}
          style={{
            textDecoration: todo.done ? 'line-through' : ""
          }}
          key={todo.id}>{todo.text}
          <DeleteTodo todo={todo} setTodos={setTodos}/>
          </li>
  
        ))}
      </ul>
    );
  }

  export default TodoList