var melzoBusiness = {
  init: function(winWidth, winHeight) {
    this.slickCall();
    // this.verifyEmail();
    this.menuOpen();
    // this.enterViewport();
    // this.leaveViewport();
    this.headerFirstsection();
    // this.footertoggle(winWidth, winHeight);
  },

  footertoggle: function(winWidth, winHeight) {
    function toggle(winWidth, winHeight) {
      if (winWidth < 576) {
        $('.js--footer-toggle').click(function() {
          $(this)
            .siblings('.footer--details')
            .slideToggle();
        });
      }
    }
    toggle(winWidth, winHeight);
    $(window).resize(function() {
      toggle(winWidth, winHeight);
    });
  },

  leaveViewport: function() {
    function leave() {
      var leavingElement = $('.hero-banner');
      var sectionOffset = leavingElement.offset();
      var sectionHeight = leavingElement.outerHeight();

      var winScroll = $(window).scrollTop();

      if (winScroll > sectionHeight + sectionOffset.top) {
        // console.log(leavingElement);
      }
    }

    /* Attach event handlers to resize and scroll event */
    window.addEventListener('resize', leave, false);
    window.addEventListener('scroll', leave, false);
  },

  enterViewport: function() {
    function enter() {
      var enteringElement = $('[data-first-section="true"]');
      var sectionOffset = enteringElement.offset();

      var winScroll = $(window).scrollTop();

      if (winScroll > sectionOffset.top) {
        console.log(enteringElement);
      }
    }

    /* Attach event handlers to resize and scroll event */
    window.addEventListener('resize', enter, false);
    window.addEventListener('scroll', enter, false);
  },

  headerFirstsection: function() {
    function firstSectionEntered() {
      var enteringElement = $('[data-first-layout="true"]');
      var sectionOffset = enteringElement.offset();

      var winScroll = $(window).scrollTop();

      if (winScroll > sectionOffset.top - 75) {
        $('header').addClass('is--sticked');
      } else {
        $('header').removeClass('is--sticked');
      }
    }

    /* Attach event handlers to resize and scroll event */
    $(window).scroll(function() {
      firstSectionEntered();
    });
    $(window).resize(function() {
      firstSectionEntered();
    });
  },

  menuOpen: function() {
    $('.navigation--head').click(function() {
      $('header').toggleClass('is--open');
      $('.navigation--items').fadeToggle('fast');
    });
  },

  verifyEmail: function() {
    const signUpForm = document.getElementById('js--banner-form');
    const emailField = document.getElementById('js--banner-email');
    const okButton = document.getElementById('js--banner-submit');
    const msg = document.getElementById('js--subscription-msg');

    emailField.addEventListener('blur', function(event) {
      console.log('blur');
      if (this.value.length == 0) {
        msg.innerHTML = 'validtext@webdomain.extention';
        msg.classList.remove('is--not-valid');
      }
    }),
      emailField.addEventListener('keyup', function(event) {
        isValidEmail = emailField.checkValidity();

        if (isValidEmail) {
          okButton.removeAttribute('tabindex');
          okButton.className = okButton.className.replace(
            /\is--disabled\b/g,
            ''
          );
          msg.innerHTML = 'Valid format';
          msg.classList.remove('is--not-valid');
          console.log('verified');
        } else {
          okButton.setAttribute('tabindex', -1);
          okButton.classList.add('is--disabled');
          msg.classList.add('is--not-valid');
          msg.innerHTML = 'Not a Valid format yet';
          console.log('not-verified');
        }
      });

    okButton.addEventListener('click', function(event) {
      signUpForm.submit();
    });
  },

  slickCall: function() {
    $('.js--testimonial-carousel').slick({
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      focusOnSelect: true,
      centerMode: true,
      centerPadding: 0,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '50px',
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false
          }
        }
      ]
    });

    $('.js--clients-slider').slick({
      infinite: false,
      speed: 200,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      swipe: false,

      responsive: [
        {
          breakpoint: 575,
          settings: {
            skipSlideIndexes: [4],
            slidesToShow: 2,
            centerMode: true,
            centerPadding: '40px',
            slidesToScroll: 1,
            infinite: true,
            swipe: true
            // dots: true
          }
        }
      ]
    });

    $('.js--more-clients').on('click', function() {
      $('.js--clients-slider').slick(
        'slickRemove',
        $('.slick-slide').index(this)
      );
      $('.slick-next, .slick-prev').css({
        opacity: 1,
        visibility: 'visible'
      });
    });
  }
};

//alternate document.ready
//document.addEventListener('DOMContentLoaded', function (event) {
//});

document.addEventListener('DOMContentLoaded', event => {
  var winWidth;
  var winHeight;

  winWidth = $(window).width();
  winHeight = $(window).height();

  melzoBusiness.init(winWidth, winHeight);
});

function imgReplacement() {
  var imgDefer = document.getElementsByTagName('img');
  for (var i = 0; i < imgDefer.length; i++) {
    if (imgDefer[i].getAttribute('data-src')) {
      imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
      console.log('replaced');
    }
  }
}

$(window).load(function() {
  imgReplacement();
  console.log('loaded');
  $('body').removeClass('is--not-scrolable');

  $('.popup').click(function() {
    var $this = $(this);
    var $iframe = $('<iframe>')
      .attr('src', $this.data('link'))
      .css({ width: 400, height: 300 });
    var $title = $('<h1>').text($this.data('title'));
    $('#video-view')
      .html($title)
      .append($iframe);
    $iframe.wrap("<div class='class-video'>");
  });
});

$(window).scroll(function() {
  var captionLogo = $('.js--animate-logo');
  var heroCaption = $('.js--caption-fade');
  var header = $('header');
  var loader = $('.loader');
  var winScroll = $(window).scrollTop();
});
