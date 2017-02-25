

// JavaScript Document
$(window).load(function(e) {
	$("body").css("overflow","hidden");
	setTimeout(function(){
	  $("body").css("overflow","visible");
	  $("#status").fadeIn();
	  $("#preloader").fadeIn();
	  
	  $("#status").fadeOut();
	  
		// will fade out the whole DIV that covers the website.
	  $("#preloader").delay(0).fadeOut("slow");
	  new WOW().init();
	});
	
	var windowHeight = $(window).height();
	var footerHeight = $('.footer').height();
	var pageHeight = windowHeight - footerHeight;
	$('.page-content').css("min-height", pageHeight);

	var Mobilewindow = $(window).width();
	$('.filter > a').click(function(e) {
		$('.page').removeClass('showMenu');
		$('.page').toggleClass('open');
	});
	$('.toggle').click(function(e) {
		$('.page').removeClass('open');	
		$('.page').toggleClass('showMenu');	
	});
	$('.bodyclose').click(function(e) {
		$('.page').removeClass('open');
		$('.page').removeClass('showMenu');
	});
	var windowHeight1 = $(window).height();
	var stikyHeader = $('.Stiky-Header').height();
	var SidebarHeader = $('.sidebar').height();
	var accHeight =  windowHeight1 - stikyHeader;
	
	
	if(Mobilewindow < 768){
		$('.sidebar').css("top", stikyHeader);
		$('.Stiky-Header').scrollToFixed();
		$('.sidebar').css("max-height", accHeight);
		$('.sidebar').css("position","fixed");
		$('.menu').css("top", stikyHeader);
		$('.menu').css("max-height", accHeight);
		
	}
	//$('.viewMorecontact').scrollpanel();
	$('.viewMorecontact').animate({
        scrollTop: $('.viewMorecontact').height()
    }, 1000);

});
$(window).resize(function(e) {
	var windowHeight = $(window).height();
	var footerHeight = $('.footer').height();
	var pageHeight = windowHeight - footerHeight;
	$('.page-content').css("min-height", pageHeight);
	
	var windowHeight1 = $(window).height();
	var stikyHeader = $('.Stiky-Header').height();
	var SidebarHeader = $('.sidebar').height();
	
	var accHeight =  windowHeight1 - stikyHeader;
	
	
	var Mobilewindow = $(window).width();
	if(Mobilewindow < 768){
		$('.Stiky-Header').scrollToFixed();
		$('.sidebar').css("top", stikyHeader);
		$('.sidebar').css("max-height", accHeight);
		$('.menu').css("top", stikyHeader);
		$('.menu').css("max-height", accHeight);
		
	}
	//$('.viewMorecontact').scrollpanel();
});
 

$(document).ready(function(e) {


	
/*var pane = $('.viewMorecontact');
pane.jScrollPane(
	{
		animateScroll: true,
		autoReinitialise: true
	}
);
$('.jspContainer').css('max-height','600px');
var api = pane.data('jsp');*/


/*$('ul.inbox_list li').click(function(e) {
//  $('.viewMorecontact').scrollpanel('update');   
	var liPos = $("ul.chatlist li.position").offset().top;
	var liPosition = liPos.position();
	
	alert(liPosition);
	$('#toY').val(liPosition);
	api.scrollTo(parseInt($('#toX').val()), parseInt($('#toY').val()));
});
*/
	
	var HeaderHeight = $('.header').height();
	$('.top-margin').css("margin-top", HeaderHeight);
	
	var providetab = $('.provide-tabs');
	providetab.scrollToFixed();
	
	$(".provide-tabs a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".provide-content-list > li").removeClass("active");
        $(tab).addClass("active");
		$(".provide-content-list > li").css("opacity","0.2");
		$(tab).css("opacity","1");
    });
	$(".provide-content-list > li").mouseover(function(e) {
        $(".provide-content-list > li").css("opacity","0.2");
		$(this).css("opacity","1");
		$(".provide-content-list > li").mouseout(function(e) {
			$(".provide-content-list > li").css("opacity","1");
			if($(".provide-content-list > li").hasClass("active")){
				$(".provide-content-list > li").css("opacity","0.2");	
				$(".provide-content-list > li.active").css("opacity","1");	
			}
		});		
    });
	
	
	
	
	
	$('.form__input').blur(function() {

		if ($(this).val()) {
			$(this).closest( '.form__wrapper' ).addClass('form--filled');
		} else {
			$(this).closest( '.form__wrapper' ).removeClass('form--filled');
		}	
	});

	$('#go-to-top').each(function(){
	  $(this).click(function(){ 
		$('html').animate({ scrollTop: 0 }, 'slow'); return true; 
	  });
	});
	
	var $filter = $('.provide-tabs');
	$filter.find('a').click(function() {
		$filter.find('a').removeClass('active');
		$(this).addClass('active');
	});
	
	$('.btn-view').click(function(e) {
            var ahtml = $(this).html();
            if(ahtml == 'View More')
                $(this).html('View Less');
            else
                $(this).html('View More');
        $(this).parents('.collspan').toggleClass('open');
    });
	
	/* == Accrodian == */
	
	
	$('.acrodian-content').hide(); 
	$('.accordion-row:first-child').find('.acrodian-content').show(); 
	 $(".acrodian-title").click(function(){
                $('.sp-viewport').css('height','350px');
		if(false == $(this).next().is(':visible')) {
			$('.acrodian-content').slideUp(800);
			$(".acrodian-title").removeClass('active');
		}
		$(this).next().slideToggle(800);
		$(this).toggleClass('active');
//		$('.hidemore').trigger('click');
	});
	
	$('.collapse-content').hide(); 
	$(".collapse-title").click(function(){
	 
		if(false == $(this).next().is(':visible')) {
			$('.collapse-content').slideUp(800);
			$(".collapse-title").removeClass('active');
		}
		$(this).next().slideDown(800);
		$(this).addClass('active');
		
	});
	
	var summaries = $('#sidebar');
	summaries.each(function(i) {
		var summary = $(summaries[i]);
		var next = summaries[i + 1];

		summary.scrollToFixed({
			marginTop: $('.header').outerHeight(true) + 0,
			limit: function() {
				var limit = 0;
				if (next) {
					limit = $(next).offset().top - $(this).outerHeight(true) - 10;
				} else {
					limit = $('.footer').offset().top - $(this).outerHeight(true) - 50;
				}
				return limit;
			},
			zIndex: 999,
			position:'absolute'
		});
	});
	
	$('input:checkbox').change(function(){
		if($(this).is(":checked")) {
			$(this).parent('label.checkbox').addClass("checked");
		} else {
			$(this).parent('label.checkbox').removeClass("checked");
		}
	});
	$('input:radio').change(function(){
		$('label.input-radio').removeClass("checked");
		if($(this).is(":checked")) {
			$(this).parent('label.input-radio').addClass("checked");
		} else {
			$(this).parent('label.input-radio').removeClass("checked");
		}
	});
	
	function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();            
			reader.onload = function (e) {
                            var fileExtension = ['jpeg', 'jpg','png','gif'];
                            var ext = input.files[0].name.split('.').pop().toLowerCase();
                            if ($.inArray(ext, fileExtension) == -1) {
                                myAlert("Only '.jpg','.gif','.png' formats are allowed.");
                                return false;
                               }
                            var file_size = input.files[0].size;
                            if(file_size>2097152) {
                                    myAlert("File size must be less than 2MB");
                                    return false;
                            } 
				$('#target').attr('src', e.target.result);
			}
			
			reader.readAsDataURL(input.files[0]);
		}
	}
	
	$("#imgInp").change(function(){
		readURL(this);
	});
	
	$('#timePickerFrom').timepicker({
		minuteStep:1,
	});
	$('#timePickerTo').timepicker();
	$('#datetimepickerFrom').datetimepicker({
		timepicker:false,
		format:'m-d-Y',
	}); 
	$('#datetimepickerTo').datetimepicker({
		timepicker:false,
		format:'m-d-Y',
	}); 
        
});
