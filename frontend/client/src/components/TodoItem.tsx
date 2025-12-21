import { useState } from "react";
import todoApi from "../api/todoApi";

export default function TodoItem({
  todo,
  fetchTodos,
  token,
}: {
  todo: { _id: string; title: string; completed: boolean };
  fetchTodos: () => void;
  token: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const toggleCompleted = async () => {
    try {
      setLoading(true);
      await todoApi.updateTodo(todo._id, { completed: !todo.completed }, token);
      fetchTodos();
    } catch {
      setError("Failed to update todo");
    } finally {
      setLoading(false);
    }
  };

  const removeTodo = async () => {
    try {
      setLoading(true);
      await todoApi.deleteTodo(todo._id, token);
      fetchTodos();
    } catch {
      setError("Failed to delete todo");
    } finally {
      setLoading(false);
    }
  };

  const saveTitle = async () => {
    if (!title.trim()) return;
    try {
      setLoading(true);
      await todoApi.updateTodo(todo._id, { title }, token);
      setEditing(false);
      fetchTodos();
    } catch {
      setError("Failed to update title");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="todo-item">
      <input type="checkbox" checked={todo.completed} onChange={toggleCompleted} />
      {editing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <button onClick={saveTitle} disabled={loading}>
            Save
          </button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
            {todo.title}
          </span>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={removeTodo} disabled={loading}>
        {loading ? "Deleting..." : "Delete"}
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
