// NovelIllustrationForm.js

import React, { useState, useEffect } from 'react';
import NovelIllustrationRequirementForm from './NovelIllustrationRequirementForm';

export default function NovelIllustrationForm() {
    const [text, setText] = useState('');
    const [summarizedText, setSummarizedText] = useState('');
    const [showRequirementForm, setShowRequirementForm] = useState(false);
    const [finalImageUrl, setFinalImageUrl] = useState('');
    const [isSummarizing, setIsSummarizing] = useState(false);
    const [showSummarizedText, setShowSummarizedText] = useState(false); // 요약된 텍스트를 보여줄 상태

    useEffect(() => {
        // summarizedText 상태가 변경될 때 화면을 다시 그리도록 설정
        // 이로써 요약된 내용이 업데이트될 때 화면에 표시됩니다.
        if (summarizedText) {
            setShowSummarizedText(true);
        } else {
            setShowSummarizedText(false);
        }
    }, [summarizedText]);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleSummarizeText = async () => {
        setIsSummarizing(true);
        try {
            const response = await fetch('AI 서버 엔드포인트', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text }),
            });

            if (response.ok) {
                const data = await response.json();
                setSummarizedText(data.summarizedText);
            } else {
                console.error('요약된 텍스트 생성 실패');
            }
        } catch (error) {
            console.error('요약된 텍스트 생성 요청 에러:', error);
        }
        setIsSummarizing(false);
    };

    const handleGenerateIllustration = () => {
        const generatedImageUrl = 'https://example.com/generated-image.jpg';
        setFinalImageUrl('');
        setShowRequirementForm(true);
    };

    const handleGenerateFinalImage = (finalImageUrl) => {
        setFinalImageUrl(finalImageUrl);
        setShowRequirementForm(false);
    };

    return (
        <div className="novel-illustration-form">
            <h2>삽화 만들기</h2>
            <textarea
                placeholder="텍스트를 입력하세요"
                value={text}
                onChange={handleTextChange}
            />
            <button onClick={handleSummarizeText} disabled={isSummarizing}>
                {isSummarizing ? '요약 중...' : '요약하기'}
            </button>
            {showSummarizedText && (
                <div className="summarized-text">
                    <h3>요약된 내용</h3>
                    <p>{summarizedText}</p>
                </div>
            )}
            <button onClick={handleGenerateIllustration}>이미지 생성</button>
            {finalImageUrl && (
                <div className="final-image">
                    <h3>최종 이미지</h3>
                    <img src={finalImageUrl} alt="최종 이미지" />
                </div>
            )}
            {showRequirementForm && (
                <NovelIllustrationRequirementForm
                    summarizedText={summarizedText}
                    onGenerateFinalImage={handleGenerateFinalImage}
                />
            )}
        </div>
    );
}
