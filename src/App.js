import "./App.css";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./pages";
import ContactUs from "./pages/ContactUs";
import Purshace from "./pages/Purshace";

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Home></Home>} exact></Route>
        <Route path="/contactus" element={<ContactUs></ContactUs>} exact></Route>
        <Route path="/purshace" element={<Purshace></Purshace>} exact></Route>
        
      </Routes>
    </Router>
  );
}

export default App;
