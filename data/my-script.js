// console.log($("#revMH .noTextDecoration").html());

self.port.emit("alert", "help");

var len0 = $("#revMH .noTextDecoration").length;
var len1 = $(".author").length;

var sel_el = len0 > len1 ? $("#revMH .noTextDecoration") : $(".author");

var psn_ids = [];
sel_el.each(function(){
	// console.log($(this).attr("href"));
	var href = $(this).attr("href");
	var psn_id = href.split("/")[4];
	psn_ids.push(psn_id);
});


var email_get_url = "http://www.amazon.com/gp/profile/{{psn_id}}/customer_email";
var email_res = [];
var count = 0;
psn_ids.forEach(function(item){
	$.ajax({
		url: email_get_url.replace("{{psn_id}}", item),
		success:function(json){
			if(json.status == 'ok' && json.data.email != null){
				email_res.push(json.data.email);
			}	
			++count;
			if(count == psn_ids.length){
				alert(email_res.join(","));
			}
		},
		dataType:"json",
		async: true,
		
	});
});
