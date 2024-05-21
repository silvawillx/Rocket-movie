import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    > main {
        display: flex;
        flex-direction: column;
        margin: 0 10rem;
       // overflow-y: scroll;
       // overflow-x: hidden;
        
        header {
            display: flex;
            flex-direction: column;
            margin-bottom: -2rem;
        }

        div:nth-child(1) { 
            display: flex;
            gap: 2rem;
            margin-bottom: 1rem;
            align-items: center;
        }

        h1 {
            font-size: 2.5rem;
            font-weight: 400;
        }

        .subtitle {
            display: flex;
            align-items: center;
            justify-items: center;
            gap: 2rem;
        }

        .author,
        .actualdate {
            display: flex;
            align-items: center;
            margin: 1rem 0;
            gap: .6rem;
            
            svg {
                color: ${({ theme }) => theme.COLORS.PINK};
            }

            p {
                text-overflow: ellipsis;
            }
        }

        .author img{
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            margin-right: -1.2rem;
        }

        p:last-child{
            width: 100%;
            font-family: 'Roboto';
            text-align: justify;
        }

        .rcs-inner-handle{
            color: ${({ theme }) => theme.COLORS.PINK}; 
        }

        .rcs-custom-scroll .rcs-inner-container {
            overflow-x: hidden;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
            padding-right: 1rem;
        }

}


`
