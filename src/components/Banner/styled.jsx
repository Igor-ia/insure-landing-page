import styled from "styled-components";
import * as colors from "../../config/colors"
export const SectionBanner = styled.section`
color: ${colors.veryLightGray};
width: 100%;
height: auto;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin: auto;
margin-bottom: 5%;

.mobile{
    display: none;
}


hr.top-description{
    margin-bottom: 30px;
    width: 150px;
    border: 0;
    border-top: 1px solid ${colors.veryLightGray};
}
hr.bottom-description{
    width: 150px;
    border: 0;
    border-top: 1px solid ${colors.grayishBlue};
}

.background{
    position: absolute;
    align-self: flex-start;
    margin-top: 0;
    z-index: -100;
    height: 600px;
    width: 100%;
    background: ${colors.darkViolet};

    img.bg-top{
        display:block;
        margin-left: auto;
        width: 300px;
    }
    
}

.description{
    width: 50%;
    margin-right: 3%;
    margin-top: 7%;

    h1{
        font-size: 4em;
        width: 85%;
        line-height: 65px;
        text-align: left;
        margin-bottom: 5%;
    }
    p{
        margin-bottom: 5%;
        font-size: 1em;
    }
    button{
        background: ${colors.darkViolet};
        color: ${colors.veryLightGray};
        padding: 10px 30px;
        border: 2px solid ${colors.veryLightGray};
        margin-bottom: 65%;

        :hover{
            background: ${colors.veryLightGray};
            color: ${colors.darkViolet};
        }
    }

    @media screen and (max-width: 1470px) {
        h1{
            font-size: 3.7em;
        }
    }

    @media screen and (max-width: 1360px) {
        h1{
            font-size: 3.5em;
        }
    }

    @media screen and (max-width: 1285px) {
        h1{
            font-size: 3.2em;
        }
    }
    @media screen and (max-width: 1175px) {
        h1{
            font-size: 3em;
        }
        p{
            font-size: 0.8em;
        }
    }
    @media screen and (max-width: 1105px) {
        h1{
            font-size: 2.8em;
        }
    }
    @media screen and (max-width: 1030px) {
        h1{
            font-size: 2.6em;
        }
    }
    @media screen and (max-width: 955px) {
        h1{
            font-size: 2.4em;
        }
    }
    @media screen and (max-width: 880px) {
        h1{
            font-size: 2.2em;
        }
    }
    @media screen and (max-width: 810px) {
        h1{
            font-size: 2em;
        }
    }
    

}


@media screen and (max-width: 1360px) {
    .background{
            height: 550px;
        }
    }
@media screen and (max-width: 1175px) {
    .background{
            height: 480px;
        }
    }
@media screen and (max-width: 1030px) {
    .background{
            height: 450px;
        }
    }
@media screen and (max-width: 880px) {
    .background{
            height: 410px;
        }
    }

img.intro{
    /* margin-top: 2%; */
    width: 45%;
}

img.bg-bottom{
    display: block;
    margin-top:10%;
    position: absolute;
    left: 0;
    width: 10%;
}

/* Mobile */

@media screen and (max-width: 760px){
    flex-direction: column;
    .mobile{
        display: block;
    }
    .desktop{
        display: none !important;
    }

    .intro-mobile{
        width: 100%;
    }
    .description{
        position: relative;
        width: 100%;
        margin: 0;

        .mobile-bg-top{
            position: absolute;
            top: 0;
            left: 0;
        }
        .mobile-bg-bottom{
            position: absolute;
            bottom: 0;
            right: 0;
        }

        .mobile-description{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0;
            margin-bottom: 150px;
            padding: 5% 0;
            width: 100%;
            background: ${colors.darkViolet};
            
            h1{
                margin-top: 50px;
                font-size: 3.5em;
                text-align: center;
            }
            p{
                text-align: center;
                width: 80%;
            }
            button{
                margin-bottom: 50px;
            }
        }
        hr{
            margin: auto;
            margin-bottom: 20px;
        }
    }
}

@media screen and (max-width: 515px){
    .description{
        .mobile-description{
            h1{
                font-size: 3em;
            }
        }
    }
}

@media screen and (max-width: 440px){
    .description{
        .mobile-description{
            h1{
                font-size: 2.2em;
            }
        }
    }
}


`;