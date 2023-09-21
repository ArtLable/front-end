import React from 'react'
import Cookies from 'js-cookie';
import './Sidebar.css';

export default function Sidebar({novels, onNovelClick}) {
  return (
    <div>
      <div className="sidebar">
      <h2>{Cookies.get('memberNickname2')}의 소설</h2>
      <div className="novel-list">
          {novels.map((novel, index) => (
            <span key={index} onClick={() => onNovelClick(novel)} className="novel-name">{novel.name}</span>
          ))}
        </div>
      <button onClick={''}>소설 추가</button>
    </div>
    </div>
  )
}
