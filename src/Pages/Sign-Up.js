import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Form, Input, RegisterLink } from "../components/authentication.js";
import axios from "axios";
import { NavBar } from "../components/navbar.js";

export default function SignUp() {
    const navigate = useNavigate();
    const [formInfo, setFormInfo] = useState({ name: '', email: '', cpf: '', password: '' });
    function handleForm(e) {
        setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const promise = axios.post(`http://localhost:5000/auth/sign-up`, ({ ...formInfo }));
        promise.then((response) => {
            alert('Inscrito com sucesso! Por favor, faça login.');
            navigate('/sign-in');
        })
        promise.catch((error) => {
            console.log(error.response);
            alert('Erro, tente novamente');
        });
    }

    return (<>
        <Container>
            <NavBar />
            <Form onSubmit={handleSubmit}>
                <Input type="name"
                    placeholder="Digite seu nome"
                    name="name"
                    onChange={handleForm}
                    value={formInfo.name}
                    focus
                    required
                />                
                <Input type="cpf"
                    placeholder="Digite seu CPF: XXX.XXX.XXX-XX"
                    name="cpf"
                    onChange={handleForm}
                    value={formInfo.cpf}
                    focus
                    required
                />
                <Input type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleForm}
                    value={formInfo.email}
                    focus
                    required
                />
                <Input type="password"
                    placeholder="Senha"
                    name="password"
                    onChange={handleForm}
                    value={formInfo.password}
                    focus
                    required
                />
                <Button type="submit" >Entrar</Button>
            </Form>
            <RegisterLink onClick={() => navigate('/sign-in')}>
                Já possui conta? Faça login!
            </RegisterLink>
        </Container>
    </>
    );
}