import React, { useState, useEffect } from 'react';
import GlobalStyle from './common/GlobalStyle';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { db } from '../firebase/Firebase';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { loadWordFB, updateWordFB, deleteWordFB } from '../redux/modules/dictionary/middlewares';
import { deleteWord, updateWord } from '../redux/modules/dictionary/action';
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListWord = (props) => {
    console.log('hh');
    const dispatch = useDispatch();
    const my_list = useSelector((state) => state.dictionary.word);
    console.log(my_list);

    

    useEffect(() => {
        // console.log(db);
        

        async function addAsync() {
        // const query = await getDocs(collection(db, 'dictionary'));
        // // console.log(query);
        // query.forEach((item) => {
        //     console.log(item.data());
        // });

        // const docRef = await doc(db, "dictionary", "sybn3LZji5UJ9kWrKEfg")
        // deleteDoc( docRef );
        }
        addAsync();

        dispatch(loadWordFB());
    }, [])

    return (
        <div>
            <GlobalStyle />
            <Wrap />
            <CardWrap>
            {   
                my_list &&
                my_list.map((word, index) => {
                    return (
                            <Card completed={word.completed} key={index}>
                                <CardButton>
                                    <div>
                                        <button onClick={() => {
                                        // console.log(word.id);
                                        dispatch(updateWordFB(word.id))
                                        }}
                                            ><FontAwesomeIcon icon={faCheck}/>
                                        </button>
                                    </div>
                                    <div>
                                        <button onClick={() => {
                                            dispatch(deleteWordFB(word.id))
                                        }}>
                                            <FontAwesomeIcon icon={faTimes}/>
                                        </button>
                                    </div>
                                </CardButton>
                                <CardText>
                                    <CardWord>{word.word}</CardWord>
                                    {/* <Line></Line> */}
                                    <CardDesc>{word.description}</CardDesc>
                                    <CardEx>{word.example}</CardEx>
                                </CardText>
                            </Card>
                    )
                })
            }
            </CardWrap>
            <div>
                <Link to="/addword">
                    <AddButton>+</AddButton>
                </Link>
            </div>
        </div>
    )
}
const Wrap = styled.div`
    width: 100vw;
    margin-top: 100px;
`

const AddButton = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 50px;
    font-size: 40px;
    background: #000;
    color: #fff;
    position: absolute;
    right: 5%;
    bottom: 10%;
    transition: all 0.3s linear;

    &:hover {
        transition: 0.4s;
        background: #eee;
        color: #000;
        transform: rotate(90deg);
    }
`

const CardWrap = styled.div`
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    flex-wrap: wrap;
    flex-direction: row;
`

const Card = styled.div`
    width: 300px;
    height: 220px;
    border-radius: 14px;
    background-color: ${(props) => props.completed? "#000" : '#fff'};
    color: ${(props) => props.completed? '#fff' : '#000'};
    box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
    margin: 20px;
    padding: 20px;
    text-align: left;
    position: relative;
`

const CardButton = styled.div`
    display: flex;
    position: absolute;
    right: 20px;
`

const CardText = styled.div`
    margin-top: 60px;
    font-family: 'GowunDodum';
`

const CardWord = styled.div`
    font-size: 20px;
    font-weight: bold;
`

const CardDesc = styled.div`
    
`

const CardEx = styled.div`
    color: skyblue;
`

// const Line = styled.div`
//     &:after {

//     }
// `

export default ListWord;