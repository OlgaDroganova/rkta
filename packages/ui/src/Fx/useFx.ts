import { useState, useEffect } from 'react';
import upperFirst from 'lodash/upperFirst';
import useProviderContext from '../Provider/useProviderContext';
import { CssRkta } from '../Provider/theme/theme.defs';

interface Handlers {
  onPopUp?: Function;
  onPopUpBegin?: Function;
  onFadeDown?: Function;
  onFadeDownBegin?: Function;
  [key: string]: Function | undefined;
}

function emitEvent(emit: Function | undefined): void {
  if (typeof emit === 'function') emit();
}

export default (initialQueue: string[], handlers: Handlers = {}): ({} | Function)[] => {
  const [queue, setQueue] = useState(initialQueue);
  const [isMounted, setIsMounted] = useState(false);
  const {
    theme: { Fx },
  } = useProviderContext();
  const [activeTransition, ...restTransitions] = queue;
  console.log('activeTransition', activeTransition);
  const css: CssRkta = activeTransition ? Fx[activeTransition] : [];
  const addEffect = (effect: string): void => {
    console.log('addEffect', queue, effect);
    setQueue([...queue, effect]);
  };
  function emitBegin(transition: string): void {
    emitEvent(handlers[`on${upperFirst(transition)}Begin`]);
  }
  const onAnimationEnd = (): void => {
    const [nextTransition] = restTransitions;
    setQueue(restTransitions);
    emitEvent(handlers[`on${upperFirst(activeTransition)}`]);
    emitBegin(nextTransition);
    console.log('onAnimationEnd');
  };
  useEffect((): void => {
    if (isMounted) return;
    setIsMounted(true);
    emitBegin(activeTransition);
  });
  console.log('queue', queue);
  return [{ css, onAnimationEnd: activeTransition && onAnimationEnd }, addEffect];
};