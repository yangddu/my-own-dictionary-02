import React, { useState, useEffect } from 'react';
import GlobalStyle from './common/GlobalStyle';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadWordFB, updateWordFB, deleteWordFB } from '../redux/modules/dictionary/middlewares';
import { faTimes, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListWord = (props) => {

    const dispatch = useDispatch();
    const my_list = useSelector((state) => state.dictionary.word);
    console.log(my_list);

    

    useEffect(() => {
        async function addAsync() {
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
                                    <Button onClick={() => {
                                        dispatch(updateWordFB(word.id))
                                        }}
                                            ><FontAwesomeIcon icon={faHeart}/>
                                        </Button>
                                    </div>
                                    <div>
                                    <Button onClick={() => {
                                            dispatch(deleteWordFB(word.id))
                                        }}>
                                            <FontAwesomeIcon icon={faTimes}/>
                                        </Button>
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
    position: fixed;
    right: 5%;
    bottom: 5%;
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
    margin: 2rem;
    gap: 0.5em;
`

const Card = styled.div`
    width: 400px;
    min-height: 300px;
    max-height: 300px;
    overflow-y: scroll;
    border-radius: 14px;
    background-color: ${(props) => props.completed? "#000" : '#fff'};
    color: ${(props) => props.completed? '#fff' : '#000'};
    box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
    margin: 20px;
    padding: 20px;
    text-align: left;
    position: relative;
    flex-basis: 23.5%;
    flex-shrink: 1;
    flex-grow: 1;

    @media screen and (max-width: 1440px) {
        flex-basis: 33%;
    } 

    @media screen and (max-width: 1023px) {
        flex-basis: 49%;
    }

    @media screen and (max-width: 767px) {
        flex-basis: 100%;
    }

    @media screen and (max-width: 600px) {
        min-height: 0px;
        margin: 13px;
    }

    @media screen and (max-width: 489px) {
        min-height: 0px;
        margin: 10px;
    }

    @media screen and (max-width: 375px) {
        min-height: 0px;
    }
`

const CardButton = styled.div`
    display: flex;
    position: absolute;
    right: 20px;
`

const Button = styled.button`
    background: none;
    border: none;
    font-size: 16px;
    color: grey;
    cursor: pointer;

    &:hover {
        color: #ffc0cb;
    }
`

const CardText = styled.div`
    margin-top: 60px;
    font-family: 'GowunDodum';

    @media screen and (max-width: 600px) {
        margin-top: 50px;
    }

    @media screen and (max-width: 489px) {
        margin-top: 40px;
    }

    @media screen and (max-width: 375px) {
        margin-top: 40px;
    }
`

const CardWord = styled.div`
    font-size: 23px;
    font-weight: bold;

    ::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        margin: 10px 0;
        border: 1px dashed #ddd;
    }

    @media screen and (max-width: 489px) {
        font-size: 20px;
    }

    @media screen and (max-width: 375px) {
        font-size: 18px;
    }
`

const CardDesc = styled.div`
    margin-top: 30px;

    @media screen and (max-width: 375px) {
        margin-top: 10px;
    }
`

const CardEx = styled.div`
    color: skyblue;
    line-height: 1.2;
    margin-top: 20px;
    font-weight: bold;

    @media screen and (max-width: 375px) {
        margin-top: 15px;
    }
`
export default ListWord;