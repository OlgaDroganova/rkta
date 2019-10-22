import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from './constants';

const PinterestWithCircle = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,0.4c-5.302,0-9.6,4.298-9.6,9.6s4.298,9.6,9.6,9.6s9.6-4.298,9.6-9.6S15.302,0.4,10,0.4z M10.657,12.275c-0.616-0.047-0.874-0.352-1.356-0.644c-0.265,1.391-0.589,2.725-1.549,3.422c-0.297-2.104,0.434-3.682,0.774-5.359C7.947,8.719,8.595,6.758,9.817,7.24c1.503,0.596-1.302,3.625,0.581,4.004c1.966,0.394,2.769-3.412,1.55-4.648c-1.762-1.787-5.127-0.041-4.713,2.517c0.1,0.625,0.747,0.815,0.258,1.678c-1.127-0.25-1.464-1.139-1.42-2.324c0.069-1.94,1.743-3.299,3.421-3.486c2.123-0.236,4.115,0.779,4.391,2.777C14.194,10.012,12.926,12.451,10.657,12.275z" />
  </Svg>
);

export default PinterestWithCircle;
