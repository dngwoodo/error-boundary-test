import { styleCard, styleCardContent, styleCardTitle } from '../styles/card';
import { styleWindDirection } from './WindDirection';

export default function WindSpeed({ windSpeed }) {
  return (
    <div css={[styleCard, styleWindDirection]}>
      <h4 css={styleCardTitle}>풍속</h4>
      <p css={[styleCardTitle, styleCardContent]}>
        {windSpeed}
        m/s
      </p>
    </div>
  );
}
