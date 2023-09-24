import React, { useState } from 'react';
import Sidebar from '../MyNovel/Sidebar';
import '../../pages/NovelMain.css';
import Header from '../Header';
import NovelIllustrationForm from './NovelIllustrationForm'; 
import NovelIllustrationDisplay from './NovelIllustrationDisplay'; 

export default function NovelIllustraion() {
    const [novels, setNovels] = useState([]);
    const [selectedNovel, setSelectedNovel] = useState(null);
    const [imageUrl, setImageUrl] = useState(''); // 이미지 URL 상태 추가

    const handleGenerateIllustration = (generatedImageUrl) => {
        // 이미지 생성 후 URL을 받아와서 상태로 저장
        setImageUrl(generatedImageUrl);
    };

    return (
        <>
            <Header />
            <div className="container">
                <div className="main-content">
                    <Sidebar novels={novels} />
                    <div>
                        {/* "삽화 만들기" 화면 */}
                        <NovelIllustrationForm onGenerateIllustration={handleGenerateIllustration} />
                        {/* 삽화 출력 */}
                        <NovelIllustrationDisplay imageUrl={imageUrl} />
                    </div>
                </div>
            </div>
        </>
    );
}
