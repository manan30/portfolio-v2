import styled from 'styled-components';

const Header = styled.header`
  height: 1.5 rem;
  width: 100%;

  background-color: #ffffff;

  box-shadow: ${(props) => (props.shadow ? '0 0 0.5rem black' : 'none')};
  transition: all 0.3s ease-in-out;
`;

export { Header };
