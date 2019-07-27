import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { Props as SvgProps } from '@rkta/ui/Svg/Svg';
import { defaultIconSize } from './constants';

const WindowsStore = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M9.5,3.2410278V9.5H18V2L9.5,3.2410278z M2,9.5h6.5V3.3870239L2,4.3359985V9.5z M9.5,16.7589722L18,18v-7.5H9.5V16.7589722z M2,15.6640015l6.5,0.9489746V10.5H2V15.6640015z" />
  </Svg>
);

export default WindowsStore;