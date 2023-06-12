import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { Container, Button, Form, Input, Text } from "../components/create.js";
import { NavBar } from "../components/navbar.js";
import UserContext from '../context/UserContext.js';

export default function CreateFont() {
    const navigate = useNavigate();
    const [formInfo, setFormInfo] = useState({ country: '', street: '', localeN: '', photo: '' });
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
                <Text>Preencha o formulário para adicionar sua fazenda como fonte de energia:</Text>
                    <Input type="text"
                        placeholder="País"
                        name="country"
                        onChange={handleForm}
                        value={formInfo.country}
                        focus
                        required
                    />
                    <Input type="text"
                        placeholder="Endereço (Rua, av., rodovia, etc)"
                        name="street"
                        onChange={handleForm}
                        value={formInfo.street}
                        focus
                        required
                    />                    
                    <Input type="text"
                        placeholder="Nome da Fazenda"
                        name="localeN"
                        onChange={handleForm}
                        value={formInfo.localeN}
                        focus
                        required
                    />
                    <Input type="url"
                        placeholder="Link da foto da Fazenda"
                        name="photo"
                        onChange={handleForm}
                        value={formInfo.photo}
                        focus
                        required
                    />
                    <Button type="submit">Quero vender energia!</Button>
                </Form>
        </Container>
    </>)
}