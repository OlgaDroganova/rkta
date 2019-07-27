import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { Props as SvgProps } from '@rkta/ui/Svg/Svg';
import { defaultIconSize } from './constants';

const Flash = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M6.803,18.998c-0.194-0.127,3.153-7.16,3.038-7.469c-0.116-0.309-3.665-1.436-3.838-1.979c-0.174-0.543,7.007-8.707,7.196-8.549c0.188,0.158-3.129,7.238-3.039,7.469c0.091,0.23,3.728,1.404,3.838,1.979C14.109,11.024,6.996,19.125,6.803,18.998z" />
  </Svg>
);

export default Flash;