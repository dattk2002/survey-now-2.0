import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import NavbarResponsive from "./components/NavbarResponsive/NavbarResponsive";
import Hero from "./components/Hero/Hero";
import Features1 from "./components/Features1/Features1";
import Features2 from "./components/Features2/Features2";
import Growth from "./components/Growth/Growth";
import Questions from "./components/Questions/Questions";
import Programs from "./components/Programs/Programs";
import Footer from "./components/Footer/Footer";

// Import data
import { programs_user } from "./constants/programs_user";
import { programs_shopper } from "./constants/programs_shopper";

// Import your new components for the pages
import AboutUs from "./components/AboutUs/AboutUs";
import ContentReward from "./components/ContentReward/ContentReward";
import ContentDownload from "./components/ContentDownload/ContentDownload";
import Login from "./components/Login/Login";
import UnderConstruction from "./components/UnderConstruction/UnderConstruction";
import SignUp from "./components/SignUp/SignUp";
import Policy from "./components/Policy/Policy";
// import MoreWayToShop from "./components/MoreWayToShop/MoreWayToShop";
// import Helps from "./components/Helps/Helps";

const App = () => {
  const [hamActive, setHamActive] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar hamActive={hamActive} setHamActive={setHamActive} />
        <NavbarResponsive hamActive={hamActive} />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/about" component={AboutUs} />
          <Route path="/under" component={UnderConstruction} />
          <Route path="/policy" component={Policy} />
          {/* <Route path="/more-way-to-shop" component={MoreWayToShop} />
          <Route path="/helps" component={Helps} /> */}
          <Route path="/">
            <Hero />
            <Features1 />
            <Features2 />
            {/* <ContentReward /> */}
            <ContentDownload />
            {/* <Growth /> */}
            {/* <Questions /> */}
            {/* <Programs programs={programs_user} /> */}
            {/* <Programs programs={programs_shopper} /> */}
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
