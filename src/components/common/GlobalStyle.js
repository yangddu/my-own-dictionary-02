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
        margin: 20px auto 0;

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
        margin-bottom: 30px;
        background: transparent;
        width: 350px;
        font-size: 20px;
        font-family: 'GowunDodum';

        &:focus {
            outline: 2px solid #ddd;
        }

        @media only screen and (max-width: 425px) {
            width: 250px;
        }

        @media only screen and (max-width: 330px) {
            width: 200px;
        }
    }


`;

export default GlobalStyle;