import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { Container, Button, Form, Input, Text } from "../components/createProduct.js";
import { NavBar } from "../components/navbar.js";
import UserContext from '../context/UserContext.js';

export default function CreateProduct() {
    const navigate = useNavigate();
    const [formInfo, setFormInfo] = useState({ fromWhere: '', month: '', amount: '', price: '' });
    const { setUserData } = useContext(UserContext);

    function handleForm(e) {
        setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        navigate('/menu');
        /*const promise = axios.post(`${process.env.REACT_APP_API_URL}/create/product`, ({ ...formInfo }))
            .then((res) => {
                setUserData(res.data.token);
                alert('Produto criado com sucesso!');
                navigate('/menu');
            })
            .catch((error) => {
                console.log(error.res)
                alert('Erro, tente novamente');
            });*/
    }
    return (<>
        <Container>
            <NavBar />                
                <Form onSubmit={handleSubmit}>
                <Text>Preencha o formulário para vender o seu excedente de energia:</Text>
                    <Input type="text"
                        placeholder="Local da fonte"
                        name="fromWhere"
                        onChange={handleForm}
                        value={formInfo.fromWhere}
                        focus
                        required
                    />
                    <Input type="month"
                        placeholder="Referente ao mês"
                        name="month"
                        onChange={handleForm}
                        value={formInfo.month}
                        focus
                        required
                    />
                    <Input type="number"
                        placeholder="Quantidade de energia"
                        name="amount"
                        onChange={handleForm}
                        value={formInfo.amount}
                        focus
                        required
                    />
                    <Input type="number"
                        placeholder="Valor total (em reais R$)"
                        name="price"
                        onChange={handleForm}
                        value={formInfo.price}
                        focus
                        required
                    />
                    <Button type="submit">Quero vender energia!</Button>
                </Form>
        </Container>
    </>)
}