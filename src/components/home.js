import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100vh;
    width: 100vw;
    background-color: #3AC4DC;
    justify-content: center;
    align-items: space-around; 
    margin-top:10vh;
`;
export const Text = styled.p`
        color: #ffffff;
        text-align: center;
        font-family: 'Expletus Sans', cursive;
        font-size: 20px;
        margin-top: 35px;
`;

export const Button = styled.button`
    border: none;
    border-radius: 15px;
    background-color: #fde400;
    height: 60px;
    width:350px;
    color: #ffffff;
    font-family: 'Expletus Sans', cursive;
    font-size: 20px; 
    margin-right: 25px;
`