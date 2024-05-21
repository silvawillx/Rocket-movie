import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 1.6rem;

  padding: 3.2rem;
  margin-bottom: 2.4rem;
  margin-right: 0.8rem;

     ::-webkit-scrollbar {
        width: .5rem;
    }

    ::-webkit-scrollbar-track{
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 10px;
        margin-left: .5rem;
    }  

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.8rem;
    
    }

  > div > h1 {
    flex: 1;
    text-align: left;
    align-items: center;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    font-family: 'Roboto';
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin: 1.5rem 0;
    max-height: 5.3rem;
    padding-right: .8rem;

    line-height: 1.5rem;

    overflow-y: scroll;
    text-overflow: ellipsis;

  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 1.5rem;
  }
`;