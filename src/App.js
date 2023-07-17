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
    
    
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <h1>Weather-Wiki</h1>
      <LanguageProvider> 
      <LocationContext.Provider value={{ location, setLocation }}> 
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Europa" element={<Europa />} />
          <Route path="/Deutschland" element={<Deutschland />} /> 
          <Route path="/Muenchen" element={<Muenchen />} /> 
          <Route path="/Hamburg" element={<Hamburg />} />
          <Route path="/Berlin" element={<Berlin />} />
          <Route path="/England" element={<England />} />
          <Route path="/London" element={<London />} />
          <Route path="/Birmingham" element={<Birmingham />} />
          <Route path="/Manchester" element={<Manchester />} />
          <Route path="/Spanien" element={<Spanien />} />
          <Route path="/Madrid" element={<Madrid />} />
          <Route path="/Barcelona" element={<Barcelona />} />
          <Route path="/Valencia" element={<Valencia />} />
          <Route path="/Russland" element={<Russland />} />
          <Route path="/Moskau" element={<Moskau />} />
          <Route path="/SanktPetersburg" element={<SanktPetersburg />} />
          <Route path="/NischniNowgorod" element={<NischniNowgorod />} />
          <Route path="/Asien" element={<Asien />} />
          <Route path="/China" element={<China />} />
          <Route path="/Nordamerika" element={<Nordamerika />} />
          <Route path="/USA" element={<USA />} />
          <Route path="/Kanada" element={<Kanada />} />
          <Route path="/NewYork" element={<NewYork />} />
          <Route path="/LosAngeles" element={<LosAngeles />} />
          <Route path="/Chicago" element={<Chicago />} />
          <Route path="/Toronto" element={<Toronto />} />
          <Route path="/Montreal" element={<Montreal />} />
          <Route path="/Vancouver" element={<Vancouver />} />
          <Route path="/Peking" element={<Peking />} />
          <Route path="/Shanghai" element={<Shanghai />} />
          <Route path="/Guangzhou" element={<Guangzhou />} />
          <Route path="/Japan" element={<Japan />} /> 
          <Route path="/Tokio" element={<Tokio />} />
          <Route path="/Osaka" element={<Osaka />} />
          <Route path="/Yokohama" element={<Yokohama />} />
          <Route path="/Indien" element={<Indien />} />
          <Route path="/Delhi" element={<Delhi />} />
          <Route path="/Mumbai" element={<Mumbai />} />
          <Route path="/Kolkata" element={<Kolkata />} />
          <Route path="/Kasachstan" element={<Kasachstan />} />
          <Route path="/Nursultan" element={<Nursultan />} />
          <Route path="/Shymkent" element={<Shymkent />} />
          <Route path="/Almaty" element={<Almaty />} />
          
          </Routes>
        </LocationContext.Provider>
      </LanguageProvider>
      </BrowserRouter>
  );
}

export default App;