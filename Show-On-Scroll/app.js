var animationElements = document.querySelectorAll('.show-on-scroll');

function toogleAnimationElementInWindow(element) {
    var rect = element.getClientRects()[0];
    var heighScreen = window.innerHeight;

    //check xem khối này có bên trong màn hình hay không
    if(!(rect.bottom < 0 || rect.top > heighScreen)) {
        element.classList.add('start');
    } else {
        element.classList.remove('start');
    }
}

function checkAnimation() {

    animationElements.forEach(e=>{
        toogleAnimationElementInWindow(e);
    })

}

window.onscroll = checkAnimation