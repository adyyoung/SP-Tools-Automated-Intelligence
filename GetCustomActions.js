(function(){
	var context = SP.ClientContext.get_current();
	var web = context.get_web();
	var actions = web.get_userCustomActions();
	context.load(actions);
	context.executeQueryAsync(function() {
		console.log("--------------Custom Actions---------------");
		actions.forEach(function(action) {
 			console.log(action.get_title()); 
		});

	}) 
})();