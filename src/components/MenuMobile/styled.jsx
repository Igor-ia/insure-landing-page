import styled from "styled-components";
import * as colors from '../../config/colors'

export const Menu = styled.div`
background: ${colors.veryDarkViolet};
width: 100%;
height: 100%;
position: absolute;
z-index: 100;
margin-top: 70px;
top: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

ul{
    width: 100%;
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 30%;
    gap: 30px;
    li{
        color: ${colors.veryLightGray};
        list-style: none;
        text-transform: uppercase;
        font-size: 1em;
        font-weight: 700;
    }
    button{
        border: 1px solid ${colors.veryLightGray};
        background: none;
        color: ${colors.veryLightGray};
        padding: 20px 100px;
        font-size: 1em;
        font-weight: 700;
    }
}
div{
    position: relative;
    width: 100%;
    height: 600px;
    img{
        width: 100%;
        height: 100%;
        bottom: 0;
    }    
}

`;