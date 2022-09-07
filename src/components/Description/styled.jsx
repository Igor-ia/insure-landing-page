import styled from "styled-components";

export const DescriptionField = styled.div`
width: 100%;
h2{
    font-size: 3em;
    margin-bottom: 30px;
}

 
@media screen and (max-width: 1360px){
    h2{
    font-size: 2.8em;
    } 
}

@media screen and (max-width: 1175px){
    h2{
        font-size: 2.5em;
    } 
}

@media screen and (max-width: 955px){
    h2{
        font-size: 2em;
    } 
} 

/* Mobile */

@media screen and (max-width:760px ) {
    h2{
        text-align: center;
    }
}
`;

export const CardsField = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: auto;
    gap: 20px;

    div{
        align-self: flex-start;
        h3{
            margin: 20px 0;
        }
    }

    /* Mobile */

    @media screen and (max-width: 610px){
        flex-direction: column;
        align-items: center;
        justify-content: center;

        div{
            text-align: center;

            p{
                margin: auto;
                width: 80%;
            }
        }
    }
`;