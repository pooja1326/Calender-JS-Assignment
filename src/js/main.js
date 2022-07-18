
const date = new Date();
const currentDate = date.getDate();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
    "October", "November", "December"]

function dateSelected(j) {
    document.getElementById("hidden").style.display = "none";
    document.getElementById("main").classList.add("d-block");
    //document.getElementById("main").className= "d-block";
    document.getElementById("main").innerHTML = '<span class="alert alert-success">you selected' + " " + j.innerHTML + "th" + " " + months[date.getMonth()] + " " + date.getFullYear(j.innerHTML) + "</span>";
    //date.setMonth(j.innerHTML)
    console.log(j.innerHTML);
}
const calender = () => {

    const monthdays = document.querySelector('.days');
    const lastday = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();       // current month last date
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();      //last month  last date 
    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextdays = 7 - lastDayIndex - 1;
    document.querySelector(".display-date-year h5").innerHTML = months[date.getMonth()] + " " + date.getFullYear();

    let days = "<div></div>";
    var i;

    for (let x = firstDayIndex; x > 1; x--) {
        days += "<div></div>";
    }

    for (i = 1; i <= lastday; i++) {
        if (i == currentDate) {
            days += `<div><button onclick="dateSelected(this)" id="date-` + i + `" class="button number-of-days current-date">${i}</button></div>`;
        } else {
            days += `<div><button onclick="dateSelected(this)" id="date-` + i + `" class="button number-of-days">${i}</button></div>`;
        }
        monthdays.innerHTML = days;

    }
}

var listOfMonths = document.getElementById("listOfMonth");
for (var k = 0; k < listOfMonths.options.length; k++) {
    var option = listOfMonths.options[k];
    var currentMonth = date.getMonth();
    if (option.value == currentMonth) {
        option.setAttribute('selected', true);
    }
}

var listOfMonths = document.getElementById("listOfYear");
for (var k = 0; k < listOfYear.options.length; k++) {
    var option = listOfYear.options[k];
    var currentYear = date.getFullYear();
    if (option.value == currentYear) {
        option.setAttribute('selected', true);
    }
}

document.querySelector('#prev-arrow').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    document.getElementById("listOfMonth").value = date.getMonth();
    calender();
})

document.querySelector('#prev-arrow2').addEventListener('click', () => {
    date.setFullYear(date.getFullYear() - 1);
    document.getElementById("listOfMonth").value = date.getMonth();
    document.getElementById("listOfYear").value = date.getFullYear();

    calender();
})
document.querySelector('#next-arrow').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    document.getElementById("listOfMonth").value = date.getMonth();
    document.getElementById("listOfYear").value = date.getFullYear();
    calender();
})
document.querySelector('#next-double-arrow').addEventListener('click', () => {
    date.setFullYear(date.getFullYear() + 1);
    document.getElementById("listOfMonth").value = date.getMonth();
    document.getElementById("listOfYear").value = date.getFullYear();
    calender();
})
document.querySelector('#listOfMonth').addEventListener('change', () => {
    const value = document.getElementById("listOfMonth").value;
    date.setMonth(value);
    calender();
})
document.querySelector('#listOfYear').addEventListener('change', () => {
    const value = document.getElementById("listOfYear").value;
    date.setFullYear(value);
    calender();
})

calender();


