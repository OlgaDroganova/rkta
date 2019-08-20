import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const Switch = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M13,3H7c-3.866,0-7,3.134-7,7c0,3.866,3.134,7,7,7h6c3.866,0,7-3.134,7-7C20,6.134,16.866,3,13,3z M13,15c-2.761,0-5-2.239-5-5s2.239-5,5-5s5,2.239,5,5S15.761,15,13,15z" />
  </Svg>
);

export default Switch;
