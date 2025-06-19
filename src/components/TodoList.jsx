import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "تعلم React" },
    { id: 2, text: "بناء مشروع قائمة مهام" },
  ]);

  const [newTodo, setNewTodo] = useState("");

  function handleInputChange(e) {
    setNewTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setTodos([...todos, { id: Date.now(), text: newTodo }]);
    setNewTodo("");
  }

  function handleDelete(idToDelete) {
    const updatedTodos = todos.filter((todo) => todo.id !== idToDelete);
    setTodos(updatedTodos);
  }
  return (
    <div>
      <h1>قائمة المهام</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="أضف مهمة جديدة..."
        />
        <button type="submit">إضافة</button>
        <ul>
          {todos.map((todo) => (
            <div>
              <li key={todo.id}>
                {todo.text}
                <button
                  style={{ marginRight: "10px" }}
                  onClick={() => handleDelete(todo.id)}
                >
                  حذف
                </button>
              </li>
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default TodoList;
