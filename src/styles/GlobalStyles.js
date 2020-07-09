import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html,
  body {
    width: 100vw;
    margin: 0%;
    padding: 0%;

    background-color: ${(props) =>
      props.mounted
        ? props.theme === 'dark'
          ? '#25282f'
          : '#fafffd'
        : 'var(--color-background)'};


    color: ${(props) =>
      props.mounted
        ? props.theme === 'dark'
          ? '#f8f7ff'
          : '#2e4057'
        : 'var(--color-primary)'};

    color: var(--color-primary);
    font-family: 'Montserrat', 'Nunito', sans-serif;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';

    will-change: background-color;
    transition: ${(props) =>
      props.mounted && 'background-color 0.4s ease-in-out'};

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

  @media screen and (max-width: 815px) {
    main {
      width: calc(100% - 3rem);
      padding: 1.5rem;
      margin: 0;
    }
  }
  `;
