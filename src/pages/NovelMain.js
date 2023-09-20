import React, { useState } from 'react';
import Sidebar from '../component/MyNovel/Sidebar';
import NovelForm from '../component/MyNovel/NovelForm';
import './NovelMain.css';

export default function NovelMain() {

    const [novels, setNovels] = useState([]);
    const [submittedValue, setSubmittedValue] = useState('');

    const handleAddNovel = (novelData) => {
        setNovels([...novels, novelData]);
        setSubmittedValue(novelData.name);
    };


  return (
    <div className="container">
      <div className="main-content">
        <Sidebar novels = {novels}/>
        <NovelForm onAddNovel = {handleAddNovel}/>
      </div>
    </div>
  );
}
