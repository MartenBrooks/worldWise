import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';
function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lan = searchParams.get('lat');
  const lng = searchParams.get('lng');
  return (
    <div className={styles.mapContainer} onClick={() => navigate('form')}>
      <h1>Map</h1>
      <p>{lan}</p>
      <p>{lng}</p>
    </div>
  );
}

export default Map;
