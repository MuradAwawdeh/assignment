import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <Link to="date-of-birth">
        <button>Date of birth component</button>
      </Link>
      <Link to="ticketing-system">
        <button>Ticketing system page</button>
      </Link>
    </div>
  )
}

export default Home;
