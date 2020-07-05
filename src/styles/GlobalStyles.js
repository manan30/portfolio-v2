import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html,
  body {
    width: 100vw;
    margin: 0%;
    padding: 0%;

    background-color: ${(props) =>
      props.theme === 'dark' ? '#313e50' : '#fafffd'};
    color: ${(props) => (props.theme === 'dark' ? '#f8f7ff' : '#2e4057')};

    font-family: 'Montserrat', 'Nunito', sans-serif;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';

    will-change: background-color;
    transition: background-color 0.4s ease-in-out;

    overflow: hidden;
    overflow-y: auto;

    -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:visited {
    text-decoration: none;
    color: inherit;
  }

  main {
    width: calc(100% - 10rem);
    padding: 0 5rem;
    margin-top: 4rem;
  }

  @media screen and (max-width: 767px) {
    main {
      width: calc(100% - 6rem);
      padding: 3rem;
      margin: 0;
    }
  }
  `;
