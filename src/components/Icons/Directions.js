import React from "react";

const SvgDirections = ({fill, ...rest}) => (
  <svg viewBox="0 0 24 24" fill="none" {...rest}>
    <path
      d="M13 15l-1.42-1.42L15.17 10H6v10H4V8h11.17l-3.59-3.58L13 3l6 6-6 6z"
      fill={fill}
    />
  </svg>
);

export default SvgDirections;
