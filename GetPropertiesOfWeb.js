(function() {
	var clientContext = new SP.ClientContext.get_current();
	var webProperties = clientContext.get_web().get_allProperties();
	clientContext.load(webProperties);
	clientContext.executeQueryAsync(
		function(){
			console.log(webProperties.get_fieldValues());
			alert("Properties have been logged to console window");
		}, 
		function(){
			alert("Error trying to get properties");
		}
	);
	
})()

