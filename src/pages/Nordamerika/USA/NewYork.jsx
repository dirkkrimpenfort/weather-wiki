import React, { useContext } from "react";
import { LanguageContext } from "../../../LanguageContext";
import { NotificationBox } from "../../../Components/NotificationBox";
import { BackToHomeButton } from "../../../Components";

export const NewYork = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <BackToHomeButton />
      <h1>Hello {language}</h1>
      <NotificationBox message="Successful loaded!" type="success" />
    </div>
  );
}