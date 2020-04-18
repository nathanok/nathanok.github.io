import React from "react";
import "./App.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Videos from "./components/Videos";
import Error from "./components/Error";
import Nav from "./components/Nav";





class App extends React.Component {
    
    render() {
        
  return (
  
      
      
      
          <BrowserRouter>
      <div>
      <Nav />
      
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/" component={Gallery} />
        <Route path="/" component={Videos} />
      
        <Route component={Error} />
      
      </Switch>
      
      </div>
      </BrowserRouter>
      
   
   
      
  );
}
}

export default App;
