import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from './constants';

const CreativeCommonsPublicDomain = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M16.8,3.2C15,1.3,12.7,0.4,10,0.4c-2.7,0-4.9,0.9-6.8,2.8C1.3,5.1,0.4,7.4,0.4,10c0,2.6,0.9,4.9,2.8,6.8c1.9,1.9,4.1,2.8,6.8,2.8c2.6,0,4.9-1,6.9-2.9c1.8-1.8,2.7-4.1,2.7-6.7C19.6,7.3,18.7,5,16.8,3.2z M15.6,15.5c-1.6,1.6-3.5,2.4-5.6,2.4c-2.1,0-4-0.8-5.6-2.3C2.9,14,2.1,12.1,2.1,10c0-2.1,0.8-4,2.4-5.6C6,2.9,7.8,2.1,10,2.1c2.2,0,4,0.8,5.6,2.3c1.5,1.5,2.3,3.4,2.3,5.6C17.9,12.2,17.1,14,15.6,15.5z M8.1,7.3H5.5v5.3h1.3v-1.7h1c1.8,0,2.2-1.1,2.2-1.8C10.1,8,9.6,7.3,8.1,7.3z M7.9,9.9H6.8V8.3h1.1c0.6,0,0.9,0.3,0.9,0.8C8.8,9.5,8.5,9.9,7.9,9.9z M12.5,7.3h-2.1v5.3h2.1c1.6,0,2.7-0.8,2.7-2.7C15.2,8.1,14.1,7.3,12.5,7.3z M12.5,11.5h-0.8V8.4h0.8c1,0,1.4,0.7,1.4,1.5C13.9,10.8,13.5,11.5,12.5,11.5z" />
  </Svg>
);

export default CreativeCommonsPublicDomain;
