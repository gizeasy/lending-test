import '../Theme.css';
import '../_color/Theme_color_myDefault.css';
import '../_color/Theme_color_myDark.css';
import '../_control/Theme_control_gpnDefault.css';
import '../_font/Theme_font_gpnDefault.css';
import '../_size/Theme_size_gpnDefault.css';
import '../_space/Theme_space_gpnDefault.css';
import '../_shadow/Theme_shadow_gpnDefault.css';

import { ThemePreset } from '@consta/uikit/Theme';

export const presetMyDark: ThemePreset = {
  color: {
    primary: 'myDark',
    accent: 'myDark',
    invert: 'myDefault',
  },
  control: 'gpnDefault',
  font: 'gpnDefault',
  size: 'gpnDefault',
  space: 'gpnDefault',
  shadow: 'gpnDefault',
};
