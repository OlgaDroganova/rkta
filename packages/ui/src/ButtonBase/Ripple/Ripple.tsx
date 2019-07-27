import React, { ReactElement, Fragment } from 'react';

import Atom from '../../Atom/Atom';
import { BoxCss } from './Ripple.styles';
import { RippleProps } from './Ripple.d';
import Wave from './Wave';
import Overlay from './Overlay';

const Ripple = ({
  mouseover,
  overlayIsVisible,
  onOverlayAnimationEnd,
  onWaveDissolve,
  waves,
}: RippleProps): ReactElement => {
  return (
    <Fragment>
      {overlayIsVisible && (
        <Overlay mouseover={mouseover} onOverlayAnimationEnd={onOverlayAnimationEnd} />
      )}
      {waves.length > 0 && (
        <Atom css={BoxCss} element="span">
          {waves.map(
            (wave): ReactElement => (
              <Wave key={wave.id} {...wave} onWaveDissolve={onWaveDissolve} />
            ),
          )}
        </Atom>
      )}
    </Fragment>
  );
};

export default Ripple;