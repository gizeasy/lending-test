import { Text } from "@consta/uikit/Text";
import React from "react";
import { cn } from "../../../utils/bem";
import "./MainPageMenu.css";
import { Attach } from "@consta/uikit/Attach";

const cnMainPageMenu = cn("MainPageMenu");

export const MainPageMenu: React.FC = () => {
  return (
    <div className={cnMainPageMenu()}>
      <Text className={cnMainPageMenu("Title")} size="3xl" lineHeight="s">
        Не уверены за что платите?
      </Text>
      <Text className={cnMainPageMenu("SubTitle")} size="xl">
        Скачайте и посмотрите наш честный прайс
      </Text>
      <Attach
        className={cnMainPageMenu("Attach")}
        fileName="Основное меню пиццерии и воков"
        fileDescription="1,5 Mб  21.02.2019, 14:12"
        fileExtension="doc"
        as="a"
        href="/upload/logo512.png"
        target="_blank"
        withAction
      />
      <Attach
        className={cnMainPageMenu("Attach")}
        fileName="Основное меню пасты"
        fileDescription="1,5 Mб  21.02.2019, 14:12"
        fileExtension="pdf"
        as="a"
        href="/upload/logo512.png"
        target="_blank"
        withAction
      />
    </div>
  );
};
