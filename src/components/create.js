import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    background-color: #3AC4DC;
    justify-content: center;
    align-items: center; 
    margin-top:10vh;
`;

export const Form = styled.form`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top:10vh;
    height: 75vh;
    width: 87vw;
    background-color: #ffffff;
    border-radius: 25px;
    margin: 20px;
    width: 85vw;
`;

export const Text = styled.p`
    color: #3AC4DC;
    text-align: center;
    font-family: 'Expletus Sans', cursive;
    font-size: 32px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    height: 10vh;
    width: 82vw;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;    
    margin-bottom: 13px;
    border-radius: 15px; 
    padding: 10px;
    border: 1px solid #ededed;     
    background-color: "#FFFFFF";
    color: #000000;
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
`;
