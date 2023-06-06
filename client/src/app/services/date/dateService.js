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
        const dateObj = new Date(str);
        let options
        switch (type){
             case "year":
                 options = { year: 'numeric' };
                 break
             case "month":
                 options = { month: 'long' };
                 break
             case "day":
                 options = { day: 'numeric' };
                 break
             default:
                 options ={ month: 'long', day: 'numeric', year: 'numeric' };
                 break
         }
        const formattedDate = dateObj.toLocaleDateString('ru-RU', options);
        return formattedDate
    }

    static getHours(str){
        const dateObj = new Date(str);
        const formattedDate = dateObj.getHours();
        return formattedDate
    }

    static getMinutes(str){
        const dateObj = new Date(str);
        const formattedDate = (dateObj.getMinutes()<10?'0':'') + dateObj.getMinutes();
        return formattedDate
    }
}


