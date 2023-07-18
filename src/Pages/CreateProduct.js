import { NavigationType, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Container, Button, Form, Input, Text } from "../components/create.js";
import { NavBar } from "../components/navbar.js";
import UserContext from '../context/UserContext.js';
import { createNewProduct } from "../service/product.service.js";

export default function CreateProduct() {
    const navigate = useNavigate();
    const [formInfo, setFormInfo] = useState({ font: '', month: '', energy_amount: '', price: '' });
    const token = useContext(UserContext);

    function handleForm(e) {
        setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
        console.log(formInfo)
    }
    function checkToken(token) {
        if (!token) {
            alert("Para acessar essa página você deve estar logado!");
            navigate('/sign-in')
        }
    }
    useEffect(() => {
        checkToken(token)
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        const productData = {
            font: formInfo.font, 
            month: Number(formInfo.month), 
            energy_amount: Number(formInfo.energy_amount), 
            price: Number(formInfo.price)
        }
        
        if(formInfo.month > 13 || formInfo.month < 1){
            alert("O campo mês deve ser um número entre 1 e 12");
            navigate('/menu');
        }
        createNewProduct({token, productData})
            .then((res) => {
                console.log(res.data);
                alert('Produto criado com sucesso!');
                setFormInfo({font: '', month: '', energy_amount: '', price: ''});
                navigate('/menu');
            })
            .catch((error) => {
                console.log(error.res)
                alert('Erro, tente novamente');
            });
    }
    return (<>
        <Container>
            <NavBar />
            <Form onSubmit={handleSubmit}>
                <Text>Preencha o formulário para vender o seu excedente de energia:</Text>
                <Input type="text"
                    placeholder="Local da fonte"
                    name="font"
                    onChange={handleForm}
                    value={formInfo.font}
                    focus
                    required
                />
                <Input type="number"
                    placeholder="Referente ao mês"
                    name="month"
                    onChange={handleForm}
                    value={formInfo.month}
                    focus
                    required
                />
                <Input type="number"
                    placeholder="Quantidade de energia"
                    name="energy_amount"
                    onChange={handleForm}
                    value={formInfo.energy_amount}
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