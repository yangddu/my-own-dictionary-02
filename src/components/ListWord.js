import React, { useState, useEffect } from 'react';
import GlobalStyle from './common/GlobalStyle';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { db } from '../firebase/Firebase';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { loadWordFB, updateWordFB, deleteWordFB } from '../redux/modules/dictionary/middlewares';
import { deleteWord } from '../redux/modules/dictionary/action';

const ListWord = (props) => {

    const dispatch = useDispatch();
    const my_list = useSelector((state) => state.addReducer.word);
    // console.log(my_list);

    

    useEffect(() => {
        // console.log(db);
        

        async function addAsync() {
        // const query = await getDocs(collection(db, 'dictionary'));
        // // console.log(query);
        // query.forEach((item) => {
        //     console.log(item.data());
        // });

        const docRef = await doc(db, "dictionary", "sybn3LZji5UJ9kWrKEfg")
        deleteDoc( docRef );
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
                                <div><button onClick={() => {
                                    dispatch(updateWordFB(word.id));
                                }}>완료하기</button></div>
                                <div><button onClick={() => {
                                    dispatch(deleteWordFB(word.id));
                                }}></button>삭제하기</div>
                                <div>
                                    <div>{word.word}</div>
                                    <div>{word.description}</div>
                                    <div>{word.example}</div>
                                </div>
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
    width: 350px;
    border-radius: 14px;
    background-color: ${(props) => props.completed? "#fff" : '#000'};
    color: ${(props) => props.completed? '#000' : '#fff'};
    box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
    margin: 20px;
    padding: 20px;
    text-align: left;
`

export default ListWord;