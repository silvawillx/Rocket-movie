import { FiUser, FiMail, FiLock, FiArrowLeft} from 'react-icons/fi'
import { Container, Form, Background } from "./style.js";
import { Link, useNavigate } from "react-router-dom"
import { Button } from '../../components/Button'
import { Input } from "../../components/Input";
import { api } from '../../service/api.js'
import { useState } from 'react'

export function SignUp(){
    const [name, setName] = useState("");  // CRIANDO UM ESTADO PARA CAPTURAR AS INFORMAÇÕES DO USUARIO QUE ESTA CADASTRANDO
    // NAME é o estado, setName a função que atualiza o estado
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

    const navigate = useNavigate()

function handleSignUp(){
        if(!name || !email || !password){
            return alert("Todos os campos são obrigatórios")
        }

        api.post("/users", { name, email, password })
        .then(() => {
            alert("Usuário cadastrado com sucesso!")
            navigate("/")
        })
        .catch(error => {
            if(error.message){
                alert(error.message)
            }else{
                alert("Não foi possível cadastrar")
            }
        })
    }

    return(
        <Container>
                <Background></Background>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input placeholder="Nome"
                type="text"
                icon={FiUser}
                onChange={e => setName(e.target.value)}> 
                </Input>

                <Input placeholder="Email"
                type="email"
                icon={FiMail}
                onChange={e => setEmail(e.target.value)}>
                </Input>

                <Input placeholder="Senha"
                type="password"
                icon={FiLock}
                onChange={e => setPassword(e.target.value)}>
                </Input>

            <Button title="Cadastrar" onClick={handleSignUp}></Button>
        
            <Link to="/">
                Voltar para o login</Link>
                <FiArrowLeft></FiArrowLeft>
            </Form>
            
        </Container>
    )
}