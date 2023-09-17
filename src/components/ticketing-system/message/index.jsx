import styles from './styles.module.scss';

const Message = () => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>I&apos;d like to do something</div>
      <div className={styles.author}>
        <div className={styles.dot} />
        Herman woods, 11:40am (via email)</div>
    </div>
  )
};

export default Message;
