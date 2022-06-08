import FineDust from './FineDust';
import Humidity from './Humidity';
import WindSpeed from './WindSpeed';
import WindDirection from './WindDirection';

export default function WeatherDetails({ weatherDetail }) {
  const {
    fine_dust,
    air_quality_status,
    humidity,
    wind_speed,
    wind_deg_status,
  } = weatherDetail;

  return (
    <>
      <FineDust fineDust={fine_dust} airQualityStatus={air_quality_status} />
      <Humidity humidity={humidity} />
      <WindDirection windDegreeStatus={wind_deg_status} />
      <WindSpeed windSpeed={wind_speed} />
    </>
  );
}
