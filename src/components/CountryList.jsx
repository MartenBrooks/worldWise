import styles from './CountryList.module.css';
import CountryItem from './CountryItem.jsx';
import Message from './Message';
import Spinner from './Spinner';
import { useCities } from '../contexts/CitiesContext.jsx';

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message='No cities' />;
  const countries = cities.reduce((acc, city) => {
    if (!acc.map((a) => a.country).includes(city.country)) {
      return [
        ...acc,
        { country: city.country, emoji: city.emoji, id: city.id },
      ];
    }
    return acc;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country, i) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
