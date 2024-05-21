import bg from '../../assets/bg.jpg'
import styled from "styled-components"


export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
    padding: 0 136px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    >h1 {
        font-size: 48px;
        letter-spacing: 3px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    >h2 {
        font-weight: normal;
        font-size: 24px; 
        margin: 48px 0;
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > a {
        margin-top: 48px;
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 24px;
    }

`

export const Background = styled.div`
    flex: 1;
    background: url( ${bg} ) no-repeat center center;
    background-size: cover;

    opacity: 0.8;
`