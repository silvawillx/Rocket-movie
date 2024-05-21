import { ButtonBack } from "../../components/ButtonBack";
import { MovieItem } from "../../components/MovieItem";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button"
import { Input } from "../../components/Input";
import { Stars } from "../../components/Stars";
import { useNavigate } from "react-router-dom";
import { Tags } from "../../components/Tags";
import { api } from "../../service/api.js";
import { Container} from "./styles.js";
import { useState } from "react";

export function CreateMovie() {
    const navigate = useNavigate()

    const [ movie_title, setTitle ] = useState("")
    const [ movie_description, setDescription ] = useState("")

    const [ tags, setTags] = useState([])
    const [ newTag, setNewTag] = useState("")
    const [ rating, setRating] = useState("")
    
    async function handleNewMovieNote(){
        if(!movie_title){
            return alert("Você deixou o título vazio!")
        }

        if(!movie_description){
            return alert("Você deixou a descrição do filme vazia!")
        }

        if(!rating){
            return alert("Você precisa dar uma nota de 0 à 5")
        }

        const isRatingValid = rating >= 0 && rating <= 5

        if(!isRatingValid){
            return alert("A nota deve ser entre 0 e 5")
        }

        if(newTag){
            return alert("Você deixou um campo de marcador vazio!")
        }

        if (tags.length <= 0) {
            return alert("Adicione pelo menos um marcador");
          }
        //console.log(tags)

        await api.post("/notes", {
            movie_title,
            movie_description,
            rating,
            tags
        }),

        alert("Nota criada com sucesso", 200)
        navigate(-1)
    }

    function handleAddTags(){
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }


    return(
        <Container>
            <Header></Header>

            <ButtonBack></ButtonBack>
        <main>
            <form>

            <h1>Novo Filme</h1>   

            <div className="movie-info">

                <Input 
                type="text" 
                title="movie_title"
                placeholder="Título"
                onChange={(e) => setTitle(e.target.value)} />

                <Input 
                type="number" 
                title="movie_note" 
                placeholder="Sua nota (de 0 à 5)"
                minLength= {0}
                maxLength= {5}

                value= { rating }
                onChange={(e) => setRating(e.target.value)}>
                </Input>

                <Stars
                rating = { rating }
                isbigsize
                onChange = {(e) => setRating(e.taget.value)} 
                >
                </Stars>
            
            </div>

                <TextArea 
                title="movie_description"
                placeholder="Conta aqui o que achou do filme!"
                onChange={(e) => setDescription(e.target.value)}>
                </TextArea>

            <Section title="Marcadores">
                <div className="tags">

        {
            tags.map((tag, index) => (
             <MovieItem
                key={String(index)}
                value={ tag }
                onClick={() => handleRemoveTag(tag)}
            ></MovieItem>
            ))
        }

            <MovieItem
            isnew
            placeholder="Adicione uma tag"
            value={ newTag }
            onChange={(e) => setNewTag(e.target.value)}
            onClick={ handleAddTags }
            >
            </MovieItem>
                </div>

            </Section>
                

        <footer>
            <Button 
            title='Salvar'
            onClick={ handleNewMovieNote }>
            </Button>
        </footer>

            </form>
        </main>
        </Container>
    )
}