let header = document.querySelector('.header');
let header_nav = document.querySelector('.header__nav');

header_nav.addEventListener('mouseover', () => {
  header.classList.add('header--hover');
});
header_nav.addEventListener('mouseout', () => {
  header.classList.remove('header--hover');
});

// TOP
let aside_top = document.querySelector('.aside__top > a');

aside_top.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

function toggleHeader(scroll) {
  scroll <= 48 ?
  (header.style.top = 48 - scroll + 'px')
  : 
  (header.style.top = '0px');

  if(scroll > 0) {
    header.classList.add('header--active')
  } else {
    header.classList.remove('header--active')
  }

  // 현재 스크롤 퍼센테이지
  let scroll_percent = Math.floor((scroll / (document.body.clientHeight - window.innerHeight)) * 100);
  // 현재 스크롤 기반 width값(1920px 스크롤 제외 - 1903px 기준)
  document.querySelector('.header__scroll').style.width = (1903 * (scroll_percent / 100)) + 'px';

}

// 스크롤, 라시이즈 이벤트 감지
window.onscroll = () => toggleHeader(window.scrollY);
window.onresize = () => toggleHeader(window.scrollY);

// 헤더 분홍밑줄 기능
let header_link_main = document.querySelectorAll('.header__menu > li');
let header_subline = document.querySelector('.header__subline');


header_link_main.forEach((link) => {
  link.addEventListener('mouseover', function() {
    header_subline.style.width = this.querySelector('.header__link').clientWidth+'px';
    header_subline.style.left = this.querySelector('.header__link').getBoundingClientRect().left+'px';
  });
});

// 스와이퍼
let bullet_main_slide = ['2024 썸머 업데이트 로드맵', '레츠 고! 썸머 룰렛', '출석 이벤트', '피로연 패키지'];
let main_swiper = new Swiper(".main-top__main-slide", {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 10000
  },
  allowTouchMove: false,
  pagination: {
    el: '.main-top__main-slide .swiper-pagination',
    clickable: true,
    renderBullet: function (index) {
      return '<div class="swiper-pagination-bullet swiper-pagination-text"><span>' + (bullet_main_slide[index]) + '</span></div>';
    }
  },
  navigation: {
    nextEl: ".main-top__main-slide .swiper-button-next",
    prevEl: ".main-top__main-slide .swiper-button-prev",
  },
  on: {
    slideChange: function() {
      document.querySelector('.main-top__main-slide .count').innerText = this.realIndex + 1;
    },
  },
});

let main_side_swiper = new Swiper(".main-top__side-slide", {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 10000
  },
  allowTouchMove: false,
  pagination: {
    el: '.main-top__side-slide .swiper-fraction',
    type: 'fraction'
  },
  navigation: {
    nextEl: ".main-top__side-slide .swiper-button-next",
    prevEl: ".main-top__side-slide .swiper-button-prev",
  },
  on: {
    slideChange: function() {
      document.querySelector('.main-top__side-slide .count').innerText = this.realIndex + 1;
    },
  },
});

let main_content_swiper = new Swiper(".main-content__slide", {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 10000
  },
  allowTouchMove: false,
  pagination: {
    el: '.main-content__slide .swiper-fraction',
    type: 'fraction'
  },
  navigation: {
    nextEl: ".main-content__slide .swiper-button-next",
    prevEl: ".main-content__slide .swiper-button-prev",
  },
  on: {
    slideChange: function() {
      document.querySelector('.main-content__slide .count').innerText = this.realIndex + 1;
    },
  },
});

let main_video_swiper = new Swiper(".main-content__movie-slide", {
  loop: true,
  autoplay: {
    delay: 10000
  },
  allowTouchMove: false,
  pagination: {
    el: '.main-content__movie-slide .swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: ".main-content__movie-slide .swiper-button-next",
    prevEl: ".main-content__movie-slide .swiper-button-prev",
  },
});

let main_class_swiper = new Swiper(".main-content__class-slide", {
  loop: true,
  autoplay: {
    delay: 10000
  },
  allowTouchMove: false,
  pagination: {
    el: '.main-content__class-slide .swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: ".main-content__class-slide .swiper-button-next",
    prevEl: ".main-content__class-slide .swiper-button-prev",
  },
});