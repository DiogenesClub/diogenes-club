import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    display:inline-table;
    width: 400px;
    position: relative;
    padding: 3rem 0 2rem;
    border-radius: 0.5rem;
    color: #2469A0;
    margin: 10px;
    background: #eeeeee;
    border-bottom: 5px solid #2469A0;
    @media screen and (max-width: 460px){
        width: 90%;
    }
`;

export const Content = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        padding: 5px;
        color: #3d8fd3;
    }
`;

export const Title = styled.div`
    font-size: 1.25rem;
    margin-bottom: 15px;
`;

export const Button = styled(NavLink)`
    flex: 0 0 auto;
    height: 40px;
    width: 90%;
    margin-top: 10px;
    font-size: 20px;
    border: 0;
    text-decoration: none;
    border-radius: 20px;
    color: white;
    background: #3DD6AF;
    box-shadow: 0 11px 15px -7px rgba(0,0,0,0.25);
    transition: background 0.25;
    cursor:pointer;
    &:hover{background:#8BE27E;}
`;