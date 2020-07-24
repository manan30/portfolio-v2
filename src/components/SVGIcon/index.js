import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import AWSIcon from '../../../data/svg/amazonaws.svg';
import AndroidIcon from '../../../data/svg/android.svg';
import CSS3Icon from '../../../data/svg/css3.svg';
import DockerIcon from '../../../data/svg/docker.svg';
import DroneIcon from '../../../data/svg/drone.svg';
import FirebaseIcon from '../../../data/svg/firebase.svg';
import GitIcon from '../../../data/svg/git.svg';
import GraphQLIcon from '../../../data/svg/graphql.svg';
import HTML5Icon from '../../../data/svg/html5.svg';
import JavaIcon from '../../../data/svg/java.svg';
import JavaScriptIcon from '../../../data/svg/javascript.svg';
import JiraIcon from '../../../data/svg/jirasoftware.svg';
import KubernetesIcon from '../../../data/svg/kubernetes.svg';
import MongoDBIcon from '../../../data/svg/mongodb.svg';
import NodeIcon from '../../../data/svg/node-dot-js.svg';
import PostgreSQLIcon from '../../../data/svg/postgresql.svg';
import Icon from '../../../data/svg/react-js.svg';
import ReactRouterIcon from '../../../data/svg/reactrouter.svg';
import ReduxIcon from '../../../data/svg/redux.svg';
import SalesforceIcon from '../../../data/svg/salesforce.svg';
import StyledComponentsIcon from '../../../data/svg/styled-components.svg';
import SvelteIcon from '../../../data/svg/svelte.svg';
import TrelloIcon from '../../../data/svg/trello.svg';
import TypeScriptIcon from '../../../data/svg/typescript.svg';
import MenuIcon from '../../../data/svg/menu.svg';
import CloseIcon from '../../../data/svg/close.svg';
import DevIcon from '../../../data/svg/dev-dot-to.svg';
import InstagramIcon from '../../../data/svg/instagram.svg';
import GithubIcon from '../../../data/svg/github.svg';
import LinkedInIcon from '../../../data/svg/linkedin.svg';
import EmailIcon from '../../../data/svg/mail-dot-ru.svg';
import MediumIcon from '../../../data/svg/medium.svg';
import TwitterIcon from '../../../data/svg/twitter.svg';
import GatsbyIcon from '../../../data/svg/gatsby.svg';
import R3FIcon from '../../../data/svg/react-three-fiber.svg';
import WebGLIcon from '../../../data/svg/webgl.svg';
import ThreeJSIcon from '../../../data/svg/threejs.svg';
import ExpressJSIcon from '../../../data/svg/expressjs.svg';
import StackOverflowIcon from '../../../data/svg/stackoverflow.svg';

const SVGIconsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 0.5rem;
  height: auto;

  svg {
    height: 1.3rem;
    width: 1.3rem;
  }
`;

function SVGIcon({ name, fill }) {
  switch (name) {
    case 'JavaScript':
      return <JavaScriptIcon fill="#f7df1e" />;
    case 'HTML5':
      return <HTML5Icon fill="#e34f24" />;
    case 'CSS3':
      return <CSS3Icon fill="#3171b5" />;
    case 'Docker':
      return <DockerIcon fill="#4396ed" />;
    case 'Firebase':
      return <FirebaseIcon fill="#f6ca29" />;
    case 'Git':
      return <GitIcon fill="#eb5034" />;
    case 'GraphQL':
      return <GraphQLIcon fill="#e10198" />;
    case 'Kubernetes':
      return <KubernetesIcon fill="#316ce5" />;
    case 'React':
      return <Icon fill="#66dafa" />;
    case 'React-Router':
      return <ReactRouterIcon fill="#c94245" />;
    case 'Styled-Components':
      return <StyledComponentsIcon fill="#db7093" />;
    case 'Svelte':
      return <SvelteIcon fill="#ea3e04" />;
    case 'AWS':
      return <AWSIcon fill="##232e40" />;
    case 'Drone':
      return <DroneIcon fill="#212121" />;
    case 'Jira':
      return <JiraIcon fill="#2152cc" />;
    case 'Trello':
      return <TrelloIcon fill="#3579c0" />;
    case 'Redux':
      return <ReduxIcon fill="#764bbc" />;
    case 'Node':
      return <NodeIcon fill="#459931" />;
    case 'MongoDB':
      return <MongoDBIcon fill="#4aa149" />;
    case 'PostgreSQL':
      return <PostgreSQLIcon fill="#336790" />;
    case 'Salesforce':
      return <SalesforceIcon fill="#49a1e0" />;
    case 'TypeScript':
      return <TypeScriptIcon fill="#357bcc" />;
    case 'Android':
      return <AndroidIcon fill="#67dc85" />;
    case 'Java':
      return <JavaIcon fill="#337496" />;
    case 'Menu':
      return <MenuIcon fill={fill} />;
    case 'Close':
      return <CloseIcon fill={fill} />;
    case 'Dev':
      return <DevIcon fill="#0f7173" />;
    case 'Github':
      return <GithubIcon fill="#627c85" />;
    case 'Twitter':
      return <TwitterIcon fill="#48a1f1" />;
    case 'Instagram':
      return <InstagramIcon fill="#e5405f" />;
    case 'LinkedIn':
      return <LinkedInIcon fill="#3477b5" />;
    case 'Email':
      return <EmailIcon fill="#d14836" />;
    case 'Medium':
      return <MediumIcon fill="#85A3D6" />;
    case 'Gatsby':
      return <GatsbyIcon fill="#663399" />;
    case 'R3f':
      return <R3FIcon />;
    case 'WebGL':
      return <WebGLIcon fill="#663399" />;
    case 'Three':
      return <ThreeJSIcon />;
    case 'Express':
      return <ExpressJSIcon />;
    case 'Stack Overflow':
      return <StackOverflowIcon fill="#FE7A16" />;
    default:
      return <div />;
  }
}

SVGIcon.propTypes = {
  name: PropTypes.string,
  fill: PropTypes.string
};

SVGIcon.defaultProps = {
  name: '',
  fill: ''
};

export default SVGIcon;

export { SVGIconsContainer };
