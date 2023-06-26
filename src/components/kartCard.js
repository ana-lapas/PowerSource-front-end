import styled from "styled-components";

export function KartProduct(props) {
    const { product, removeFromKart } = props;
    console.log(product);
    return (
        <KartCard key={product.id} products={product}>
            <div>
                <p style={{ 'font-size': '38px' }}>{product.energy_amount} kWa</p>
                <p>Referente ao mês {product.month}</p>
                <p>Produzido em {product.font}</p>
            </div>
            <div>
                <p style={{'color': '#3BE200', 'font-size': '42px'}}>R${product.price},00</p>
                <button onClick={() => removeFromKart(product)}> Remover do carrinho</button>
            </div>
        </KartCard>)
}


export const KartCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    border-radius: 20px;
    flex-direction: row;    
    height: 10%;
    width: 98%;
    background-color: #ffffff;
    justify-content: space-between;
    align-items: center; 
    margin:15px;
    z-index: 0.5;
    padding: 15px;
    box-shadow: 0px 2px 15px 0px rgba(0,0,0,0.24);
    p{
        color: #061F23;
        font-family: 'Expletus Sans', cursive;
        font-size: 17px;
        margin-top: 5px;
        margin-left: 30px;
    }
    
    button{
        background-color: red;
        border: none;
        border-radius: 15px;
        height: 70px;
        width: 250px;
        color: #ffffff;
        font-family: 'Expletus Sans', cursive;
        font-size: 20px;
        margin: 10px;
        @media (max-width: 600px) {
	div {
		width: 95%;
	}
}
    }
    @media (max-width: 600px) {
	div {
		width: 100%;
	}
}
`
