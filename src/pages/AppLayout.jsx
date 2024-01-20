import Map from '../components/Map.jsx';
import SideBar from '../components/SideBar.jsx';
import User from '../components/User.jsx';
import styles from './AppLayout.module.css';
function AppLayout() {
  return (
    <div className={styles.app}>
      <User />
      <SideBar />
      <Map />
    </div>
  );
}

export default AppLayout;
