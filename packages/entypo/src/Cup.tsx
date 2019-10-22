import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from './constants';

const Cup = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,1C5.721,1,3.06,2.41,3.205,3.555l1.442,13.467C4.705,17.482,6.868,18.998,10,19c3.131-0.002,5.295-1.518,5.351-1.979l1.442-13.467C16.938,2.41,14.279,1,10,1z M10,5.291C6.868,5.289,4.647,4.174,4.647,3.756C4.646,3.342,6.869,2.225,10,2.227c3.131-0.002,5.354,1.115,5.351,1.529C15.351,4.174,13.131,5.289,10,5.291z" />
  </Svg>
);

export default Cup;
