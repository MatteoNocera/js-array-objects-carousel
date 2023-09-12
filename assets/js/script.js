// Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto di un array di stringhe.

/* Define the slides list */
const slides = [
  {
    image : './assets/img/01.webp',
    title : 'Spiderman',
    text : 'Lorem Ipsum'
  },
  {
    image : './assets/img/02.webp',
    title : 'Rachet & Clank',
    text : 'Lorem Ipsum'
  },
  {
    image : './assets/img/03.webp',
    title : 'Fortnite',
    text : 'Lorem Ipsum'
  },
  {
    image : './assets/img/04.webp',
    title : 'Stray',
    text : 'Lorem Ipsum'
  },
  {
    image : './assets/img/05.webp',
    title : 'SpideAvenger',
    text : 'Lorem Ipsum'
  }
]

let activeSlide = 0;

// select the dom elements
const sliderImagesEl = document.querySelector('.slider .images')
const prevEl = document.querySelector('.prev')
const nextEl = document.querySelector('.next')


/* Print all images into the dom */
// loop over the slides 
for (let i = 0; i < slides.length; i++) {
  const slidePath = slides[i];
  //console.log(slidePath);
  
  // for each slide we create the markup
  const slideMarkup = `
  <img class="${activeSlide === i ? 'active' : '' }" src="${slidePath.image}" alt="">`
  //console.log(slideMarkup);

  sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup)

}


const slidesImages = document.querySelectorAll('.slider .images > img')
//console.log(slidesImages);


const thumbsElement = document.querySelector('.thumbnails')

for (let i = 0; i < slides.length; i++) {
  const thumbPath = slides[i];
  const thumbMarkup = `<img class="thumb ${activeSlide === i ? 'active' : ''}" src="${thumbPath.image}" alt="">`
  //console.log(thumbMarkup);

  thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup)
  
}





// intercept click on the next icon 
nextEl.addEventListener('click', function(){
  console.log('cliccato su next');

  // select the current slide
  const currentSlide = slidesImages[activeSlide]
  //console.log(currentSlide);
  // remove the active class from the current slide
  currentSlide.classList.remove('active')

  // select the active thumb
  const currentThumb = document.querySelector('.thumbnails > img.active')
  //console.log(currentThumb);
  // remove the active class from the active thumb
  currentThumb.classList.remove('active')

  
  // activeSlide = 4

  if (activeSlide === slidesImages.length - 1) {
    activeSlide = 0
    // activeSlide = 5
  } else {
    // increment the activeSlide of 1
    activeSlide++
  }

  

  // select the next slide
  const nextSlide = slidesImages[activeSlide]
  //console.log(nextSlide);
  // add the active class to the next slide
  nextSlide.classList.add('active')


  // select the next thumb
  const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
  //console.log(nextThumb);
  // add to the next thumb the active class
  nextThumb.classList.add('active')


})


// activeSlide = 0
prevEl.addEventListener('click', function () {
  console.log('cliccato su prev');


  // select the current slide
  const currentSlide = slidesImages[activeSlide]
  //console.log(currentSlide);
  // remove the active class from the current slide
  currentSlide.classList.remove('active')

  if (activeSlide === 0) {
    activeSlide = slidesImages.length - 1
    // activeSlide = 5
  } else {
      // decrement the activeSlide of 1
      activeSlide--
  }
  
  
  //console.log(activeSlide);

  const currentThumb = document.querySelector('.thumbnails > img.active')
  //console.log(currentThumb);
  // remove the active class from the active thumb
  currentThumb.classList.remove('active')

  const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
  //console.log(nextThumb);
  // add to the next thumb the active class
  nextThumb.classList.add('active')


  // select the next slide
  const nextSlide = slidesImages[activeSlide]
  //console.log(nextSlide);
  // add the active class to the next slide
  nextSlide.classList.add('active')
})


