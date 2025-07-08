import "../css/NavBar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import MainPage from "./MainPage";

function NavBar() {
  return (
    <>
      <Router>
        <nav className="nav">
          <div className="logo-name">
            <Link className="link" to="/">
              <span className="logo">S</span>
              <span className="name">Stoman</span>
            </Link>
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default NavBar;
