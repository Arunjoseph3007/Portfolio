import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        scrollbar-width: thin;
        scrollbar-color: grey;
        cursor:none;
    }
    .cursorOnA {
        transition: all 0.3s ease;
        height: 70px;
        background-color: #23d997;
        border-color: #23d997;
        box-shadow: 0 0 30px #2d9;
    }
    @media screen and (max-width: 860px){
        html{
            font-size:60%;
        }
    }
    ::-webkit-scrollbar {
        width: 12px;
    }
    ::-webkit-scrollbar-track {
        dispay:none !important;
    }
    *::-webkit-scrollbar-thumb {
        background-color: rgb(172, 172, 172);
        &:hover{
            background-color: rgb(100,100,100);
        }
    }
    *::selection{
        background-color: #23d997;
        color:white;
    }
    body{
        overflow: overlay;
        font-family: "Montserrat";
        background: #000000;
        overflow-x: hidden;
    }
    h2,h3,h4,h5,h6{
        letter-spacing: 0.2rem;
        line-height: 2.5rem;
        color: #bdbdbd;
    }p{
        color:#d1d0d0;
        letter-spacing:0.05rem;
        line-height:1.3rem;
    }
    a{
        text-decoration: none;
        color:#dfdfdf;
    }
`;

export default GlobalStyle;
