import styled from "styled-components";
import * as colors from '../../config/colors'

export const Nav = styled.nav`
height: 70px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;

img{
   width: 100px;
   margin: 20px;
}

ul{
    margin-left: auto;
    display: flex;
    flex-direction: row;
    align-items: center;

    li{
        list-style: none;
        font-size: 0.7em;
        a{
            color: ${colors.darkGrayishViolet};
            text-decoration: none;
            margin-right: 20px;

            :hover{
                color: ${colors.veryDarkViolet};
            }
        }
        button{
            background: #fff;
            color: ${colors.veryDarkViolet};
            padding: 7px 20px;
            border: 2px solid ${colors.veryDarkViolet};

            :hover{
                background: ${colors.veryDarkViolet};
                color: ${colors.veryLightGray};
            }
        }
    }
}

.mobile-toggle{
    display: none;
}

/* Mobile */

@media screen and (max-width: 760px){
    .hidden{
        display: none;
    }

    .mobile-toggle{
        display: flex;
        border: none;
        background: none;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1;
        margin: 20px;
        width: 30px;

        img{
            margin: auto;
        }
    }
    
}


`;