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
                <Button style={{ 'background-color': '#3AC4DC'}}onClick={() => navigate('/create/product')}>Vender energia excedente</Button>
                <Button onClick={() => navigate('/products')}>Comprar energia</Button>
           </Container>
        </>
    )
}
