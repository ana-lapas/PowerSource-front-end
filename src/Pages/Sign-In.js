import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { Container, Button, Form, Input, RegisterLink } from "../components/authentication.js";
import { NavBar } from "../components/navbar.js";
import UserContext from '../context/UserContext.js';

export default function SignIn() {
    const navigate = useNavigate();
    const [formInfo, setFormInfo] = useState({ email: '', password: '' });
    const { token, setToken } = useContext(UserContext);

    function handleForm(e) {
        setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const promise = axios.post(`http://localhost:5000/auth/sign-in`, ({ ...formInfo }))
            .then((res) => {
                
                setToken(res.data.user);
                console.log(token)
                alert('Login realizado com sucesso!');
                navigate('/menu');
            })
            .catch((error) => {
                console.log(error.res)
                alert('Erro, tente novamente');
            });
    }

    return (
        <>
            <Container>
                <NavBar />
                <Form onSubmit={handleSubmit}>
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
                <RegisterLink onClick={() => navigate('/sign-up')}>
                    Primeira vez? Cadastre-se!
                </RegisterLink>
            </Container>
        </>
    )
}