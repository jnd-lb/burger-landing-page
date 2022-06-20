$(document).ready(function() {

let data = [];

let text =  $("#testimonial-text");
let name = $("#testimonial-author");
let title = $("#testimonial-title");

//data 
  $.getJSON('./js/data.json', function(_data) {
    //TODO handle errors
    data = _data;
    updateTestimonial(0);
  });

  const updateTestimonial = (index)=>{
      setTimeout(function(){
          $(".testimonial-text").fadeOut(function(){
              text.text(data[index].text)
              name.text(data[index].name)
              title.text(data[index].title)
              updateTestimonial((index+1)%data.length);
          });
        }, 4000);
        $(".testimonial-text").fadeIn();
  }

  let navBar = $("nav");

  $(window).scroll(function() {
    let scroll =  $(window).scrollTop()
    if(scroll > 10 && !navBar.hasClass("nav-floating") ){
        navBar.addClass("nav-floating")
    }

    if(scroll < 10){
      navBar.removeClass("nav-floating")
    }
  })


  //Slick Initialise
  $('.your-class').slick({autoplay:true});



  //Navbar Change active link
  $('a').click(function(){
    let hash = $(this).attr('href');
    $('.active').removeClass('active');
    $("a[href='"+hash+"']").addClass('active');
  })
})