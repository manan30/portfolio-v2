import styled from 'styled-components';

const MainContainer = styled.div`
  height: calc(100vh - 4rem);
  width: calc(100vw - 10rem);
  margin-top: 4rem;
  padding: 0 5rem;
`;

const PageText = styled.div`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight && props.fontWeight};
`;

export { MainContainer, PageText };
