import { useNavigate } from "react-router-dom";
import { Container, Button, Text } from "../components/menu.js";
import { NavBar } from "../components/navbar.js";

export default function Menu() {
    const navigate = useNavigate()
    return (
        <>
        <NavBar />
            <Container>
                <Text>O que você deseja fazer agora?</Text>
                <Button onClick={() => navigate('/create/font')}>Adicionar minha fazenda como fonte de energia sustentável</Button>
                <Button style={{ 'background-color': '#3AC4DC'}}onClick={() => navigate('/create/product')}>Vender energia excedente</Button>
                <Button onClick={() => navigate('/products')}>Comprar energia</Button>
                <Button style={{ 'background-color': '#3AC4DC'}}onClick={() => navigate('/')}>Atualizar alguma informação sobre uma quantidade de venda</Button>
            </Container>
        </>
    )
}
