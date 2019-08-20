import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const Vimeo = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M18.91,5.84c-1.006,5.773-6.625,10.66-8.315,11.777c-1.69,1.115-3.233-0.447-3.792-1.631C6.162,14.639,4.244,7.33,3.741,6.725C3.238,6.119,1.731,7.33,1.731,7.33L1,6.354c0,0,3.061-3.725,5.391-4.191C8.861,1.67,8.857,6.027,9.451,8.445c0.574,2.342,0.961,3.68,1.463,3.68c0.502,0,1.462-1.305,2.512-3.305c1.053-2.004-0.045-3.772-2.101-2.514C12.148,1.279,19.916,0.07,18.91,5.84z" />
  </Svg>
);

export default Vimeo;
