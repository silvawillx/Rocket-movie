import { Container } from './styles.js'
import { Stars } from '../Stars'
import { Tags } from '../Tags'

export function Movie({ data, ...rest}){
    // console.log(data)
    return(
        <Container {...rest}>
            <div>

            <h1>{data.movie_title}</h1>
            
            <Stars
            rating= { data.rating }
            isbigsize={true}
            ></Stars>
            </div>

            <p> {data.movie_description} </p>


            {
                data.tags && (
                <footer>
                
                {
                    data.tags.map((tag)=> (
                    <Tags
                    key= { tag.id }
                    title= { tag.tag_name }/>
                ))
                }
                
                </footer>   
                )
                
            }
            
        </Container>
    )
}