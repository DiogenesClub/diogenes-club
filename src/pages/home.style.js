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
    padding: 40px;
`;

export const ContainerText = styled.div`
    width: 50%;
    text-align: center;
    p {
        width: 100%;
        text-align: justify;
        font-size: 1.5rem;
        padding: 10px;
        color: #c3c3c3;
    }
    @media screen and (max-width: 960px){
        width: 100%;
    }
`;

export const ContainerImg = styled.div`
    width: 50%;
    padding: 10px;
    display: flex;
    justify-content:center;
    img {
        width: 300px;
        height: 300px;
    }

    @media screen and (max-width: 960px){
        width: 100%;
    }
`;

export const ContainerInput = styled.div`
    width: 100%;
    background-color: #bceeb5;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    p{
        text-align: left;
        color: #5d5d5d;
    }
    input{
        width: 40%;
        height: 50px;
        font-size: 17px;
        border: none;
        padding: 0.5em;
        margin: 0.5em;
        border-radius: 3px;
    }
    button{
        height: 50px;
        font-size: 1em;
        color: white;
        margin: 1em;
        cursor: pointer;
        padding: 0.25em 1em;
        border: none;
        background: #3DD6AF;
        border-radius: 3px;
    }

    @media screen and (max-width: 600px){
        input{
            width: 100%;
        }
    }
`;