const slider = document.querySelector('.slider .slide');
let i = 0;

// Create array of images and assign images
const slide = [];
slide[0] = './images/sunset.jpg';
slide[1] = './images/flower.jpg';
slide[2] = './images/dew.jpg';
slide[3] = './images/clouds.jpg';


// Create array of button and assign buttons
const buttons = []
buttons[0] = document.querySelector('.changeOne');
buttons[1] = document.querySelector('.changeTwo');
buttons[2] = document.querySelector('.changeThree');
buttons[3] = document.querySelector('.changeFour');


// Function to loop through images with 5 second delay

function autoChangeSlide() {
  slider.src = slide[i];

  if (i < slide.length - 1) {
    buttons.forEach(button => {
      button.classList.remove('active');
      })
    buttons[i].classList.add('active');
    i++;

  } else {
    i = 0;
    buttons[i+3].classList.add('active');
    buttons[i+2].classList.remove('active');
  };

  setTimeout('autoChangeSlide()', 4000);
};


// Load function to loop through images automatically
window.addEventListener('load', () => {autoChangeSlide();})

// function to change slide and changing button colour on clicking on it

function changeSlide(e) {
  const buttons = document.querySelectorAll('.active');
  const buttonOne = document.querySelector('.changeOne');
  const buttonTwo = document.querySelector('.changeTwo');
  const buttonThree = document.querySelector('.changeThree');
  const buttonFour = document.querySelector('.changeFour');

  if (e.target === buttonOne)
  {
    slider.src = './images/sunset.jpg';
    buttonOne.classList.add('active');
    buttons.forEach(button => {
      button.classList.remove('active');
    })
  } else if (e.target === buttonTwo) {
      slider.src = './images/flower.jpg';
      buttonTwo.classList.add('active');
      buttons.forEach(button =>  {
        button.classList.remove('active');
      })
  }
  else if (e.target === buttonThree) {
      slider.src = './images/dew.jpg';
      buttonThree.classList.add('active');
      buttons.forEach(button =>  {
        button.classList.remove('active');
      })
  }  else if (e.target === buttonFour) {
      slider.src = './images/clouds.jpg';
      buttonFour.classList.add('active');
      buttons.forEach(button =>  {
        button.classList.remove('active');
      })
  };
};
