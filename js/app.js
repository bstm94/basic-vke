//Element Seçimi
const boy = document.querySelector("#boy");
const kilo = document.querySelector("#kilo");
const form = document.querySelector("#kilo2");
const sonuc = document.querySelector("#sonuc");

function hesapla(boy, kilo) {
    let a = boy.value;
    let b = kilo.value;
    if (a === "" || b === "") {
        showAlert("danger", "Lütfen tüm alanları doldurunuz");
    }
    let newBoy = parseInt(boy.value);
    let newKilo = parseInt(kilo.value);

    const hesap = newKilo / (newBoy / 100 * newBoy / 100);
    if (newBoy < 0 || newKilo < 0) {
        showAlert("danger", "Lütfen pozitif değerler giriniz");
     } else if (hesap < 18.5) {
        showAlert("danger", "Çok Zayıf");
     } else if (hesap >= 18.5 && hesap < 24.9) {
        showAlert("success", "İdeal Kilo");
     } else if (hesap >= 25 && hesap <= 29.9) {
        showAlert("warning", "Kilolu")
     } else if (hesap >= 30) {
        showAlert("danger", "Obez");
    }
    boy.value = "";
    kilo.value = "";
}


function showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    sonuc.appendChild(alert);
    setTimeout(function () { //Hata mesajı 3sn sonra silinsin
        alert.remove();

    }, 3000);

}
