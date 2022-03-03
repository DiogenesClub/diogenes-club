import styled from 'styled-components';

export const H1 = styled.h1`
    width: 100%;
    text-align: center;
    color: #eee;
    text-shadow: 1px 2px 7px rgba(0, 0, 0, 0.6);
    font-size: 6rem;
    font-family: 'Nunito';
    line-height: 120%;
    @media screen and (max-width: 960px){
        width: 90%;
        font-size: 3rem;
    }
`;

export const H2 = styled.h2`
    width: 100%;
    text-align: center;
    color: #949494;
    font-size: 2.5rem;
    line-height: 120%;
`;