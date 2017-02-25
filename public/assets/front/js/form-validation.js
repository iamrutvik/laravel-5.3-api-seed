$.validator.addMethod("customemail", 
    function(value, element) {
        return /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(value);
    }
);
$.validator.addMethod("custompassword", 
    function(value, element) {
        return /(?=.*\d)(?=.*[A-z]).{6,}/.test(value);
    }
);
$.validator.addMethod('selectcheck',
	function(value, element) {
        return (value != '0');
    }
);

$(function() {
  $("form[name='registration']").validate({
    rules: {
	  topicname: "required",
	  description: "required",
	  reply: "required",
      email: {
		required: true,
		customemail: true
      },
      password: {
        required: true,
        minlength: 6,
		custompassword: true
      },
	  selectbox: {
		selectcheck: true
	  }
    },
    messages: {
	  topicname: "Please enter topic name",
	  description: "Please enter topic description",
	  reply: "Please enter your message",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 6 characters long",
		custompassword : "Your password must have at least 1 digit and 1 letter."
      },
      email:{
		required: "Please enter an email address",
		customemail : "Please enter a valid email address"
	  },
	  selectbox: "Please select any option"
    },
    submitHandler: function(formregi) {
      formregi.submit();
    }
	
  });
 

});

$(function() {
  $("form[name='edit-account-detail']").validate({
    rules: {
      firstname: "required",
      lastname: "required",
	  companyname: "required",
	  bio: "required",
	  location: "required",
      email: {
		required: true,
		customemail: true
      },
      password: {
        required: true,
        minlength: 6,
		custompassword: true
      },
    },
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
	  companyname: "Please enter your company name",
	  bio: "Please enter your bio data",
	  location: "Please enter your location",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 6 characters long",
		custompassword : "Your password must have at least 1 digit and 1 letter."
      },
      email:{
		required: "Please enter an email address",
		customemail : "Please enter a valid email address"
	  },
    },
    submitHandler: function(formedit) {
      formedit.submit();
    }
	
  });
 

});

$(function() {
$("form[name='change-password']").validate({
	rules: {
	  newpassword: {
		minlength: 6,
		custompassword: true  
	  },
	  cnewpword: {
		minlength: 6,
		equalTo : "#newpassword"
	  }
	},
	messages: {
	   newpassword: {
		minlength: "Your password must be at least 6 characters long",
		custompassword : "Your password must have at least 1 digit and 1 letter."
	  },
	  cnewpword: {
		equalTo: "Confirm password do not match" 
	  }
	},
	submitHandler: function(formpw) {
      formpw.submit();
    }
});
});