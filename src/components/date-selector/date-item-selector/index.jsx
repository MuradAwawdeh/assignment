import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const DateItemSelector = ({ value, onChange, min, max, renderValue }) => {
  const [tempValue, setTempValue] = useState(value);
  const [editMode, setEditMode] = useState(false);
  const increase = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };
  const decrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleOnChange = () => {
    if (parseInt(tempValue) >= min && parseInt(tempValue) <= max) {
      onChange(parseInt(tempValue));
      setTempValue(parseInt(tempValue));
    } else {
      setTempValue(parseInt(value));
    }
    setEditMode(false);
  };

  const onEnterPressed = (e) => {
    if (e.keyCode === 13) handleOnChange();
  };

  useEffect(() => {
    if (value > max)
      onChange(max);
  }, [max, onChange, value]);
  return (
    <div className={styles.container}>
      <img onClick={increase} src="/icons/chevron-up.svg" />
      <span>
        {!editMode
          ? (
            <span onClick={() => setEditMode(true)}>{renderValue(value)}</span>
          )
          : <input autoFocus value={tempValue} type="number" onKeyUp={onEnterPressed} onMouseLeave={handleOnChange} onChange={(e) => setTempValue(e.target.value)} />
        }
      </span>
      <img onClick={decrease} src="/icons/chevron-down.svg" />
    </div>
  )
};

DateItemSelector.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  renderValue: PropTypes.func,
};

export default DateItemSelector;
