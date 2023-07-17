import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";
import { LocationContext } from "../../LocationContext";

export const DropDownList = ({ data, onChange }) => { 
    const navigate = useNavigate(); 
    const { language } = useContext(LanguageContext);
    
    const { setLocation } = useContext(LocationContext);

    const handleSelectionChange = (event) => {
        const newSelection = event.target.value;
        
        const selectedCity = data.find(city => city.name === newSelection);
        
        setLocation({ lat: selectedCity.lat, lon: selectedCity.lon });
        
        navigate(`/${newSelection}`);
        if (onChange) {
            onChange(event);
        }
    };

    return (
        <>
        <h3 style={{ marginBottom: '0px' }}>{language}</h3>
        <header>
            <select onChange={handleSelectionChange} defaultValue="">
                <option value="" disabled>Select an option...</option>
                {data.map((item) => 
                    <option key={item.name} value={item.name}>{item.name}</option>
                )}
            </select>
        </header>
        </>
    )
}


    