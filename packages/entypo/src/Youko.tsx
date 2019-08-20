import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const Youko = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M19.418047,12.0796385c-0.5478516-1.0457487-2.1255493-1.7149191-2.8060303-2.6412954c0.4585571-1.0617428,2.9511719-1.7141776,2.7406616-3.5655117c-0.1517944-1.3371668-2.1604614-1.4112105-2.6756592-0.3305092c-0.3861084,0.4457431-0.7995005,0.8636346-1.2400522,1.254293c-0.2116089,0.269928-0.4511719,0.5119433-0.7175293,0.7264161c-0.3097534,0.3260632-0.5610962,0.7093105-0.979187,0.9249573V5.8728313c-0.0095825-1.400774-2.6002808-1.400774-2.6101685,0v7.3295012c0.1132812,0.5230598,0.3482666,0.9234743,0.9133911,0.9899845h0.7833252c0.5371704-0.0944233,0.8428955-0.4238205,0.9134521-0.9899845v-1.5851727c0-0.549428-0.1014404-1.4766083,0.2612305-0.9241543c0.5316772,0.5263948,1.2804565,1.0925589,1.9580078,1.7160301c0.6503305,0.6000061,1.272706,1.5688076,1.9572153,1.7170801C19.3184376,14.4302559,19.9368458,13.068881,19.418047,12.0796385z M8.1933756,4.1556897C7.636735,4.5449276,7.3271646,5.7449384,6.9533243,6.5988774C6.5416422,7.5382848,6.1798868,8.4847937,5.7787027,9.1743431C4.6934977,7.9286342,3.9533243,5.1675968,2.6461954,4.1556897c-0.4216309-0.3260012-1.3457031-0.3167379-1.7619629,0C-0.241744,5.0133343,0.8880777,6.5300832,1.3409586,7.3256645c0.9940186,1.7442522,2.0955811,3.6115799,2.9366455,5.2160816c-0.5467529,1.4587612-3.3081665,5.5814819,0.3916626,5.3487911c0.8953857-0.5855541,1.2750854-1.8037815,1.762146-2.9060354c0.9957275-2.255393,1.8415527-4.204113,2.8713989-6.5365133c0.4280396-0.9695439,1.4592285-2.4023066,1.2398682-3.500052C10.3683634,4.0776324,9.0449381,3.5608718,8.1933756,4.1556897z" />
  </Svg>
);

export default Youko;
