import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import useGetGoals from '../../../hooks/useGetGoals';
import styles from "./styles.module.scss";

const TITLE_MAX_LENGTH = 25;

const ClasiffyForm = ({ ticket, onProceed }) => {
    const [goal, setGoal] = useState(ticket.Goal);
    const [title, setTitle] = useState(ticket.Title);
    const goals = useGetGoals();

    useEffect(() => {
        setGoal(ticket.Goal);
        setTitle(ticket.Title);
    }, [ticket]);

    return (
        <div className={styles.container}>
            <div>
                <h1>Classify</h1>
                <div className={styles.formGroup}>
                    <div>Whats the user asking for?</div>
                    <select value={goal} onChange={(e) => setGoal(e.target.value)}>
                        <option value="">Select</option>
                        {goals.map(goal => (
                            <option key={goal} value={goal}>{goal}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <div>Task Name (as shown to the user)</div>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='enter a task name' />
                    <div>
                        (Character left:
                        {' '}
                        <span style={{ color: title.length > TITLE_MAX_LENGTH ? 'red' : 'unset' }}>{TITLE_MAX_LENGTH - title.length}</span>
                        )
                    </div>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <button
                    onClick={() => onProceed(ticket._id, title, goal)}
                    className={(goal === '' || title === '' || title.length > TITLE_MAX_LENGTH) ? 'disabled' : ''}
                >
                    Proceed
                </button>
            </div>
        </div>
    )
};

ClasiffyForm.propTypes = {
    ticket: PropTypes.object,
    onProceed: PropTypes.func,
};

export default ClasiffyForm;
