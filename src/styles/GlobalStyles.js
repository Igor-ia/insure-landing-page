import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin:0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}

html,body,#root{
    height: 100%;
}

body{
    font-family: sans-serif;
    font-size: 18px;
    font-family: 'Karla', sans-serif;

    a,button,span{
        font-weight: 700;
        font-family: inherit;
        text-transform:uppercase;
    }
    h1,h2,h3{
        font-family: 'DM Serif Display', serif;
    }
}


`;

export const Container = styled.div`
display: flex;
width: 100%;
padding: 0 10%;
flex-direction: column;
margin: auto;

align-items: center;
justify-content: center;


@media screen and (max-width: 760px){
    padding: 0;
}
`;