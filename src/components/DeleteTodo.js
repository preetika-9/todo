function DeleteTodo({todo, setTodos}) {
    function handleDeleteTodo(e) {
      e.stopPropagation()
      const confirmed = window.confirm("Do you want to delete this?");
      if (confirmed){
        console.log('This is deleted.');
          setTodos((prevTodos) => {
            return prevTodos.filter((td) => td.id !== todo.id);
          });
      }
    }
    return (
      <span
      onClick={handleDeleteTodo} 
      role="button" 
      style={{
        color: 'red',
        fontWeight: 'bold',
        marginLeft: 10,
        cursor: "pointer"
      }}>X</span>
    )
  }

  export default DeleteTodo