import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px auto;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
`;

export const Wrapper = styled.div`
    background-color: #ffffff73;  
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Menu = styled.a`
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 25px;
    color: #535353;
    margin-right: 3rem;
    text-decoration: none;
    cursor: pointer;
    opacity: 0.8;

    &:hover {
        opacity: 1;
        transition: 0.3s;
        border-bottom: 4px solid #5ec1cb;
        border-radius: 3px;
    }
`;

export const Logo = styled.img`
    cursor: pointer;
    width: 260px;
    height: 60px;
    margin-left: 3rem;
`;
