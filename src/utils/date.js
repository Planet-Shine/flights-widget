
const GENITIVE_MONTHS = [
    'января','февраля','марта','апреля','мая','июня','июля','августа','сентября','ноября','декабря'
];
const DAYS = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

const $date = {
    getDateString(date) {
        return `${date.getDate()} ${GENITIVE_MONTHS[date.getMonth()]}`;
    },
    getDay(date) {
        return DAYS[date.getDay()];
    }
};

export default $date;