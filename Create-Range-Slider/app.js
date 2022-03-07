var range = document.querySelector('.range');
var process = document.querySelector('.process');

function update(percent) {
    process.style.width = `${percent}%`;
    value.innerHtml = `${percent}%`;
}

range.addEventListener('mousemove', function(e) {
    var processWidth = e.pageX - this.offsetLeft;
    var percent = processWidth / this.offsetWidth * 100;
    percent = Math.round(percent);
    update(percent);
})

var slider = document.getElementById('#slider');
slider.addEventListener('change', function(val) {
    var processWidth = val.pageX - this.offsetLeft;
    var percent = processWidth / this.offsetWidth * 100;
    percent = Math.round(percent);
    update(percent);
})