import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    justify-content: space-between;
    align-items: center;
    overflow-y: auto;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    > main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 10rem;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 2rem 0;
        }
        
        h1 {
            font-size: 2.5rem;
            margin-top: 1rem;
            font-weight: 400;
        }
    }

    ::-webkit-scrollbar {
        width: .5rem;
    }

    ::-webkit-scrollbar-track{
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 10px;
        margin-left: .5rem;
    }  

`

export const NewMovie = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.WHITE};

    height: 56px;

    padding: 0 16px;
    margin-top: 16px;
    
    border: 0;
    border-radius: 10px;

    font-family: 'Roboto';
    font-weight: bold;
    cursor: pointer;

    > svg{
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 1.2rem;
    }
    
`