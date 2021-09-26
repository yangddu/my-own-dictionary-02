import React from 'react';
import {useHistory} from 'react-router-dom';

const NotFound = (props) => {
    const history = useHistory();
    return (
        <div>
            <div>주소가 올바르지 않아요!</div>
            <button onClick={() => {
                history.goBack();
            }}>뒤로가기</button>
        </div>
    )
}

export default NotFound;