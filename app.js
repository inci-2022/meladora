function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}












$(function(){
    $('.home-slider').owlCarousel({
    margin:57,
    nav: true,
        dots:true,
        items:3,
    autoplay:true,
    loop:true,
    
    
    
    
    
    });
    
    
    
    
    
    
    
    });



    $(function(){
        $('.blog-slider').owlCarousel({
        margin:20,
        nav: true,
            dots:true,
            items:3,
        autoplay:true,
        loop:true,
        
        
        
        
        
        });
        
    });
        
       
    $(function() {
        $(window).on("scroll", function() {
            if($(window).scrollTop() > 70) {
                $(".header-secondary").addClass("active");
                $(".main-logo").addClass("hidden-logo");
            
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".header-secondary").removeClass("active");
               $(".main-logo").removeClass("hidden-logo");
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










