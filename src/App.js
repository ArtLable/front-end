import Layout from './layout/Layout';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Login from './component/Modal/LoginModal';
import NovelInfo from './pages/NovelInfo';
import Login from './pages/Login';
import NovelMain from './pages/NovelMain';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <Layout /> } />
          <Route path="/novel-info" element={<NovelInfo />} />
          <Route path="/novel-main" element={<NovelMain />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;