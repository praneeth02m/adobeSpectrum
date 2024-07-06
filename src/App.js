import "@spectrum-css/vars/dist/spectrum-global.css";
import "@spectrum-css/vars/dist/spectrum-large.css";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Airport from "./components/Airport";
import Airports from "./components/Airports";
import Header from "./components/Header";
import SideNavigation from "./components/SideNavigation";

import "./App.css";

const App = () => (
  <Provider theme={defaultTheme}>
    <BrowserRouter>
      <div className="all-con">
        <Header />
        <div className="content-container">
          <div className="side-navigation">
            <SideNavigation />
          </div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/airports" element={<Airports />} />
            <Route exact path="/airport/:id" element={<Airport />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
