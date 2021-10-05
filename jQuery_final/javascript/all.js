$(document).ready(function() {
    //TOP按鈕
 $('.top a').click(function(event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: 0
  }, 1000);
 });
    // 下拉式選單
    $('.dropdown').click(function (e) { 
      e.preventDefault();
      $(this).toggleClass('meun-click').parent().siblings().find('a').removeClass('meun-click');
      $(this).siblings('ul').slideToggle(200).parent().siblings().find('ul').slideUp(200);
  });

    // Swiper輪播
    const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      autoplay: {
        delay: 2000,
    },

    });

          // Lightbox 燈箱效果
          lightbox.option({
            'resizeDuration': 500,
            'wrapAround': true,
            'fitImagesInViewport':true
       });
           
});