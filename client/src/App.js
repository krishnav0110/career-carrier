import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Homepage"
import About from "./pages/about"
import Careers from "./pages/careers"
import Contactus from "./pages/contactus"
// import Community from "./pages/community"
// import Feedback from "./pages/feedback"
import Goals from "./pages/Goals"
// import Assessment1 from "./pages/assessment1"
import Assessment2 from "./pages/assessment2"
import Help from "./pages/help"
import Inputs from "./pages/inputs"
import Login from "./pages/Login"
import Matched from "./pages/Matched"
import Results from "./pages/results"
import SignUp from "./pages/signup"
import Team from "./pages/Team";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Careers" element={<Careers />} />
        {/* <Route exact path="/Community" element={<Community />} /> */}
        <Route exact path="/ContactUs" element={<Contactus />} />
        {/* <Route exact path="/FeedBack" element={<Feedback />} /> */}
        <Route exact path="/Goals" element={<Goals />} /> 
        {/* <Route path="/Assessment1" element={<Assessment1 />} /> */}
        <Route path="/Assessment2" element={<Assessment2 />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Inputs/:id?" element={<Inputs />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/matched" element={<Matched />} />
        <Route path="/Results" element={<Results />} />
        <Route path="/Login" element={<Login />} />

</Routes>
    </Router>
  );
}

export default App;
