import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from './constants';

const ShoppingBag = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M18.121,3.271c-0.295-0.256-1.906-1.731-2.207-1.991C15.615,1.021,15.158,1,14.812,1H5.188C4.843,1,4.386,1.021,4.086,1.28C3.785,1.54,2.174,3.016,1.879,3.271C1.582,3.527,1.336,3.914,1.415,4.463c0.079,0.551,1.89,13.661,1.937,13.973C3.398,18.747,3.67,18.993,4,19h12c0.33-0.007,0.602-0.253,0.648-0.565c0.047-0.311,1.858-13.422,1.938-13.973C18.664,3.914,18.418,3.527,18.121,3.271z M10,11.973c-3.248,0-3.943-4.596-4.087-5.543H7.75c0.276,1.381,0.904,3.744,2.25,3.744s1.975-2.363,2.25-3.744h1.838C13.943,7.377,13.248,11.973,10,11.973z M3.17,4.006L5,2h10l1.83,2.006H3.17z" />
  </Svg>
);

export default ShoppingBag;
