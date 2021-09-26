import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <div>
            <HeaderWrap>
                <Title>My Own Dictionary</Title>
            </HeaderWrap>
        </div>
    )
}
const HeaderWrap = styled.div`
    width: 100%;
    font-family: 'StickNoBills';
`

const Title = styled.div`
    text-align: center;
    font-size: 40px;
    font-weight: 900;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
`

export default Header;