import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
    margin: 30px;
`;

export const ContainerText = styled.div`
    width: 50%;
    padding: 10px;
    text-align: center;
    p {
        width: 100%;
        text-align: justify;
        font-size: 1rem;
        padding: 10px;
        color: #c3c3c3;
    }
    @media screen and (max-width: 960px){
        width: 100%;
        p {
            width: 90%;
        }
    }
`;

export const ContainerImg = styled.div`
    width: 50%;
    padding: 10px;
    display: flex;
    justify-content:center;
    img {
        width: 50%;
        height: 70%;
    }

    @media screen and (max-width: 960px){
        width: 100%;
    }
`;