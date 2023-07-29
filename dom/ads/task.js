const rotatorArray = Array.from(document.getElementsByClassName('rotator__case'));
let index = 0;
setInterval(() => {

    if (index == rotatorArray.length - 1) {
        index = 0;
    }
    rotatorArray[index].classList.remove('rotator__case_active');
    rotatorArray[index + 1].classList.add('rotator__case_active');
    index++;
}, 1000)






