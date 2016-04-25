(function() {

	var _context = SP.ClientContext.get_current()
	var web = _context.get_web();
	var currentFolder = web.getFolderByServerRelativeUrl(decodeURIComponent(ctx.rootFolder || ctx.listUrlDir));
	_context.load(currentFolder);
	_context.executeQueryAsync(
		function () { console.log(currentFolder.get_uniqueId().toString()); alert('Current folder: ' + currentFolder.get_uniqueId().toString()); },
		function (a, b) { console.log(a); console.log(b);  }
	);
})();