import React from "react";

import "./MainPageWhatToDrink.css";
import { cn } from "../../../utils/bem";
import { Text } from "@consta/uikit/Text";
import { Tabs } from "@consta/uikit/Tabs";
import { Checkbox, CheckboxPropOnChange } from "@consta/uikit/Checkbox";
import { useChoiceGroup } from "@consta/uikit/useChoiceGroup";

import { categoryDrink } from "../../../modules/app/mock";
import { useAtom, useAction } from "@reatom/react";
import {
  setDrinkCategoryAction,
  drinkCategoryValueAtom,
  drinkListAtom,
  setDrinkValueAction,
  drinkValueAtom,
  Product,
} from "../../../modules/app/app";
import Drinks from "../../../svg/Drinks.svg";

const cnMainPageWhatToDrink = cn("MainPageWhatToDrink");

export const MainPageWhatToDrink: React.FC = () => {
  const drinkCategoryValue = useAtom(drinkCategoryValueAtom);
  const drinkList = useAtom(drinkListAtom);
  const drinkValue = useAtom(drinkValueAtom);

  const setDrinkCategory = useAction(setDrinkCategoryAction);
  const setDrinkValue = useAction(setDrinkValueAction);

  const { getOnChange, getChecked } = useChoiceGroup<
    Product,
    { e: React.ChangeEvent<HTMLInputElement>; checked: boolean }
  >({
    value: drinkValue,
    getKey: (item) => item.name,
    callBack: (item) => setDrinkValue(item.value),
    multiple: true,
  });

  return (
    <div className={cnMainPageWhatToDrink()}>
      <Text className={cnMainPageWhatToDrink("Title")} size="3xl" lineHeight="s">
        Чай, кофе, потанцуем?
      </Text>
      <Tabs
        className={cnMainPageWhatToDrink("Tabs")}
        items={categoryDrink}
        getLabel={(item) => item.name}
        onChange={({ value }) => setDrinkCategory(value)}
        view="clear"
        value={drinkCategoryValue}
      />
      <div className={cnMainPageWhatToDrink("List")}>
        {drinkList.map((item, index) => {
          return (
            <Checkbox
              key={cnMainPageWhatToDrink("ListItem", {
                name: item.name,
                index,
              })}
              className={cnMainPageWhatToDrink("ListItem")}
              label={item.name}
              checked={getChecked(item)}
              onChange={getOnChange(item)}
            />
          );
        })}
      </div>
      <Drinks className={cnMainPageWhatToDrink("Image")} />
    </div>
  );
};
