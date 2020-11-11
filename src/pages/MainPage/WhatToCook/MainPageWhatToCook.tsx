import React from "react";

import "./MainPageWhatToCook.css";
import { cn } from "../../../utils/bem";
import { Text } from "@consta/uikit/Text";
import { BasicSelect } from "@consta/uikit/BasicSelect";
import { Switch } from "@consta/uikit/Switch";
import { whatToCook } from "../../../modules/app/mock";
import { useAtom, useAction } from "@reatom/react";
import {
  categoryCookAtom,
  setCatecoryCookAction,
  setThinDoughAction,
  thinDoughAtom,
  setDoublePortionAction,
  doublePortionAtom,
} from "../../../modules/app/app";
import Pizza from "../../../svg/Pizza.svg";

const cnMainPageWhatToCook = cn("MainPageWhatToCook");

export const MainPageWhatToCook: React.FC = () => {
  const categoryCook = useAtom(categoryCookAtom);
  const setCategoryCook = useAction(setCatecoryCookAction);

  const thinDough = useAtom(thinDoughAtom);
  const setThinDough = useAction(setThinDoughAction);

  const doublePortion = useAtom(doublePortionAtom);
  const setDoublePortion = useAction(setDoublePortionAction);

  return (
    <div className={cnMainPageWhatToCook()}>
      <Text className={cnMainPageWhatToCook("Title")} size="3xl" lineHeight="s">
        Итальянская, азиатская или...
      </Text>
      <Text className={cnMainPageWhatToCook("InputLabel")} size="l">
        Что приготовить?
      </Text>
      <div className={cnMainPageWhatToCook("InputWrapper")}>
        <BasicSelect
          id={cnMainPageWhatToCook("Input")}
          className={cnMainPageWhatToCook("Input")}
          size="l"
          placeholder="Выберите что будете  есть"
          options={whatToCook}
          getOptionLabel={(item) => item.name}
          value={categoryCook}
          onChange={setCategoryCook}
        />
      </div>
      {categoryCook?.id === "pizza" && (
        <Switch
          className={cnMainPageWhatToCook("Switch")}
          onChange={({ checked }) => setThinDough(checked)}
          checked={thinDough}
          label="Тонкое тесто"
        />
      )}
      {(categoryCook?.id === "pasta" || categoryCook?.id === "wok") && (
        <Switch
          className={cnMainPageWhatToCook("Switch")}
          onChange={({ checked }) => setDoublePortion(checked)}
          checked={doublePortion}
          label="Двойная порция"
        />
      )}
      <Pizza className={cnMainPageWhatToCook("Image")} />
    </div>
  );
};
