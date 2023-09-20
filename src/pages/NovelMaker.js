import React, { useState } from 'react'
import Header from '../component/Header';
import '../styles/style.css';
import '../bootstrap.css';
import { useNavigate } from 'react-router-dom';

function NovelMaker() {
    const [novelInfo, setNovelInfo] = useState({
        novelName: '',
        charName: '',
        gender: '',
        description: '',
        genre:'',
        plot: '',
    });
    
    const navigate = useNavigate();

    const [characterImage, setCharacterImage] = useState(null);
    
    const handleCreateCharacter = async () => {
        try {
            // API 호출
            const response = await fetch('/api/createCharacter', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(novelInfo),
            });
      
            if (response.ok) {
              // 이미지 데이터를 받아와서 상태 업데이트
              const imageBlob = await response.blob();
              setCharacterImage(URL.createObjectURL(imageBlob));
            } else {
              console.error('API 호출에 실패했습니다.');
            }
            navigate('/novel-character'); //이미지 생성 및 처리가 완료되면 화면이동
          } catch (error) {
            console.error('API 호출 중 오류 발생:', error);
          }
        };
      

  return (
    <div>
    <Header/>
      <div className="novelContainer">
        <div className="novelBlock">
            <div className="novelName">
                <button onClick={''}>소설 추가</button>
            </div>
        <div className="novelInfoBlock">  
            <form>
             <fieldset>
                <legend></legend>
                <div className="novelInfo">
                    <form>
                    <table id="novelTable1">
                        <tr>
                            <th><label htmlFor="novelname" className='novelForm'>소설 이름</label></th>
                            <td><input type="text" name="" id="novelname" defaultValue={novelInfo.novelName}/></td>    
                        </tr>
                        {/* <tr>
                            <th><label htmlFor="charname" className='novelForm'>캐릭터 이름</label></th>
                            <td><input type="text" name="" id="charname" defaultValue={novelInfo.charName} /></td>    
                        </tr>
                        <tr>
                        <th><label>캐릭터 성별</label></th>
                        <th>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="inlineRadio1"
                                    defaultValue={novelInfo.gender}/>
                                <label className="form-check-label" for="inlineRadio1">남자</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="inlineRadio2"
                                    defaultValue={novelInfo.gender}/>
                                <label className="form-check-label" for="inlineRadio2">여자</label>
                            </div>
                        </th>
                    </tr>
                        <tr>
                            <th>
                                <label htmlFor="novelplot" className='novelForm'>캐릭터 묘사</label>
                            </th>
                            <td>
                                <textarea name="" id="novelplot" cols="40" rows="4" spellCheck="false" defaultValue={novelInfo.description}></textarea>
                            </td>       
                        </tr> */}
                        <tr>
                            <th><label htmlFor="novelgenre" id="checkbox" className='novelForm'>장르 선택</label></th>
                                <th>
                                    <input type="checkbox" name="" id="genre1" defaultValue={novelInfo.genre}/>
                                    <label htmlFor="genre1"><span>액션</span></label>
                                    
                                    <input type="checkbox" name="" id="genre2" defaultValue={novelInfo.genre}/>
                                    <label htmlFor="genre2"><span>로맨스</span></label>
                                    
                                    <input type="checkbox" name="" id="genre3" defaultValue={novelInfo.genre}/>
                                    <label htmlFor="genre3"><span>판타지</span></label>
                                    <input type="checkbox" name="" id="genre4" defaultValue={novelInfo.genre}/>
                                    <label htmlFor="genre4"><span>공포</span></label>
                                
                                    <input type="checkbox" name="" id="genre5" defaultValue={novelInfo.genre}/>
                                    <label htmlFor="genre5"><span>드라마</span></label>

                                    <input type="checkbox" name="" id="genre6" defaultValue={novelInfo.genre}/>
                                    <label htmlFor="genre6"><span>코미디</span></label>
                                </th>    
                        </tr>
                        <tr>
                            <th>
                                <label htmlFor="novelplot" className='novelForm'>전체 줄거리</label>
                            </th>
                            <td>
                                <textarea name="" id="novelplot" cols="40" rows="5" spellCheck="false" defaultValue={novelInfo.plot}></textarea>
                            </td>    
                        </tr>
                    </table>
                    </form>
                </div>
                <div className="submitButton">
                    <input type="reset" value="취소" />
                    <input type="submit" value="저장" />
                    <input type="submit" value="다음" onClick={handleCreateCharacter}/>
                </div>
            </fieldset>
            </form>
        </div>
        </div>
    </div>        
    </div>
  )
}

export default NovelMaker
