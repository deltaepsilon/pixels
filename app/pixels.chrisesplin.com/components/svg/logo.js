import React from 'react';
import constants from '~/constants';

export default ({ width = 24, height = 24, fill = constants.COLORS.MDC_THEME_SECONDARY }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
      <path fill={fill} d="M15 7.5V2H9v5.5l3 3 3-3z" />
      <path fill="black" d="M7.5 9H2v6h5.5l3-3-3-3z" />
      <path fill={fill} d="M9 16.5V22h6v-5.5l-3-3-3 3z" />
      <path fill="black" d="M16.5 9l-3 3 3 3H22V9h-5.5z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};
