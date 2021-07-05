import styled from 'styled-components';

export const RoomCodeButton = styled.button`
  height: 2.5rem;
  border-radius: 0.5rem;
  overflow: hidden;

  background: ${props => props.theme.colors.inputBackground};
  border: 1px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  cursor: pointer;

  display: flex;

  div {
    background: ${props => props.theme.colors.primary};
    padding: 0 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 1rem 0 0.75rem;
    max-width: 15rem;
    font-size: 0.875rem;
    font-weight: 500;

    @media(max-width: 500px) {
      display: none;
    }
  }
`;