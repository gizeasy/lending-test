import "./AppHeader.css";

import React from "react";
import { Header, HeaderModule, HeaderButton } from "@consta/uikit/Header";
import { useAction, useAtom } from "@reatom/react";
import { toogleThemeAction, themeAtom } from "../../modules/theme/theme";
import { IconSun } from "@consta/uikit/IconSun";
import { IconMoon } from "@consta/uikit/IconMoon";
import { cn } from "../../utils/bem";
import { Text } from "@consta/uikit/Text";

const cnAppHeader = cn("AppHeader");

export const AppHeader = () => {
  const toogleTheme = useAction(toogleThemeAction);
  const theme = useAtom(themeAtom);

  return (
    <Header
      className={cnAppHeader()}
      leftSide={
        <HeaderModule>
          <Text>Хочу есть</Text>
        </HeaderModule>
      }
      rightSide={
        <HeaderModule>
          <HeaderButton
            iconLeft={theme === "default" ? IconMoon : IconSun}
            onClick={toogleTheme}
          />
        </HeaderModule>
      }
    />
  );
};
