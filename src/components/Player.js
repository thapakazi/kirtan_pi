import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

const propTypes = {};

const defaultProps = {
  url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
};

class Player extends React.Component {
  render() {
    let {url}=this.props;    
    return (
      <ReactPlayer url={url} />
    );
  }
};

Player.propTypes = propTypes;
Player.defaultProps = defaultProps;

export default Player;
