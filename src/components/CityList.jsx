import CityItem from './CityItem';
import styles from './CityList.module.css';
import Spinner from './Spinner';
import Message from './Message.jsx';
function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message='No cities' />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city, i) => (
        <CityItem key={i} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
