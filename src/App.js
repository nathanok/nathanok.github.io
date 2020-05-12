import React from "react";
import "./App.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Videos from "./components/Videos";
import Error from "./components/Error";
import Nav from "./components/Nav";
import Contact from"./components/Contact";




class App extends React.Component {
    
    render() {
        
  return (
  
      
      
      
          <BrowserRouter>
      <div>
      <Nav />
      
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Gallery" component={Gallery} />
        <Route path="/Videos" component={Videos} />
        <Route path="/Contact" component={Contact} />
        <Route component={Error} />
      
      </Switch>
      
      </div>
      </BrowserRouter>
      
   
   
      
  );
}
}

export default App;
