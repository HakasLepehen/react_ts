import React, { useState } from "react";
import { ITodo } from "../types/data";
import { TodoList } from "./TodoList";

export const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (): void => {
    if (value) {
      setTodos([...todos, {
        id: Date.now(),
        title: value,
        complete: false,
      }])
    }
    setValue('');
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  return (
  <div>
    <div>
      <input value={value} onChange={handleChange} type="text" />
      <button onClick={addTodo}>Add</button>
      </div>
      <TodoList items={todos}/>
  </div>
)}