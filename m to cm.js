var meter = document.getElementById("meter");
var centimeter = document.getElementById("centimeter");
meter.addEventListener('input', function () {
    let m = this.value;
    let cm = m*100;
    centimeter.value = cm;
})
centimeter.addEventListener('input', function () {
    let cm = this.value;
    let m = cm/100;
    meter.value = m;
})