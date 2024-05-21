import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    >header {
        width: 100%;
        height: 7rem;
        background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

        display: flex;
        align-items: center;

        padding: 0 124px;

        svg{
            color: ${({ theme }) => theme.COLORS.PINK};
            font-size: 24px;
            cursor: pointer;
        }

        svg:hover{
            color: ${({ theme }) => theme.COLORS.PINK};
            transition: 1s;
        }
    }
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    max-width: 340px;
    margin: 30px auto 0;

    >div:nth-child(4){
        margin-top: 24px ;
    }
`

export const Avatar = styled.div`
    position: relative;
    margin: -100px auto 32px;

    width: 186px;
    height: 186px;
    
    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label {
        width: 48px;
        height: 48px;

        border-radius: 50%;
        background-color: ${({ theme }) => theme.COLORS.PINK};

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;
    }

    input {
        display: none;
    }

    svg {
        width: 20px;
        height: 20px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`