import Layout from './layout/Layout';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import NovelMain from './pages/NovelMain';
import CharacterInput from './component/MyNovel/CharacterInput';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <Layout /> } />
          <Route path="/character-input" element={<CharacterInput />} />
          <Route path="/novel-main" element={<NovelMain />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;