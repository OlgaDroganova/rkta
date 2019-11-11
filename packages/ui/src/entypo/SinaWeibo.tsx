import React, { ReactElement } from 'react';

import { Svg } from '../Svg';
import { defaultIconSize } from './constants';

const SinaWeibo = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M14.688,10.068c-0.274-0.084-0.463-0.142-0.319-0.508c0.311-0.797,0.344-1.484,0.007-1.975c-0.633-0.92-2.364-0.871-4.348-0.025c0-0.002-0.623,0.277-0.464-0.227C9.87,6.336,9.823,5.5,9.348,5.018C8.272,3.92,5.411,5.059,2.956,7.557C1.117,9.428,0.05,11.41,0.05,13.125c0,3.281,4.132,5.475,8.175,5.475c5.299,0,8.825-3.334,8.825-5.822C17.05,11.273,15.806,10.42,14.688,10.068z M8.236,17.129c-3.225,0.32-6.011-1.147-6.22-3.275c-0.209-2.129,2.236-4.115,5.462-4.438c3.226-0.32,6.011,1.146,6.22,3.275C13.907,14.822,11.462,16.809,8.236,17.129z M19.95,7.397c-0.001-3.312-2.686-5.996-6-5.996c-0.387,0-0.699,0.312-0.699,0.699s0.312,0.699,0.699,0.699c2.541,0,4.601,2.061,4.601,4.602c0,0.387,0.313,0.699,0.7,0.699S19.95,7.787,19.95,7.4V7.397z M17.169,7.295c-0.319-1.562-1.551-2.793-3.113-3.113c-0.378-0.078-0.748,0.166-0.826,0.545c-0.077,0.377,0.166,0.748,0.545,0.826c1.016,0.207,1.816,1.008,2.024,2.023c0.078,0.379,0.448,0.621,0.826,0.545C17.002,8.043,17.247,7.672,17.169,7.295z M6.582,11.502c-1.3,0.262-2.177,1.352-1.959,2.434c0.218,1.084,1.447,1.75,2.747,1.488c1.299-0.262,2.176-1.352,1.959-2.434C9.111,11.908,7.88,11.24,6.582,11.502z" />
  </Svg>
);

export default SinaWeibo;