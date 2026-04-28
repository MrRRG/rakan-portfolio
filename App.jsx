import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Contact from "./Contact";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="site">
        <header className="navbar">
          <NavLink to="/" className="logo">
            <span>R</span>
            Rakan Al-Rasheed
          </NavLink>

          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/education">Education</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/certificates">Certificates</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
