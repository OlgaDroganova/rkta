/** @jsx jsx */
import { jsx } from '@emotion/core';

import useProviderContext from '../../Provider/useProviderContext';
import Text from '../../Text';

import { InputBase as Props } from './InputBase.d';

const Input = ({ active, caption, value, onChange, ...rest }: Props): JSX.Element => {
  const { applyStyles } = useProviderContext();
  const styledProps = {
    normal: true,
    ...rest,
    active,
    element: 'span',
    main: true,
  };
  const [{ css, ...inputProps }, Element] = applyStyles(styledProps, 'InputBase', 'Addon');
  return (
    <Element css={css}>
      {caption && (
        <Text caption={active} body={!active}>
          {caption}
        </Text>
      )}
      <input type="text" {...inputProps} onChange={onChange} value={value} />
    </Element>
  );
};

export default Input;