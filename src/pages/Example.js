import React from 'react'
import './pages.css';
import CardItem from '../component/NovelCards/CardItem';


function Example({isOpen, closeModal, card}) {
    const handleCloseModal = () => {
        closeModal();
    };
    
    if (!isOpen) {
        return null;
    }

  return (
    <div onClick={handleCloseModal} className={`ExamplePage ${isOpen? 'show' : ''}`}>
        <div className="ExampleModal" onClick={(e) => e.stopPropagation()}>
            <div>
                <CardItem card={{image: card}} />
            </div>
        </div>
    </div>
);
}
export default Example
