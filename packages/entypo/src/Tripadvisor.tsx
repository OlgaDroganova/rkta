import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const Tripadvisor = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M20,6.0090332h-2.8286133C15.2119141,4.6748047,12.8125,4,10,4S4.7880859,4.6748047,2.8286133,6.0090332H0C0.4279785,6.4293823,0.8271484,7.348877,0.9931641,8.0480957C0.3771973,8.8793335,0,9.8972778,0,11.0090332c0,2.7568359,2.2431641,5,5,5c1.3266602,0,2.5268555-0.5282593,3.4228516-1.3746338L10,17l1.5771484-2.3656006C12.4731445,15.4807739,13.6733398,16.0090332,15,16.0090332c2.7568359,0,5-2.2431641,5-5c0-1.1117554-0.3771973-2.1296997-0.9931641-2.9609375C19.1728516,7.348877,19.5720215,6.4293823,20,6.0090332z M5,14.4090576c-1.8745117,0-3.3999023-1.5254517-3.3999023-3.4000244S3.1254883,7.6090088,5,7.6090088s3.3999023,1.5254517,3.3999023,3.4000244S6.8745117,14.4090576,5,14.4090576z M10,11.0090332c0-2.4172974-1.7250977-4.4382935-4.0085449-4.8997803C7.1948242,5.7042847,8.5290527,5.5,10,5.5s2.8051758,0.2042847,4.0085449,0.6092529C11.7250977,6.5707397,10,8.5917358,10,11.0090332z M15,14.4090576c-1.8745117,0-3.3999023-1.5254517-3.3999023-3.4000244S13.1254883,7.6090088,15,7.6090088s3.3999023,1.5254517,3.3999023,3.4000244S16.8745117,14.4090576,15,14.4090576z M5,8.8590088c-1.1850586,0-2.1499023,0.9644775-2.1499023,2.1500244S3.8149414,13.1590576,5,13.1590576s2.1499023-0.9644775,2.1499023-2.1500244S6.1850586,8.8590088,5,8.8590088z M5,11.6500244c-0.3588867,0-0.6499023-0.2910156-0.6499023-0.6500244S4.6411133,10.3499756,5,10.3499756S5.6499023,10.6409912,5.6499023,11S5.3588867,11.6500244,5,11.6500244z M15,8.8590088c-1.1850586,0-2.1499023,0.9644775-2.1499023,2.1500244S13.8149414,13.1590576,15,13.1590576s2.1499023-0.9644775,2.1499023-2.1500244S16.1850586,8.8590088,15,8.8590088z M15,11.6500244c-0.3588867,0-0.6499023-0.2910156-0.6499023-0.6500244S14.6411133,10.3499756,15,10.3499756S15.6499023,10.6409912,15.6499023,11S15.3588867,11.6500244,15,11.6500244z" />
  </Svg>
);

export default Tripadvisor;
