import React from 'react';
import PropTypes from 'prop-types';
import JavaScriptIcon from '../../images/svg/javascript.svg';
import HTML5Icon from '../../images/svg/html5.svg';
import CSS3Icon from '../../images/svg/css3.svg';
import DockerIcon from '../../images/svg/docker.svg';
import FirebaseIcon from '../../images/svg/firebase.svg';
import GitIcon from '../../images/svg/git.svg';
import GraphQLIcon from '../../images/svg/graphql.svg';
import KubernetesIcon from '../../images/svg/kubernetes.svg';
import Icon from '../../images/svg/react-js.svg';
import ReactRouterIcon from '../../images/svg/reactrouter.svg';
import StyledComponentsIcon from '../../images/svg/styled-components.svg';
import SvelteIcon from '../../images/svg/svelte.svg';

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
