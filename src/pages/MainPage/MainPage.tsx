import React from "react";
import { AppHeader } from "../../containers/AppHeader/AppHeader";
import { MainPageIWantToEat } from "./IWantToEat/MainPageIWantToEat";
import { MainPageWhatToCook } from "./WhatToCook/MainPageWhatToCook";
import { MainPagePreciseSelection } from "./PreciseSelection/MainPagePreciseSelection";
import { MainPageAdditionalIngredients } from "./AdditionalIngredients/MainPageAdditionalIngredients";
import { MainPageWhatToDrink } from "./WhatToDrink/MainPageWhatToDrink";
import { MainPageOrderTable } from "./OrderTable/MainPageOrderTable";
import { MainPageMenu } from "./Menu/MainPageMenu";
import { MainPagePayment } from "./Payment/MainPagePayment";
import { MainPageFooter } from "./Footer/MainPageFooter";

import "./MainPage.css";
import { cn } from "../../utils/bem";

const cnMainPage = cn("MainPage");

export function MainPage() {
  return (
    <div className={cnMainPage()}>
      <AppHeader />
      <div className={cnMainPage("Content")}>
        <MainPageIWantToEat />
        <div className={cnMainPage("EatSection")}>
          <MainPageWhatToCook />
          <MainPagePreciseSelection />
          <MainPageAdditionalIngredients />
        </div>
        <MainPageWhatToDrink />
        <MainPageOrderTable />
        <MainPageMenu />
        <MainPagePayment />
        <MainPageFooter />
      </div>
    </div>
  );
}
