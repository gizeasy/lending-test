import { declareAtom, declareAction } from "@reatom/core";

import {presetMyDark} from './presets/presetMyDark'
import {presetMyDefault} from './presets/presetMyDefault'

const themes = ["default", "dark"] as const;
export type Theme = typeof themes[number];

export const mapTheme = {
  default: presetMyDefault,
  dark: presetMyDark,
};

export const toogleThemeAction = declareAction();
export const themeAtom = declareAtom<Theme>(themes[0], (on) =>
  on(toogleThemeAction, (state) =>
    state === themes[0] ? themes[1] : themes[0]
  )
);
