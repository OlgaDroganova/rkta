import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { Props as SvgProps } from '@rkta/ui/Svg/Svg';
import { defaultIconSize } from './constants';

const TabletMobileCombo = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M17.00354,5H11.99646C10.8938599,5,10,5.8937988,10,6.9963989V18.00354C10,19.1061401,10.8938599,20,11.99646,20H17.00354C18.1061401,20,19,19.1061401,19,18.00354V6.9963989C19,5.8937988,18.1061401,5,17.00354,5z M14.5,19c-0.6904297,0-1.25-0.4473267-1.25-1c0-0.5527344,0.5595703-1,1.25-1c0.6895142,0,1.25,0.4472656,1.25,1C15.75,18.5526733,15.1895142,19,14.5,19z M17,16h-5V7h5V16z M8,16H3V2h12v1h2V2c0-1.1010742-0.8994141-2-2-2H3C1.9003906,0,1,0.8989258,1,2v16c0,1.0996094,0.9003906,2,2,2h5.5551758C8.2114258,19.4101562,8,18.7338867,8,18.003418V16z" />
  </Svg>
);

export default TabletMobileCombo;