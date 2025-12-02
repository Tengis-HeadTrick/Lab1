"use client";



import { useEffect, useState } from "react";

interface Todo {
  id: number;         
  text: string;       
  done: boolean;      
  dueDate: string;     
}

export default function TodoList() {
 
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [filter, setFilter] = useState("all"); 


  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); 


  const addTodo = () => {
    if (newTodo.trim() === "") return; 
    const todo: Todo = {
      id: Date.now(),
      text: newTodo,
      done: false,
      dueDate: dueDate || "No date",
    };
    setTodos([...todos, todo]);
    setNewTodo("");
    setDueDate("");
  };

 
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };


  const toggleDone = (id: number) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };


  const filteredTodos = todos.filter((t) => {
    if (filter === "done") return t.done;
    if (filter === "notDone") return !t.done;
    return true;
  });

  return (

    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Todo List</h1>

      
      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          placeholder="Шинэ даалгавар..."
          onChange={(e) => setNewTodo(e.target.value)}
          className="border p-2 flex-1 rounded"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Нэмэх
        </button>
      </div>

     
      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1 rounded ${
            filter === "all" ? "bg-gray-700 text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("done")}
          className={`px-3 py-1 rounded ${
            filter === "done" ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
        >
          Done
        </button>
        <button
          onClick={() => setFilter("notDone")}
          className={`px-3 py-1 rounded ${
            filter === "notDone" ? "bg-red-500 text-white" : "bg-gray-200"
          }`}
        >
          Not Done
        </button>
      </div>


      <ul className="space-y-2">
        {filteredTodos.map((t) => (
          <li
            key={t.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <div>
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => toggleDone(t.id)}
                className="mr-2"
              />
              <span className={`${t.done ? "line-through text-gray-500" : ""}`}>
                {t.text}
              </span>
              <p className="text-sm text-gray-400">🕒 {t.dueDate}</p>
            </div>
            <button
              onClick={() => deleteTodo(t.id)}
              className="text-red-600 hover:text-red-800 font-bold"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
