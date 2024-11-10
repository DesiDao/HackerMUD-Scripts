function(context,args) { // target:#s.some.npc
        var f,v,k
		switch (args.v) {
			case 1:
				#hs.sys.upgrades().filter(item => (item.loaded === false && item.name != "k3y_v1"&& item.name != "char_count_v1")).filter(item => item.rarity < 2).map(item => item.i).reverse().map(Cull);
				v = #fs.accts.balance_of_owner()
				#ms.accts.xfer_gc_to({to:"MountainSea", amount:v})
				break;
			case 2:
				
				v = #hs.accts.transactions({count: 0})
				for(i = 0;i < v.length;i++){
					f= String(v[i].time)//.split(" ")
					k = convertTime(args.s[0])
					//#D(k)
					//#D(f)
					
					//#D(f.includes(k))
					if (f.includes(k)){
						return i
					}
				}

				return -1
				break;
			case 9:
				f = #hs.sys.upgrades().filter(item => (item.name == "k3y_v1" && item.loaded == true)).map(item => item.i);
				f.forEach(item => #ms.sys.manage({unload:item}))
				break;
			default: //change key
				#D("Default trigger: "+args.v);
				f = #hs.sys.upgrades().filter(item => (item.name == "k3y_v1")).map(item => item.i);
				v = f.map(getKey).filter(item => item != false)[0]
				k = #ms.sys.manage({load:v});
				break;
		}

		function Cull(index) {
			
		  f = #ls.sys.cull({i:index, confirm:true});
		}
		function getKey(index) {
			v = index
			if (args.v === #hs.sys.upgrades({i: index}).k3y) {
				
				return index 
				;}
			return false
		}
		function convertTime(stamp) {
			var VL = {"01":"Jan","02":"Feb","03":"Mar","04":"Apr","05":"May","06":"Jun","07":"Jul","08":"Aug","09":"Sep","10":"Oct","11":"Nov","12":"Dec" }
			const date = stamp.slice(0, 6);
			const time = stamp.slice(7);
			const day = date.slice(4, 6);
			const month = VL[date.slice(2, 4)];
			const year = '20' + date.slice(0, 2);
			const hours = time.slice(0, 2);
			const minutes = time.slice(2);

			const conDate =  `${month} ${day} ${year} ${hours}:${minutes}`;
			return conDate.toString();
		}
}