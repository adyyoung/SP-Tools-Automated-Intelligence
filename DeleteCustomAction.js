(function() {
	
	var customActionTitle = prompt("Delete User Custom Action by Title:","");
	if(customActionTitle ==null)return;
	
	if(confirm("Are you sure you want to delete User Custom Action '"+customActionTitle+ "'?")==false) return;

	var context = SP.ClientContext.get_current();
	var web = context.get_web();
	var actions = web.get_userCustomActions();
	context.load(actions);
	context.executeQueryAsync(function() {

		var actionToDelete;
		actions.forEach(function(action) {
 			if(action.get_title() == customActionTitle){
				actionToDelete = action;
			}
		});
		
		actionToDelete.deleteObject();
		context.executeQueryAsync();
		console.log("Deleted " + customActionTitle);
		alert("User custom action '"+customActionTitle+"' has beed deleted.");
			
	});

	

	
})()
