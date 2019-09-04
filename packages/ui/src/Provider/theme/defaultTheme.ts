import breakpoints from './breakpoints';
import color from './color';
import shadow from './shadow';
import createMediaQueries from './createMediaQueries';

import * as Addon from '../../Addon/Addon.styles';
import * as Bage from '../../Bage/Bage.styles';
import * as Button from '../../Button/Button.styles';
import * as Divider from '../../Divider/Divider.styles';
import * as List from '../../List/List.styles';
import * as ListItem from '../../List/ListItem/ListItem.styles';
import * as ListText from '../../List/ListText/ListText.styles';
import * as Paper from '../../Paper/Paper.styles';
import * as Spinner from '../../Spinner/Spinner.styles';
import * as Svg from '../../Svg/Svg.styles';
import * as Text from '../../Text/Text.styles';

import { ThemeInterface } from './theme.defs';

const defaultTheme: ThemeInterface = {
  color,
  shadow,
  media: createMediaQueries(breakpoints),
  Addon,
  Bage,
  Button,
  Divider,
  List,
  ListItem,
  ListText,
  Spinner,
  Svg,
  Paper,
  Text,
};

export default defaultTheme;
