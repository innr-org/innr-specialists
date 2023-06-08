if (!Date.prototype.hasOwnProperty("toLocaleString")) {
    Date.prototype.toLocaleString = function () {
        const date = this;
        const pad = (number) => {
            if (number < 10) {
                return "0" + number;
            }
            return number;
        };
        const year = date.getFullYear();
        const month = pad(date.getMonth() + 1);
        const day = pad(date.getDate());
        const hours = pad(date.getHours());
        const minutes = pad(date.getMinutes());
        const seconds = pad(date.getSeconds());
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };
}
