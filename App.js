// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" exact>
          {/* Empty main page */}
          <div></div>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
