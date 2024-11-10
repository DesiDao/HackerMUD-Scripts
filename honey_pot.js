function(context,args) {
	if (args.v <= 0) {
		#D("Fail")
		return;
	}
	if (args.hate === false && args.nudes === true) #fs.accts.xfer_gc_to_caller({amount: args.v})
	//var f = #ms.accts.xfer_gc_to
}