const strongName = window.document.querySelector("#name");
const date = window.document.querySelector(".date");

let name = prompt("Lütfen isminizi giriniz:", "Ali Balbars");

var getDayName = (index) => {
    switch (index) {
        case 0:
            return "Pazar";
        case 1:
            return "Pazartesi";
        case 2:
            return "Salı";
        case 3:
            return "Çarşamba";
        case 4:
            return "Perşembe";
        case 5:
            return "Cuma";
        case 6:
            return "Cumartesi";

    }

}



let today = new Date();
console.log(today.getDate(), today.getHours(), today.getMinutes(), today.getMonth() + 1); // January = 0

date.innerHTML = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()} ${getDayName(today.getDay())}`;

setInterval(() => {
    today = new Date();
    date.innerHTML = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()} ${getDayName(today.getDay())}`;
}, 1000)


strongName.innerHTML = name;


