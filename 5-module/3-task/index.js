function initCarousel() {
  let size = 0;
  let btnRight = document.querySelector('.carousel__arrow_right');
  let btnLeft = document.querySelector('.carousel__arrow_left');
  let carousel = document.querySelector('.carousel__inner');
  let width = carousel.offsetWidth;
  btnLeft.style.display = 'none';

  btnRight.addEventListener('click', () => {
    size = size - width;
    btnLeft.style.display = '';
    carousel.style.transform = `translateX(${size}px)`; 
    if (size <= -3 * width) {
      btnRight.style.display = 'none'
    }else{ 
      btnRight.style.display = ''
    }
      ;
  });
  btnLeft.addEventListener('click', () => {
    size = size + width;
    btnRight.style.display = ''
    carousel.style.transform = `translateX(${size}px)`;
    if (size >= 0) {
      btnLeft.style.display = 'none'
    } else {
      btnLeft.style.display = ''
    };
     });  
}
