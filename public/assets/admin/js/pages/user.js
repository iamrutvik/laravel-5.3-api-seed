$(document).ready(function(e) {
    showMessage();
    userRules= {
            email: {
                required: true,
                email: true
            },
            name: 
            {
                required:true,
            }};
        $('#addUser').validate({
        errorElement:'em',
        rules: userRules,
        errorPlacement: function(error, element) {
            error.appendTo($(element).parent('div'));
        }   
    });
//   $("#addUser").validationEngine();
//    var config = {
//        height : 280,
//        width : 1000,
//        fullPage : true,
//        linkShowAdvancedTab : false,
//        scayt_autoStartup : true,
//        enterMode : Number(2),
//        toolbar: [['Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript'], ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'Blockquote'], ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'], ['Link', 'Unlink', 'Anchor'], ['Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak'], '/', ['Styles', 'Format', 'Font', 'FontSize'], ['TextColor', 'BGColor']]
//    };
//    $("#page_content").ckeditor(config);
});

$(".close").on("click",function(e) {
        hideAllMessages();
        e.preventDefault();
    });
    
function showMessage()
{
    if($('#message').text() != '')
    {
       $('.alert').show();
       setTimeout(function() { $(".alert").fadeOut(2000); }, 3000);
   }
}

function hideAllMessages()
{
   $(".alert").fadeOut(2000);
}



// submit form
//$("#btnSubmit").click(function(e){
//    e.preventDefault();
//    if($('#addUser').validationEngine('validate'))
//    {
//        $('form#addUser').submit();
//    }
//});