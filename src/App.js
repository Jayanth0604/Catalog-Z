import About from './About';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import Video from './Video';
import Photodetails from './Photodetails';
import Videodetails from './Videodetails';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
      
      <Routes>
        <Route exact path ="/" element={<Home/>}/>
        <Route exact path ="/Video" element={<Video/>}/>
        <Route exact path ="/About" element={<About/>}/>
        <Route exact path ="/Contact" element={<Contact/>}/>
        <Route exact path ="/Photodetails" element={<Photodetails/>}/>
        <Route exact path ="/Videodetails" element={<Videodetails/>}/>
      </Routes>
     </Router>
    {/* <Home/> */}
    {/* <About/> */}
    {/* <Contact/> */}
    {/* <Video/> */}
    {/* <Photodetails/>
    <Videodetails/> */}

    </div>
  );
}

export default App;
