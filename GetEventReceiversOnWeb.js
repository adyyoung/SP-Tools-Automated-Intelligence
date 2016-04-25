(function() {
	
	var context = SP.ClientContext.get_current();
	var web = context.get_web();
	var rers = web.get_eventReceivers()
	context.load(rers);
	context.executeQueryAsync(function() {
		
		console.log("--------Remote Event Receivers (Total:"+ rers.get_count() +")-----------");
		rers.forEach(function(rer) {
			console.log(rer);
			console.log("\t" + rer.get_receiverName());
			console.log("\t" + rer.get_receiverUrl());
			console.log("");
			
		});
		
			
	});
})()
