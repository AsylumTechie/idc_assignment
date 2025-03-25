import Sign2 from "./component/pages/sign";
import Home from "./component/pages/home";
import Login2 from "./component/pages/login";
import Layout from "./component/layout/layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Category from "./component/pages/category";
import Dashboard from "./component/admin/dashboard"
import {useState, useEffect} from 'react'

function App() {
 
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");


  useEffect(() => {
    document.body.className = theme;
  }, [theme]); 
  
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <>
        <Router>
          <Layout theme={theme} toggleTheme={toggleTheme}>
            <Routes>
              <Route path="/home" element={<Home />} ></Route>
              <Route path="/login" element={<Login2 />} ></Route>
              <Route path="/signup" element={<Sign2 />} ></Route>
              <Route path="/dashboard" element={<Dashboard />} ></Route>
            </Routes>
          </Layout>
        </Router>
    </>
  );
}

export default App;
