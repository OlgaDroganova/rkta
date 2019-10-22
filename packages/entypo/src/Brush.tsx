import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from './constants';

const Brush = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M2.763,13.563c-1.515,1.488-0.235,3.016-2.247,5.279c-0.908,1.023,3.738,0.711,6.039-1.551c0.977-0.961,0.701-2.359-0.346-3.389C5.162,12.874,3.739,12.602,2.763,13.563z M19.539,0.659C18.763-0.105,10.16,6.788,7.6,9.305c-1.271,1.25-1.695,1.92-2.084,2.42c-0.17,0.219,0.055,0.285,0.154,0.336c0.504,0.258,0.856,0.496,1.311,0.943c0.456,0.447,0.699,0.793,0.959,1.289c0.053,0.098,0.121,0.318,0.342,0.152c0.51-0.383,1.191-0.801,2.462-2.049C13.305,9.88,20.317,1.422,19.539,0.659z" />
  </Svg>
);

export default Brush;
