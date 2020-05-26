(function(window, $, undefined){
/*--------------------------
    responsive
----------------------------*/
/* レスポンシブ画像スイッチ */
$(function(){
    var $setElem = $(".js-switch");
    var pc = "_pc";
    var sp = "_sp";
    var replaceWidth = 767;
    $setElem.each(function(){
    	var $this = $(this);
    	function imgSize(){
    		if(window.innerWidth > replaceWidth) {
    			if($this[0].tagName == "IMG"){
    				$this.attr("src",$this.attr("src").replace(sp, pc)).css({visibility:"visible"});
    			}
    		} else {
    			if($this[0].tagName == "IMG"){
    				$this.attr("src",$this.attr("src").replace(pc,sp)).css({visibility:"visible"});
    			}
    		}
    	}
        var resizeTimer;
        $(window).on('load resize', function() {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(function() {
            imgSize();
          }, 200);
        });
    });
});

function deviceJudgment(){
	var ua = navigator.userAgent;
	if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
		$('head').prepend('<meta name="viewport" content="width=device-width,initial-scale=1">');
	} else {
		$('head').prepend('<meta name="viewport" content="width=1100">');
	}
}
deviceJudgment();


var proudSlider = $('#proud-slider').bxSlider({
    mode:'fade', //vertical horizontal
    controls: true,
    pager: true,
    // pagerCustom : '#proud-pager',
    prevText: '<img src="images/slider_arrow.png" alt="PREVIEW" />',
    nextText: '<img src="images/slider_arrow.png" alt="NEXT" />',
    auto: false
});

var adviserSlider = $('#adviser-slider').bxSlider({
    mode:'fade', //vertical horizontal
    controls: true,
    pager: true,
    // pagerCustom : '#adviser-pager',
    prevText: '<img src="img/adviser-slider_prev01.png" alt="PREVIEW" />',
    nextText: '<img src="img/adviser-slider_next01.png" alt="NEXT" />',
    auto: false
});

$(window).on('resize load',function(){
    setTimeout( function(){
        if(window.innerWidth >= 768) {
            proudSlider.destroySlider();
        } else {
            proudSlider.reloadSlider();
        }
    },100)
});

// $('.personality_list').bxSlider({
//     mode:'horizontal', //vertical horizontal
//     controls: true,
//     pager: true,
//     // pagerCustom : '#pager',
//     prevText: '<img src="images/slider_arrow.png" alt="PREVIEW" />',
//     nextText: '<img src="images/slider_arrow.png" alt="NEXT" />',
//     auto: false
// });
/*--------------------------
    UI
----------------------------*/

/* accordion */
$(function() {
    if(window.innerWidth>768) {
        $('.faq__accordion:nth-child(2)').addClass('open');
    }
    var $accordion = $('[data-accordion=wrap]');
    $.each( $accordion, function(i,e){
        var $toggle = $(e).find('[data-accordion=toggle]');
        var $content = $(e).find('[data-accordion=content]');
        if( $(e).hasClass('open') ){
            $content.show();
        } else {
            $content.hide();
        }
        $($toggle).on('click',function(){
            if( $(e).hasClass('open') ){
                $content.slideUp();
                $(e).removeClass('open');
            } else {
                $content.slideDown();
                $(e).addClass('open');
            }
            return false;
        });

        var close = $(e).find('.close');
        close.on('click',function(){
            $(e).removeClass('open');
            $content.slideUp();
            return false;
        });
    });
});
$(function() {
function readMore(){
    var $readMoreBtn = $('.readmore-btn');
    $($readMoreBtn).on('click',function(){
        $(this).prev('.detail-txt').children('.ds-none').fadeIn();
        $(this).prev('.detail-txt').children('.txt-deco').css('display','none');
        $(this).fadeOut(1);
    });
}
readMore();
});

/*--------------------------
    scroll
----------------------------*/
/* アンカーリンクのスムーススクロール */
$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var pc_offset = 0;
    var sp_offset = 0;
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var offset = window.innerWidth > 767 ? pc_offset : sp_offset;
    var position = target.offset().top - offset
    $('body,html').animate({scrollTop:position}, speed, 'swing');
});


})(this, jQuery);
