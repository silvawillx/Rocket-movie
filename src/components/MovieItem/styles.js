import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isnew }) =>
    isnew ? theme.COLORS.BACKGROUND_800 : theme.COLORS.BACKGROUND_800};
  
  border: ${({ theme, isnew }) =>
    isnew ? `1px dashed ${theme.COLORS.GRAY_200}` : "none"};

  margin-bottom: 0.8rem;
  margin-right: 2.4rem;
  border-radius: 1rem;
  padding-right: 1.6rem;

  
  > button {
    border: none;
    background: none;
    
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  
  > input {
    height: 3rem;
    width: 100%;
    
    padding: 1rem;
    
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    
    font-family: "Madimi One", sans-serif;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`;