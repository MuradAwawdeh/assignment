import PropTypes from 'prop-types';
import Avatar from '../avatar';
import styles from './styles.module.scss';

const userAvatar = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60';

const Sidebar = ({ ticketsList, selectedTicket, onTicketSelected }) => {
  return (
    <div className={styles.container}>
      <div className={styles.userAvatar}>
        <Avatar
          ticket={{
            img: userAvatar,
          }}
          selected={false}
        />
      </div>
      {ticketsList.map((ticket) => (
        <Avatar
          key={ticket._id}
          ticket={ticket}
          selected={selectedTicket._id === ticket._id}
          onClick={() => onTicketSelected(ticket)}
        />
      ))}
    </div>
  )
};

Sidebar.propTypes = {
  ticketsList: PropTypes.array,
  selectedTicket: PropTypes.object,
  onTicketSelected: PropTypes.func,
};

export default Sidebar;
