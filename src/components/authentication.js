import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100vh;
    width: 100vw;
    background-color: #3AC4DC;
    justify-content: center;
    align-items: center; 
    margin-top:10vh;
`;
export const Text = styled.p`
        color: #ffffff;
        text-align: center;
        font-family: 'Expletus Sans', cursive;
        font-size: 20px;
        margin-top: 25px;
`;

export const Form = styled.form`
  display:flex;   
  flex-direction: column;
  margin: 25px 0 25px;
 `
export const Input = styled.input`
  height: 60px;
    width:350px;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;    
  margin-bottom: 13px;
  border-radius: 5px; 
  padding: 10px;
  border: none;     
  background-color: "#FFFFFF";
  color: #000000;
`
export const Button = styled.button`
    border: none;
    border-radius: 5px;
    background-color: #fde400;
    height: 60px;
    width:350px;
    color: #ffffff;
    font-family: 'Expletus Sans', cursive;
    font-size: 20px; 
    margin-right: 25px;
`
export const RegisterLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  line-height: 26px;
  text-align: center;
  font-size: 20px;
  line-height: 18px;
  font-style: bold;
  font-weight: 700;
`;
