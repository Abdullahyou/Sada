$(document).ready(function () {
  // upper page
  $(".menu-btn").on('click',function(){
    $(".upper").addClass("start");
});
    $(".close-it").on('click',function(){
    $(".upper").removeClass("start");
      // /upper page
    });

 $('.marquee').marquee({
		speed: 50,
		gap: 50,
		delayBeforeStart: 0,
		direction: 'right',
		pauseOnHover: true,
	});
    
      $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        fade:true,
        wrapAround: true,
        freeScrollFriction: 0.3
});
$('.counter').counterUp({
  delay: 10,
  time: 1000
});
});