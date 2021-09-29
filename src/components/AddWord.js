import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './common/GlobalStyle';
import { useDispatch } from 'react-redux';
import { createWord } from '../redux/modules/dictionary/action';
import { addWordFB } from '../redux/modules/dictionary/middlewares'; 
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddWord = ({ setWord }) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const wordRef = useRef(null);
    const descRef = useRef(null);
    const exampleRef = useRef(null);

    const addDicWord = (e) => {
        e.preventDefault();

        dispatch(addWordFB({
                'word':wordRef.current.value, 
                'description':descRef.current.value, 
                'example': exampleRef.current.value,
                'completed': false,
            }))
            .then(() => history.push('/listword'))
        }
    
    return (
        <div>
            <GlobalStyle />
            <Wrap>
                <AddTitle>나만의 단어를 추가해보세요!<br/>무엇이든 좋습니다 😊
                </AddTitle>
                    <AddInputBox>
                    <div>
                        단어 : <input className="input" type="text" ref={wordRef}/>
                    </div>
                    <div>
                        의미 : <input className="input" type="text" ref={descRef}/>
                    </div>
                    <div>
                        예시 : <input className="input" type="text" ref={exampleRef}/>
                    </div>
                    </AddInputBox>
                    <div style={{ width: '130px', margin: 'auto'}}>
                        <button className="button" onClick={(e)=> {
                            history.goBack('/')
                        }}><FontAwesomeIcon icon={faChevronLeft}/>
                        </button>
                        <button className="button" onClick={(e)=> {
                            addDicWord(e);
                        }}>Add</button>
                    </div>
            </Wrap>
        </div>
    )
}
const Wrap = styled.div`
    width: 100vw;
    margin-top: 130px;
    font-family: 'GowunDodum';

    button {
        margin: 10px;   
    }
`

const AddTitle = styled.div`
    margin-bottom: 60px;
    text-align: center;
`

const AddInputBox = styled.div`
    text-align: center;
`


export default AddWord;