import { useSearchParams } from 'react-router-dom';

function useUrlPosition() {
  const [searchParams, setSearchParams] = useSearchParams('');
  const mapLan = searchParams.get('lat');
  const mapLng = searchParams.get('lng');
}
