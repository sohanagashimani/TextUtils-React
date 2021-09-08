import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  // eslint-disable-next-line
  const [mode, setmode] = useState("light"); //Whether dark mode is enabled or not;
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#081424";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been disabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TeXtUtils"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode = {mode}/>
            </Route>
            <Route ecxact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Try TextUtils - Word Counter, Character Counter, Uppercase, Lowercase"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
