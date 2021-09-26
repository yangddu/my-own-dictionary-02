import React, {useState} from 'react';
import styled from 'styled-components';
import GlobalStyle from './common/GlobalStyle';
import emojime from '../img/emojime.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {

    return (
        <div>
            <GlobalStyle />
            <Wrap>
                <Img src={emojime} alt="emoji"/>
                <Link to="/listword">
                    <button className="button">Let's start!</button>
                </Link>
            </Wrap>
        </div>
    )
}
const Wrap = styled.div`
    width: 100vw;
    margin-top: 100px;
`

const Img = styled.img`
    width: 300px;
    display: block;
    margin: 50px auto 30px;
`


export default LandingPage;