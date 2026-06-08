import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Profile from "./pages/Profile";

import AppLayout from "./components/layout/AppLayout";

function App() {
  return (
    <Routes>
      {/* Login Page */}
      <Route path="/" element={<Login />} />

      {/* Dashboard Layout */}
      <Route element={<AppLayout />}>
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/expenses"
          element={<Expenses />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />
      </Route>

      {/* Fallback Route */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}

export default App;