import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { Props as SvgProps } from '@rkta/ui/Svg/Svg';
import { defaultIconSize } from './constants';

const ArrowWithCircleRight = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,0.4c-5.303,0-9.601,4.298-9.601,9.6c0,5.303,4.298,9.601,9.601,9.601c5.301,0,9.6-4.298,9.6-9.601C19.6,4.698,15.301,0.4,10,0.4z M9.999,17.6c-4.197,0-7.6-3.402-7.6-7.6s3.402-7.6,7.6-7.6S17.6,5.803,17.6,10S14.196,17.6,9.999,17.6z M10,8H6v4h4v2.5l4.5-4.5L10,5.5V8z" />
  </Svg>
);

export default ArrowWithCircleRight;
