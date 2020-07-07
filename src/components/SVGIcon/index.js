import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import AWSIcon from '../../images/svg/amazonaws.svg';
import AndroidIcon from '../../images/svg/android.svg';
import CSS3Icon from '../../images/svg/css3.svg';
import DockerIcon from '../../images/svg/docker.svg';
import DroneIcon from '../../images/svg/drone.svg';
import FirebaseIcon from '../../images/svg/firebase.svg';
import GitIcon from '../../images/svg/git.svg';
import GraphQLIcon from '../../images/svg/graphql.svg';
import HTML5Icon from '../../images/svg/html5.svg';
import JavaIcon from '../../images/svg/java.svg';
import JavaScriptIcon from '../../images/svg/javascript.svg';
import JiraIcon from '../../images/svg/jirasoftware.svg';
import KubernetesIcon from '../../images/svg/kubernetes.svg';
import MongoDBIcon from '../../images/svg/mongodb.svg';
import NodeIcon from '../../images/svg/node-dot-js.svg';
import PostgreSQLIcon from '../../images/svg/postgresql.svg';
import Icon from '../../images/svg/react-js.svg';
import ReactRouterIcon from '../../images/svg/reactrouter.svg';
import ReduxIcon from '../../images/svg/redux.svg';
import SalesforceIcon from '../../images/svg/salesforce.svg';
import StyledComponentsIcon from '../../images/svg/styled-components.svg';
import SvelteIcon from '../../images/svg/svelte.svg';
import TrelloIcon from '../../images/svg/trello.svg';
import TypeScriptIcon from '../../images/svg/typescript.svg';

const SVGIconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  height: 2rem;

  svg {
    height: 1.3rem;
    width: 1.3rem;
  }
`;

function SVGIcon({ type }) {
  switch (type) {
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
    default:
      return <div />;
  }
}

SVGIcon.propTypes = {
  type: PropTypes.string
};

SVGIcon.defaultProps = {
  type: ''
};

export default SVGIcon;

export { SVGIconsContainer };
