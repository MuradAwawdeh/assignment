import PropTypes from 'prop-types';
import { TicketStatus } from '../../../constants/tickiting';
import styles from "./styles.module.scss";

const Avatar = ({ ticket, selected, ...rest }) => {
    const twoLetters = ticket.img ? '' : ticket.Assignee.split(" ").map(name => name[0]).join("");
    return (
        <div className={`${styles.container} ${selected ? styles.selected : ''}`} {...rest}>
            {ticket.img ? (
                <img src={ticket.img} alt="avatar" />
            ) : twoLetters}
            <div
                className={styles.dot}
                style={{
                    backgroundColor: ticket.Status === TicketStatus.hasMessages ? 'red' : ticket.Status === TicketStatus.snoozed ? 'orange' : ''
                }} />
        </div>
    )
};

Avatar.propTypes = {
    ticket: PropTypes.object,
    selected: PropTypes.bool,
};

export default Avatar;
