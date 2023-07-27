let tabArray = Array.from(document.getElementsByClassName("tab"));
let tabContent = Array.from(document.getElementsByClassName('tab__content'));

for (let el of tabArray) {
    el.addEventListener('click', function() {
        el.classList.add('tab_active');
        let index = tabArray.indexOf(el);
        tabContent[index].classList.add('tab__content_active');

        for (let elActive of tabArray) {
            if (elActive !== el) {
                elActive.classList.remove('tab_active');
                let indexActive = tabArray.indexOf(elActive);
                tabContent[indexActive].classList.remove('tab__content_active')
            }
        }
    }
    )
}


