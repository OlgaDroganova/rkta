import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const Lastfm = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M8.574,14.576C8.097,14.924,7.119,15.6,5.193,15.6C2.532,15.6,0,13.707,0,10.195C0,6.547,2.637,4.4,5.354,4.4c3.047,0,4.183,1.108,5.144,4.109l0.756,2.309c0.551,1.688,1.713,2.91,4.026,2.91c1.558,0,2.382-0.346,2.382-1.199c0-0.67-0.389-1.156-1.557-1.434l-1.559-0.369c-1.9-0.461-2.656-1.455-2.656-3.025c0-2.516,2.016-3.301,4.077-3.301c2.337,0,3.757,0.854,3.94,2.932l-2.291,0.277c-0.092-0.992-0.688-1.408-1.787-1.408c-1.008,0-1.627,0.461-1.627,1.246c0,0.693,0.299,1.109,1.307,1.34l1.466,0.324C18.945,9.572,20,10.543,20,12.414c0,2.309-1.924,3.186-4.766,3.186c-3.963,0-5.338-1.801-6.07-4.041L8.43,9.25c-0.549-1.687-0.99-2.902-3.006-2.902c-1.398,0-3.219,0.916-3.219,3.756c0,2.217,1.523,3.604,3.104,3.604c1.34,0,2.146-0.754,2.564-1.131L8.574,14.576z" />
  </Svg>
);

export default Lastfm;
