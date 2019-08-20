import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const Foursquare = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M4.92,1C4.412,1,4,1.412,4,1.92v16.516c0,0.625,0.765,0.926,1.192,0.47l4.471-4.79C9.731,14.042,9.826,14,9.927,14h3.237c0.486,0,0.905-0.343,1.001-0.82l2.111-10.514C16.449,1.804,15.79,1,14.911,1H4.92z M8.838,12.19L6,15.527V3.343C6,3.154,6.154,3,6.343,3h7.14c0.342,0,0.598,0.313,0.53,0.648l-0.413,2.055C13.566,5.876,13.414,6,13.238,6h-3.71C9.236,6,9,6.236,9,6.528v1.22C9,7.887,9.113,8,9.253,8h3.294c0.306,0,0.536,0.28,0.476,0.581l-0.614,3.058C12.366,11.849,12.181,12,11.967,12H9.25C9.091,12,8.941,12.069,8.838,12.19z" />
  </Svg>
);

export default Foursquare;
