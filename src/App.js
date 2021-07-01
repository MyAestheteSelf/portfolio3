import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./MyComponent/NavBar";
import { Header } from "./MyComponent/Header";
import { Home } from "./MyComponent/Home";
import { Menu } from "./MyComponent/Menu";
import { About } from "./MyComponent/About";
import { useState } from "react";

//importing the images
import homeImg from "./Images/1.png";

function App() {
  const [menu, setMenu] = useState(true);
  const ToggleMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact path="/"
            render={() => {
              return (
                <>
                  {!menu ? <Menu /> : ""}
                  <header className="header">
                    <NavBar
                      menu={() => {
                        ToggleMenu();
                      }}
                    />
                    <Header imgs={homeImg} />
                  </header>
                  <div className="content">
                    <Home />
                  </div>
                </>
              );
            }}
          ></Route>
          <Route
            exact path="/About"
            render={() => {
              return (
                <>
                  {!menu ? <Menu /> : ""}
                  <header className="header">
                    <NavBar
                      menu={() => {
                        ToggleMenu();
                      }}
                    />
                    <Header imgs={homeImg} />
                  </header>
                  <div className="content">
                    <About />
                  </div>
                </>
              );
            }}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
