$(document).ready(function(e) {
    $('input[type=text],input[type=email], textarea, select').each(function(index, item){
        if($(item).val() !== '') {
            $(item).closest('.form__wrapper').addClass('form--filled');   
        }
    });
    
    });
function redesign(){
    $('input[type=text],input[type=email], textarea, select').each(function(index, item){
        if($(item).val() !== '') {
            $(item).closest('.form__wrapper').addClass('form--filled');   
        }
    });
}