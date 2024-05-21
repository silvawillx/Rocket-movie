import styled from "styled-components"

export const Container = styled.span`
    font-size: 0.8rem;
    border-radius: 5px;
    
    padding: 0.3rem 1rem;
    margin-right: 0.3rem;
    
    background-color: ${({theme }) => theme.COLORS.PINK};
    color: ${({theme }) => theme.COLORS.WHITE};

    cursor: pointer;
    font-family: "Madimi One", sans-serif;
    letter-spacing: 1px;
    
    font-weight: 400;
    
    :hover {
        background-color: ${({theme }) => theme.COLORS.GRAY_300};
    }
`