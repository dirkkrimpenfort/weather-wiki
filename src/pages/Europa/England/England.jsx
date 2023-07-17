import React , { useContext } from "react";
import { DropDownList } from '../../../Components/DropDownList/DropDownList';  
import { StaedteEngland } from "../../../Components/Datenobjekte";
import { BackToHomeButton } from "../../../Components/BackToHomeButton";
import { LanguageContext } from "../../../LanguageContext";

export const England = () => {
    const { setLanguage } = useContext(LanguageContext);

    const handleSelectChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <div >
            <BackToHomeButton />
            <DropDownList data={StaedteEngland} onChange={handleSelectChange} />
        </div>
    );
}