$(document).ready(function(e) {
    $('#userData').validationEngine();
    var nowDate = new Date();
    $('#avail_from_time').timepicker({
            showMeridian: false,
            minuteStep:1,
	});
    $('#avail_to_time').timepicker({
                showMeridian: false,
		minuteStep:1,
	});
    $('#avail_from_date').datetimepicker({
            minDate:new Date(),
            timepicker:false,
            scrollMonth : false,
            scrollInput : false,
            //format:'Y-m-d',
            format:'m-d-Y',
            onClose:function(){
                 jQuery('#avail_to_date').val(jQuery('#avail_from_date').val())
               },
    }); 
    $('#avail_to_date').datetimepicker({
            timepicker:false,
            scrollMonth : false,
            scrollInput : false,
            //format:'Y-m-d',
            format:'m-d-Y',
            onShow:function( ct ){
                this.setOptions({
                 minDate:jQuery('#avail_from_date').val()?jQuery('#avail_from_date').val():false
                })
               },
    }); 
});
// Save Profile Form
$("#btnSubmit").click(function(e){
    e.preventDefault();
    if($('#userData').validationEngine())
    {
        $('form#userData').submit();
    }
});

//preview uploaded pdf
function readURL(input)
{
    if (input.files) {
        var files = input.files;
        var html = '';
        $("#certiUl").find('.newUploads').remove();
        for(var i =0;i<files.length;i++)
        {
            var fileExtension = ['jpeg', 'jpg','png','gif','pdf','doc','docx'];
            var ext = files[i].name.split('.').pop().toLowerCase();
            if ($.inArray(ext, fileExtension) == -1) {
             myAlert("Only '.jpg','.gif','.png','doc','.docx' or 'pdf' formats are allowed.");
             return false;
            }
            var imagetype = 'placeholde-img1.png';
            if(ext == 'pdf')
                imagetype = 'pdf-icon.png';
            else if(ext == 'doc' ||  ext == 'docx')
                imagetype = 'placeholde-word.png';
            html = '<li class="newUploads"><input type="hidden" name="certi[]" value="'+files[i].name+'"><div class="document-box"><a class="document-attached" href="javascript:void(0)"><img alt="" src="'+baseUrl+'assets/images/'+imagetype+'"></a><span class="attached-label">'+files[i].name+'</span><a class="btn btn-delete deleteCetri" href="javascript:void(0)" onclick="$(this).closest(\'li\').remove();">Delete</a></div></li>';
            
            $("#certiUl").append(html);
        }
        
//        $("#numberOfFile").html(files.length+" file(s) uploaded");
        $("#numberOfFile").show();
    }
}
// upload multiple certificates
$("#uploadCerti").change(function(){
            readURL(this);
    });