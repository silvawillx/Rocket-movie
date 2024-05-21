import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    
    > main {
        margin: 0 10rem;
        display: flex;
        justify-content: center;
        align-self: center;
        flex-direction: column;

        padding-right: 1rem;
       // overflow-y: scroll;
    
        h1 {
            font-weight: 400;
            margin-bottom: 2.5rem;
        }
    }

    .movie-info{
        width: 100%;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2.5rem;

        margin-bottom: 2rem;
    }

    h2{
        font-weight: 400;
        margin: 2.5rem 0 1rem;
    }
    
    .tags{
        display: flex;
        align-items: center;
        height: fit-content;
        padding: 1rem;

        flex: 1;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        border-radius: .5rem;
    }

    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2.5rem;
    }

    ::-webkit-scrollbar {
        width: .5rem;
        height: .5rem;
    }

    ::-webkit-scrollbar-track{
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 10px;
        margin-left: 2rem;
    }  
`
