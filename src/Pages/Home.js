import { useNavigate } from "react-router-dom";
import { Container, Button, Text } from "../components/home.js";
import { NavBar } from "../components/navbar.js";

export default function Home() {
    const navigate = useNavigate()
    return (
        <>
            <Container>
                <NavBar />
                <div>
                    <Text>Transforme seu excesso de energia solar em lucro com PowerSource!
                Compre e venda energia solar excedente de forma simples e eficiente. 
                </Text>
                <Text>  </Text>                
                <Text> Conecte-se a uma rede inteligente de negociação energética e maximize o retorno dos seus painéis solares.</Text>
                <Text>Seja um protagonista na revolução energética, monetizando seu poder solar não utilizado.</Text>
                <Text>Potencialize sua independência e lucratividade com PowerSource - a plataforma para comprar e vender energia solar excedente com facilidade!</Text>
                
                </div>
                <Button onClick={() => navigate('/')}>Quero fazer login!</Button>
                <Button onClick={() => navigate('/')}>Quero me cadastrar!</Button>
            </Container>
        </>
    )
}
