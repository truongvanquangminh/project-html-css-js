var upload = document.querySelector('#mypicture');
var preview = document.querySelector('.preview');

upload.addEventListener('change', function(e) {

    var file = upload.files[0];
    if(!file)
        return

    // if(!file.name.endsWith('.jpg')){
    //     error.innerHTML = `Hinh anh phai thuoc dinh dang JPG`;
    //     return
    // } else {
    //     error.innerHTML = ``
    // }

    // if(file.size / (1024 * 1024) > 5) {
    //     error.innerHtml = `Chỉ được upload anh < 5mb`;
    //     return
    // } else {
    //     error.innerHTML = ``
    // }

    var img = document.createElement('img');

    var fileReader = new FileReader(file);
    fileReader.readAsDataURL(file);
    fileReader.onloadend = function(e) {
        img.src = e.target.result;
    }
    // img.src = URL.createObjectURL();
    preview.appendChild(img);
})