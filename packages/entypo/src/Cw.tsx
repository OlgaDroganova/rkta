import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const Cw = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M19.315,10h-2.372V9.795c-0.108-4.434-3.724-7.996-8.169-7.996C4.259,1.799,0.6,5.471,0.6,10s3.659,8.199,8.174,8.199c1.898,0,3.645-0.65,5.033-1.738l-1.406-1.504c-1.016,0.748-2.27,1.193-3.627,1.193c-3.386,0-6.131-2.754-6.131-6.15s2.745-6.15,6.131-6.15c3.317,0,6.018,2.643,6.125,5.945V10h-2.672l3.494,3.894L19.315,10z" />
  </Svg>
);

export default Cw;
