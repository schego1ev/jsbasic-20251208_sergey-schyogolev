function initCarousel() {
  const carouselContainer = document.querySelector('.carousel__inner');
  const carouselButtonLeft = document.querySelector('.carousel__arrow_left');
  const carouselButtonRight = document.querySelector('.carousel__arrow_right');
  const carouselItems = document.querySelectorAll('.carousel__slide');
  let currentIndex = 0;

  function hideArrow(index) {
    if (index === 0) {
      carouselButtonLeft.style.display = 'none';
      carouselButtonRight.style.display = 'flex';
    } else {
      carouselButtonLeft.style.display = 'flex';
    }
    if (index === carouselItems.length - 1) {
      carouselButtonRight.style.display = 'none';
    } else {
      carouselButtonRight.style.display = 'flex';
    }
  }

  //Вызов для проверки состояния при загрузке страницы
  hideArrow(currentIndex);

  function offset(index) {
    carouselContainer.style.transform = `translateX(-${carouselItems[index].offsetWidth * index}px)`;
  }
  
  carouselButtonRight.addEventListener("click", () => {
    currentIndex += 1;
    
    hideArrow(currentIndex);
    offset(currentIndex);
  });

  carouselButtonLeft.addEventListener("click", () => {
    currentIndex -= 1;
    
    hideArrow(currentIndex);
    offset(currentIndex);
  });  
}
