import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { Props as SvgProps } from '@rkta/ui/Svg/Svg';
import { defaultIconSize } from './constants';

const GoogleplusWithCircle = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,0.4c-5.302,0-9.6,4.298-9.6,9.6s4.298,9.6,9.6,9.6s9.6-4.298,9.6-9.6S15.302,0.4,10,0.4z M9.447,14.121c-0.603,0.293-1.252,0.324-1.503,0.324c-0.048,0-0.075,0-0.075,0s-0.023,0-0.054,0c-0.392,0-2.343-0.09-2.343-1.867c0-1.746,2.125-1.883,2.776-1.883h0.017c-0.376-0.502-0.298-1.008-0.298-1.008C7.934,9.689,7.886,9.691,7.827,9.691c-0.245,0-0.718-0.039-1.124-0.301c-0.498-0.32-0.75-0.865-0.75-1.619c0-2.131,2.327-2.217,2.35-2.219h2.324v0.051c0,0.26-0.467,0.311-0.785,0.354C9.734,5.973,9.517,5.994,9.456,6.025c0.589,0.315,0.684,0.809,0.684,1.545c0,0.838-0.328,1.281-0.676,1.592C9.248,9.355,9.079,9.506,9.079,9.709c0,0.199,0.232,0.402,0.502,0.639c0.441,0.389,1.046,0.918,1.046,1.811C10.627,13.082,10.23,13.742,9.447,14.121z M14.5,10H13v1.5h-1V10h-1.5V9H12V7.5h1V9h1.5V10z M8.223,11.15c-0.052,0-0.104,0.002-0.157,0.006c-0.444,0.033-0.854,0.199-1.15,0.469c-0.294,0.266-0.444,0.602-0.423,0.941c0.045,0.711,0.808,1.127,1.735,1.061c0.912-0.066,1.52-0.592,1.476-1.303C9.662,11.656,9.081,11.15,8.223,11.15z M9.097,7.285c-0.242-0.85-0.632-1.102-1.238-1.102c-0.065,0-0.131,0.01-0.194,0.027C7.402,6.285,7.193,6.504,7.077,6.83C6.958,7.16,6.951,7.504,7.053,7.896c0.185,0.701,0.683,1.209,1.185,1.209c0.066,0,0.132-0.008,0.194-0.027C8.981,8.924,9.325,8.086,9.097,7.285z" />
  </Svg>
);

export default GoogleplusWithCircle;
