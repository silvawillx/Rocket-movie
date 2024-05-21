import { Container, Profile, Logout, Search } from './styles.js'
import avatarPlaceHolder  from '../../assets/user.svg'
import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth.jsx';
import { useNavigate } from 'react-router-dom';
import { Input } from "../Input/index.jsx";
import { FiSearch } from "react-icons/fi";
import { api } from '../../service/api.js';
import { useEffect, useState } from 'react'

export function Header({ children }){
    const { signOut, user } = useAuth()

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

    const navigate = useNavigate()

    function handleBack(){
        navigate("/")
    }

    return(
        <Container>
            <h1
            onClick={ handleBack }>
                RocketMovies
            </h1>
            
            <Search>
                { children }
            </Search>

            <Profile to="/profile">
                <img
                src={ avatarURL }
                alt="Foto do Usuário" />

                <div>
                    <span>Bem Vindo,</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={ signOut }>
                <RiShutDownLine></RiShutDownLine>
            </Logout>
        </Container>
    )
}