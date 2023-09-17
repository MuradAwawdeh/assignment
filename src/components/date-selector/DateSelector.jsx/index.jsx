import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import DateItemSelector from '../date-item-selector';
import useClickOutside from '../../../hooks/useClickOutSide';
import { getMonth, getDay, getYear, getMonthName, getMonthDays, leadWithZero } from '../../../utils/date-utils';
import styles from "./styles.module.scss";

const DateSelector = ({ label, value, onChange }) => {
    const [isDropDownShown, setIsdropDownShown] = useState(false);
    const [month, setMonth] = useState(getMonth(value));
    const [day, setDay] = useState(getDay(value));
    const [year, setYear] = useState(getYear(value));
    const [inputValue, setInputValue] = useState('');
    const componentRef = useRef();

    useClickOutside(componentRef, () => {
        setIsdropDownShown(false);
    });

    useEffect(() => {
        setInputValue(`${getMonthName(month)} ${day}, ${year}`);
        const date = new Date();
        date.setDate(day);
        date.setMonth(month - 1);
        date.setFullYear(year);
        onChange(date);
    }, [month, day, year, onChange]);

    return (
        <div className={styles.container} ref={componentRef}>
            <label>{label}</label>
            <div className={styles.inputContainer} onClick={() => setIsdropDownShown(prev => !prev)}>
                <input value={inputValue} readOnly />
            </div>
            <div
                className={styles.dropDown}
                style={{ opacity: isDropDownShown ? 1 : 0 }}
            >
                <DateItemSelector
                    value={month}
                    min={1}
                    max={12}
                    onChange={setMonth}
                    renderValue={(value) => getMonthName(value)}
                />
                <DateItemSelector
                    value={day}
                    min={1}
                    max={getMonthDays(month, year)}
                    onChange={setDay}
                    renderValue={(value) => leadWithZero(value)}
                />
                <DateItemSelector
                    value={year}
                    min={1000}
                    max={getYear(new Date())}
                    onChange={setYear}
                    renderValue={(value) => value}
                />
            </div>
        </div>
    )
};

DateSelector.propTypes = {
    label: PropTypes.string,
    value: PropTypes.object,
    onChange: PropTypes.func,
}

export default DateSelector;

