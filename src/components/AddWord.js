import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './common/GlobalStyle';

const AddWord = () => {

    const [words, setWords] = useState([
        {
            id: 0,
            word: 'ㅎ1ㅎ1',
            description: '히히를 변형한 단어',
            example: '저 친구가 초콜릿을 줬어. ㅎ1ㅎ1'
        },
        {
            id: 1,
            word: 'ㅎ2ㅎ2',
            description: '하이하이를 표현한 단어',
            example: '야 반갑다. ㅎ2ㅎ2'
        },
    ]);
    console.log(words);


    const history = useHistory();

    const wordRef = useRef(null);
    const descRef = useRef(null);
    const exampleRef = useRef(null);
    const idRef = useRef(2);
    console.log(wordRef);
    console.log(descRef);
    console.log(exampleRef);

    const addDicWord = (e) => {
        e.preventDefault();
        console.log(wordRef.current.value);
        console.log(descRef.current.value);
        console.log(exampleRef.current.value);

        const dic = {
            'id': idRef.current, 
            'word':wordRef.current.value, 
            'description':descRef.current.value, 
            'example': exampleRef.current.value,
        }
        idRef.current++;
        setWords( (words) => [...words, dic] )
        history.push('/listword');
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
                <button className="button" onClick={addDicWord}>Add</button>
            </Wrap>
        </div>
    )
}
const Wrap = styled.div`
    width: 100vw;
    margin-top: 100px;
`

export default AddWord;