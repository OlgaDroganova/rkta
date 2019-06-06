import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { Props as SvgProps } from '@rkta/ui/Svg/Svg';
import { defaultIconSize } from './constants';

const Battery = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M15.408,10c0-2.766,1.277-4.32,2.277-4.32c0.363,0,1.315,0,1.315,0C18.332,4.621,17.779,4,15.342,4H5.334C1.6,4,0,7.441,0,10c0,2.559,1.6,6,5.334,6h10.008c2.438,0,2.99-0.621,3.658-1.68c0,0-0.315,0-1.315,0S15.408,12.766,15.408,10z M12.688,11.795c-0.164,0.25-0.676,0.016-0.676,0.016l-2.957-1.338c0,0-0.264,0.67-0.467,1.141c-0.205,0.471-0.361,1.004-1.209,0.408c-0.849-0.598-3.581-3.25-3.581-3.25S3.453,8.488,3.625,8.221c0.163-0.252,0.676-0.016,0.676-0.016l2.956,1.336c0,0,0.265-0.668,0.468-1.139C7.93,7.932,8.086,7.396,8.934,7.994c0.849,0.596,3.58,3.25,3.58,3.25S12.859,11.527,12.688,11.795z M18.874,7.928h-0.749c-0.559,0-1.105,0.754-1.105,1.979c0,1.227,0.547,1.98,1.105,1.98h0.749c0.56,0,1.126-0.754,1.126-1.98C20,8.682,19.434,7.928,18.874,7.928z" />
  </Svg>
);

export default Battery;
