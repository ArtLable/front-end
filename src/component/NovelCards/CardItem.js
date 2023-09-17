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
        {/* <HeartButton className="likeIcon" /> */}
        <img className="sampleCardImg" src={image} alt={image} />
      </div>
      <div className="sampleDetailBlock">
      <form className="">
      <button type="submit" className="saveButton">save</button>
      </form>
        <div className="detailTitle">
          짜잔 제가 만든 웹소설 삽화에요 완전 맘에들어!!!
        </div>
        <div className="detail">
          너무 느낌있게 잘 만들어지지 않았나요? 제가 생각한 이미지랑 정말 찰떡이에요!!!
        </div>
        <div className="detail">
          #웹소설 #여기서 #살아남기 #어려울걸?
        </div>
        <div className='commentTitle'>
          댓글
        </div>
        <div className='commentContent'>
          kej231 : 우와 그림체 진쨔 너무 이쁘게 나왔네요~
          toonlove : 멋지네요~~ ~좋아요 누르고 갑니다!!
          닉네임못정함 : 그림체 보소 진짜 러블리하다
        </div>
        <div className='commentWrite'>
          <form className="d-flex">
        <HeartButton className="likeIcon" />
            <input class="form-control me-sm-2 search" type="" placeholder="댓글을 작성해 주세요"/>
            <button type="submit" className="">작성</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
