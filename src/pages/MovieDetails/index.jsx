import { ButtonBack } from "../../components/ButtonBack";
import { useNavigate, useParams } from "react-router-dom"; //busca os parametros buscados na rota
import avatarPlaceholder from '../../assets/user.svg'
import { Section } from "../../components/Section"
import { Header } from "../../components/Header";
import { Button } from '../../components/Button'
import { Stars } from "../../components/Stars";
import CustomScroll from "react-custom-scroll";
import { useAuth } from "../../hooks/auth.jsx";
import { Tags } from "../../components/Tags";
import { useState, useEffect } from "react";
import { FiClock } from "react-icons/fi";
import { api } from "../../service/api.js";
import { Container } from "./styles.js";

export function MovieDetails() {
    const [ data, setData ] = useState(null)
    const params = useParams()
    const navigate = useNavigate()
    const { user } = useAuth()

    const avatar = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    async function handleRemove(){
        const confirm = window.confirm("Deseja realmente remover a nota deste filme?")

        if(confirm){
            await api.delete(`notes/${params.id}`)
            navigate(-1)
        }
    }
    
    useEffect(() => {
        async function searchNote(){
            const response = await api.get(`/notes/${params.id}`)
            setData(response.data)
        }

        searchNote()
    })

    return(
        <Container>
            <Header></Header>
            

            <ButtonBack></ButtonBack>
        { // ENVOLVO POR CHAVES PARA MOSTRAR O MAIN SOMENTE SE EXISTIR CONTEUDO
            data &&  // SE TEM CONTEUDO MOSTRA OS DADOS SE NÃO NADA
            <main>

            <header>
             <div>
                <h1>{data.movie_title}</h1>
                <Stars 
                rating = { data.rating }
                isbigsize={true}></Stars>
            </div>

            <div className="subtitle">
            <div className="author">  
                <img src= {avatar} alt={user.name} />
                <p>
                   {user.name} 
                </p>
            </div>

            <div className="actualdate"> 
                <FiClock></FiClock>
                <p>{data.created_at}</p>
            </div>
            </div>

            </header>

            {
            data.tags &&
            <Section
            title= "">

            <CustomScroll> 
                <p>
                {data.movie_description}
                </p>
            </CustomScroll>

        
                {
                    data.tags.map(tag => (
                        <Tags 
                        key={String(tag.id)}
                        title={tag.tag_name}></Tags>
                    ))

                }
            </Section>
        }
        
        <Button
        title="Excluir nota"
        onClick= { handleRemove }>
        </Button>
        
            </main>
            
    }
        
        </Container>
    )
}