document.addEventListener("DOMContentLoaded", function() {
  const carouselList = document.querySelectorAll('.carousel__images li')
  const selectorsBlock = document.querySelector('.carousel__selectors')
  let selectorsList = []
  let currentItem = carouselList.length 
  let interval = null

  const hideAll = () => {
    carouselList.forEach((item) => {
      item.style.display = 'none'
    })
    selectorsList.forEach((selector) => {
      selector.classList.remove('active')
    })
  }

  const nextImg = () => {
    currentItem = currentItem + 1
    if (currentItem >= carouselList.length) currentItem = 0
    hideAll()
    if (carouselList[currentItem]) {
      carouselList[currentItem].style.display = 'block'
      selectorsList[currentItem].classList.add('active')
    }
  }

  const createDots = () => {
    for (let i = 0; i < carouselList.length; i++) {
      selectorsBlock.insertAdjacentHTML(
        'beforeend',        
        `<li><span class="select"></span><span class="selected"></span></li>`
      );
    }
    selectorsList = document.querySelectorAll('.carousel__selectors li')
  }

  const startInterval = () => {
    if(interval) clearInterval(interval)
    interval = setInterval(() => {
      nextImg()
    }, 5000);
  }

  const setStep = (step) => {
    currentItem = step - 1
    nextImg()
    startInterval()
  }

  createDots()
  nextImg()
  startInterval()
  selectorsList.forEach((selector, index) => {
    selector.addEventListener('click', function() {
      setStep(index)
    })
  })
})
