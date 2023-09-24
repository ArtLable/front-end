import React from 'react';

export default function NovelIllustrationDisplay({ imageUrl }) {
    return (
        <div className="novel-illustration-display">
            <h2>생성된 삽화</h2>
            {imageUrl ? (
                <img src={imageUrl} alt="삽화" />
            ) : (
                <p>이미지가 아직 생성되지 않았습니다.</p>
            )}
        </div>
    );
}
