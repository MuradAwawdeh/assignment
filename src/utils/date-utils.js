export const MONTH_NAME_MAP = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
};

export const MONTH_DAYS_MAP = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
};

export const getMonth = (date) => {
    return date.getMonth() + 1;
};

export const getDay = (date) => {
    return date.getDate();
};

export const getYear = (date) => {
    return date.getFullYear();
};

export const getMonthName = (month) => {
    return MONTH_NAME_MAP[month];
};

export const getMonthDays = (month, year) => {
    if (month !== 2)
        return MONTH_DAYS_MAP[month];
    if (year % 4 === 0)
        return 29;
    return MONTH_DAYS_MAP[month];
};

export const leadWithZero = (value) => {
    if (value < 10)
        return `0${value}`;
    return value;
}