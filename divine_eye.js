function(context,args) { // target:#s.some.npc
        var g={},r,l,v,f,k
        function c() {
                r=args.target.call(g);
                l=r.split('\n').pop();
				#D(l)
        }
        function pRoom() {
			f = #fs.scripts.fullsec()
			  v = #ms.chats.join({channel: f[0]})
			  #D(v)
			k = #fs.scripts.fullsec({sector: f[0]})
				#D(k)
			  v = #ms.chats.leave({channel: f[0]})
			  #D(v)
		}
		//f = #fs.k1mpp4.scraper({t:#fs.tandoori.public()})
		//f = #fs.market.browse({name:"k3y_v1"}).map(item => item.i)
		//#D(f)//.map(item => item.upgrade.k3y)
		//f.forEach();
		//k = #fs.market.browse({i:f[0]})
		
		//#D(k)
		//f = f.map(item => item.upgrade.k3y)
		//#D(f)
		
		// Retrieve the initial array of keys
		// Retrieve the initial array of keys
		var initialKeys = #fs.market.browse({name: "k3y_v1"}).map(item => item.i);

		// Initialize an array to store all unique k3y values along with their corresponding i values
		var uniqueValues = [];

		// Iterate over each key from the initial array
		for (var i = 400; i < 500; i++) {
			var entry = initialKeys[i];
			var result = #fs.market.browse({i: entry});
			
			// Check if k3y exists
			if (result.upgrade.k3y) {
				// Push an object containing both "k3y" and its corresponding "i" value into the uniqueValues array
				uniqueValues.push({k3y: result.upgrade.k3y, i: entry, cost:result.cost});
			}
		}

		// Flatten the array of objects and get unique values based on "k3y"
		var uniqueKeys = [...new Set(uniqueValues.filter(item => item.k3y !== "vc2c7q").map(item => item.k3y))];
		
		#D(uniqueValues.filter(item => item.k3y !== "vc2c7q"))
		
}


