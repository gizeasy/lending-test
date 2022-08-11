import React from "react";

import "./MainPageAdditionalIngredients.css";
import { cn } from "../../../utils/bem";
import { Text } from "@consta/uikit/Text";
import { useAtom, useAction } from "@reatom/react";
import {
  additionalIngredientListAtom,
  additionalIngredientsValueAtom,
  setAdditionalIngredientsAction,
  addUserIngredientsAction,
  AdditionalIngredient,

} from "../../../modules/app/app";
import { Combobox } from "@consta/uikit/Combobox";

const cnMainPageAdditionalIngredients = cn("MainPageAdditionalIngredients");

export const MainPageAdditionalIngredients: React.FC = () => {
  const additionalIngredients = useAtom(additionalIngredientListAtom);

  const additionalIngredientsValue = useAtom(additionalIngredientsValueAtom);
  const setAdditionalIngredients = useAction(({value}:{value: AdditionalIngredient[] | null}) => setAdditionalIngredientsAction(value));
  const addUserIngredients = useAction(addUserIngredientsAction);

  if (additionalIngredients.length === 0) {
    return null;
  }

  const hadleCreate = ({label}:{label: string}) => {
    addUserIngredients(label);
    setAdditionalIngredients({value: [
      {
        label,
        category: ["user"],
        cost: 150,
        weight: 300,
        proteins: 0,
        fats: 0,
        carbohydrates: 10,
        kilocalories: 100,
      },
      ...(additionalIngredientsValue ? additionalIngredientsValue : []),
    ]});
  };

  // const handleChandge = (items: AdditionalIngredient[] | null) => {
  //   setAdditionalIngredients(items);
  // };

  return (
    <div className={cnMainPageAdditionalIngredients()}>
      <Text className={cnMainPageAdditionalIngredients("InputLabel")} size="l">
        Что бы такого добавить?
      </Text>
      <div className={cnMainPageAdditionalIngredients("InputWrapper")}>
        <Combobox
          id={cnMainPageAdditionalIngredients("Input")}
          className={cnMainPageAdditionalIngredients("Input")}
          size="l"
          placeholder="Дополнительные ингридиенты"
          value={additionalIngredientsValue}
          onChange={setAdditionalIngredients}
          items={additionalIngredients}
          getItemLabel={(item) => item.label}
          getItemKey={(item) => item.label}
          onCreate={hadleCreate}
          multiple
        />
        {/* <Text size="s" fontStyle="italic" view="secondary">
          Можете добавить свой вариант. Если мы найдём это на кухне, мы не
          пожалеем и добавим.
        </Text> */}
      </div>
    </div>
  );
};
