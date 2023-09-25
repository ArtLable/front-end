// NovelIllustrationRequirementForm.js

import React, { useState } from 'react';

export default function NovelIllustrationRequirementForm({ summarizedText, onGenerateFinalImage }) {
    const [requirementText, setRequirementText] = useState('');

    const handleRequirementTextChange = (e) => {
        setRequirementText(e.target.value);
    };

    const handleGenerateFinalImage = async () => {
        // AI 서버로 요구사항 텍스트와 요약된 텍스트를 보내 이미지를 생성하는 로직을 구현합니다.
        // 여기에서는 가정상으로 Axios 또는 Fetch API를 사용하여 요청을 보내고
        // 응답을 처리하는 예시를 보여드립니다. 실제로는 AI 서버와의 통신 코드를 구현해야 합니다.

        // 가정: AI 서버 URL
        const apiUrl = 'https://example.com/ai/generate-final-image';

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ summarizedText, requirementText }),
            });

            if (response.ok) {
                const data = await response.json();
                // AI 서버로부터 받아온 최종 이미지 URL을 상태로 저장
                onGenerateFinalImage(data.finalImageUrl);
            } else {
                console.error('최종 이미지 생성 실패');
            }
        } catch (error) {
            console.error('최종 이미지 생성 요청 에러:', error);
        }
    };

    return (
        <div className="novel-illustration-requirement-form">
            <h2>최종 이미지 생성</h2>
            <div className="summarized-text">
                <h3>요약된 내용</h3>
                <p>{summarizedText}</p>
            </div>
            <textarea
                placeholder="요구사항 텍스트를 입력하세요"
                value={requirementText}
                onChange={handleRequirementTextChange}
            />
            <button onClick={handleGenerateFinalImage}>최종 이미지 생성</button>
        </div>
    );
}
