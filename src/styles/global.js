import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color:  ${({ theme }) => theme.COLORS.BACKGROUND_1};;
        color:  ${({ theme }) => theme.COLORS.WHITE};
        
        -webkit-font-smoothing: antialiased;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        outline: none;
    }

    input, button, textarea {
        font-family:  'Roboto', sans-serif;
        font-size: 16px;
        outline: none;
    }

    h1 {
        font-family: 'Roboto', 'sans-serif';
    }

    h2, h3 {
        font-family: "Madimi One", sans-serif;
    }

    a, p {
        text-decoration: none;
        font-family: "Madimi One", sans-serif;
    }

    button, a {
        cursor: pointer;
        transition:  filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9)
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