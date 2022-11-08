const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const cityNameHere = document.getElementById("city_name_here");
const temp_value = document.getElementById("temp_value");
const temp_status = document.getElementById("temp_status");
const dataHide = document.querySelector('.middle_layer');



const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if (cityVal === '') {
        cityNameHere.innerText = "Please write the name before search"
        dataHide.classList.add('data_hide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&q=${cityVal}&units=metric&appid=0fbcb428fb8cac2178cb53db41ad8e72`
            const resposnse = await fetch(url);
            const data = await resposnse.json();
            const arrData = [data];

            cityNameHere.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_value.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;

            if (tempMood == "Clear") {
                temp_status.innerHTML = "<i  class='fa-sharp fa-solid fa-sun' style='color: #f2f27a'; ></i>";
            }
            else if (tempMood == "Clouds") {
                temp_status.innerHTML = "<i class='fa-solid fa-clouds'  style=color:'#808080';></i>";
            }
            else if (tempMood == "Rain") {
                temp_status.innerHTML = "<i  class='fa-solid fa-cloud-rain' style=color:'#C4D3DF';></i>";
            }
            else {
                temp_status.innerHTML = "<i  class='fa-sharp fa-solid fa-sun' style=color:'#f2f27a';></i>";
            }

            dataHide.classList.remove('data_hide');

        } catch (error) {
            cityNameHere.innerText = "Please enter the city name properly"
            dataHide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);






const getMyDay = () => {
    let weekday = new Array(7);

    weekday[0] = "SUNDAY";
    weekday[1] = "MONDAY";
    weekday[2] = "TUESDAY";
    weekday[3] = "WEDNESDAY";
    weekday[4] = "THURSDAY";
    weekday[5] = "FRIDAY";
    weekday[6] = "SATURDAY";

    let day = document.getElementById("day");

    let date = new Date();
    let showdays = weekday[date.getDay()];

    day.innerText = showdays;
}
getMyDay();


const getCurrentDate = () => {
    const current_date = document.getElementById('current_date');
    const dDate = new Date();

    let showDate = `${dDate.getDate()} - ${dDate.getMonth() + 1} - ${dDate.getFullYear()}`;
    current_date.innerText = showDate;
}
getCurrentDate();