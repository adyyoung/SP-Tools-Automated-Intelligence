
(function() {
	
	var id = prompt("Id of item","");
	if(id==null)return;
	var modified = prompt("Modified date","");
	if(modified==null)return;
	var created = prompt("Created date","");
	if(created==null)return;
	
	var clientContext = SP.ClientContext.get_current();
	var list = clientContext.get_web().get_lists().getById(_spPageContextInfo.pageListId);
	var item = list.getItemById(id);

	clientContext.load(item);
	clientContext.executeQueryAsync(function() {

		if (created != '') {
			item.set_item('Created', created);    
		}
		if (modified != '') {
			item.set_item('Modified', modified); 
		}
		item.update();
		clientContext.executeQueryAsync(function() {
			console.log('complete.');
		}, function() { console.log('error updating timestamps');} );   
	}, function() {
	console.log('failed to get item.'); });
})()

