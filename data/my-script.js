// console.log($("#revMH .noTextDecoration").html());

// self.port.emit("alert", "help");

var len0 = $("#revMH .noTextDecoration").length;
var len1 = $(".author").length;

var sel_el = len0 > len1 ? $("#revMH .noTextDecoration") : $(".author");

var psn_ids_names = [];//[[id, name]]
sel_el.each(function(){
	// console.log($(this).attr("href"));
	var href = $(this).attr("href");
	var psn_id = href.split("/")[4];
	psn_ids_names.push([psn_id, $(this).text()]);
});


var email_get_url = "http://www.amazon.com/gp/profile/{{psn_id}}/customer_email";
var profile_url = "http://www.amazon.com/gp/pdp/profile/";

var email_res = [];//[[email,name]]
var count = 0;
psn_ids_names.forEach(function(item){
	$.ajax({
		url: email_get_url.replace("{{psn_id}}", item[0]),
		success:function(json){
			if(json.status == 'ok' && json.data.email != null){
				email_res.push([json.data.email, item[1], profile_url+item[0]]);
			}	
			++count;
			if(count == psn_ids_names.length){
				var r = email_res.map(function(item){
					return item.join(",");
				});
				alert(r.join("\n"));
			}
		},
		dataType:"json",
		async: true,
		
	});
});
