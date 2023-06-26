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
    @media (max-width: 600px) {
	div {
		width: 100%;
        flex-direction: column;
	}
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
    @media (max-width: 600px) {
	div {
		width: 90%;
        
	}
}
`
