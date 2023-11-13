import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experiences from "./components/Experiences.jsx";
import Contact from "./components/Contact.jsx";
function App() {
  return (
   <div>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Experiences/>
    <Projects/>
   <Contact/>
   </div>
  );
}

export default App;
