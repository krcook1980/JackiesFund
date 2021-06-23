import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../../pages/home';
import About from '../../pages/about';
import Contact from '../../pages/contact';
import Apply from '../../pages/apply';

function App() {
  return (
   <Router basename={process.env.PUBLIC_URL}>
     <>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/ContactUs" component={Contact} />
        <Route exact path="/ApplyForAssistance" component={Apply} />
     </>
   </Router>

  );
}

export default App;
