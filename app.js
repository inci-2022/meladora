function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}





    jQuery("#carousel").owlCarousel({
      autoplay: true,
      loop:true,
      margin: 20,
      responsiveClass: true,
      nav: false,
      dots:true,
      items:3,
     
      
      responsive: {
        0: {
          items: 1
        },

        768: {
          items: 2
        },

        1000: {
          items: 2
        },
    
        1024: {
          items: 3
        },
    
        1366: {
          items: 3
        }
      }
    });


  


    jQuery("#blog-slider").owlCarousel({
      autoplay: true,
      loop:true,
      margin: 20,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1
        },

        768: {
          items: 2
        },

        1000: {
          items: 2
        },
    
        1024: {
          items: 3
        },
    
        1366: {
          items: 3
        }
      }
    });

    jQuery("#blog-slider2").owlCarousel({
      autoplay: true,
      loop:true,
      margin: 20,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1
        },

        768: {
          items: 2
        },

        1000: {
          items: 2
        },
    
        1024: {
          items: 3
        },
    
        1366: {
          items: 3
        }
      }
    });


        
       
    $(function() {
        $(window).on("scroll", function() {
            if($(window).scrollTop() > 70) {
                $(".secondary-header").addClass("active");
                $(".main-logo").addClass("hidden-logo");
                $(".wrapper-logo").addClass("scroll-logo");
                $(".underline-hover").addClass("active2");
                $(".btn-search svg").addClass("active2");
                
            
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".secondary-header").removeClass("active");
               $(".main-logo").removeClass("hidden-logo");
               $(".wrapper-logo").removeClass("scroll-logo");
               $(".underline-hover").removeClass("active2");
               $(".btn-search svg").removeClass("active2");
               
            }
        });
    });




    var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});










