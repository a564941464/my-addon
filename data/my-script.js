// console.log($("#revMH .noTextDecoration").html());

// self.port.emit("alert", "help");

var top_reviewers_href ="https://www.amazon.com/review/top-reviewers";
var page_url = window.location.href;

var psn_ids_names = [];//[[id, name]]
var email_get_url = "https://www.amazon.com/gp/profile/{{psn_id}}/customer_email";
var profile_url = "https://www.amazon.com/gp/pdp/profile/";


if(page_url.indexOf(top_reviewers_href)==0){//处理top_reviewers
	var psn_ids = $("a[name]");
	alert(JSON.stringify(psn_ids));
	psn_ids.each(function(){
		var psn_id = $(this).attr("name");
		psn_ids_names.push([psn_id, "noname"]);
	});
}else{
	var len0 = $("#revMH .noTextDecoration").length;//product page
	var len1 = $(".author").length;//reviews page 
	var sel_el = len0 > len1 ? $("#revMH .noTextDecoration") : $(".author");
	sel_el.each(function(){
		// console.log($(this).attr("href"));
		var href = $(this).attr("href");
		var psn_id = href.split("/")[4];
		psn_ids_names.push([psn_id, $(this).text()]);
	});
}

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
					return item.join(", ");
				});
				alert(r.join("\n"));
			}
		},
		dataType:"json",
		async: true,
		
	});
});
