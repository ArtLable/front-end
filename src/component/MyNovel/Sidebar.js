import React from 'react'
import Cookies from 'js-cookie';
import './Sidebar.css';
import {Link} from 'react-router-dom';
import NovelMain from '../../pages/NovelMain';

export default function Sidebar({novels, onNovelClick, onAddNovelClick }) {
  return (
    <div>
      <div className="sidebar">
      <h2>{Cookies.get('memberNickName')}의 소설</h2>
      <div className="novel-list">
          {novels.map((novel, index) => (
            <span key={index} onClick={() => onNovelClick(novel)} className="novel-name">{novel.name}</span>
          ))}
        </div>
        <button onClick={onAddNovelClick}> {/* 소설 추가 버튼 */}
          소설 추가
        </button>
    </div>
    </div>
  )
}
