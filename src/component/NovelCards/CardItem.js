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
        로맨스판타지 소설 삽화 평가 부탁드립니다!
        </div>
        <div className="detail">
        로맨스판타지 소설이라서 SDXL 1.0 프롬프트에 art by Artgerm 을 넣었는데 어떤가요?? 혹시 다른 작가 추천해주실 수 있나요? 추가적인 프롬프트로는 '6k, approaching perfection, masterpiece, best quality, intricate, sharp, focused, not blurry' 넣어서 이미지 생성했습니다.
        </div>
        <div className="detail">
        #SDXL 1.0 #로맨스판타지 #평가부탁 #웹소설 #삽화
        </div>
        <div className='commentTitle'>
          댓글
        </div>
        <div className='commentContent'>
          kej231 : 그림체 진쨔 너무 이쁘게 나왔네요~
          
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
