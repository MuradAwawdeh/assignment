import { useState } from "react";
import DateSelector from "../../components/date-selector/DateSelector.jsx";
import styles from "./styles.module.scss";

const DateOfBirth = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className={styles.container}>
      <DateSelector label="Date of birth" value={date} onChange={setDate} />
    </div>
  )
}

export default DateOfBirth;
