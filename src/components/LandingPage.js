import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './common/GlobalStyle';
import emojime from '../img/emojime.png';
import emojir from '../img/emojir.png';
import emojiboo from '../img/emojiboo.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {

    return (
        <div>
            <GlobalStyle />
            <Wrap>
                <LandingCon>✏️Write down your own words!</LandingCon>
                <ImgWrap>   
                    <Img src={emojiboo} alt="emojiboo"/>
                    <Img src={emojime} alt="emoji"/>
                    <Img src={emojir} alt="emoji"/>
                </ImgWrap>
                <Link to="/listword" style={{ textDecoration: 'none'}}>
                    <button className="button" style={{ display: 'block' }}>Let's start!</button>
                </Link>
            </Wrap>
        </div>
    )
}
const Wrap = styled.div`
    width: 100vw;
    margin-top: 150px;

    @media only screen and (max-width: 785px) {
        margin-top: 100px;
    }
`

const LandingCon = styled.div`
    text-align: center;
    font-family: 'StickNoBills';
    font-size: 20px;
`

const ImgWrap = styled.div`
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 785px) {
        flex-direction: column;
        align-items: center;
    }
`

const Img = styled.img`
    width: 300px;
    display: block;

    @media only screen and (max-width: 970px) {
        width: 250px;
    }

    @media only screen and (max-width: 785px) {
        width: 200px;
    }
`


export default LandingPage;