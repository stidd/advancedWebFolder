/* global $ */

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll / 2 +'%)'
  });

  $('.back-bird').css({
    'transform' : 'translate(0px, '+ wScroll / 4 + '%)'
  });

  $('.fore-bird').css({
    'transform' : 'translate(0px, -'+ wScroll / 40 + '%)'
  });

  if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {
    $('.figures').each(function(i){



      setTimeout(function(){
        $('.row .figures').eq(i).addClass('is-showing');
      }, 250 * (i+1));


    });
  }



});


console.log("Hey there!");