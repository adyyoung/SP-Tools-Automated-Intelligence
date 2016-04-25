(function() {

	var listId = GetCurrentCtx().listName;
	var context = SP.ClientContext.get_current();
	var web = context.get_web();
	var lists = web.get_lists();
	var list = lists.getById(GetCurrentCtx().listName);
	var rootFolder = list.get_rootFolder(listId);
	var rootFolderItem = list.getItemById(0);
	debugger;

	context.load(rootFolder );
	context.loadrootFolderItem );
	context.executeQueryAsync(
		function(){
			console.log(rootFolderItem );
			alert("Properties have been logged to console window");
		}, 
		function(){
			alert("Error trying to get properties");
		}
	);
	
})()

