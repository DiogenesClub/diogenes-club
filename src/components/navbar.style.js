import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #2469A0;
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
`;

export const LogoContainer = styled.div`
    margin-left: 2rem;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    img{
        width: 60px;
        height: 50px;
        margin-right: 0.5rem;
    }
`;

export const Menu = styled.ul`
    height: 100%;
    display: flex;
    list-style: none;
    z-index: 1;

    @media screen and (max-width: 960px){
        background-color: #2469A0;
        position: absolute;
        top: 70px;
        left: ${({open}) => open ? "0" : "-100%"};
        width: 100%;
        height: 90vh;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 0.5s all ease;
    }
`;

export const MenuItem = styled.li`
    height: 100%;

    @media screen and (max-width: 960px){
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const MenuItemLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.2rem 2.2rem;
    font-weight: 300;
    cursor: pointer;
    color: #10BCE3;
    transition: 0.5s all ease;
    text-decoration: none;

    &.active {
        color: #8BE27E;
        svg{
            fill: #8BE27E;
        }
    }

    &:hover {
        color: #2469A0;
        background-color: #10BCE3;
        transition: 0.5s all ease;

        svg {
            fill: #2469A0;
        }
    }
    div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    svg {
        display: none;
        fill: #10BCE3;
        margin-right: 0.5rem;
    }
    @media screen and (max-width: 960px){
        width: 100%;

        div {
            width: 30%;
            justify-content: left;
            svg{
                display: flex;
            }
        }
    }

    @media screen and (max-width: 500px){
        div {
            width: 70%;
        }
    }

    @media screen and (max-width: 260px){
        div {
            width: 100%;
        }
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: flex;
        align-items:center;
        svg{
            fill: #10BCE3;
            margin-right: 0.5rem;
        }
    }
`;
