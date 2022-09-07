import styled from "styled-components";
import * as colors from '../../config/colors'
export const Div = styled.div`
    position: relative;
    padding: 20px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: ${colors.darkViolet};
    overflow: hidden;
    margin: 100px 0 150px 0;

    .mobile{
        display: none;
    }


    h2{
        color: ${colors.veryLightGray};
        font-size: 2.6em;
        width: 40%;
        margin-right: 35%;
    }

    @media screen and (max-width:1300px ) {
        h2{
            font-size: 2.4em;    
        }
    }
    @media screen and (max-width:1205px ) {
        h2{
            font-size: 2.2em;    
        }
    }
    @media screen and (max-width:1110px ) {
        h2{
            font-size: 2em;    
        }
    }
    @media screen and (max-width:1005px ) {
        h2{
            font-size: 1.8em;    
        }
    }
    @media screen and (max-width:910px ) {
        h2{
            font-size: 1.5em;    
        }
    }
    button{
        color: ${colors.veryLightGray};
        background: ${colors.darkViolet};
        padding: 10px 20px;
        border: 2px solid ${colors.veryLightGray};
        z-index: 1;

        :hover{
            background: ${colors.veryLightGray};
            color: ${colors.darkViolet};
        }
    }
    div{
        position: absolute;
        right: 0;
        width: 40%;
        
        img{
            width: 100%;   
        }
    }

    /* Mobile */

    @media screen and (max-width: 610px) {
        flex-direction: column;
        width: 80%;
        padding: 40px 0;
        position: relative;

        .mobile{
            display: block;
        }

        .mobile-how-we-work{
            position: absolute;
            top: 0;
            right: 0;
        }

        .desktop{
            display: none;
        }

        h2{
            font-size: 2em;
            width: 80%;
            text-align: center;
            margin-right: 0;
            margin-bottom: 20px;
        }
    }

    @media screen and (max-width: 330px){
        h2{
            font-size: 1.5em;
        }
    }

`;