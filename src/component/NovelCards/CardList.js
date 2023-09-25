import React, {useEffect, useState} from 'react'
import CardItem from './CardItem';
import axios from 'axios';

const CardList = () => {
    const [cards, setCards] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://127.0.0.1:8080/api/v1/feeds');
                setCards(response.data.cards);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        }
        fetchData();
    }, []);
    
    if (loading) {
        return <div className="CardListBlock">Loading...</div>;
    }
    if (!cards) {
        return null;
    }

  return (
    <div className = "CardListBlock">
        {cards.map((card) => ( // 4. map 함수로 데이터 출력
            <CardItem key={card.num} card={card} />
        ))}
    </div>
  );
};

export default CardList
