import React from "react";
import "./App.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Videos from "./components/Videos";
import Error from "./components/Error";






class App extends React.Component {
    
    render() {
        
  return (
  
      
      
      
          <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/" component={Gallery} />
        <Route path="/" component={Videos} />
      
        <Route component={Error} />
      
      </Switch>
      </BrowserRouter>
      
   
   
      
  );
}
}

export default App;
