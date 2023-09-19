import Layout from './layout/Layout';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './component/Modal/LoginModal';
import NovelMaker from './pages/NovelMaker';
import NovelCharacter from './pages/NovelCharacter';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <Layout /> } />
          <Route path="/novel-maker" element={<NovelMaker />} />
          <Route path="/novel-character" element={<NovelCharacter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;