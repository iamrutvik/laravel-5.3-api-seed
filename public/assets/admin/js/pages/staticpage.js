$(document).ready(function(e) {
   $("#addStaticPage").validationEngine();
    var config = {
        height : 280,
        width : 1000,
        fullPage : true,
        linkShowAdvancedTab : false,
        scayt_autoStartup : true,
        enterMode : Number(2),
        toolbar: [['Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript'], ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'Blockquote'], ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'], ['Link', 'Unlink', 'Anchor'], ['Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak'], '/', ['Styles', 'Format', 'Font', 'FontSize'], ['TextColor', 'BGColor']]
    };
    $("#page_content").ckeditor(config);
});

// submit form
$("#btnSubmit").click(function(e){
    e.preventDefault();
    if($('#addStaticPage').validationEngine('validate'))
    {
        $('form#addStaticPage').submit();
    }
});