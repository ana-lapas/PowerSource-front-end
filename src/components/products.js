import styled from "styled-components";

export const ContainerProdutos = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 89vw;
    flex-direction: row;
    margin: 0 auto;
    background-color: #ffffff;
    justify-content: flex-start;
    align-items: center; 
    margin-top: 15vh;
    border-radius: 15px;
    z-index: 0.1;
`


export const ProductsCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    border-radius: 20px;
    flex-direction: column;    
    height: 280px;
    width: 240px;
    background-color: #ffffff;
    justify-content: center;
    align-items: center; 
    margin:15px;
    z-index: 0.5;
    padding: 10px;
    box-shadow: 0px 2px 15px 0px rgba(0,0,0,0.24);
    p{
        color: #061F23;
        font-family: 'Expletus Sans', cursive;
        font-size: 17px;
        margin-top: 5px;
    }
    img{
        height:100px;
        width:200px;
        border-radius: 15px;
    }
    button{
        background-color: #3BE200;
        border: none;
        border-radius: 15px;
        height: 40px;
        width: 200px;
        color: #ffffff;
        font-family: 'Expletus Sans', cursive;
        font-size: 20px;
        margin-top: 10px;
    }
`
export const KartButton = styled.button`
    display: flex;
    border-radius: 20px;
    justify-content: center;
    align-items: center;    
    height: 50px;
    width: 500px;
    background-color: #3AC4DC;
    border: none;
    border-radius: 15px;
    color: #ffffff;
    font-family: 'Expletus Sans', cursive;
    font-size: 20px;
    margin: 0 auto;
    margin-bottom: 15px;
`