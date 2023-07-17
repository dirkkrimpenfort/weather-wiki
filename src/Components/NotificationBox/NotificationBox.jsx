/* import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import moment from 'moment';
import { LocationContext } from "../../LocationContext";

export const NotificationBox = ({message, type}) => {
  const [temp, setTemp] = useState(null);
  const { location } = useContext(LocationContext);

  const styles = {
      color: type === 'error' ? 'red' : 'white',
      border: `5px solid ${type === 'error' ? 'red' : 'green'}`,
      padding: '10px',
      margin: '10px 0',
      fontSize: '2rem',
  };

  useEffect(() => {
        
      if (location.lat && location.lon) {
      const now = moment().format("YYYY-MM-DDTHH:mm:ss.SSS");
      axios.get(`https://api.meteomatics.com/${now}+02:00/t_2m:C/${location.lat},${location.lon}/json?model=mix`, {
        auth: {
            username: 'no_krimpenfort',
            password: 'MS6poj0N8v'
        }
    })
        .then(response => {
          //set the temperature from the response here
          const temp = response.data.data[0].coordinates[0].dates[0].value;
          setTemp(temp);
        })
        .catch(error => {
          console.error('Error fetching the weather data', error);
        });
    }
  }, [location]);

  return (
      <div style={styles}>
          {message} 
          {temp && <p>Current Temperature: {temp} °C</p>}
      </div>
  );
}
 */

import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { LocationContext } from "../../LocationContext";

export const NotificationBox = ({ message, type }) => {
  const [weatherData, setWeatherData] = useState(null);
  const { location } = useContext(LocationContext);

  const styles = {
    color: type === 'error' ? 'red' : 'white',
    border: `5px solid ${type === 'error' ? 'red' : 'green'}`,
    padding: '10px',
    margin: '10px 0',
    fontSize: '2rem',
  };

  useEffect(() => {
    if (location.lat && location.lon) {
      const url = `https://api.weatherapi.com/v1/current.json?key=911103f79cce475b96f92803231707&q=${location.lat},${location.lon}&aqi=yes`;
      axios
        .get(url)
        .then(response => {
          setWeatherData(response.data.current);
        })
        .catch(error => {
          console.error('Error fetching the weather data', error);
        });
    }
  }, [location]);

  return (
    <div style={styles}>
      {message}
      {weatherData && (
        <>
          <p>Current Temperature: {weatherData.temp_c} °C</p>
          <p>Wind Speed: {weatherData.wind_kph} km/h</p>
          <p>Condition: {weatherData.condition.text}</p>
        </>
      )}
    </div>
  );
};
