import { useNavigate } from "react-router-dom";
import { NavBar } from "../components/navbar.js";
import { ContainerProdutos, KartButton, ProductsCard, KartCard } from "../components/products.js";
import { useContext, useEffect, useState } from "react";
import UserContext from '../context/UserContext.js';
import axios from "axios";
import { CardProduto } from "../components/productCard.js";
import { KartProduct } from "../components/kartCard.js";
import { purchase } from "../service/operation.service.js";

export default function Products() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [kart, setKart] = useState([]);
    const [goToKart, setGoToKart] = useState(false);
    const { token } = useContext(UserContext);

    function addToKart(product) {
        setKart([...kart, product])
    }

    function removeFromKart(product) {
        const newKart = kart.filter((kart) => kart.id !== product.id)
        if (newKart.length === 0) {
            setGoToKart(false);
        }
        setKart(newKart)
    }

    async function getProducts() {
        try {
            const productsData = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/products/`);
            setProducts(productsData.data);
        } catch (err) {
            console.log(err.message);
        }
    }

    function checkToken(token) {
        if (!token) {
            alert("Para acessar essa página você deve estar logado!");
            navigate('/sign-in')
        }
    }
    async function makePurchase(kart) {
        checkToken();
        const idS = kart.map((k) => k.id);
        const seller_id = kart.map((k) => k.user_id);
        let totalPrice = 0;
        for (let i = 0; i < kart.length; i++) {
            totalPrice += parseInt(kart[i].price);
        }
        let totalEnergy = 0;
        for (let i = 0; i < kart.length; i++) {
            totalEnergy += parseInt(kart[i].energy_amount);
        }
        const purchaseData = {
            product_id: idS,
            seller_id: seller_id,
            quantity: totalEnergy,
            price: totalPrice,
        }
        try {
            const productsData = await purchase(token, purchaseData);
            alert("Sua compra foi concluída!");
            navigate('/menu');
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
                {(products.length !== 0) && (goToKart === false) ? <>{
                    products.map((product) => <CardProduto product={product} addToKart={addToKart} />)
                }
                </> : <div style={{
                    'font-size': '25px',
                    'color': '#c8c8c8',
                    'margin': '0 auto',
                    'padding': '100px'
                }}>
                    Ainda não temos nenhum produto cadastrado na nossa base de dados.
                </div>}

                {(kart.length !== 0) & (goToKart === false) ? <KartButton onClick={() => setGoToKart(true)}>
                    Ir para o carrinho</KartButton> : ''}
                {(goToKart === true) && (kart.length > 0) ? <>
                    {kart.map((product) => <KartProduct
                        key={product.id}
                        product={product}
                        removeFromKart={removeFromKart} />
                    )}
                    <KartButton onClick={() => makePurchase(kart)}>Finalizar compra</KartButton>
                </> : ''}

            </ContainerProdutos>
        </>
    )
}