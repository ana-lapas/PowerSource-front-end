import styled from 'styled-components';

export const Container = styled.div`
    margin: 15vh auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 75vh;
    width: 87vw;
    background-color: #ffffff;
    justify-content: center;
    align-items: center; 
    border-radius: 25px;
`;

export const Text = styled.p`
    color: #3AC4DC;
    text-align: center;
    font-family: 'Expletus Sans', cursive;
    font-size: 32px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const Button = styled.button`
    border: none;
    border-radius: 15px;
    background-color: #fde400;
    height: 10vh;
    width:82vw;
    color: #ffffff;
    font-family: 'Expletus Sans', cursive;
    font-size: 30px; 
    margin: 20px;
    margin-bottom: 13px;
`;
