import { useNavigate } from "react-router-dom";
import { NavBar } from "../components/navbar.js";
import { ContainerProdutos, KartButton, ProductsCard } from "../components/products.js";
import { useContext, useEffect, useState } from "react";
import { productsAPI } from "../services/products.api.js";
import useToken from "../hooks/useToken.js";
import axios from "axios";

export default function Products() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [kart, setKart] = useContext([]);


    function addToKart(product) {
        setKart([...kart, product])
        alert("Item adicionado ao carrinho")
    }
    async function getProducts() {
        try {
            const productsData = await axios.get(`http://localhost:5000/products/`);
            setProducts(productsData);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getProducts()
    }, []);


    return (
        <>
            <NavBar />
            <ContainerProdutos>
            {products.length !== 0 ? <>
                   {products.map((products, index) => (
                       <ProductsCard key={index} products={products} setKart={setKart}>
                           <p style={{ 'font-size': '40px' }}>${products.amount} kWa por R${products.price},00</p>
                           <div>
                               <p>Referente ao mês ${products.month}</p>
                               <p>Produzido em ${products.fromWhere}</p>
                           </div>
                           <button onClick={() => addToKart(products)}> Adicione ao carrinho</button>
                       </ProductsCard>
                   ))}
               </> :
                   <div style={{ 'color': '#3AC4DC', 'font-size': '40px', 'margin': '0 auto' }}>Ainda não temos nenhum produto cadastrado</div>}
            {kart.length !== 0 ? <KartButton onClick={() => navigate('/checkout')}> Ir para o carrinho</KartButton>: ''}
            </ContainerProdutos>
        </>
    )
}