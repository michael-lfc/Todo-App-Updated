// src/components/Navbar.tsx
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { token, logout } = useAuth();
  const { dark, setDark } = useTheme();
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* Dark Mode toggle always visible */}
      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Only show Logout if user is logged in */}
      {token && (
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Logout
        </button>
      )}
    </nav>
  );
}
