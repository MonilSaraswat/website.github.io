$(document).on('click','a.smooth',function(e){e.preventDefault();var $link=$(this);var anchor=$link.attr('href');$('html, body').stop().animate({scrollTop:$(anchor).offset().top},1000);});(function($){$(document).ready(function(){$.slidebars();});})(jQuery);(function($){var $container=$('.masonry-container');$container.imagesLoaded(function(){$container.masonry({columnWidth:'.masonry-item',itemSelector:'.masonry-item'});});})(jQuery);SyntaxHighlighter.all();jQuery(document).ready(function(){$('.nav').on('click mousedown mouseup touchstart touchmove','a.has_children',function(){if($(this).next('ul').hasClass('open_t')&&!$(this).parents('ul').hasClass('open_t')){$('.open_t').removeClass('open_t');return false;}
$('.open_t').not($(this).parents('ul')).removeClass('open_t');$(this).next('ul').addClass('open_t');return false;});$(document).on('click',':not(.has_children, .has_children *)',function(){if($('.open_t').length>0){$('.open_t').removeClass('open_t');$('.open_t').parent().removeClass('open');return false;}});$("#back-top").hide();$(function(){$(window).scroll(function(){if($(this).scrollTop()>100){$('#back-top').fadeIn();}else{$('#back-top').fadeOut();}});$('#back-top a').click(function(){$('body,html').animate({scrollTop:0},500);return false;});});$("#enrol").hide();$(function(){$(window).scroll(function(){if($(this).scrollTop()>100){$('#enrol').fadeIn();}else{$('#enrol').fadeOut();}});});});new WOW().init();jQuery(document).ready(function(){$('#status').fadeOut();$('#preloader').delay(350).fadeOut('slow');$('body').delay(350).css({'overflow':'visible'});});$("[name='full-width-checkbox']").bootstrapSwitch();(function($){$(window).on("load",function(){$(document).scrollzipInit();$(document).rollerInit();});$(window).on("load scroll resize",function(){$('.numscroller').scrollzip({showFunction:function(){numberRoller($(this).attr('data-slno'));},wholeVisible:false,});});$.fn.scrollzipInit=function(){$('body').prepend("<div style='position:fixed;top:0px;left:0px;width:0;height:0;' id='scrollzipPoint'></div>");};$.fn.rollerInit=function(){var i=0;$('.numscroller').each(function(){i++;$(this).attr('data-slno',i);$(this).addClass("roller-title-number-"+i);});};$.fn.scrollzip=function(options){var settings=$.extend({showFunction:null,hideFunction:null,showShift:0,wholeVisible:false,hideShift:0,},options);return this.each(function(i,obj){$(this).addClass('scrollzip');if($.isFunction(settings.showFunction)){if(!$(this).hasClass('isShown')&&($(window).outerHeight()+$('#scrollzipPoint').offset().top-settings.showShift)>($(this).offset().top+((settings.wholeVisible)?$(this).outerHeight():0))&&($('#scrollzipPoint').offset().top+((settings.wholeVisible)?$(this).outerHeight():0))<($(this).outerHeight()+$(this).offset().top-settings.showShift)){$(this).addClass('isShown');settings.showFunction.call(this);}}
if($.isFunction(settings.hideFunction)){if($(this).hasClass('isShown')&&(($(window).outerHeight()+$('#scrollzipPoint').offset().top-settings.hideShift)<($(this).offset().top+((settings.wholeVisible)?$(this).outerHeight():0))||($('#scrollzipPoint').offset().top+((settings.wholeVisible)?$(this).outerHeight():0))>($(this).outerHeight()+$(this).offset().top-settings.hideShift))){$(this).removeClass('isShown');settings.hideFunction.call(this);}}
return this;});};function numberRoller(slno){var min=$('.roller-title-number-'+slno).attr('data-min');var max=$('.roller-title-number-'+slno).attr('data-max');var timediff=$('.roller-title-number-'+slno).attr('data-delay');var increment=$('.roller-title-number-'+slno).attr('data-increment');var numdiff=max-min;var timeout=(timediff*1000)/numdiff;numberRoll(slno,min,max,increment,timeout);}
function numberRoll(slno,min,max,increment,timeout){if(min<=max){$('.roller-title-number-'+slno).html(min);min=parseInt(min)+parseInt(increment);setTimeout(function(){numberRoll(eval(slno),eval(min),eval(max),eval(increment),eval(timeout))},timeout);}else{$('.roller-title-number-'+slno).html(max);}}})(jQuery);$('.col-megamenu').matchHeight({byRow:true,property:'height',target:null,remove:false});