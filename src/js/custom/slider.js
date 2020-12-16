const config = {
  type: 'carousel',
  perView: 4,
  peek: {
    before: 0,
    after: 150
  }
}

Breakpoints.match({
  600: { perView: 2 },
  1200: { perView: 3 }
})
const glide = new Glide('#glide', config);


const slides = document.querySelectorAll('.slide-wrap');
const images = document.querySelectorAll('.sales-img');

glide.on('move', function(event) {
  // console.log('move', glide.index);
  if ( (glide.index + 4) == (slides.length - 1)) {
      console.log('End');
      glide.index = 0;
  } else {
      let slideCurrent = slides[glide.index + 4];
      let imgCurrent = images[glide.index + 4];
      let slidePrev = slides[glide.index + 3];
      let imgPrev = images[glide.index + 3];
      console.log(glide.index + 4);
      console.log(glide.index + 3);
      slideCurrent.classList.add('slide-wrap--opacity');
      imgCurrent.classList.add('sales-img--opacity');
      slidePrev.classList.remove('slide-wrap--opacity');
      imgPrev.classList.remove('sales-img--opacity');
  }

  // console.log(glide.index + 4);
  // console.log(glide.index + 3);


})

glide.mount();
