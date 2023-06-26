import { useNavigate } from "react-router-dom";
import { NavBar } from "../components/navbar.js";
import { ContainerProdutos, KartButton, ProductsCard } from "../components/products.js";
import { useContext, useState } from "react";

export default function Checkout() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [kart, setKart] = useContext([]);

    return (
        <>
            <NavBar />
            <ContainerProdutos>
                <div style={{ 'color': '#3AC4DC', 'font-size': '40px', 'margin': '0 auto' }}>Ainda não temos nenhum produto no seu carrinho</div>
            </ContainerProdutos>
        </>
    )
}