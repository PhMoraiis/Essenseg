import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    height: 47px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 0;
    margin-top: 3rem;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Wrapper = styled.div`
    width: 100vw;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Menu = styled.a`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 25px;
    color: #777183;
    margin-right: 3rem;
    text-decoration: none;
    cursor: pointer;
    opacity: 0.7;

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
    height: 70px;

    &:hover {
        transition: 1s ease;
        transform: scale(1.1);
    }
`;
