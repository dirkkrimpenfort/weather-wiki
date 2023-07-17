import React , { useContext } from "react";
import { DropDownList } from '../Components/DropDownList/DropDownList';  
import { Erdteile } from '../Components/Datenobjekte';  
import { LanguageContext } from "../LanguageContext";

export const Home = () => {
    const { setLanguage } = useContext(LanguageContext);

    const handleSelectChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <div >
            <DropDownList data={Erdteile} onChange={handleSelectChange} />
        </div>
    );
}





