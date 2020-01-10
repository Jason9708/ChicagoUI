const englishMonthList = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
]

// 根据传入日期获取指定年月日时分秒
const getNewDate = (date) => {
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    return { year, month, day, hour, minute, second }
}

// 获取指定年月日获取日期
const getDate = (year, month, day) => {
    return new Date(year, month, day);
}


// 获取当前月的英文拼写
const englishMonth = (month) => {
    let engMonth;

    englishMonthList.map(() => {
        engMonth = englishMonthList[month]
    });

    return engMonth
}

export {
    getNewDate,
    getDate,
    englishMonth
}