import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled.header`
    grid-area: header;
    height: 7rem;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 0 10rem;


    > h1 {
        width: 100%;
        color:  ${({ theme }) => theme.COLORS.PINK};
        cursor: pointer;
        letter-spacing: 1.6px;
    }
    

`

export const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 300%;
    padding: 1rem;
    background-color:  ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE};
`


export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    > img {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 1rem;
        line-height: 1.5rem;
    
        span {
            font-size: 0.875rem;
            color: ${({ theme }) => theme.COLORS.PINK};
        }

        strong {
            font-size: 1.5em;
            font-weight: normal;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`

export const Logout = styled.button`
    border: none;
    background: none;

    >svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 2.25rem;
    }   

    >svg:hover {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        transition: 1s;
    }

`