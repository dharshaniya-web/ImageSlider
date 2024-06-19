let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')
thumbnail.appendChild(thumbnailItems[0])


// function for next button
nextBtn.onclick = function() {
    moveSlider('next')
}

// function for prev button
prevBtn.onclick = function() {
    moveSlider('prev')
}
let timeAutoNext = 3000;
let runAutoRun = setTimeout(() => {
    nextBtn.click();
}, timeAutoNext);

function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    if (direction === 'next') {
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }
    slider.addEventListener('animationend', function() {
        if (direction === 'next') {
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, { once: true })

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextBtn.click();
    }, timeAutoNext)

}