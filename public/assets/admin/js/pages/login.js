$(document).ready(function(e) {
    
    hideAllMessages();
    
$.validator.addMethod("CustomEmail", function(value, element) {
		return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value);
	}, "Please enter a valid email address.");    

$("#loginForm").validate({
		rules :{
			email:{CustomEmail:true},
			password: {minlength:6},
		},messages: {
			email : {required: "Please enter email address."},				
			password : {required :"Please enter password."},
					
		},
		errorElement: "em",		 
	});    

});

$("#msg").click(function(){
		$(this).slideUp('slow');
	});


function hideAllMessages()
{
   $(".alert").fadeOut(5000);
}
