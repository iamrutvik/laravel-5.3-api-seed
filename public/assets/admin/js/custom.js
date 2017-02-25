// JavaScript Document

if($(window).width() > 767){
    
$(document).ready(function(){
  resizeDiv();
});

window.onresize = function(event) {
resizeDiv();
}

function resizeDiv() {
vpw = $(window).width();
vph = $(window).height();
vth = $('.header').innerHeight(); 
vfh = $(".footer").innerHeight();
vnh = $(".nav").innerHeight(); 
vwg = vph - vth - vnh - vfh - 40;
vtt = vph - vth- vfh;    

//$('#page-wrapper').css({'min-height': vph + 'px'});
//$('.white_bg').css({'min-height': vwg + 'px'});
$('.page-content').css({'min-height': vwg + 'px'});
$('.content').css({'min-height': vwg + 'px'});
$('.innerpage-content').css({'min-height': vtt + 'px'});    
};
};

/*$(document).ready(function(e) {
vpw = $(window).width();
vph = $(window).height();
vth = $('.header').innerHeight(); 
vfh = $(".footer").innerHeight();
vnh = $(".nav").innerHeight(); 
vwg = vph - vth - vnh - vfh - 40;
vtt = vph - vth- vfh;    

//$('#page-wrapper').css({'min-height': vph + 'px'});
//$('.white_bg').css({'min-height': vwg + 'px'});
$('.page-content').css({'min-height': vwg + 'px'});
$('.content').css({'min-height': vwg + 'px'});
$('.innerpage-content').css({'min-height': vtt + 'px'});    
});*/

$(document).ready(function(e) {
	
    $('.login-frm input:checkbox').change(function(){
		if($(this).is(":checked")) {
			$('label.login-check').addClass("checked");
		} else {
			$('label.login-check').removeClass("checked");
		}
	});
	$('input:checkbox').change(function(){
		if($(this).is(":checked")) {
			$(this).parent('label.checkbox').addClass("checked");
		} else {
			$(this).parent('label.checkbox').removeClass("checked");
		}
	});
	/*$('input:radio').click(function() {
		$('label:has(input:radio:checked)').addClass('active');
		$('label:has(input:radio:not(:checked))').removeClass('active');
	});*/
	/*$('input:radio').click(function() {
		$('label:has(input:radio:checked)').addClass('checked');
		$('label:has(input:radio:not(:checked))').removeClass('checked');
	});*/
	/*$('input:radio').change(function(){
		if($(this).is(":checked")) {
			$(this).parent('label.radio').addClass("checked");
		}
		if($(this).is("!:checked")) {
			$(this).parent('label.radio').removeClass("checked");
		}
		 else {
			$(this).parent('label.radio').removeClass("checked");
		}
	});
	*/
	$('.collspan-conetnt').hide(); 
	$('.collspan-row:first-child').find('.collspan-conetnt').show(); 
	 $(".collspan-title").click(function(){
	 
		if(false == $(this).next().is(':visible')) {
			$('.collspan-conetnt').slideUp(800);
			$(".collspan-title").removeClass('active');
		}
		$(this).next().slideDown(800);
		$(this).addClass('active');
		
	});
    
	var $footer = $("footer").height() + 40;
	//$("#page-content").css("padding-bottom", $footer);
    $(".innerpage-content").css("padding-bottom", $footer);
	
	$('.filter-toggleslide').hide();
	$('.filter-toggle').click(function(){
		$(this).toggleClass('show')
		$('.filter-toggleslide').slideToggle(300);
	})
	
	//$('select').select2();
	$(".select-control, .no-search").select2({
		minimumResultsForSearch: -1,
	});
	/*$('select').on('select2:open', function () {
		$('span.select2-results').parent().parent().addClass('bigdropdown');
	});
	$('#example_length select').select2();
	
	$("#tabs").tabs({active: 0});
	
	$("#filer_input").filer({
        maxSize: null,
        extensions: null,
        showThumbs: true,
        templates: {
            box: '<ul class="jFiler-items-list jFiler-items-grid"></ul>',
            item: '<li class="jFiler-item">\
                        <div class="jFiler-item-container">\
                            <div class="jFiler-item-inner">\
                                <div class="jFiler-item-thumb">\
                                    <div class="jFiler-item-status"></div>\
                                    <div class="jFiler-item-info">\
                                        <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>\
                                        <span class="jFiler-item-others">{{fi-size2}}</span>\
                                    </div>\
                                    {{fi-image}}\
                                </div>\
								<div><a class="icon-jfi-trash jFiler-item-trash-action remove-upload"></a></div>\
                            </div>\
                        </div>\
                    </li>',
            itemAppend: '<li class="jFiler-item">\
                            <div class="jFiler-item-container">\
                                <div class="jFiler-item-inner">\
                                    <div class="jFiler-item-thumb">\
                                        <div class="jFiler-item-status"></div>\
                                        <div class="jFiler-item-info">\
                                            <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>\
                                            <span class="jFiler-item-others">{{fi-size2}}</span>\
                                        </div>\
                                        {{fi-image}}\
                                    </div>\
									<div><a class="icon-jfi-trash jFiler-item-trash-action"></a></div>\
                                </div>\
                            </div>\
                        </li>',
            progressBar: '<div class="bar"></div>',
            itemAppendToEnd: false,
            removeConfirmation: true,
            _selectors: {
                list: '.jFiler-items-list',
                item: '.jFiler-item',
                progressBar: '.bar',
                remove: '.jFiler-item-trash-action'
            }
        },
        captions: {
            button: "Choose Files",
            feedback: "Choose files To Upload",
            feedback2: "files were chosen",
            drop: "Drop file here to Upload",
            removeConfirmation: "Are you sure you want to remove this file?",
            errors: {
                filesLimit: "Only {{fi-limit}} files are allowed to be uploaded.",
                filesType: "Only Images are allowed to be uploaded.",
                filesSize: "{{fi-name}} is too large! Please upload file up to {{fi-maxSize}} MB.",
                filesSizeAll: "Files you've choosed are too large! Please upload files up to {{fi-maxSize}} MB."
            }
        }
    });*/
	
	if($('#example').length)
        {
	$('#example').DataTable({responsive: true, columnDefs: [ { orderable: false, targets: [0] }, { visible: false, } ], order: [[ 1, 'asc' ]],});
        }

});