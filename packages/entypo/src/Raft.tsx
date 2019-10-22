import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from './constants';

const Raft = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M5.6734395,19c-0.877316,0-1.6501045-0.3605442-2.1763153-1.0143661c-0.6450326-0.8027058-0.8514075-1.9354591-0.5816016-3.1901903l0.0580709-0.2699594l1.9735143,0.4313974l-0.0580707,0.269063c-0.13937,0.6448536-0.083086,1.1650429,0.1581311,1.4654961c0.148304,0.1838589,0.3591456,0.2780323,0.6262712,0.2780323c0.7754688,0,1.5446839-1.2412777,2.125392-3.4179964c-0.6360989-0.2161474-1.2203803-0.5354357-1.7403374-0.9524832l-0.213522-0.1713028l1.2579031-1.5892649l0.2153087,0.1722002c0.2742729,0.2206316,0.580708,0.4009037,0.9139452,0.5372286c0.1688519-0.968626,0.3037548-2.0323219,0.4029226-3.168664L8.659173,8.1047468l2.0110369,0.1775808l-0.0241213,0.2744446c-0.1018476,1.1695271-0.240324,2.2673035-0.4109631,3.2682171c1.3874464-0.1399126,2.6516027-0.9273701,3.3547068-2.1112471c1.152482-1.9408398,0.694169-4.3704782-1.0890512-5.7776766c-0.7620678-0.601804-1.8814945-0.9433796-2.9267693-0.8913608c-1.3043594,0.0547094-2.4041319,0.642029-3.2680469,1.765815C5.2660508,6.1621122,5.1561627,8.1881561,6.0450931,9.6267452l0.1447301,0.2340851L4.4745007,10.934391l-0.1447301-0.2349815c-1.338309-2.1677494-1.182858-5.1014323,0.3796935-7.1328573c1.2266345-1.59644,2.8794193-2.4716568,4.7805681-2.5514789c1.5518312-0.0609876,3.1134892,0.4205006,4.2570381,1.3218613c2.5944252,2.0466716,3.2573261,5.5875397,1.5768461,8.4180813c-0.7397337,1.2457609-1.8823881,2.1955528-3.2430325,2.7067728c0.2519379,0.3838625,0.4663534,0.8430634,0.712038,1.5139265l0.1581316,0.4394693c0.4967279,1.3874674,0.7236509,1.5112371,1.2453957,1.5112371c0.2358561,0,0.4940481-0.1004505,0.6566467-0.256506c0.3126888-0.2995567,0.4047089-0.8753519,0.2742729-1.7121372l-0.0428829-0.2726507l1.9949551-0.3148041l0.0428829,0.2726507c0.235857,1.513031-0.0678978,2.7229156-0.8773155,3.4987144c-0.5422916,0.5183945-1.2891722,0.8152599-2.0485592,0.8152599c-0.9309206,0-1.684948-0.3479881-2.239747-1.0332012c-0.3850546-0.4735508-0.5985765-0.9641418-0.9050112-1.8179684l-0.152771-0.4260159c-0.3546791-0.9677296-0.6682615-1.4565268-1.1203203-1.7067556c-0.1375828,0.5264664-0.2894602,1.0188513-0.453846,1.4681864C8.4599457,17.8026695,7.2315245,19,5.6734395,19z" />
  </Svg>
);

export default Raft;
