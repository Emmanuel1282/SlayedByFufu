import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const [page, setPage] = useState("landing");

  const renderPage = () => {
    if (page === "login") return <LoginPage setPage={setPage} />;
    if (page === "register") return <RegisterPage setPage={setPage} />;
    return <LandingPage setPage={setPage} />;
  };

  return <div>{renderPage()}</div>;
}

export default App;