
function askName() {
    let isim = prompt("Adınızı Giriniz");
    myName = document.querySelector('#myName')
    myName.innerHTML = ` ${!isim ? 'İsimsiz':`${isim}`} `;

}
 function tarih() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let gun = date.getDay();

    if (gun === 1) {
        gun = "Pazartesi"
    } else if (gun === 2) {
        gun = "Salı"
    } else if (gun === 3) {
        gun = "Çarşamba"
    } else if (gun === 4) {
        gun = "Perşembe"
    } else if (gun === 5) {
        gun = "Cuma"
    } else if (gun === 6) {
        gun = "Cumartesi"
    } else if (gun === 7) {
        gun = "Pazar"
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;





    let time = h + ":" + m + ":" + s + " " + gun;
    tarih2 = document.querySelector('#myClock');
    tarih2.innerHTML = `${time} `;
    
    setTimeout(tarih, 1000);



}


askName();
tarih();


