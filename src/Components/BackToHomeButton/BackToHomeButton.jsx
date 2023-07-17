
import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './BackToHomeButton.css';
import { LanguageContext } from "../../LanguageContext";

export const BackToHomeButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage } = useContext(LanguageContext);
  const buttonText = location.pathname === "/" ? "Aktualisieren" : "Zurück";
  const navigationPath = location.pathname === "/" ? "/" : -1;
  const setLanguageContext = location.pathname === "/" ? "Weather-Wiki" : language;

  const handleRefresh = () => {
    navigate(navigationPath);
    
    setLanguage(setLanguageContext);
    
  };

  

  return (
    <button className="back-to-home-button" onClick={handleRefresh}>
      {buttonText}
    </button>
  );
};
