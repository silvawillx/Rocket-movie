import styled from "styled-components";



export const Container = styled.div`
  display: flex;
  gap: ${({ isbigSize }) => (isbigSize ? "1rem" : "0.6rem")};
  cursor: pointer;

  svg {
    font-size: ${({ isbigSize }) => (isbigSize ? "2rem" : "1.8rem")};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;