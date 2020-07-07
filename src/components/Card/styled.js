import styled from 'styled-components';

const CardContainer = styled.div`
  flex: ${(props) => props.flex && props.flex};

  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
  min-width: ${(props) => props.minWidth && props.minWidth};
  margin: ${(props) => props.margin && props.margin};
  padding: 1rem;

  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.theme === 'dark' ? '#121212' : '#fafffd'};
  box-shadow: 0 0 0.6rem
    ${(props) => (props.theme === 'dark' ? '#0d1321' : '#dce1de')};

  ${(props) => props.animation && props.animation};
  transition: all 0.5s ease-in-out;
`;

export { CardContainer };
