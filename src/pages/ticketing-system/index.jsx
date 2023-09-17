import useTickets from "../../hooks/useTickets";
import Sidebar from "../../components/ticketing-system/sidebar";
import ClasiffyForm from "../../components/ticketing-system/classify-form";
import Messages from "../../components/ticketing-system/messages";
import styles from "./styles.module.scss";

const TecketingSystem = () => {
  const { ticketsList, selectedTicket, selectTicket, updateTicket } = useTickets();
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar ticketsList={ticketsList} selectedTicket={selectedTicket} onTicketSelected={selectTicket} />
      </div>
      <div className={styles.content}>
        <div className={styles.classify}>
          <ClasiffyForm ticket={selectedTicket} onProceed={updateTicket} />
        </div>
        <div className={styles.messages}>
          <Messages ticket={selectedTicket} />
        </div>
      </div>
    </div>
  )
}

export default TecketingSystem;

