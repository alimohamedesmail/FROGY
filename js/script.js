let otherLinks = document.getElementById('otherLinks');
let megaMenu = document.getElementById('megaMenu');

otherLinks.addEventListener('click', () => {
  megaMenu.classList.toggle('active');
});

let section = document.querySelector('.our-skills');
let progressSpans = document.querySelectorAll('.the-progress span');

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 450) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

// The end of the year date to countdown to
// 1000 milliseconds = 1 second
let countDownDate = new Date('Dec 31, 2021 23:59:59').getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And CountDown Date
  let dateDiff = countDownDate - dateNow;

  //Git Time units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector('.days').innerHTML = days;
  document.querySelector('.hours').innerHTML = hours;
  document.querySelector('.minutes').innerHTML = minutes;
  document.querySelector('.seconds').innerHTML = seconds;

  if (dateDiff <= 0) {
    clearInterval(counter);
  }
}, 1000);
