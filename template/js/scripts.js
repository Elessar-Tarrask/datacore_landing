/*------------------------------------------------------------------

Project: Elastic - Hosting Provider & WHMCS Template
Description: Elastic Responsive Premium Template Designed for all web hosting providers
Author: inebur (Rúben Rodrigues)
Author URI: http://inebur.com/
Author Envato: https://themeforest.net/user/inebur
Copyright: 2023 inebur
Version: 2.2

-------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function() {
    "use strict";
    loadWindowSettings();
    loadWindowEvents();
    loadMenu();
    loadTabs();
    izotope();
    popup();
    accordion();
    loadSwiper();
    loadTooltips();
    initSliderUI();
    loadCountdown();
    misc();
    slick();
    listenSlick();
    loader();
    backtotop();
    owldemo();
    isotope();
    livechat();
    nav();
    contactform();
    popover();
    scrollgoto();
    autoPlayYouTubeModal();
    active();
    display();
    switching();
});
/*----------------------*/
/*        Switch        */
/*----------------------*/
function switching(){
    $(window).on('load',function(){
        var dToggle = $('#run-switch');
        var planPeriod = $('.price-content .period', '.price-container');
        dToggle.on('click', function(){
            $('.mo',this).toggleClass('active');
            $('.an',this).toggleClass('active');
            $('.month',this).toggleClass('active');
            $('.switch',this).toggleClass('on');
            $('.year',this).toggleClass('active');
            
            if(planPeriod.hasClass('annually')){
                planPeriod.text('/mo');
                for(var i=0;i<=2;i++){
                    $('.price-container:eq('+i+') .value').text(parseFloat(Number($('.price-container:eq('+i+') .value').text())/12).toFixed(2));
                }
            }else{
                planPeriod.text('/yr');
                for(var i=0;i<=2;i++){
                    $('.price-container:eq('+i+') .value').text(parseFloat(Number($('.price-container:eq('+i+') .value').text())*12).toFixed(1));
                }
            }
            planPeriod.toggleClass('annually');
        });
    });
}
/*----------------------*/
/*   Full Nav Open      */
/*----------------------*/
function openNav() {
        document.getElementById('myNav').style.display = 'block';
    }
function closeNav() {
    document.getElementById('myNav').style.display = 'none';
}
/*----------------------*/
/*   Display & Hide     */
/*----------------------*/
function display() {
    $('#showall').on("click", function(){
        $('.targetDiv').show();
    });
    $('.showSingle').on("click", function(){
        $('.targetDiv').hide();
        $('#div'+$(this).attr('target')).show();
    });
}
/*----------------------*/
/*   Active Button      */
/*----------------------*/
function active() {
    $(".heading a").on("click", function(){
        $(".heading a").removeClass("active");
        $(this).addClass("active");
    });
}
/*----------------------*/
/*   Auto Play Modal    */
/*----------------------*/
function autoPlayYouTubeModal() {
  var trigger = $("body").find('[data-toggle="modal"]');
  trigger.on("click", function () {
      var theModal = $(this).data("target"),
          videoSRC = $(this).attr("data-theVideo"),
          videoSRCauto = videoSRC + "?autoplay=1";
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal + ' button.close').on("click", function () {
          $(theModal + ' iframe').attr('src', videoSRC);
      });
  });
}
/*----------------------*/
/*    Scroll Goto       */
/*----------------------*/
function scrollgoto(){
    $('.golink').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
};
/*----------------------*/
/*       Popover        */
/*----------------------*/
function popover(){
    $('[data-toggle="popover"]').popover()
}
/*----------------------*/
/*    Contact Form      */
/*----------------------*/
function contactform() {
  $('#contactForm').on('submit', function(e) {
    $.ajax({
     type: "POST",
      url:'php/form-process.php',
      data: $(this).serialize(),
      success: function() {
        $('#msgSubmit').fadeIn(100).show();
       }
    });
    e.preventDefault();
  });
};
/*----------------------*/
/*       Navbar         */
/*----------------------*/
function nav(){
    document.querySelector( "#nav-toggle" )
      .addEventListener( "click", function() {
        this.classList.toggle( "active" );
    });
} 
/*----------------------*/
/*    Live Chat         */
/*----------------------*/
function livechat(){
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/58127f62c7829d0cd36c88a9/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
}
/*----------------------*/
/*     Isotope          */
/*----------------------*/
function isotope(){
    $(window).on('load', function(){
        var selectedCategory;
        var $grid = $('.featured').isotope({
            itemSelector: '.isotope-item',
            masonry: {
                columnWidth: '.isotope-item',
            },
            getSortData: {
                selectedCategory: function( itemElem ) {
                    return $( itemElem ).hasClass( selectedCategory ) ? 0 : 1;
                }
            }
      });
      var $items = $('.featured').find('.featured-items');
      $('.sort-button-group').on( 'click', '.button', function() {
        selectedCategory = $( this ).attr('data-category');
        if ( selectedCategory === 'all' ) {
            $grid.isotope({
                sortBy: 'original-order'
            });
            $items.css({
                opacity: 1
            });
            return;
        }
        var selectedClass = '.' + selectedCategory;
        $items.filter( selectedClass ).css({
            opacity: 1
        });
        $items.not( selectedClass ).css({
            opacity: 0
        });
        $grid.isotope('updateSortData');
        $grid.isotope({ sortBy: 'selectedCategory' });
      });

      $('.button-group').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'li', function() {
                $buttonGroup.find('.active').removeClass('active');
                $( this ).addClass('active');
            });
      });

    });
}
/*----------------------*/
/*         OWL          */
/*----------------------*/
function owldemo(){
$('.owl-carousel').owlCarousel({
    onInitialized:theThing, 
    nav:true,
    singleItem:true,
    autoHeight: true,
    dots:false,
    center:true,
    margin:0,
    padding: 0,

    items:1,
     autoPlay : 5500,
     stopOnHover : true,
     center:true,
     navigation:false,
     pagination:false,
     goToFirstSpeed : 1300,
     singleItem : true,
     autoHeight : true,
     responsive: true,
     responsiveRefreshRate : 200,
     responsiveBaseWidth: window,      
     video:true, 

    autoplay:true,
    autoplayTimeout:9000,
    autoplayHoverPause:true,
    navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
    }
});
function theThing(event){
  $(".active .owl-video-play-icon").trigger("click")
}
}
/*----------------------*/
/*     Back to top      */
/*----------------------*/
function backtotop(){
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');
    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('cd-fade-out');
        }
    });
    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
            }, scroll_top_duration
        );
    });
}
/*----------------------*/
/*       Loader         */
/*----------------------*/
function loader() {
    $(window).on('load', function() {
        $("#spinner-area").fadeOut("slow");
    })
}
/*----------------------*/
/*     Listen Slick     */
/*----------------------*/
function listenSlick(){
  $('.slick').on('unslick', function(){
    var resizeCheck = setInterval(function(){
      if ($(window).width() > 590) {
        clearInterval(resizeCheck);
        slick();
      }
    },100);
  });
}
/*----------------------*/
/*     Slick Slider     */
/*----------------------*/
function slick() {
    $('#slider').slick({
      centerMode: true,
      centerPadding: '200px',
      slidesToShow: 3,
      infinite: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '100px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 991,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '200px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '150px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 590,
          settings: "unslick"
        }
      ]
    });
}
/*----------------------*/
/*         Popup        */
/*----------------------*/
function popup() {
    if ($('.popup-with-form').length) {
        $('.popup-with-form').magnificPopup({
            type: 'image',
            preloader: false,
            focus: '#name',
            closeOnBgClick: true,
            // When elemened is focused, some mobile browsers in some cases zoom in
            // It looks not nice, so we disable it:
            callbacks: {
                beforeOpen: function() {
                    if ($(window).width() < 700) {
                        this.st.focus = false;
                    } else {
                        this.st.focus = '#name';
                    }
                }
            }

        });
    }
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
    });
}
function misc() {
    /*-------------------------*/
    /*    Close Table Cart     */
    /*-------------------------*/
    $(".wp-close").on("click", function() {
        $(this).parent().parent().remove();
    });
    /*----------------------*/
    /*         Modal        */
    /*----------------------*/
    $('#myModal').on('shown.bs.modal', function() {
        $('#myInput').focus()
    })
}
/*----------------------*/
/*        Swiper        */
/*----------------------*/
var swipers = [];
function loadSwiper() {
    $('.swiper-container').each(function(i) {
        $(this).attr({
            'id': i + '-slider'
        });
    });
    swiperInit();
    $('.slide-prev').on('click', function() {
        swipers['swiper-' + $(this).closest('.slider-wrap').find('.swiper-container').attr('id')].swipePrev();
        return false;
    });
    $('.slide-next').on('click', function() {
        swipers['swiper-' + $(this).closest('.slider-wrap').find('.swiper-container').attr('id')].swipeNext();
        return false;
    });
}
/*-------------------------*/
/*        Tooltips         */
/*-------------------------*/
function loadTooltips() {
    $('#element').tooltip('show')
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })
}
/*-------------------------*/
/*          Slider         */
/*-------------------------*/
function initSliderUI() {
    var initIterator = 0;
    if ($(".slider-ui").length) {
        $(".slider-ui").each(function() {
            var self = $(this),
                sliderUI = self.find('.slider-line'),
                sliderInp = self.find('.slider-inp'),
                sliderUniqueId = 'sliderUI' + initIterator,
                inputUniqueId = 'inputUI' + initIterator,
                start = parseInt(sliderInp.attr('data-start')),
                count_step = parseInt(sliderInp.attr('data-count-step'));
            sliderUI.attr('id', sliderUniqueId);
            sliderInp.attr('id', inputUniqueId);
            initIterator++;
            count_step = count_step ? count_step : 300;
            var keypressSlider = document.getElementById(sliderUniqueId),
                input = document.getElementById(inputUniqueId);
            noUiSlider.create(keypressSlider, {
                start: start ? start : 0,
                step: 1,
                connect: "lower",
                tooltips: true,
                format: {
                    to: function(value) {
                        return "Plan" + value;
                        //return parseInt(value);
                    },
                    from: function(value) {
                        return value;
                    }
                },
                range: {
                    'min': 1,
                    'max': count_step
                },
                pips: {
                    mode: 'values',
                    values: [],
                    density: 5
                }
            });
            // Calculate Docker Product second and third  diagram
            function getValue2(values, handle, unencoded, tap) {
                var circle = $(this.target).closest('.sidebar').find('.circle');
                circle.attr('data-percent', parseInt(unencoded) / count_step * 100);
            }
            keypressSlider.noUiSlider.on('change', getValue2);
            keypressSlider.noUiSlider.on('update', function(values, handle) {
                refreshInfo(values[handle]);
                input.value = values[handle];
            });
            input.addEventListener('change', function() {
                keypressSlider.noUiSlider.set([null, this.value]);
            });
            // Listen to keydown events on the input field.
            input.addEventListener('keydown', function(e) {
                // Convert the string to a number.
                var value = Number(keypressSlider.noUiSlider.get()),
                sliderStep = keypressSlider.noUiSlider.steps()
                // Select the stepping for the first handle.
                sliderStep = sliderStep[0];
                // 13 is enter,
                // 38 is key up,
                // 40 is key down.
                switch (e.which) {
                    case 13:
                        keypressSlider.noUiSlider.set(this.value);
                        break;
                    case 38:
                        keypressSlider.noUiSlider.set(value + sliderStep[1]);
                        break;
                    case 40:
                        keypressSlider.noUiSlider.set(value - sliderStep[0]);
                        break;
                }
            });
            function getServicesInfo() {
              var info = {
                "Plan1": {
                  "name": "Service A",
                  "disk": "100GB",
                  "ram": "1GB",
                  "cpu": "1 Core",
                  "bandwith": "100GB",
                  "setup": "8€",
                  "ip": "IP Address 2",
                  "price": "90.05"
                },
                "Plan2": {
                  "name": "Service B",
                  "disk": "200GB",
                  "ram": "4GB",
                  "cpu": "2 Core",
                  "setup": "15€",
                  "ip": "IP Address 4",
                  "bandwith": "500GB",
                  "price": "150.15"
                },
                "Plan3": {
                  "name": "Service C",
                  "disk": "300GB",
                  "ram": "8GB",
                  "cpu": "4 Core",
                  "setup": "Free",
                  "ip": "IP Address 8",
                  "bandwith": "2TB",
                  "price": "290.00"
                },
                "Plan4": {
                  "name": "Service D",
                  "disk": "400GB",
                  "ram": "12GB",
                  "cpu": "4 Core",
                  "setup": "Free",
                  "ip": "IP Address 8",
                  "bandwith": "Unlimited",
                  "price": "385.22"
                },
                "Plan5": {
                  "name": "Service E",
                  "disk": "500GB",
                  "ram": "16GB",
                  "cpu": "8 Core",
                  "setup": "Free",
                  "ip": "IP Address 12",
                  "bandwith": "Unlimited",
                  "price": "510.99"
                }
              };
              return info;
            }
            function refreshInfo(key){
              var info = getServicesInfo();
              $("#disk-val").html(info[key].disk);
              $("#cpu-val").html(info[key].cpu);
              $("#ram-val").html(info[key].ram);
              $("#setup-val").html(info[key].setup);
              $("#ip-val").html(info[key].ip);
              $("#bw-val").html(info[key].bandwith);
              $("#price-val").html(info[key].price);
            }
        });
    }
}
/*-------------------------*/
/*          Menu           */
/*-------------------------*/
function loadMenu() {
    $(".nav-menu .menu-toggle").on("click", function() {
        $(this).closest(".menu-wrap").toggleClass("active");
    });
    $('.btn-scroll').on("click", function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 10
        }, 500);
        return false;
    });
    $(".menu-item").on('click',
        function() {
            if ($(".sub-menu", this).css('display') === 'none') {
                $(".sub-menu", this).css("display", "block");
            } else {
                $(".sub-menu", this).css("display", "none");
            }
        }
    );
}
/*-------------------------*/
/*          Izotope        */
/*-------------------------*/
function izotope() {
    if ($('.izotope-container').length) {
        var $container = $('.izotope-container');
        $container.isotope({
            itemSelector: '.item',
            layoutMode: 'masonry',
            masonry: {
                columnWidth: '.item'
            }
        });
    }
    $('#filters').on('click', '.but', function() {
        $('.izotope-container').each(function() {
            $(this).find('.item').removeClass('animated');
        });
        $('#filters .but').removeClass('activbut');
        $(this).addClass('activbut');
        var filterValue = $(this).attr('data-filter');
        $container.isotope({
            filter: filterValue
        });
    });
}
/*-------------------------*/
/*          Tabs           */
/*-------------------------*/
function loadTabs() {
    $('.tabs-header').on('click', 'li:not(.active)', function() {
        var index_el = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $(this).closest('.tabs').find('.tabs-item').removeClass('active').eq(index_el).addClass('active');
    });
}
/*----------------------*/
/*       Accordion      */
/*----------------------*/
function accordion() {
    $('.accordion').on('click', '.panel-title', function() {
        var self = $(this);
        var panelWrap = self.parent();
        panelWrap.find('.panel-collapse').slideToggle('200');
        self.toggleClass('active');
        panelWrap.siblings().find('.panel-collapse').slideUp('200');
        panelWrap.siblings().find('.panel-title').removeClass('active');
    });
    accordHeight();
}
function accordHeight() {
    $(".accordion.faq .square").each(function() {
        $(this).css({
            "height": $(this).parent().outerHeight(true),
            "padding-top": $(this).parent().outerHeight(true) / 2 - 20
        });
    });
}
/*-------------------------*/
/*           Select        */
/*-------------------------*/
function selectInit() {
    $('.selectpicker').each(function() {
        var self = $(this);
        var selectStyle = self.attr('data-class'); //additional style attribute, not required
        self.selectpicker({
            style: 'cst-select ' + selectStyle //add classes to customize select field
        });
    });
}
function loadWindowEvents() {
    /*-------------------------*/
    /*  Run Resize Functions   */
    /*-------------------------*/
    $(window).on("resize", function() {
        offheight();
        accordHeight();
    });
    /*-------------------------*/
    /*  RUN SCROLL FUNCTIONS   */
    /*-------------------------*/
    $(window).on('scroll', function(){
      if ($(window).scrollTop() >= 150) {
          $('.menu-wrap').addClass('fixed');
      } else {
          $('.menu-wrap').removeClass('fixed');
      }
    });
}
/*-------------------------*/
/*         Countdown       */
/*-------------------------*/
function loadCountdown() {
    $('#clock').countdown('2022/09/14 00:00', function(event) {
        var $this = $(this).html(event.strftime('' +
            '<span>%w <span class="title">Weeks</span></span>' +
            '<span>%d <span class="title">days</span></span>' +
            '<span>%H <span class="title">hours</span></span>' +
            '<span>%S <span class="title">seconds</span></span>'));
    });
}
function offheight() {
    if ($(window).width() > 750) {
        var offerHeight = $(".offers").outerHeight(true);
        $(".offers.light").css("height", offerHeight + 1);
    }
}
/*-------------------------*/
/*       Fixed Menu        */
/*-------------------------*/
function loadWindowSettings() {
    offheight();
    if ($(window).width() < 750) {
        $(".nav-menu .main-menu > .menu-item-has-children > a").on("click", function() {
            if ($(this).attr('href') !== '#') {
                $(this).next().slideToggle(0);
                return false;
            }
        });
    }
}
/*----------------------*/
/*       Swiper         */
/*----------------------*/
function swiperInit() {
    var initIterator = 0;
    var _this,
        spanwipers = $('.swiper-container');
    for (var i = spanwipers.length - 1; i >= 0; i--) {
        _this = spanwipers[i];
        var $th = $(_this);
        var $t = $th;
        var index = $th.attr('id');
        $th.addClass('swiper-' + index + ' initialized').attr('init-attr', 'swiper-' + index);
        $th.find('.pagination').addClass('pagination-' + index);
        var autoPlayVar = parseInt($th.attr('data-autoplay'), 10);
        var slidesPerViewVar = $th.attr('data-slides-per-view');
        var loopVar = parseInt($th.attr('data-loop'), 10);
        var mouseVar = parseInt($th.attr('data-mouse'), 10);
        var sliderSpeed = parseInt($th.attr('data-speed'), 10);
        var touchVar = parseInt($th.attr('data-touch'), 10);
        var mode = $th.attr('data-mode');
        var xsValue, smValue, mdValue, lgValue;
        var slideMode = $th.attr('data-mode');
        var centerVar = parseInt($t.attr('data-center'), 10);
        if (slidesPerViewVar === 'responsive') {
            xsValue = parseInt($th.attr('data-xs-slides'), 10);
            smValue = parseInt($th.attr('data-sm-slides'), 10);
            mdValue = parseInt($th.attr('data-md-slides'), 10);
            lgValue = parseInt($th.attr('data-lg-slides'), 10);
            slidesPerViewVar = updateSlidesPerView(xsValue, smValue, mdValue, lgValue);
        } else slidesPerViewVar = parseInt(slidesPerViewVar, 10);
        swipers['swiper-' + index] = new Swiper('.swiper-' + index, {
            speed: sliderSpeed,
            pagination: '.pagination-' + index,
            loop: loopVar,
            paginationClickable: true,
            autoplay: 5000,
            slidesPerView: slidesPerViewVar,
            keyboardControl: true,
            calculateHeight: true,
            mode: mode || 'horizontal',
            //initialSlide: initialSlideVar,
            //simulateTouch: simVar,
            centeredSlides: centerVar,
            roundLengths: true,
            onSlideChangeEnd: function(swiper) {
                $t.find('.swiper-slide.active').show();
                var activeIndex = (loopVar === true) ? swiper.activeIndex : swiper.activeLoopIndex;
                var qVal = $t.find('.swiper-slide-active').attr('data-val');
                $t.find('.swiper-slide[data-val="' + qVal + '"]').addClass('active');
            },
            onSlideChangeStart: function(swiper) {
                var activeIndex = (loopVar === true) ? swiper.activeIndex : swiper.activeLoopIndex;
                $th.find('.count span i').text(activeIndex + 1);
                $t.find('.swiper-slide.active').removeClass('active');
                $t.find('.swiper-slide.active').hide();

                if ($('.testimonials').length) {

                    $('.wrap-info').css('display', 'none').removeClass('active');
                    $('.wrap-info').eq(activeIndex).css({
                        'display': 'block',
                        'opacity': 0
                    }).animate({
                            'opacity': 1,
                            'transform': 'translateY(0)',
                            'MozTransform': 'translateY(0)',
                            'WebkitTransform': 'translateY(0)'
                        }, 500,
                        function() {
                            $(this).addClass('active');
                        });
                }
            },
            onSlideClick: function(swiper) {}
        });
        swipers['swiper-' + index].reInit();
        if ($t.find('.default-active').length) {
            swipers['swiper-' + $t.attr('id')].swipeTo($t.find('.swiper-slide').index($t.find('.default-active')), 0);
        }
        initIterator++;
        $('.img-person').on('click', function() {
            var $t = $(this);
            if ($t.hasClass('default-active')) return false;
            $t.closest('.testimonials').find('.img-person').removeClass('default-active');
            var index = $t.closest('.testimonials').find('.img-person').index(this);
            swipers['swiper-' + $(this).closest('.swiper-container').attr('id')].swipeTo(index);
        });
    };
    $('.full-height-slider .slide-grid').each(function(i, el) {
        swiper_content[i] = swipers['swiper-' + $(el).find('.swiper-container').attr('id')];
    });
}
function updateSlidesPerView(xsValue, smValue, mdValue, lgValue) {
    var winW = $(window).width();
    var winH = $(window).height();
    var xsPoint = 700,
        smPoint = 991,
        mdPoint = 1199;

    if (winW > mdPoint) return lgValue;
    else if (winW > smPoint) return mdValue;
    else if (winW > xsPoint) return smValue;
    else return xsValue;
}
