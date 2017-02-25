 function hideAllMessages()
{
   $(".alert").fadeOut(2000);
}
function showMessage()
{
    if($('#message').text() != '')
    {
       $('.alert').show();
       setTimeout(function() { $(".alert").fadeOut(2000); }, 3000);
   }
}
$(document).ready(function(e) {
   showMessage();
   $("#setting").validationEngine();
});
$(".close").on("click",function(e) {
        hideAllMessages();
        e.preventDefault();
    });
// submit form
$("#btnSubmit").click(function(e){
    e.preventDefault();
    if($('#setting').validationEngine('validate'))
    {
        $('form#setting').submit();
    }
});