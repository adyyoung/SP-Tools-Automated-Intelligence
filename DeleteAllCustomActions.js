(function() {
	
	if(confirm("Are you sure you want to delete ALL custom actions on this web?")==false) return;

	var context = SP.ClientContext.get_current();
	var web = context.get_web();
	var actions = web.get_userCustomActions();
	context.load(actions);
	context.executeQueryAsync(function() {
		
		var actionsToDelete = [];
		
		actions.forEach(function(action) {
			actionsToDelete.push(action);
		});
		
		actionsToDelete.forEach(function(action){
			action.deleteObject();
			context.executeQueryAsync();
		});

		
 			
		
		console.log("Deleted All custom actions");
		alert("Deleted All custom actions");
			
	});

	

	
})()
