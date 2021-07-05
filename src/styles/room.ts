import styled from "styled-components";

export const Header = styled.header`
  padding: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};

  .content {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;

    img {
      max-height: 45px;
    }

    > div {
      display: flex;
      gap: 1rem;

      button {
        height: 2.5rem;
      }
    }

    @media(max-width: 500px) {
      button.outlined {
        padding: 0 1rem;
      }
    }
  }
  
  .themeSwitcher {
    background: transparent;
    color: ${props => props.theme.colors.text};
    border: 0;
    cursor: pointer;
  }
`;

export const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;

  .room-title {
    margin: 2rem 0 1.5rem;
    display: flex;
    align-items: center;

    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 1.5rem;
      color: ${props => props.theme.colors.text};
    }

    span {
      margin-left: 1rem;
      background: ${props => props.theme.colors.secondary};
      border-radius: 9999px;
      padding: 0.5rem 1rem;
      color: #fff;
      font-weight: 500;
      font-size: 0.875rem;

    }
    
    @media(max-width: 350px) {
      flex-direction: column;
    }
  }
`;

export const Form = styled.form`
  textarea {
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 0.5rem;
    background: ${props => props.theme.colors.inputBackground};
    color: ${props => props.theme.colors.text};
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
    resize: vertical;
    min-height: 130px;
  }

  .form-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;

    .user-info {
      display: flex;
      align-items: center;

      img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      }

      span {
        margin-left: 0.5rem;
        color: ${props => props.theme.colors.text};
        font-weight: 500;
        font-size: 0.875rem;
      }
    }

    > span {
      font-size: 0.875rem;
      color: #737380;
      font-weight: 500;

      button {
        background: transparent;
        border: 0;
        color: #835afd;
        text-decoration: underline;
        font-size: 0.875rem;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
`;

export const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 0.5rem;
`;