import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerPage from "./pages/CustomerPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />

        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoute role="Administrator">
              <AdminDashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/employee"
          element={
            <PrivateRoute role="Employee">
              <CustomerPage />
            </PrivateRoute>
          }
        />  

        <Route
          path="/customer"
          element={
            <PrivateRoute role="Customer">
              <CustomerPage />
            </PrivateRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;