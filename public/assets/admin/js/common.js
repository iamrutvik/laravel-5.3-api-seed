var token = $('input[name="_token"]').val();
$(document).ready(function(e) {
    hideAllMessages();
    //$("#textSearch").val('');
    $("#searchType").val('');
    $("#searchStatus").val('');
    $(".checkbox").removeClass('checked');
    $("input[type='checkbox']").prop('checked',false);
    
  
    jQuery.validator.addMethod("ckrequired", function (value, element) {  
            var idname = $(element).attr('id');  
            var editor = CKEDITOR.instances[idname];  
            var ckValue = GetTextFromHtml(editor.getData()).replace(/<[^>]*>/gi, '').trim();  
            if (ckValue.length === 0) {  
            //if empty or trimmed value then remove extra spacing to current control  
                $(element).val(ckValue);  
            } else {  
            //If not empty then leave the value as it is  
                $(element).val(editor.getData());  
            }  
            return $(element).val().length > 0;  
        }, "Please enter content.");  
        
    function GetTextFromHtml(html) {  
            var dv = document.createElement("DIV");  
            dv.innerHTML = html;  
            return dv.textContent || dv.innerText || "";  
    }      
   
    $("#addProductcategory").validate({
		rules :{
			name:{required:true}
		},messages: {
			name : {required: "Please enter name."}				
		},
		errorElement: "em",		 
    });
    
    $("#addProduct").validate({
                ignore: [],
		rules :{
			name:{required:true},
                        product_category_id:{required:true}
		},messages: {
			name : {required: "Please enter name."},
                        product_category_id : {required: "Please select category."}	
		},
		errorElement: "em",		 
    });
    
     $("#addCms").validate({
                ignore: [],
		rules :{
			type:{required:true},
                        content:{ckrequired:true}
		},messages: {
			type : {required: "Please enter type."},
                        //content : {required: "Please enter content."}	
		},
		errorElement: "em",
                
    });
    
    $("#addUser").validate({
                ignore: [],
		rules :{
			email:{required:true , email:true},
			name:{required:true},
			latitude:{number:true},
            longitude:{number:true},
			postal_code:{number:true},
		},messages: {
			email : {required: "Enter email address." , email:"Enter valid email address."},
			name : {required: "Please enter name."},
			latitude : {number: "Enter Digits only."},
            longitude : {number: "Enter Digits only."},
			postal_code : {number: "Enter Digits Only."},	
		},
		errorElement: "em",
                
    });
    
    $("#setting").validate({
                ignore: [],
		rules :{
			name:{required:true},
                        email:{required:true , email:true},
                        password: {minlength:6}
		},messages: {
			name : {required: "Enter first name."},
                        email : {required: "Enter email address." , email:"Enter valid email address."}
		},
		errorElement: "em",
                
    });
	
	$("#forgotForm").validate({
                ignore: [],
		rules :{
                 email:{required:true , email:true},
		},messages: {
                 email : {required: "Enter email address." , email:"Enter valid email address."}
		},
		errorElement: "em",
                
    });
	
	$("#resetForm").validate({
                ignore: [],
		rules :{
	    		 email:{required:true , email:true},
                 password: {minlength:6},	   
                    	password_confirmation: {minlength:6,equalTo: "#password"},
		},messages: {
			     email : {required: "Enter email address." , email:"Enter valid email address."},
                 password : {required: "Please enter password."},
                        password_confirmation : {required :"Please enter confirm password."}
		},
		errorElement: "em",
                
    });
    
    var dateToday = new Date();
    $('#dob').datetimepicker(
    {
        timepicker:false,
        format:'m/d/Y',
        scrollMonth:false,
        scrollTime:false,
        scrollInput:false,
        maxDate: 0
    });
    
    $('#dob').keydown(function() {
      //code to not allow any changes to be made to input field
      return false;
    });
    
    
    /*var config = {
    height : 280,
    width : 1000,
    fullPage : true,
    linkShowAdvancedTab : false,
    scayt_autoStartup : true,
    enterMode : Number(2),
    extraPlugins: 'oembed',
    toolbar : 'oembed',
    //filebrowserImageUploadUrl : 'http://localhost:8000/assets/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
    filebrowserImageUploadUrl : 'http://autoassist.dev-applications.net/assets/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
    toolbar: [['Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript'], ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'Blockquote'], ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'], ['Link', 'Unlink', 'Anchor'], ['Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak'], '/', ['Styles', 'Format', 'Font', 'FontSize'], ['TextColor', 'BGColor']]
    };
    
    $("#content").ckeditor(config);*/
});
//Checked all and unchecked all checkbox
$("#tableData").delegate(".maincheckbox",'click',function(){
    $chk = $(".maincheckbox").is(":checked");
    if($chk)
    {
        $(".checkbox").addClass('checked');
        $("input[type='checkbox']").prop('checked',true);
    }
    else
    {
        $(".checkbox").removeClass('checked');
        $("input[type='checkbox']").prop('checked',false);
    }
    
});



function createCookie(name, value, days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            }
            else var expires = "";               

            document.cookie = name + "=" + value + expires + "; path=/";
        }

 function setCookie(key, value) {
            var expires = new Date();
            expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
            document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
 }

 function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
 }
 
 
function GetParameterValues(param) {  
    var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');  
    for (var i = 0; i < url.length; i++) {  
        var urlparam = url[i].split('=');  
        if (urlparam[0] == param) {  
            return urlparam[1];  
        }  
    }  
}  

// Function to change status
function changeStatus(modName,flag,id)
{
    var page = GetParameterValues('page');  
    
    var checkedValues = '';
    if(id != '')
        checkedValues = id;
    else
    {
        checkedValues = $('input:checkbox:checked').map(function() {
            return this.value;
        }).get();
    }
    //console.log(checkedValues);
    if(checkedValues == '')
    {
        myAlert("Please select any record first","error");
        return false;
    }
    else
    {
       $("#"+modName+"-confirm").dialog
       ({
           height:200,
           resizable:false,
           width: 400,
           modal: true,
           closeText: "hide",
           draggable: false,
           buttons: 
           {
               Ok: function() 
               {
                   $( this ).dialog( "close" );
                   $.ajax({
                    headers: { 
                        'X-CSRF-Token': token
                    },
                    url:baseUrl+modName+'/changeStatus',
                    data:"checkedValues="+checkedValues+"&status="+flag+"&page="+page,
                    type:'POST',
                    success:function(res)
                    {
                        window.location.href = window.location.href;
                        enableCheckbox();
                    },
                    error:function(res) 
                    {
                            result = false;			
                    }
                });	
               },
               Cancel: function()
               {
                   $('.checkbox').removeClass("checked");
		   $('.check').removeAttr("checked");
                   $( this ).dialog( "close" );
                   return false;
               }
           }
       });
       return false;
    }
}
// Function to delete data
function deleteData(modName,id)
{
    var checkedValues = '';
    if(id != '')
        checkedValues = id;
    else
    {
        checkedValues = $('input:checkbox:checked').map(function() {
            return this.value;
        }).get();
    }
    //console.log(checkedValues);
    if(checkedValues == '')
    {
        myAlert("Please select any record first","error");
        return false;
    }
    else
    {
       $("#"+modName+"-confirm").dialog
       ({
           height:200,
           resizable:false,
           width: 400,
           modal: true,
           closeText: "hide",
           draggable: false,
           buttons: 
           {
               Ok: function() 
               {
                   $( this ).dialog( "close" );
                   $.ajax({
                       headers: { 
                           'X-CSRF-Token': token
                       },
                       url:baseUrl+modName+'/deleteData',
                       data:"checkedValues="+checkedValues,
                       type:'POST',
                       success:function(res)
                       {
                           if(res == '1'){
                               //myAlert(modName+" deleted successfully.","success");
                               window.location.href = window.location.href;}
                           else if(res == '0'){
                               myAlert("First you need to delete sub category.","error");
                               result = false;}
                       },
                       error:function(res) 
                       {
                               result = false;			
                       }
                   });
               },
               Cancel: function()
               {
                   $('.checkbox').removeClass("checked");
		   $('.check').removeAttr("checked");
                   $( this ).dialog( "close" );
                   return false;
               }
           }
       });
       return false;
    }
}

// go to list page
function backtolist()
{
	window.location.href = document.referrer;	
}
// enable checkbox
function enableCheckbox()
{
    $('input:checkbox').change(function(){
            if($(this).is(":checked")) {
                    $(this).parent('label.checkbox').addClass("checked");
            } else {
                    $(this).parent('label.checkbox').removeClass("checked");
            }
    });
}

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

 $('#frm_search').on('submit', function() {
        
      var search  = $( "#textSearch" ).val(); 

      filter_search(search);

   }); 

//search record
$( "#btnSearch" ).click(function() {
  
  filter_search($( "#textSearch" ).val());
  
});

// Function to cleasr search and get all data at user listing
$("#clearSearch").click(function(){
    $("#textSearch").val('');
    filter_search($( "#textSearch" ).val());
});

function filter_search(field){
	var url = window.location.href;	
	var sf = field;
			
	url = setGetParameter(url,'keyword',sf);			
	window.location.href = url;	
     
}

function filter_active(field){
	var url = window.location.href;	
	var sf = field;
        	
	url = setGetParameter(url,'status',sf);			
	window.location.href = url;	
     
}

function filter_status(field, module){
	var url = window.location.href;	
	var sf = field;
        
        if(module == 'users')
        {
            url = setGetParameter(url,'verify',sf);	
        }
        else
        {
            url = setGetParameter(url,'status',sf);	
        }
			
	window.location.href = url;	
     
}

function sort_order(field){
	var url = window.location.href;	
	var so = "asc";
	var sf = field;
		
	if(url.indexOf("so=asc") >= 0 && url.indexOf("sf="+field) >= 0 ){
		so = "desc";
	}
	 		
	url = setGetParameter(url,'so',so);
	url = setGetParameter(url,'sf',sf);			
	window.location.href = url;	
}

function setGetParameter(url, paramName, paramValue){
	    
    var hash = location.hash;
    url = url.replace(hash, '');
    if (url.indexOf(paramName + "=") >= 0)
    {
        var prefix = url.substring(0, url.indexOf(paramName));
        var suffix = url.substring(url.indexOf(paramName));
        suffix = suffix.substring(suffix.indexOf("=") + 1);
        suffix = (suffix.indexOf("&") >= 0) ? suffix.substring(suffix.indexOf("&")) : "";
        url = prefix + paramName + "=" + paramValue + suffix;
    }
    else
    {
    if (url.indexOf("?") < 0)
        url += "?" + paramName + "=" + paramValue;
    else
        url += "&" + paramName + "=" + paramValue;
    }
    return  url + hash;
}

$(".close").on("click",function(e) {
        hideAllMessages();
        e.preventDefault();
    });
    
function showMessage()
{
    if($('#message').text() != '')
    {
       $('.alert').show();
       setTimeout(function() { $(".alert").fadeOut(5000); }, 3000);
   }
}

function hideAllMessages()
{
   $(".alert").fadeOut(5000);
}

//set file name
function setfilename(val)
{
	var fileName = val.substr(val.lastIndexOf("\\")+1, val.length);
    $("#setfilename").html(fileName);
}
//end
  
  //set file name
  function setfilename1(val)
  {
    var fileName = val.substr(val.lastIndexOf("\\")+1, val.length);
    $("#setfilename1").html(fileName);
  }
  //end

