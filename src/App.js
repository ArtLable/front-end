import Layout from './layout/Layout';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import NovelMaker from './pages/NovelMaker';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <Layout /> } />
          <Route path="/novel" element={ <NovelMaker /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;