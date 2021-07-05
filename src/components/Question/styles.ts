import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.inputBackground};
  border-radius: 0.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;

  &.highlighted {
    background: ${props => props.theme.colors.highlighted};
    border: 1px solid ${props => props.theme.colors.primary};

    footer .user-info span {
      color: ${props => props.theme.colors.text};
    }
  }

  &.answered {
    background: ${props => props.theme.colors.answered};
  }

  p {
    color: ${props => props.theme.colors.text};
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;

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
        color: #737380;
        font-size: 0.875rem;
      }
    }

    > div {
      display: flex;
      gap: 1rem;
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      transition: filter 0.2s;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: #737380;
        gap: 0.5rem;
        
        &.liked {
          color: ${props => props.theme.colors.primary};

          svg path {
            stroke: ${props => props.theme.colors.primary};
          }
        }
      }

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`;