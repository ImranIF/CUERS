import React from "react";
import Navbar from "./Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarBattery,
  faLeftRight,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import "./Components/css/main.css";
import { Login } from "./Components/Login";
import Buttoncmp from "./Components/Buttoncmp";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import Inputcmp from "./Components/Inputcmp";
import Dashboard from "./Components/Dashboard";
function App() {
  const options = ["Evaluator", "Chairman of Exam Committee", "Chairman"];
  return (
    <div className="h-screen bg-slate-100">
      <Navbar></Navbar>
      {/* <Dashboard></Dashboard> */}
      <Login></Login>
    </div>
  );
}

export default App;
