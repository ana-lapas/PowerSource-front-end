import styled from "styled-components";

export function CardProduto(props) {
    const { product, addToKart } = props;
    console.log(product);
    return (
        <ProductsCard key={product.id} products={product}>
            <p style={{ 'font-size': '38px' }}>{product.energy_amount} kWa por R${product.price},00</p>
            <div>
                <p>Referente ao mês {product.month}</p>
                <p>Produzido em {product.font}</p>
            </div>
            <button onClick={() => addToKart(product)}> Adicione ao carrinho</button>
        </ProductsCard>)
}

export const ProductsCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    border-radius: 20px;
    flex-direction: column;    
    height: 280px;
    width: 240px;
    background-color: #ffffff;
    justify-content: flex-start;
    align-items: flex-start; 
    margin:15px;
    z-index: 0.5;    
    padding: 20px;
    box-shadow: 0px 2px 15px 0px rgba(0,0,0,0.24);
    p{
        color: #061F23;
        font-family: 'Expletus Sans', cursive;
        font-weight: 22px;
        font-size: 20px;
        margin-top: 10px;
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
        margin-top: 20px;
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