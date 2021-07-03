import styled from "styled-components";

export const Header = styled.header`
  padding: 24px;
  border-bottom: 1px solid ${props => props.theme.colors.border};

  .content {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      max-height: 45px;
    }

    > div {
      display: flex;
      gap: 16px;

      button {
        height: 40px;
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

  .room-title {
    margin: 32px 0 24px;
    display: flex;
    align-items: center;

    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 24px;
      color: ${props => props.theme.colors.text};
    }

    span {
      margin-left: 16px;
      background: ${props => props.theme.colors.secondary};
      border-radius: 9999px;
      padding: 8px 16px;
      color: #fff;
      font-weight: 500;
      font-size: 14px;
    }
  }
`;

export const Form = styled.form`
  textarea {
    width: 100%;
    border: 0;
    padding: 16px;
    border-radius: 8px;
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
    margin-top: 16px;

    .user-info {
      display: flex;
      align-items: center;

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      span {
        margin-left: 8px;
        color: ${props => props.theme.colors.text};
        font-weight: 500;
        font-size: 14px;
      }
    }

    > span {
      font-size: 14px;
      color: #737380;
      font-weight: 500;

      button {
        background: transparent;
        border: 0;
        color: #835afd;
        text-decoration: underline;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
`;

export const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  gap: 8px;
`;