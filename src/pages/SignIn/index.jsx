import { Container, Form, Background } from "./styles.js"
import { Button } from '../../components/Button'
import { FiLock, FiMail } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { useAuth } from "../../hooks/auth.jsx"
import { Link } from "react-router-dom"
import { useState } from "react"

export function SignIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn } = useAuth()
    
    function handleSignIn(){
        signIn({ email, password })
    }

    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input placeholder="Email"
                type="text"
                icon={FiMail}
                onChange={e => setEmail(e.target.value)}>
                </Input>

                <Input placeholder="Senha"
                type="password"
                icon={FiLock}
                onChange={e => setPassword(e.target.value)}>
                </Input>

                <Button title="Entrar" onClick={ handleSignIn }></Button>
        
                <Link to="/register">Criar conta</Link>
        
            </Form>
            
            <Background></Background>
        </Container>
    )
}