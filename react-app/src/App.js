import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import LandingPage from './components/LandingPage'
// import CreateDisc from './components/CreateDisc'
// import DiscDetails from './components/DiscDetails'
// import UpdateDisc from './components/UpdateDisc'
// import UserDiscs from './components/UserDiscs'
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" component={LoginFormPage} />
          <Route path="/signup" component={SignupFormPage}/>
          <Route path='/' component={LandingPage}/>
          {/* <Route path='/current' component={UserDiscs}/>
          <Route path='/new' component={CreateDisc}/>
          <Route path='/update/:discId' component={UpdateDisc}/>
          <Route path='/:discId' component={DiscDetails}/> */}
        </Switch>
      )}
    </>
  );
}

export default App;
