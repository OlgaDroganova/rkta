import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const CreativeCommonsSharealike = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M16.8,3.2C15,1.3,12.7,0.4,10,0.4c-2.7,0-4.9,0.9-6.8,2.8C1.3,5.1,0.4,7.4,0.4,10s0.9,4.9,2.8,6.8c1.9,1.9,4.1,2.8,6.8,2.8c2.6,0,4.9-1,6.9-2.9c1.8-1.8,2.7-4.1,2.7-6.7S18.7,5,16.8,3.2z M15.6,15.5c-1.6,1.6-3.5,2.4-5.6,2.4c-2.1,0-4-0.8-5.6-2.3C2.9,14,2.1,12.1,2.1,10s0.8-4,2.4-5.6C6,2.9,7.8,2.1,10,2.1s4,0.8,5.6,2.3c1.5,1.5,2.3,3.4,2.3,5.6C17.9,12.2,17.1,14,15.6,15.5z M14.9,10.1c0,2.9-2,5.1-5,5.1c-2.1,0-3.9-1.3-4.2-3.8h2.4c0.1,1.3,0.9,1.7,2.1,1.7c1.4,0,2.3-1.3,2.3-3.2c0-2-0.8-3.1-2.2-3.1c-1.1,0-2,0.4-2.2,1.7l0.7,0l-1.9,1.9L5,8.6l0.8,0c0.4-2.4,2.1-3.7,4.2-3.7C13,4.9,14.9,7.2,14.9,10.1z" />
  </Svg>
);

export default CreativeCommonsSharealike;
