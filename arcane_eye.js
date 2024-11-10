function (context, args) {
    var g = {}, r, l, ll, v, VL, connectionSecured = true, W8 = false, t1 = 0;
    function c() {
		if (connectionSecured){
			r = args.target.call(g);
			l = r.split('\n').pop();
			//#D( 'MESSAGE RECEIVED: '+l )
			ll = l.split(' ');
			if (l.includes('is not the correct')){
				if (t1 > 3) return
			} else if (ll[0] === "Denied") {
				W8 = true
				v = ll[(ll.length - 2)].slice(2, -1);
				//#D( 'New Lock: ' + v )
			} else if (ll[0] === "Required") {
				W8 = true
				v = ll[3].slice(2, -1);
				//#D( 'New Trait: ' + ll[3] )
			}else if (ll[0] === "To") {
				W8 = true;
				VL = ll[ll.length - 1];
				#D( 'K3y Required: '+VL)
				#ls.wyrmwraith.digest({v:VL});
				//return;
				c();
				//#hs.k3y.r1ng({ k3y: "clear", mng: #s.sys.manage })
			}else if (l.includes('Connection terminated.')){
				//VL = #hs.sys.upgrades().filter(item => (item.description == "Keep your nuutec l0cket safe with a security k3y" && item.loaded == true).i)
				#D( l)
				VL = #ls.wyrmwraith.digest({v:1});
				VL = #ls.wyrmwraith.digest({v:9});
				connectionSecured = false;
				W8 = true
				return g;
			}
		}	
    }
	
    c();

    do{
		W8 = false
		//#D( '~DO~' )
        if (l == "Connection terminated.") {
			connectionSecured = false;
			return g;
		}

        switch (v) {
            case 'EZ_40':
            case 'EZ_35':
            case 'EZ_21':
				//#D( 'Starting EZ lock' )
				VL=['open','release','unlock']
                for (var i = 0; i <= VL.length; ++i) {
                    g[v] = VL[i];
					//#D('ATTEMPTING KEY: ' + VL[i])
					c();
					if (!l.includes('is not the correct')){
						break;
					}
					
                }
				//#D( 'Out of for loop')
                break;
            case 'digit':
                for (var i = 0; i <= 9; ++i) {
                    g[v] = i;
                    c();
					if (!l.includes('is not the correct')){
						break;
					}
                }
                break;
            case 'ez_prime':
                VL = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
                for (var i = 0; i < VL.length; ++i) {
                    g[v] = VL[i];
                    c();
					if (!l.includes('is not the correct')){
						break;
					}
                }
                break;
			case 'l0cket':
				VL=[
					'4jitu5', '5c7e1r', '6hh8xw', '9p65cu', 'cmppiq', 'ellux0', 'hc3b69',
					'i874y3', 'lq09tg', 'nfijix', 'pmvr1q', 'sa23uw', 'tvfkyq', 'uphlaw',
					'vc2c7q', 'vth6fe', 'xwz7ja'
				]
                for (var i = 0; i <= VL.length; ++i) {
                    g[v] = VL[i];
                    c();
					if (!l.includes('is not the correct')){
						break;
					}
                }
                break;
			case 'DATA_CHECK':
				var str;
                for (var i = 0; i <= 1; ++i) {
                    g[v] = ""
                    str = args.target.call(g).split('\n');
					g[v] += #fs.lore.data_check({lookup:str[0]}).answer
					g[v] += #fs.lore.data_check({lookup:str[1]}).answer
					g[v] += #fs.lore.data_check({lookup:str[2]}).answer
					c();
                }
                break;
			case 'c001'://color_digit
			case 'c002': //c002_complement
			case 'c003'://c003_triad_1 and c003_triad_2
				//#D( 'Starting c00 lock' )
				VL=['red', 'purple', 'blue', 'cyan', 'green', 'lime', 'yellow', 'orange']
                for (var i = 0; i < VL.length; ++i) {
                    g[v] = VL[i];
					//#D( 'Starting color '+ VL[i] +' '+v )
					if (v === 'c001') {g.color_digit = VL[i].length;}
					else if (v === 'c002') {g.c002_complement = VL[ ( i + 4) % VL.length ]}
					else if (v === 'c003'){
						g.c003_triad_1 = VL[ ( i + 3) % VL.length ]
						g.c003_triad_2 = VL[ ( i + 5) % VL.length ]
					}
                    c();
					if (!l.includes('is not the correct')){
						//#D('CONFIRM STEP COMPLETION: ' + l)
						break;
					}
                }
				//#D( 'End c00 lock' )
                break;
			case 'sn_w_glock':
				g[v] = ""
				c();
				if (l.includes('special')){
					VL = 38
				}else if (l.includes('elite')) {
					VL = 1337
				}else if (l.includes('secure')) {
					VL = 443
				}else if (l.includes('monolithic')) {
					VL = 2001
				}else if (l.includes('magician')) {
					VL = 1089
				}else if (l.includes('meaning')) {
					VL = 42
				}else if (l.includes('hunter')) {
					VL = 3006
				}else if (l.includes('beast')) {
					VL = 666
				}
				#fs.mountainsea.honey_pot( {v:VL,hate:false, nudes:true} )
				c();
                break;
			case 'magnara':
				function getPermutations(str) {
					if (str.length !== 4) {
						throw new Error("");
					}
					let foundIndex = -1;
					
					function permute(arr, m = [], index = 0) {
						if (arr.length === 0) {
							g[v] = m.join('');
							c();
							if (!l.includes('recinroct')) {
								return true; // found the target permutation
							}
							return false; // continue searching
						}

						for (let i = 0; i < arr.length; i++) {
							if (permute(arr.slice(0, i).concat(arr.slice(i + 1)), m.concat(arr[i]))) {
								return true; // early exit if found
							}
						}

						return false; // continue searching
					}

					permute(str.split(''))
				}
				g[v] = ""
				c();
				getPermutations(ll[ll.length - 1])
                break;
			case 'CON_SPEC':
				g[v] = { call: (s, d) => #fs.mountainsea.test(s, d) }
				c();
                break;
			case 'acct_nt':
				function convertTime(stamp) {
					var VLL = {"01":"Jan","02":"Feb","03":"Mar","04":"Apr","05":"May","06":"Jun","07":"Jul","08":"Aug","09":"Sep","10":"Oct","11":"Nov","12":"Dec" }
					const date = stamp.slice(0, 6);
					const time = stamp.slice(7);
					const day = date.slice(4, 6);
					const month = VLL[date.slice(2, 4)];
					const year = '20' + date.slice(0, 2);
					const hours = time.slice(0, 2);
					const minutes = time.slice(2);

					const conDate =  `${month} ${day} ${year} ${hours}:${minutes}`;
					return conDate.toString();
				}
				g[v] = "";
				c();
				#D(l)
				VL = #hs.accts.transactions({count:"all"})
				
				//digest function just returns the place in the trnsaction list it is
				switch (ll[0]){
					case "Get":
						//#D(ll[ll.length - 1])
						//VL = #ls.wyrmwraith.digest({v:2,i:1,s:[ll[ll.length - 1], ll[7]]})
						//#D(VL)
						
						var t2 = convertTime(ll[ll.length - 1])
						for(let i = 0;i < Object.keys(VL).length;i++){
							t1= String(VL[i].time)
							if ( t1.includes(t2) ){	
								for(i;i < Object.keys(VL).length;i++){
									g[v] = VL[i].amount;
									c();
									if ( !(l.includes("Get me the amount")) ){
										
										return
									}
								}
							}
						}
						
						break;
					case "Need":
						var t2 = [convertTime(ll[13]),convertTime(ll[11])]
						#D(t2)
						for(let i = 0;i < Object.keys(VL).length;i++){
							t1= String(VL[i].time)
							if ( t1.includes(t2[0]) ){//found the first point
								//#D(VL[i])
								var t3 = 0
								var t4 = false
								for(i;i < 50;i++){
									t1= String(VL[i].time)
									#D(VL[i])
									if (t1.includes(t2[0])) continue;
									if (!VL[i].memo && ll[8] == "with") {continue;}
									if (VL[i].memo && ll[8] == "without") {continue;}
									t3 += VL[i].recipient == "wyrmwraith" ? VL[i].amount : VL[i].amount * -1;
									#D("Total: " +t3)
									g[v] = t3;
									c();
									if ( !(l.includes("Need to know the")) ){ 
											return
										}
									if (t1.includes(t2[1])) return;
								}
							}
						}
						break;
					case "What":
						//VL = #ls.wyrmwraith.digest({v:2,i:3,s:[ll[6],ll[8]]})
						//#D(VL)
						var t2 = convertTime(ll[8])
						for(let i = 0;i < 50;i++){
							t1= String(VL[i].time)
							//#D(t1)
							if ( t1.includes(t2) ){//found the first point
								#D("it")
								t2 = convertTime(ll[6])
								//#D(VL[i])
								#D("made")
								var t3 = 0
								
								var count = 0
								for(i;i < Object.keys(VL).length;i++){
									count++
									t1= String(VL[i].time)
									t3 += VL[i].recipient == "wyrmwraith" ? VL[i].amount : VL[i].amount * -1;
									//#D( "Total: " + t3)
									#D( "Time: " + t1 )
									g[v] = t3;
									c();
									//if (t1.includes(t2)) {#D(t1);#D(l);return};
									if ( !(l.includes("What was the net")) ){ 
											return
										};
									if (count >= 15) return;
								}
							}
							
						}
						break;
				}
				
				for (let i = 0; i < 1; i++) {
					//#ls.beta.lock_sim( {locks:["acct_nt"]} )
					//c();
				} 
				
				//c();
				//Get me the amount of a large deposit near 240520.0040 
				//Need to know the total earned on transactions without memos between 240519.0237 and 240520.0044
				//What was the net GC between 240519.0215 and 240520.0040
				//to_gc_num(str) <=> to_gc_str(num)
                return;
            default:
				#D( 'default' + v + l)
                return;
        }
		//#D( 'Out of switch' )
		if (connectionSecured && !W8) c();
    }while(connectionSecured);
	VL = #ls.wyrmwraith.digest({v:1});
	VL = #ls.wyrmwraith.digest({v:9});
	//Get me the amount of a large deposit near 240520.0058
	//2024-05-20T00:58:15.144Z
}