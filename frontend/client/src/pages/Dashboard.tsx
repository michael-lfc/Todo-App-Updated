import { useState, useEffect } from "react";
import todoApi from "../api/todoApi";
import { useAuth } from "../context/AuthContext";
import TodoItem from "../components/TodoItem";

export default function Dashboard() {
  const { token } = useAuth();

  const [todos, setTodos] = useState<
    { _id: string; title: string; completed: boolean }[]
  >([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTodos = async () => {
    if (!token) return;

    try {
      setLoading(true);
      const res = await todoApi.getTodos(token);
      setTodos(res.data);
    } catch {
      setError("Failed to fetch todos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [token]);

  const handleAdd = async () => {
    if (!title.trim() || !token) return;

    try {
      setLoading(true);

      await todoApi.createTodo(title, token); // create only
      setTitle("");

      await fetchTodos(); // 🔥 sync state with backend
    } catch {
      setError("Failed to add todo");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard">
      <h2>My Todos</h2>

      <div className="add-todo">
        <input
          placeholder="New Todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={handleAdd} disabled={loading}>
          {loading ? "Saving..." : "Add"}
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="todos-list">
        {todos.length === 0 && <p>No todos yet</p>}

        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            fetchTodos={fetchTodos}
            token={token!}
          />
        ))}
      </div>
    </div>
  );
}
