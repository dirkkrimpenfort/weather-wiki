import React , { useContext } from "react";
import { DropDownList } from '../../../Components/DropDownList/DropDownList';  
import { StaedteIndien } from "../../../Components/Datenobjekte";
import { BackToHomeButton } from "../../../Components/BackToHomeButton";
import { LanguageContext } from "../../../LanguageContext";

export const Indien = () => {
    const { setLanguage } = useContext(LanguageContext);

    const handleSelectChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <div >
            <BackToHomeButton />
            <DropDownList data={StaedteIndien} onChange={handleSelectChange} />
        </div>
    );
}