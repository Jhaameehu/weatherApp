import React from 'react';

const Weather = (props) => (
  <div>
    {props.city && props.country && (
      <p>
        Location: {props.city}, {props.country}
      </p>
    )}
    {props.city && props.temperature && <p>Temperature: {props.temperature}</p>}
    {props.city && props.humidity && <p>Humidity: {props.humidity}</p>}
    {props.city && props.description && <p>Conditions: {props.description}</p>}
    {props.error && <p>{props.error}</p>}
  </div>
);

export default Weather;
