import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { Props as SvgProps } from '@rkta/ui/Svg/Svg';
import { defaultIconSize } from './constants';

const Link = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M7.859,14.691l-0.81,0.805c-0.701,0.695-1.843,0.695-2.545,0c-0.336-0.334-0.521-0.779-0.521-1.252c0-0.473,0.186-0.916,0.521-1.252l2.98-2.955c0.617-0.613,1.779-1.515,2.626-0.675c0.389,0.386,1.016,0.384,1.403-0.005c0.385-0.389,0.383-1.017-0.006-1.402C10.069,6.527,7.941,6.791,6.088,8.63l-2.98,2.956C2.393,12.295,2,13.24,2,14.244c0,1.006,0.394,1.949,1.108,2.658c0.736,0.73,1.702,1.096,2.669,1.096c0.967,0,1.934-0.365,2.669-1.096l0.811-0.805c0.389-0.385,0.391-1.012,0.005-1.4C8.875,14.309,8.248,14.307,7.859,14.691z M16.891,3.207c-1.547-1.534-3.709-1.617-5.139-0.197l-1.009,1.002c-0.389,0.386-0.392,1.013-0.006,1.401c0.386,0.389,1.013,0.391,1.402,0.005l1.01-1.001c0.74-0.736,1.711-0.431,2.346,0.197c0.336,0.335,0.522,0.779,0.522,1.252s-0.186,0.917-0.522,1.251l-3.18,3.154c-1.454,1.441-2.136,0.766-2.427,0.477c-0.389-0.386-1.016-0.383-1.401,0.005c-0.386,0.389-0.384,1.017,0.005,1.401c0.668,0.662,1.43,0.99,2.228,0.99c0.977,0,2.01-0.492,2.993-1.467l3.18-3.153C17.605,7.814,18,6.87,18,5.866C18,4.861,17.605,3.917,16.891,3.207z" />
  </Svg>
);

export default Link;
