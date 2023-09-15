import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeartButton from '../HeartImg/HeartButton';

const CardItem = ({ card }) => {
  const { image } = card || {};
  // const [ like, setLike ] = useState(false);

  // const fetchData = async () => {
  //   const res = await axios.get()
  //   if (res.data.type === 'Liked') setLike(true)
  // }
  // useEffect( () => {
  //   fetchData()
  // }, []);

  // const toggleLike = async (e) => {
  //   const res = await axios.post()
  //   setLike(!like)
  // };

  return (
    <div className="CardItemBlock">
      <div className="sampleCard">
        <HeartButton className="likeIcon" />
        <img className="sampleCardImg" src={image} alt={image} />
      </div>
      <div className="sampleDetailBlock">
        <div className="detailTitle">
          여러분 이 사랑스러운 강아지좀 봐주세요!!!
        </div>
        <div className="detail">
          귀여운 강아지가 뜨거운 햇살아래 비치룩을 입고 선글라스를 끼고 날 바라보고있는거 같죠? 너무 귀엽다 정말~_~ 사랑스럽지않나용?? 꺅~
        </div>
        <div className="detail">
          #프렌치 불독 #비치룩 #선글라스 #귀요미
        </div>
        <div className='commentTitle'>
          댓글
        </div>
        <div className='commentContent'>
          진짜 너무 귀엽네요 앉아있는것도 ㅋ_ㅋ
        </div>
        <div className='commentWrite'>
          <form className="d-flex">
            <input class="form-control me-sm-2 search" type="" placeholder="댓글을 작성해 주세요"/>
            <button type="submit" className="">작성</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
