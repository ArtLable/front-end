import React from 'react'
import Header from '../component/Header';
import './style.css';
import '../bootstrap.css';

function NovelMaker() {
  return (
    <div>
    <Header/>
      <div className="container">
        <div className="novelBlock">
            <div className="novelName">
                <button>추가 +</button>
            </div>
        <div className="novelInfoBlock">  
            <htmlForm method="post">
            <fieldset>
                <legend>정보 입력</legend>
                <div className="novelInfo">
                    <table>
                    <tr>
                        <th><label htmlFor="novelname">소설 이름</label></th>
                        <td><input type="text" name="" id="novelname"/></td>    
                    </tr>
                    <tr>
                        <th><label htmlFor="charname">캐릭터 이름</label></th>
                        <td><input type="text" name="" id="charname"/></td>    
                    </tr>
                    <tr>
                        <th>
                            <label htmlFor="novelplot">캐릭터 묘사</label>
                        </th>
                        <td>
                            <textarea name="" id="novelplot" cols="40" rows="3" spellcheck="false"></textarea>
                        </td>       
                    </tr>
                    <tr>
                        <th><label htmlFor="novelgenre" id="checkbox">장르 선택</label></th>
                            <td id="check">
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
                            </td>    
                    </tr>
                    <tr>
                        <th>
                            <label htmlFor="novelplot">전체 줄거리</label>
                        </th>
                        <td>
                            <textarea name="" id="novelplot" cols="40" rows="3" spellcheck="false"></textarea>
                        </td>    
                    </tr>
                    </table>
                </div>
                <div className="submitButton">
                    <input type="submit" value="저장"/>
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
