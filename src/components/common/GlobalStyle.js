import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        background: #fff;
        background-image: radial-gradient(#eee 20%, transparent 0), radial-gradient(#eee 20%, transparent 0);
        background-position: 20px 20px;
        background-size: 10px 10px;
        }
      
    .button {
        font-family: 'StickNoBills';
        background: #eee;
        padding:  5px 10px;
        font-size: 20px;

        &:hover {
            background: #000;
            color: #fff;
            transition: 0.7s; 
            cursor: pointer;
        }
    }

    .input {
        border: none;
        border-bottom: 1px solid #000;
        margin-bottom: 20px;
        background: transparent;
        width: 300px;
        font-size: 20px;
        font-family: 'GowunDodum';

        &:focus {
            outline: 2px solid #ddd;
        }
    }


`;

export default GlobalStyle;