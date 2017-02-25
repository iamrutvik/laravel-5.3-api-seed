$(document).ready(function(e) {
    setTimeout(function() {
        $('.alert').fadeOut('fast');
    }, 6000); // <-- time in milliseconds
    
    
    
});
$('body').delegate(".form__input","blur",function(){
    if ($(this).val()) {
                $(this).closest( '.form__wrapper' ).addClass('form--filled');
        } else {
                $(this).closest( '.form__wrapper' ).removeClass('form--filled');
        }
});
$('input[type=text], textarea, select').each(function(index, item){
        if($(item).val() !== '') {
            $(item).closest('.form__wrapper').addClass('form--filled');   
        }
    });
 
// alert function
function myAlert(msg, type)
{
    type = typeof (type) != "undefined" ? type : "error";
    new PNotify({
        title: 'Alert' + ": " + type,
        text: msg,
        type: type,
        hide: true,
        addclass: 'custom',
        opacity: 1,
//        nonblock: {
//            nonblock: true
//    }
    });
}
// phone number format
$('#phone').keyup(function(e) {
  this.value = this.value.replace(/(\d{3})\-?(\d{3})\-?(\d{4})/,'$1-$2-$3');
});
// salary and wages validation
function salaryValidation(flag,nextFlag)
{
    var word = $("#"+flag).val();
    if(word != '')
    {
        $('#'+nextFlag).prop('disabled',true);
        $('#'+nextFlag).val('');
    }
    else 
        $('#'+nextFlag).prop('disabled',false);
}
// search data from nav bar
function searchData()
{
    var keyWord = $('#searchData').val();
    if(keyWord != '')
    {
        $(".joblisting li").show();
        $(".noli").removeClass('noli');
        $(".joblisting li:not(:containsIN('"+keyWord+"'))" ).addClass("noli");
        $(".noli").hide();
    }
    else
    {
        $(".joblisting li").show();
        $(".noli").removeClass('noli');
    }
}
$.extend($.expr[":"], {
"containsIN": function(elem, i, match, array) {
return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
}
});
$("#searchData").keypress(function(e) {
    if(e.which == 13) {
        searchData();
    }
});
