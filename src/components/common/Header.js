import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './Header.css';

const Header = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    return (
        <div>
            <HeaderWrap>
                <div className={scrollPosition < 60 ? "original_header" : "change_header"}>My Own Dictionary</div>
            </HeaderWrap>
        </div>
    )
}
const HeaderWrap = styled.div`
    width: 100%;
    font-family: 'StickNoBills';
`



export default Header;