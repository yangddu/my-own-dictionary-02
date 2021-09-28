import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './common/GlobalStyle';
import { useDispatch } from 'react-redux';
import { createWord } from '../redux/modules/dictionary/action';
import { addWordFB } from '../redux/modules/dictionary/middlewares'; 

const AddWord = ({ setWord }) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const wordRef = useRef(null);
    const descRef = useRef(null);
    const exampleRef = useRef(null);
    // const idRef = useRef(0);
    // console.log(wordRef);
    // console.log(descRef);
    // console.log(exampleRef);

    const addDicWord = (e) => {
        e.preventDefault();

        // const dic = {
        //     'id': idRef.current, 
        //     'word':wordRef.current.value, 
        //     'description':descRef.current.value, 
        //     'example': exampleRef.current.value,
        // }
        // setWord( (word) => [...word, dic] );

        // dispatch(createWord(dic));

        dispatch(addWordFB({
                // 'id': idRef.current, 파아어베이스에서 자동id를 불러옴 
                'word':wordRef.current.value, 
                'description':descRef.current.value, 
                'example': exampleRef.current.value,
                'completed': false,
            }))
            //dispatch결과값 promise/ 
            .then(() => history.push('/listword'));
        // idRef.current++;
    }
    return (
        <div>
            <GlobalStyle />
            <Wrap>
                <div>단어 추가하기!</div>
                <div>
                    단어 : <input className="input" type="text" ref={wordRef}/>
                </div>
                <div>
                    설명 : <input className="input" type="text" ref={descRef}/>
                </div>
                <div>
                    예시 : <input className="input" type="text" ref={exampleRef}/>
                </div>
                <button className="button" onClick={(e)=> {
                    addDicWord(e);
                }}>Add</button>
            </Wrap>
        </div>
    )
}
const Wrap = styled.div`
    width: 100vw;
    margin-top: 130px;
    font-family: 'GowunDodum'
`

export default AddWord;