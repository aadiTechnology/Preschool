export const toolbarOptions = {
    toolbar: {
        container: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ color: [] }],
            [{ align: [] }],
            [{ size: ['small', 'normal', 'large', 'huge'] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
        ],
    },
};

export const monthArray = [
    { Value: 1, Name: "January" },
    { Value: 2, Name: "February" },
    { Value: 3, Name: "March" },
    { Value: 4, Name: "April" },
    { Value: 5, Name: "May" },
    { Value: 6, Name: "June" },
    { Value: 7, Name: "July" },
    { Value: 8, Name: "August" },
    { Value: 9, Name: "September" },
    { Value: 10, Name: "October" },
    { Value: 11, Name: "November" },
    { Value: 12, Name: "December" },
]

export function IsMobileNoValid(value) {
    const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if (!value) {
        return 'Mobile No should not be blank.';
    }
    else if (!phoneRegExp.test(value)) {
        return 'Invalid Phone No.';
    }
    return ''
}

export function IsEmailValid(value) {
    const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{1,3})+$/;
    if (!value) {
        return 'Email Id should not be blank.';
    }
    else if (!emailRegExp.test(value)) {
        return 'Invalid email address';
    }
    return ''
}

export const getDateFormatted = (date) => {
    
    let arrDate = date.split(' ')[0].split('-')
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return `${arrDate[0]} ${monthNames[parseInt(arrDate[1])-1]} ${arrDate[2]}`;
}

export const getNextDate = (date, prevNext) => {
    var nextDate = new Date(date);
    console.log(date,"nextDate",nextDate)
    console.log(nextDate.getDate() + prevNext,"nextDate",nextDate.getDate())
    nextDate.setDate(nextDate.getDate() + prevNext);
    return getDateFormatted(nextDate)
}