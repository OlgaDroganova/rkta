import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const CreativeCommonsShare = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M16.8,3.2C15,1.3,12.7,0.4,10,0.4c-2.7,0-4.9,0.9-6.8,2.8C1.3,5.1,0.4,7.4,0.4,10c0,2.6,0.9,4.9,2.8,6.8c1.9,1.9,4.1,2.8,6.8,2.8c2.6,0,4.9-1,6.9-2.9c1.8-1.8,2.7-4.1,2.7-6.7C19.6,7.3,18.7,5,16.8,3.2z M15.6,15.5c-1.6,1.6-3.5,2.4-5.6,2.4c-2.1,0-4-0.8-5.6-2.3C2.9,14,2.1,12.1,2.1,10c0-2.1,0.8-4,2.4-5.6C6,2.9,7.8,2.1,10,2.1c2.2,0,4,0.8,5.6,2.3c1.5,1.5,2.3,3.4,2.3,5.6C17.9,12.2,17.1,14,15.6,15.5z M13.9,7.2h-2.1V5.2c0-0.3-0.2-0.5-0.5-0.5H6.1c0,0,0,0,0,0c-0.3,0-0.5,0.3-0.5,0.5v7.1c0,0.3,0.2,0.5,0.5,0.5h2.1v2.1c0,0.3,0.2,0.5,0.5,0.5h5.2c0.3,0,0.5-0.2,0.5-0.5V7.8C14.5,7.5,14.2,7.2,13.9,7.2z M8.6,7.2c-0.3,0-0.5,0.3-0.5,0.5v3.9H6.6v-6h4.2v1.6H8.6C8.7,7.2,8.7,7.2,8.6,7.2z M13.4,14.3H9.2v-6h4.2V14.3z" />
  </Svg>
);

export default CreativeCommonsShare;
