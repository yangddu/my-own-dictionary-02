import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './common/GlobalStyle';

const NotFound = (props) => {
    const history = useHistory();
    return (
        <div>
            <GlobalStyle />
            <NoFoundText>주소가 올바르지 않습니다!</NoFoundText>
            <button className="button" style={{ display: 'block'}} onClick={() => {
                history.goBack();
            }}>뒤로가기</button>
        </div>
    )
}

const NoFoundText = styled.div`
    margin-top: 100px;
    font-size: 30px;
    font-family: 'GowunDodum';
    color: red;
    text-align: center;
    font-weight: bold;
`

export default NotFound;