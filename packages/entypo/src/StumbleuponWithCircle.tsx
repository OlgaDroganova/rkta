import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const StumbleuponWithCircle = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,0.4c-5.302,0-9.6,4.298-9.6,9.6s4.298,9.6,9.6,9.6s9.6-4.298,9.6-9.6S15.302,0.4,10,0.4z M10,7.785c-0.293,0-0.531,0.238-0.531,0.529v3.168c0,1.244-1.015,2.256-2.261,2.256s-2.261-1.012-2.261-2.256v-1.326h1.729v1.326c0,0.293,0.238,0.529,0.531,0.529c0.293,0,0.531-0.236,0.531-0.529V8.314C7.74,7.07,8.753,6.059,10,6.059c1.246,0,2.261,1.012,2.261,2.256v0.603l-1.04,0.334l-0.69-0.334V8.314C10.531,8.023,10.294,7.785,10,7.785z M15.053,11.482c0,1.244-1.015,2.256-2.261,2.256c-1.247,0-2.262-1.012-2.262-2.256v-1.354l0.69,0.334l1.04-0.334v1.354c0,0.293,0.238,0.529,0.531,0.529c0.293,0,0.53-0.236,0.53-0.529v-1.326h1.731V11.482z" />
  </Svg>
);

export default StumbleuponWithCircle;
