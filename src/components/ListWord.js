import React, { useState } from 'react';
import GlobalStyle from './common/GlobalStyle';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListWord = ({ words }) => {
    
    return (
        <div>
            <GlobalStyle />
            <Wrap />
            <CardWrap>
            {   
                words &&
                words.map((word, index) => {
                    return (
                            <Card>
                                <div key={index}>
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

    &:hover {
        transition: 0.4s;
        background: #eee;
        color: #000;
    }
`

const CardWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Card = styled.div`
    width: 350px;
    border-radius: 14px;
    background-color: #fff;
    box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
    margin: 20px;
    padding: 20px;
`

export default ListWord;