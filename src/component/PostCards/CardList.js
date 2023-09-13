import React, {useEffect, useState} from 'react'
import axios from 'axios';

const CardList = () => {
    const [cardList, setCardList] = useState([]);

    const getCardList = async () => {
        const resp = (await axios.get('//localhost:3000/card')).data; // 2. 게시글 목록 데이터에 할당
        setCardList(resp.data); // 3. cardList 변수에 할당
        console.log(cardList);
    }

    useEffect(() => {
        getCardList(); // 1. 카드 목록 조회 함수 호출
    }, []);

  return (
    <div>
        <ul>
            {cardList.map((card) => ( // 4. map 함수로 데이터 출력
                <li key={card.num}>
                    {card.title}</li>
            ))}
        </ul>        
    </div>
  )
}

export default CardList
