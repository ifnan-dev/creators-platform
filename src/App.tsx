import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./Components/pages/HomePage";
import Login from "./Components/ui/Login";
import Signup from "./Components/ui/Signup";
import CreatePost from "./Components/ui/CreatePost";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/post" element={<CreatePost />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
