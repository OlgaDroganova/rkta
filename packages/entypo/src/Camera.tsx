import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { Props as SvgProps } from '@rkta/ui/Svg/Svg';
import { defaultIconSize } from './constants';

const Camera = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,8c-1.657,0-3,1.344-3,3c0,1.656,1.343,3,3,3c1.656,0,3-1.344,3-3C13,9.344,11.656,8,10,8z M18,5h-2.4c-0.33,0-0.686-0.256-0.789-0.57l-0.621-1.861C14.085,2.256,13.731,2,13.4,2H6.6C6.27,2,5.914,2.256,5.811,2.568L5.189,4.43C5.085,4.744,4.73,5,4.4,5H2C0.9,5,0,5.9,0,7v9c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C20,5.9,19.1,5,18,5z M10,16c-2.762,0-5-2.238-5-5c0-2.762,2.238-5,5-5c2.761,0,5,2.238,5,5C15,13.762,12.761,16,10,16z M17.5,8.2c-0.387,0-0.7-0.314-0.7-0.701c0-0.385,0.313-0.7,0.7-0.7s0.7,0.314,0.7,0.7C18.2,7.886,17.887,8.2,17.5,8.2z" />
  </Svg>
);

export default Camera;
