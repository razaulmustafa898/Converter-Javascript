var kilogram = document.getElementById('kilogram');
var gram = document.getElementById('gram');
kilogram.addEventListener('input', function () {
    let kg = this.value;
    let g = kg*1000;
    gram.value = g;
})
gram.addEventListener('input', function () {
    let g = this.value;
    let kg = g/1000;
    kilogram.value = kg;
})