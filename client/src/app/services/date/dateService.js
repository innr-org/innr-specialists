export default class DateService {
     static getSelectedDate(dateValue){
        let month = dateValue.toLocaleString('ru', { month: 'long' });
        month = month.charAt(0).toUpperCase() + month.slice(1)
        let day = dateValue.toLocaleString('ru', { day: 'numeric' });
        let year = dateValue.toLocaleString('ru', { year: 'numeric' });
        const selectedDate = `${month} ${day}, ${year}`
        return selectedDate
    }

    static formatIsoToNormal(str, type){
        const date = new Date(str);
        const options = { timeZone: 'Asia/Almaty', month: 'long', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString("ru", options);
    }

    static getHours(str){
        const dateObj = new Date(str);
        const options = { timeZone: 'Asia/Almaty', /* other options */ };
        const hours = dateObj.toLocaleTimeString("ru",  options).substring(0, 2)
        console.log(hours)
        return hours
    }

    static getMinutes(str){
        const dateObj = new Date(str);
        return dateObj.toLocaleTimeString("ru",  [{ timeZone: 'Asia/Almaty' }]).substring(3, 5)
    }

    static toISOStringWithTimezone(date){
        const tzOffset = -date.getTimezoneOffset();
        const diff = tzOffset >= 0 ? '+' : '-';
        const pad = n => `${Math.floor(Math.abs(n))}`.padStart(2, '0');
        return date.getFullYear() +
            '-' + pad(date.getMonth() + 1) +
            '-' + pad(date.getDate()) +
            'T' + pad(date.getHours()) +
            ':' + pad(date.getMinutes()) +
            ':' + pad(date.getSeconds()) +
            diff + pad(tzOffset / 60) +
            ':' + pad(tzOffset % 60);
    };
}


