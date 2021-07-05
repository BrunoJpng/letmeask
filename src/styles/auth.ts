import styled from 'styled-components';

export const PageAuthContainer = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 7;

    background: ${props => props.theme.colors.primary};
    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 7.5rem 5rem;

    img {
      max-width: 20rem;
    }

    strong {
      font: 700 2.25rem 'Poppins', sans-serif;
      line-height: 2.625rem;
      margin-top: 1rem;
    }

    p {
      font-size: 1.5rem;
      line-height: 2rem;
      margin-top: 1rem;
      color: #f8f8f8;
    }
  }

  main {
    flex: 8;

    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media(max-width: 850px) {
    flex-direction: column;

    aside {
      flex: 1;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 3rem;
      padding: 3rem 2rem;

      img {
        height: 10rem;

        @media(max-width: 640px) {
          display: none;
        }
      }
    }
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 20rem;
  align-items: stretch;
  text-align: center;

  > img {
    align-self: center;
  }

  h2 {
    font-size: 1.5rem;
    margin: 4rem 0 1.5rem;
    font-family: 'Poppins', sans-serif;
  }

  form {
    input {
      height: 3.125rem;
      border-radius: 0.5rem;
      padding: 0 1rem;
      background: ${props => props.theme.colors.inputBackground};
      border: 1px solid ${props => props.theme.colors.inputBorder};
    }

    button {
      margin-top: 1rem;
    }

    button, input {
      width: 100%;
    }
  }

  p {
    font-size: 0.875rem;
    color: #737380;
    margin-top: 1rem;

    a {
      color: ${props => props.theme.colors.secondary};
    }
  }
`;

export const CreateRoomButton = styled.button`
  margin-top: 4rem;
  height: 3.125rem;
  border-radius: 0.5rem;
  font-weight: 500;
  background: ${props => props.theme.colors.red};
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 0.5rem;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Separator = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.inputBorder};

  margin: 2rem 0;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.colors.inputBorder};
    margin-right: 1rem;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.colors.inputBorder};
    margin-left: 1rem;
  }
`;