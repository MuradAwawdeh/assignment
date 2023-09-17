import PropTypes from 'prop-types';
import Message from '../message';
import styles from "./styles.module.scss";
import { useState } from 'react';

const Messages = ({ ticket }) => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    setMessage('');
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>New task</h1>
        <div className={styles.headerRight}>
          <span>00:00</span>
          <img src="/icons/clock.svg" alt="clock" />
          <img src="/icons/envelope.svg" alt="clock" />
        </div>
      </div>
      <div className={styles.messages}>
        <Message />
      </div>
      <div className={styles.conversationBox}>
        <textarea
          className={(ticket.Title === '' || ticket.Goal === '') ? 'disabled' : message !== '' ? styles.focused : styles.enabled}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={1}
          placeholder='Type a message'
        />
        <img onClick={sendMessage} className={(ticket.Title === '' || ticket.Goal === '' || message === '') ? 'disabled' : ''} src="/icons/send.svg" alt="send" />
      </div>
    </div>
  )
};

Messages.propTypes = {
  ticket: PropTypes.object,
};

export default Messages;
