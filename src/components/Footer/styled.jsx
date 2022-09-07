import styled from "styled-components";
import * as colors from '../../config/colors'
export const FooterField = styled.footer`
    width: 100%;
    padding: 3% 10% 0 10%;
    background: ${colors.veryLightGray};
    position: relative;

    img.bg-footer{
        position: absolute;
        left: 0;
        top: 0;
        z-index: 0;
    }

.mobile{
    display: none !important;
}


.footer-top{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    img.logo-footer{
        position: relative;
    }

    .social-media{
        a{
            margin-left: 15px;
            :hover{
                filter: brightness(0) saturate(100%);
            }
        }
    }
}

hr{
    width: 100%;
    margin: 20px 0;
    border: 0;
    border-top: 1px solid ${colors.grayishBlue};
}

.footer-options{
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    div{
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 50px;

        span{
            color: ${colors.darkGrayishViolet};
            margin-bottom: 20px;
        }

        a{
            text-decoration: none;
            color: ${colors.veryDarkViolet};

            :hover{
                text-decoration: underline;
            }
        }
    }
}

/* Mobile */

@media screen and (max-width: 610px){
    
    .desktop{
        display:none;
    }
    .mobile{
        display: block !important;
    }


    .footer-top{
        margin: 0 -10%;
        position: relative;
        flex-direction: column;
        padding-top: 15%;
        padding-bottom: 30px;

        .logo-footer{
            width: 150px;
            margin: 30px;
        }

        div{
            margin-bottom: 5%;
        }
    }

    .mobile-footer-bg{
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
    }

    .footer-options{
        flex-direction: column;

        div{
            text-align: center;
        }
    }
}
`;