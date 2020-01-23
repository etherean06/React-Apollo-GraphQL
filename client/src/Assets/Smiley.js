import React from 'react';

const Smiley = (props) => {
    return <span aria-label={props.desc} role="img">{props.smiley}</span>
  }

  export default Smiley
  