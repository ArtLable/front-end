import React, {useState} from 'react'
import Header from '../component/Header';
import './style.css';
import '../bootstrap.css';
import { useNavigate } from 'react-router-dom';


function NovelMaker() {
    const [characterInfo, setCharacterInfo] = useState({
        novelName:'',
        name: '',
        gender: '',
        description: '',
        // 다른 필드들을 추가하세요.
    });
    
    const navigate = useNavigate(); // useNavigate를 초기화합니다.
    
    const handleCreateCharacter = () => {
        // 여기에서 필요한 로직을 추가하여 characterInfo를 사용하여 캐릭터를 생성합니다.
        // 캐릭터 정보를 저장하고 NovelCharacter 화면으로 돌아갑니다.
        // characterImages 객체에 생성한 캐릭터를 추가하세요.
    
        // 예제로 생성한 캐릭터 정보를 추가
        const newCharacter = {
        id: Date.now(), // 고유한 ID 생성 (임시)
        novelName: characterInfo.novelName,
        name: characterInfo.name,
        gender: characterInfo.gender,
        description: characterInfo.description,
        // 다른 필드들을 추가하세요.
        };
    
        // characterImages 객체에 새로운 캐릭터를 추가
        characterImages[newCharacter.id] = newCharacter;
    
        // NovelCharacter 화면으로 돌아갑니다.
        navigate('/novel-character'); // useNavigate를 사용하여 이동합니다.
    };
    

  return (
    <div>
    <Header/>
      <div className="novelContainer">
        <div className="novelBlock">
            <div className="novelName">
                <button>추가</button>
            </div>
        <div className="novelInfoBlock">  
            <htmlForm method="post">
            <fieldset>
                <legend></legend>
                <div className="novelInfo">
                    <form>
                    <table id="novelTable1">
                        <tr>
                            <th><label htmlFor="novelname" className='novelForm'>소설 이름</label></th>
                            <td><input type="text" name="" id="novelname" value={characterInfo.novelName}/></td>    
                        </tr>
                        <tr>
                            <th><label htmlFor="charname" className='novelForm'>캐릭터 이름</label></th>
                            <td><input type="text" name="" id="charname" value={characterInfo.name} /></td>    
                        </tr>
                        <tr>
                        <th><label>캐릭터 성별</label></th>
                        <th>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="inlineRadio1"
                                    value={characterInfo.gender}/>
                                <label className="form-check-label" for="inlineRadio1">남자</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="inlineRadio2"
                                    value={characterInfo.gender}/>
                                <label className="form-check-label" for="inlineRadio2">여자</label>
                            </div>
                        </th>
                    </tr>
                        <tr>
                            <th>
                                <label htmlFor="novelplot" className='novelForm'>캐릭터 묘사</label>
                            </th>
                            <td>
                                <textarea name="" id="novelplot" cols="40" rows="4" spellcheck="false" value={characterInfo.description}></textarea>
                            </td>       
                        </tr>
                        <tr>
                            <th><label htmlFor="novelgenre" id="checkbox" className='novelForm'>장르 선택</label></th>
                                <th>
                                    <input type="checkbox" name="" id="genre1"/>
                                    <label htmlFor="genre1"><span>액션</span></label>
                                    
                                    <input type="checkbox" name="" id="genre2"/>
                                    <label htmlFor="genre2"><span>로맨스</span></label>
                                    
                                    <input type="checkbox" name="" id="genre3"/>
                                    <label htmlFor="genre3"><span>판타지</span></label>
                                    <input type="checkbox" name="" id="genre4"/>
                                    <label htmlFor="genre4"><span>공포</span></label>
                                
                                    <input type="checkbox" name="" id="genre5"/>
                                    <label htmlFor="genre5"><span>드라마</span></label>

                                    <input type="checkbox" name="" id="genre6"/>
                                    <label htmlFor="genre6"><span>코미디</span></label>
                                </th>    
                        </tr>
                        <tr>
                            <th>
                                <label htmlFor="novelplot" className='novelForm'>전체 줄거리</label>
                            </th>
                            <td>
                                <textarea name="" id="novelplot" cols="40" rows="5" spellcheck="false"></textarea>
                            </td>    
                        </tr>
                    </table>
                    </form>
                </div>
                <div className="submitButton">
                    <input type="reset" value="취소"/>
                    <input type="submit" value="다음"/>
                </div>
            </fieldset>
            </htmlForm>
        </div>
        </div>
    </div>        
    </div>
  )
}

export default NovelMaker
