import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Tips from './components/Tips';
import Water from './components/Water';
import Exer from './components/Exer';
import AnotherPage from './components/AnotherPage';
import Community from'./components/Community';
import L from './components/L';


function App() {
  return (
    <Router>
      <Routes>
       
       <Route path="/" element={<L/>}/>
        <Route path="/main" element={<Main />} />
        <Route path="/water" element={<Water />} />
        <Route path="/exer" element={<Exer />} />
        <Route path="/another" element={<AnotherPage />}/>
        <Route path="/community" element={<Community/>} />
        <Route path="/tips" element={<Tips/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
