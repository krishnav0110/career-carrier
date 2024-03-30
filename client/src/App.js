import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Homepage"
import About from "./pages/about"
import Careers from "./pages/careers"
import Contactus from "./pages/contactus"
import Community from "./pages/community"
import Feedback from "./pages/feedback"
import Goals from "./pages/Goals"
import Assessment2 from "./pages/assessment2"
import Help from "./pages/help"
import Inputs from "./pages/inputs"
import Login from "./pages/Login"
import Matched from "./pages/Matched"
import Results from "./pages/results"
import SignUp from "./pages/signup"
import Team from "./pages/Team";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Careers" element={<Careers />} />
        <Route exact path="/Community" element={<Community />} />
        <Route exact path="/ContactUs" element={<Contactus />} />
        <Route exact path="/FeedBack" element={user ? <Feedback /> : <Login />} />
        <Route exact path="/Goals" element={user ? <Goals /> : <Login />} /> 
        <Route path="/Assessment2" element={user ? <Assessment2 /> : <Login />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Inputs/:id?" element={<Inputs />} />
        <Route path="/SignUp" element={user ? <Home /> : <SignUp />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/matched" element={user ? <Matched /> : <Login />} />
        <Route path="/Results" element={user ? <Results /> : <Login />} />
        <Route path="/Login" element={user ? <Home /> : <Login />} />

</Routes>
    </Router>
  );
}

export default App;
