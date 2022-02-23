let convert = () =>{
    var form_data = new FormData();
	var file_data = $('#file').prop('files')[0]

    form_data.append('file',file_data);
	$.ajax({
        url			: 'http://dev.knicles.my.id:2390/api',
        cache		: false,
        contentType	: false,
        processData	: false,
        data 		: form_data,
        type 		: 'POST',
        success 	: function(data){
            let jsonData = JSON.parse(data);
            window.open(jsonData['ok'],'_blank');
        }
    })
}