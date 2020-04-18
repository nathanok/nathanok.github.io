import React from "react";
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";

import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Videos from "./components/Videos";







class App extends React.Component {
    
    render() {
        
  return (
  
      
      
      
          <BrowserRouter>
      <div>
    <Route path="/" component={Home} exact />
        <Route path="/" component={Gallery} />
        <Route path="/" component={Videos} />
      
      </div>
      </BrowserRouter>
      
   
   
      
  );
}
}

export default App;
