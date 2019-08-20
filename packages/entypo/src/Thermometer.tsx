import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const Thermometer = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M13,10.123V1c0-0.553-0.447-1-1-1H7.799C7.247,0,7,0.447,7,1v9.123c-1.444,0.969-2.4,2.608-2.4,4.477c0,2.982,2.418,5.4,5.4,5.4c2.982,0,5.4-2.418,5.4-5.4C15.4,12.731,14.444,11.092,13,10.123z M10,17.9c-1.823,0-3.3-1.477-3.3-3.3c0-1.472,0.97-2.703,2.3-3.129V4h2v7.471c1.33,0.426,2.3,1.657,2.3,3.129C13.3,16.422,11.823,17.9,10,17.9z" />
  </Svg>
);

export default Thermometer;
