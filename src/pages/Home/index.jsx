import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, NewMovie } from './styles.js'
import { Header } from '../../components/Header'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Movie } from '../../components/Movie'
import { api } from '../../service/api.js'
import { useEffect } from 'react'
import { useState } from 'react'

export function Home(){
    const [ notes, setNotes ] = useState([]) 
    const [ search, setSearch ] = useState("")

    const navigate = useNavigate()

    function handleDetails(id) {
        navigate(`/moviedetails/${id}`);
      }
 
    useEffect(() => {
        async function searchNotes(){
            const response = await api.get(`/notes?movie_title=${search}`)
            setNotes(response.data)

        }

        searchNotes()

    }, [ search ])


    return(
        <Container>
            
            <Header>
                <Input 
                placeholder="Pesquisar pelo título" 
                icon={ FiSearch }
                onChange= { (e) => setSearch(e.target.value) }
                > 
                </Input>
            </Header>

            <main>
            <header>
                <h1>Meus Filmes</h1>

            <NewMovie to="/newmovie">
                   <FiPlus></FiPlus>
                   Adicionar Filme
            </NewMovie>
            </header>

            {   
                notes.map((note) =>
                    <Movie
                        data={note}
                        key={String(note.id)}
                        description={note.description}
                        onClick={()=> handleDetails(note.id)}/>

                )
            }

            </main>
        </Container>
    )
}
