import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from './constants';

const Scissors = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M8.38,5.59c0-2.038-1.652-3.69-3.69-3.69S1,3.552,1,5.59c0,2.038,1.652,3.69,3.69,3.69c0.96,0,1.826-0.376,2.483-0.976L9,9.991L9.012,10l-0.004,0.003l-1.836,1.693C6.516,11.096,5.65,10.72,4.69,10.72C2.652,10.72,1,12.372,1,14.41c0,2.038,1.652,3.69,3.69,3.69s3.69-1.652,3.69-3.69c0-0.297-0.044-0.582-0.111-0.858l2.844-1.991l4.127,3.065c2.212,1.549,3.76-0.663,3.76-0.663L8.269,6.448C8.335,6.172,8.38,5.887,8.38,5.59z M4.69,7.39c-0.994,0-1.8-0.806-1.8-1.8s0.806-1.8,1.8-1.8s1.8,0.806,1.8,1.8S5.684,7.39,4.69,7.39z M4.69,16.21c-0.994,0-1.8-0.806-1.8-1.8s0.806-1.8,1.8-1.8s1.8,0.806,1.8,1.8S5.684,16.21,4.69,16.21z M19,6.038c0,0-1.548-2.212-3.76-0.663L12.035,7.61l2.354,1.648L19,6.038z" />
  </Svg>
);

export default Scissors;
