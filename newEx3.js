function getAge(date) {
    let today = new Date();
    let birthDate = new Date(date);

    let year = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    let day = today.getDate() - birthDate.getDate();

    if(year < 0) {
        return 'invalid date'
    } else if (year === 0){
        if ( month < 0) {
            return 'invalid date'
        } else if (month === 0){
            if(day < 0){
                return 'invalid date'
            }
            return `${day} days`
        }
        return `${month} months`
    } else {
        if (month < 0) {
            year--;
        } else if(month === 0){
            if(day < 0){
                year--;
            }
        }
        return `${year} years`
    }
}
console.log(getAge('03/21/2017'));