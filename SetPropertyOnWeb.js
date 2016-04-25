(function() {
	
	var keyOfProperty = prompt("Key of property","");
	if(keyOfProperty==null)return;
	
	var valueOfProperty = prompt("Value of property","");
	if(valueOfProperty==null)return;
	
	
	
	var clientContext = new SP.ClientContext.get_current();
	var web = clientContext.get_web();
	var webProperties = web.get_allProperties();
	webProperties.set_item(keyOfProperty,valueOfProperty);
	web.update();
	clientContext.executeQueryAsync(
		function(){
			alert("Value has been updated");
		}, 
		function(){
			alert("Error trying to set property");
		}
	);
	
})()

