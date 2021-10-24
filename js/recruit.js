$(function(){
  $('.person-slider').bxSlider({
    moveSlides: 1,
    slideWidth: 250,
    minSlides: 2,
    maxSlides: 4,
    nextText:'',
    prevText:'',
    pager: false,
    nextSelector:'#next-btn',
    prevSelector:'#prev-btn'
  })
  $('a[href^="#"]').click(function(){
  var speed = 500;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top - 100;
  $("html, body").animate({scrollTop:position}, speed, "swing");
  return false;
});
    $('.nav-hover').hover(
      function(){
        $(this).find('.nav-inner').stop().slideDown();
        $(this).children('a').css({
            'background': '#e1e1e1',
            'color': '#1b1464'}
          );
      },
      function(){
        $(this).find('.nav-inner').stop().slideUp();
        $(this).children('a').css({
          'background': 'rgba(255,255,255,0.91)',
          'color': '#333'}
          );
      });
      $('.humb-menue').hide();
      $('.menue-btn').click(function(){
        if($('.humb-menue').is(':hidden')){
        $(this).find("img").attr('src','images/recruit_top_menu-btn-af.png');
        $('.humb-menue').show();
      }else {
        $(this).find("img").attr('src','images/recruit_top_menu-btn-bf.png');
        $('.humb-menue').hide();
      }
      });
      $('.humb-content').hide();
      $('.humb-list').click(function(){
        var content = $(this).find('.humb-content');
        if(content.hasClass('open')){
          content.removeClass('open');
          $(this).removeClass('list-ic');
          content.slideUp();
        }
        else{
          content.addClass('open');
          $(this).addClass('list-ic');
          content.slideDown();
        }
      });
});
