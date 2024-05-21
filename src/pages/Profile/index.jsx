import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { ButtonBack } from '../../components/ButtonBack'
import avatarPlaceHolder  from '../../assets/user.svg'
import { Container, Form, Avatar } from './styles.js'
import { Button } from '../../components/Button'
import { useNavigate } from "react-router-dom"
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/auth.jsx'
import { api } from '../../service/api.js'
import { useState } from "react"

export function Profile() {
    const { user, uptadeProfile } = useAuth() // pegando o user la da autenticacao
    const [ name, setName ] = useState(user.name) //Pegando a informação do que ja esta autenticado
    const [ email, setEmail ] = useState(user.email)
    const [ passowordOld, setPasswordOld ] = useState()
    const [ passwordNew, setPasswordNew ] = useState()

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

    const [ avatar, setAvatar ] = useState(avatarURL)
    const [ avatarFile, setAvatarFile ] = useState(null)
    
    const navigate = useNavigate()

    async function handleUptade(){
        const uptadeUser = { 
            name, 
            email,
            password: passwordNew,
            old_password: passowordOld
        }

        if(!passowordOld && !passwordNew){
            alert("Você precisa alterar sua senha para salvar!")
        }

        const userUpdated = Object.assign( user, uptadeUser)

        await uptadeProfile({ user: uptadeUser, avatarFile })
            
        navigate("/")
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagaPreview = URL.createObjectURL(file)
        setAvatar(imagaPreview);
    }

    return(
        <Container>
            <header>
                <ButtonBack></ButtonBack>
            </header>

            <Form>
                <Avatar>
                    <img src={avatarURL} alt="Foto do Usuário" />
                    
                    <label htmlFor="avatar">
                        <FiCamera></FiCamera>
                    <input 
                    id="avatar" 
                    type="file"
                    onChange={ handleChangeAvatar } />

                    </label>
                </Avatar>

                <Input
                placeholder="Nome"
                type="text"
                icon={FiUser}
                value={name}
                onChange= {e => setName(e.target.value)}>
                </Input>

                <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                value={email}
                onChange= {e => setEmail(e.target.value)}>
                </Input>

                <Input
                placeholder="Senha Atual"
                type="password"
                icon={FiLock}
                onChange= {e => setPasswordOld(e.target.value)}>
                </Input>

                <Input
                placeholder="Nova senha"
                type="password"
                icon={FiLock}
                onChange= {e => setPasswordNew(e.target.value)}>
                </Input>

                <Button title="Salvar" onClick={ handleUptade }></Button>
            </Form>
        </Container>
    )
}