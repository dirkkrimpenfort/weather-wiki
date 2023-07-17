import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import { Home, Deutschland, England, Spanien, Russland } from "./pages";
import { China, Japan, Indien, Kasachstan } from "./pages";
import { LanguageProvider } from "./LanguageContext"; 
import { Asien } from "./pages/Asien/Asien";
import { Peking, Shanghai, Guangzhou } from "./pages/Asien/China";
import { Tokio, Osaka, Yokohama } from "./pages/Asien/Japan";
import { Delhi, Mumbai, Kolkata } from "./pages/Asien/Indien";
import { Nursultan, Shymkent, Almaty } from "./pages/Asien/Kasachstan";
import { Europa } from "./pages/Europa/Europa";
import { Muenchen , Hamburg, Berlin } from "./pages/Europa/Deutschland";
import { London, Birmingham, Manchester } from "./pages/Europa/England";
import { Madrid, Barcelona, Valencia } from "./pages/Europa/Spanien";
import { Moskau, SanktPetersburg, NischniNowgorod } from "./pages/Europa/Russland";
import { LocationContext } from './LocationContext';
import { Nordamerika } from "./pages/Nordamerika/Nordamerika";
import { USA, Kanada } from "./pages";
import { NewYork, LosAngeles, Chicago } from "./pages/Nordamerika/USA";
import { Toronto, Montreal, Vancouver } from "./pages/Nordamerika/Kanada";


function App() {
  const [location, setLocation] = useState({lat: null, lon: null});

  return (
    
    <BrowserRouter>
    <h1>Weather-Wiki</h1>
      <LanguageProvider> 
      <LocationContext.Provider value={{ location, setLocation }}> 
        <Routes>
          <Route path="/weather-wiki" element={<Home />} /> 
          <Route path="/weather-wiki/Europa" element={<Europa />} />
          <Route path="/weather-wiki/Deutschland" element={<Deutschland />} /> 
          <Route path="/weather-wiki/Muenchen" element={<Muenchen />} /> 
          <Route path="/weather-wiki/Hamburg" element={<Hamburg />} />
          <Route path="/weather-wiki/Berlin" element={<Berlin />} />
          <Route path="/weather-wiki/England" element={<England />} />
          <Route path="/weather-wiki/London" element={<London />} />
          <Route path="/weather-wiki/Birmingham" element={<Birmingham />} />
          <Route path="/weather-wiki/Manchester" element={<Manchester />} />
          <Route path="/weather-wiki/Spanien" element={<Spanien />} />
          <Route path="/weather-wiki/Madrid" element={<Madrid />} />
          <Route path="/weather-wiki/Barcelona" element={<Barcelona />} />
          <Route path="/weather-wiki/Valencia" element={<Valencia />} />
          <Route path="/weather-wiki/Russland" element={<Russland />} />
          <Route path="/weather-wiki/Moskau" element={<Moskau />} />
          <Route path="/SanktPetersburg" element={<SanktPetersburg />} />
          <Route path="/NischniNowgorod" element={<NischniNowgorod />} />
          <Route path="/weather-wiki/Asien" element={<Asien />} />
          <Route path="/weather-wiki/China" element={<China />} />
          <Route path="/weather-wiki/Nordamerika" element={<Nordamerika />} />
          <Route path="/weather-wiki/USA" element={<USA />} />
          <Route path="/weather-wiki/Kanada" element={<Kanada />} />
          <Route path="/weather-wiki/NewYork" element={<NewYork />} />
          <Route path="/weather-wiki/LosAngeles" element={<LosAngeles />} />
          <Route path="/weather-wiki/Chicago" element={<Chicago />} />
          <Route path="/weather-wiki/Toronto" element={<Toronto />} />
          <Route path="/weather-wiki/Montreal" element={<Montreal />} />
          <Route path="/weather-wiki/Vancouver" element={<Vancouver />} />
          <Route path="/weather-wiki/Peking" element={<Peking />} />
          <Route path="/weather-wiki/Shanghai" element={<Shanghai />} />
          <Route path="/weather-wiki/Guangzhou" element={<Guangzhou />} />
          <Route path="/weather-wiki/Japan" element={<Japan />} /> 
          <Route path="/weather-wiki/Tokio" element={<Tokio />} />
          <Route path="/weather-wiki/Osaka" element={<Osaka />} />
          <Route path="/weather-wiki/Yokohama" element={<Yokohama />} />
          <Route path="/weather-wiki/Indien" element={<Indien />} />
          <Route path="/weather-wiki/Delhi" element={<Delhi />} />
          <Route path="/weather-wiki/Mumbai" element={<Mumbai />} />
          <Route path="/weather-wiki/Kolkata" element={<Kolkata />} />
          <Route path="/weather-wiki/Kasachstan" element={<Kasachstan />} />
          <Route path="/weather-wiki/Nursultan" element={<Nursultan />} />
          <Route path="/weather-wiki/Shymkent" element={<Shymkent />} />
          <Route path="/weather-wiki/Almaty" element={<Almaty />} />
          
          </Routes>
        </LocationContext.Provider>
      </LanguageProvider>
      </BrowserRouter>
  );
}

export default App;