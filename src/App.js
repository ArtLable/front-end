import Layout from './layout/Layout';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import NovelMain from './pages/NovelMain';
import CharacterInput from './component/MyNovel/CharacterInput';
import WebtoonStyleLearning from './component/MyWebtoon/WebtoonStyleLearning';
import NovelIllustraion from './component/MyNovel/NovelIllustration';
import Test from './component/MyNovel/Test/Test';
import PostBoard from './component/NovelCards/PostBoard';
import FaceSwap from './pages/FaceSwap';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <Layout /> } />
          <Route path="/character-input" element={<CharacterInput />} />
          <Route path="/novel-main" element={<NovelMain />} />
          <Route path="/novel-illustration" element={<NovelIllustraion />} />
          <Route path="/webtoon" element={<WebtoonStyleLearning />} />
          <Route path="/post-board" element={<PostBoard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/face-swap" element={<FaceSwap />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;