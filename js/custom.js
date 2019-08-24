window.onload = function() {


	var classes= [
		{
			words: "Age appear artist autumn Bay beak bloom bumpy burst buzz Care check chilly chore comfort community country covered cradle Dangle decision delicious dentist dew disappear drawer dusty Edge Farmer fear firefly fix flipper fluffy follow Gallop gentle giggle glance glossy glow goal gust Half healthy herd hoof Include invitation Knight Laundry lazy leaf leak library Market melt miserable month muddy museum Note Pace pair patient peaceful peck pilot plan pointy polite pond president protect proud Race reach relax rotten round row Sail scene scrub shade shaky ship shore silky sink slide slip sniff soapy sparkle spotted spring stare summer supplies Tangled tent tomorrow trade trunk Warm wave week wiggle winter wish Yesterday young"
		}, {
			words: "Ache adjust affordable alarm alone apologize appetite applause artistic atmosphere attach Bashful basket batch behave belong bend blink blush blush bolt bolts borrow bundle Cabin caterpillar caution cave celebrate centaur champion chat cheat chimney compass complain conductor construct costume cozy cranky crash creak croak crowded cue curved Daily dainty dart decorate delighted denied deserve divide dodge drenched drowsy Enormous equal exclaim exhausted expensive Fancy fasten filthy flat flee fog footprint forest freezing Gather giant glad gleaming glum grab grateful grin grip groan Hatch heap hide hobby honest howl Illustrator injury Jealous Knob Lively loosen Mask misty modern mountain Narrow Obey Pain passenger pattern pest polish pretend promise Rapid remove repeat rescue restart return ripe rise roar rough rusty Scold scratch seed selfish serious shell shovel shriek sibling silent simple slippery sly sneaky sob spiral splendid sprinkle squirm startle steep stormy striped surround switch  Terrified thick thunder ticket timid transportation travel trust  Upset  Weed whimper whirl wicked wicked  Yank"
		}, {
			words: "Accident agree arrive astronomy atlas attention award aware Balance banner bare base beach besides blast board bounce brain branch brave bright Cage calf calm career center cheer chew claw clear cliff club collect connect core corner couple crowd curious Damp dangerous dash dawn deep demolish design discard dive dome doubt dozen Earth enemy evening exactly excess Factory fair famous feast field finally flap float flood fold fresh frighten fuel Gap gaze gift gravity greedy Harm herd Idea insect instrument invent island Leader leap lizard local lonely luxury March mention motor Nervous net nibble notice Ocean Pack pale parade past peak planet present proof Reflect rumor Safe scholar seal search settle share shelter shiver shy skill slight smooth soil stack steady strand stream support Team telescope tiny tower travel tremble Universe Village Warn weak wealthy whisper wise wonder worry Yard Zigzag"
		}, {
			words: "Ability absorb accuse act active actual adopt advantage advice ambition ancient approach arrange arctic attitude attract average avoid Bold border brief brilliant Cable capture certain chill clever climate cling coast confess consider contain continent convince coward crew crumple custom Decay deed defend delicate device diagram digest disease distant doze drift Elegant enable examine explore Fan fatal fierce flutter fortunate frail Gasp glide globe grace gradual grasp Habit harsh Imitate individual intelligent intend Journey Launch limit locate loyal Magnificent marsh method misery moisture mural mystify Nation nectar nursery Observe opponent opposite ordeal origin outcome Passage pastime pause perform plunge predator predict prevent primary privilege process Rare rate recall rely remark resident respect responsible reverse revive risk Scatter schedule sensitive signal solution spoil starve steer struggled suitable survey swift symbol Talent theory thrill treasure triumph Value vision volunteer Wander wisdom wit woe"
		}, {
			words: "accurate address afford alert analyze ancestor annual apparent appropriate arena arrest ascend assist attempt attentive attractive awkward baggage basic benefit blend blossom burrow calculate capable captivity carefree century chamber circular coax column communicate competition complete concentrate concern conclude confuse congratulate considerable content contribute crafty create demonstrate descend desire destructive develop disaster disclose distract distress dusk eager ease entertain entire entrance envy essential extraordinary flexible focus fragile frantic frequent frontier furious generosity hail hardship heroic host humble Impact increase indicate inspire instant invisible jagged lack limb limp manufacture master mature meadow mistrust mock modest noble orchard outstanding peculiar peer permit plead plentiful pointless portion practice precious prefer prepare proceed queasy recent recognize reduce release represent request resist response reveal routine severe shabby shallow sole source sturdy surface survive terror threat tidy tour tradition tragic typical vacant valiant variety vast venture weary"
		}, {
			words: "Abolish absurd abuse access accomplish achievement aggressive alternate altitude antagonist antonym anxious apparent approximate aroma assume astound available avalanche Banquet beverage bland blizzard budge bungle Cautiously challenge character combine companion crave compassion compensate comply compose concept confident convert course courteous Debate decline dedicate deprive detect dictate document duplicate Edible endanger escalate evade exasperate excavate exert exhibit exult Feeble frigid Gigantic gorge guardian Hazy hearty homonym Identical illuminate immense impressive independent industrious intense intercept Jubilation Kin Luxurious Major miniature minor mischief monarch moral myth Narrator navigate negative nonchalant numerous Oasis obsolete occasion overthrow Pardon pasture pedestrian perish petrify portable prefix preserve protagonist provide purchase Realistic reassure reign reliable require resemble retain retire revert route Saunter seldom senseless sever slither sluggish soar solitary solo sparse spurt strategy suffix suffocate summit suspend synonym Talon taunt thrifty translate tropical Visible visual vivid Wilderness withdraw"
		}
	];
	
	var addedWords = [];
	
	if(localStorage["storedWords"]){
		addedWords = JSON.parse(localStorage["storedWords"]);
	} 
	
	if (!Array.prototype.removeEmpty) {
		  Array.prototype.removeEmpty = function() {
				for(var k=0; k<this.length; k++) {
				if(this[k].length < 3) {
					this.splice(k, 1);
					k--;
				}
			}
			
			return this;
		  };
		}
	

	$("#0").on('click', function(){ loadClass(0); });
	$("#1").on('click', function(){ loadClass(1); });
	$("#2").on('click', function(){ loadClass(2); });
	$("#3").on('click', function(){ loadClass(3); });
	$("#4").on('click', function(){ loadClass(4); });
	$("#5").on('click', function(){ loadClass(5); });
	
	$(".3letter").on('click', function(){
		var wordsi = ["ACE","ACT","ADD","ADS","AGE","AGO","AID","AIM","AIR","ALL","AND","ANT","ANY","APE","ARC","ARE","ARM","ART","ASH","ASK","ASS","AXE","BAD","BAG","BAR","BAT","BAY","BED","BEE","BEG","BET","BID","BIG","BIN","BIT","BOT","BOW","BOX","BOY","BUD","BUG","BUN","BUS","BUT","BUY","BYE","CAB","CAM","CAN","CAP","CAR","CAT","COP","COT","COW","CRY","CUP","CUT","DAD","DAM","DAY","DID","DIE","DIG","DIM","DIP","DOG","DOT","DUE","DYE","EAR","EAT","EGG","EGO","END","ERA","EVE","EYE","FAN","FAR","FAT","FAX","FEE","FIG","FIN","FIT","FIX","FLU","FLY","FOG","FOR","FOX","FRY","FUN","FUR","GAP","GAS","GEL","GEM","GET","GOD","GOT","GUM","GUN","GUT","GUY","GYM","HAD","HAM","HAS","HAT","HEN","HER","HIM","HIS","HIT","HOT","HOW","HUG","HUT","ICE","ICH","ILL","INK","INN","ITS","JAM","JAR","JAW","JET","JOB","JOY","JUG","KID","LAB","LAP","LAW","LEG","LID","LIP","LOO","LOT","LOW","LUX","LYE","MAD","MAN","MAP","MID","MOM","MUD","MUG","NET","NEW","NOT","NOW","NUT","OAK","ODD","OFF","OIL","OLD","ONE","OUR","OUT","OWL","OWN","PAD","PAT","PAY","PEN","PET","PIC","PIE","PIG","PIN","PIT","POP","POT","PUB","PUT","RAT","RAW","RAY","RED","ROW","RUB","RUN","SAD","SAT","SAW","SAY","SEA","SEE","SET","SHE","SHY","SIN","SIR","SIT","SIX","SKY","SON","SPA","SPY","SUM","SUN","TAB","TAG","TAJ","TAP","TAR","TEA","TEN","THE","TIN","TIP","TOP","TOY","TRY","TWO","TYE","USE","VAN","VET","WAR","WAS","WAX","WAY","WHO","WHY","WIN","WON","YAK","YES","YET","YOU","ZIP","ZOO"];
		$(".words").empty();

		for(var i=0; i<wordsi.length; i++){					
			$(".words").append( "<div class='wordi'>"+wordsi[i]+"<img id='imgt"+i+"' data-num='"+i+"' align='right' src='3-letter-words/" + wordsi[i].toLowerCase() + ".jpg' /></div>" );
		}
	});
	
	$("#knownBtn").on('click', function() {
		$(".words").empty();
		$(".words").html('<p style="column-count: 3; margin-left: 50px;"><b>'+addedWords.join("</br>")+'</b></p>');
	});
	
	/*var a = ["1","2","3","2","4"];                                                                 
	var removedItems = a.remove("4", true);        //a = ["1","2","3","2"], removedItems = ["4"];
	console.log(a);
	
	var b = ["1","2","3","2","4"]; 
	removedItems     = b.remove(["2","4"], true);  //b = ["1","3"],   removedItems = ["2","2","4"];
	console.log(b);	*/

    //Check File API support
    if (window.File && window.FileList && window.FileReader) {
        var filesInput = document.getElementById("files");

        filesInput.addEventListener("change", function(event) {

            var files = event.target.files; //FileList object
            var output = document.getElementById("result");

            for (var i = 0; i < files.length; i++) {
                var file = files[i];

                //Only plain text
                //if (!file.type.match("plain")) continue;

                var picReader = new FileReader();

                picReader.addEventListener("load", function(event) {

                    var textFile = event.target;

                    var div = document.createElement("div");
					
					
					var string = textFile.result;
					
					string = string.replace(/\r?\n|\r/gi, " "); // removing line breaks

					string = string.replace(/\.|\'s|n't|♪|you're|i'm|you'll|you'd|they'll|it'll|there'd|why'd|he'll|who'd|weeks'|how'd|he'd|'cause|we're|she'd|i'll|we've|they've|they're|i've|you've|we'll|i'd|fyers'|/gi, "");

					
					string = removeFont(string);
					
					string = string.replace(/[0-9`~!@#$%^&*()_|+\-=?;:"",.<>\{\}\[\]\\\/]/gi, "");

					
					string = string.toLowerCase();
					
					string = string.removeStopWords();
					
					var words = string.split(" ");
					
					//words = $.unique(words);
					words.removeEmpty();
					
                    //div.innerText = words;
					
					buildWords(words);

                    //output.insertBefore(div, null);
					$('input[type="file"]').val(null);
                });

                //Read the text file
                picReader.readAsText(file);
            }

        });
    }
    else {
        console.log("Your browser does not support File API");
    }
	

	function loadClass(num) {
		var wordsi = classes[num].words.split(" ");
		$(".words").empty();

		for(var i=0; i<wordsi.length; i++){
			$(".words").append( "<div class='word'><a href='http://dictionary.reference.com/browse/"+wordsi[i]+"' target='blank'>"+wordsi[i]+"</a><img class='checkbox' src='checkbox_empty.png' /></div>" );
		}

		enableCheckBoxes()
	}
	
	function removeFont(str){
		while(str.indexOf("<font") > -1) {
			var startPos = str.indexOf("<font");
			var endPos = str.indexOf("/font>");
			
			str= str.substring(0, startPos) + str.substring(endPos+5);
		}
		
		return str;
	}
	
	
	function buildWords(wws){
		
		var ws = wws.filter(function(itm,i,wws){
			return i==wws.indexOf(itm);
		});

		$(".words").empty();
		
		for(var i=0; i<ws.length; i++){
			$(".words").append( "<div class='word'><a href='http://dictionary.reference.com/browse/"+ws[i]+"' target='blank'>"+ws[i]+"</a><!--span class='close'>x</span--><img class='checkbox' src='checkbox_empty.png' /></div>" );
		}
		
		

		
		
		$(".close").on('click', function(){
			 $(this).parent().remove();
		});
		
		enableCheckBoxes();
		
		$(".removeBtn").on('click', function(){
			$(".selected").remove();
		});
	}
	
	
	function enableCheckBoxes() {
		$(".checkbox").on('click', function(){
			if($(this).attr('src') == "checkbox_empty.png"){
				$(this).attr('src', 'checkbox_checked.png');
				$(this).parent().addClass("selected");
				
				$('.words').scrollTop($('.words').scrollTop() + 55);
				
			} else {
				$(this).attr('src', 'checkbox_empty.png');
				$(this).parent().removeClass("selected");
			}
		});

		$("#addBtn").on('click', function(){
			/*var request = new XMLHttpRequest();
			request.open("GET", "/gcide_xml-0.51/gcide_xml-0.51/xml_files/gcide_t.xml", false);
			request.send();
			var xml = request.responseXML;
			var users = xml.getElementsByTagName("user");
			for(var i = 0; i < users.length; i++) {
				var user = users[i];
				var names = user.getElementsByTagName("name");
				for(var j = 0; j < names.length; j++) {
					alert(names[j].childNodes[0].nodeValue);
				}
			}*/
			
			
			$(".selected").each(function() {
				var val = $(this).text();
				if(addedWords.indexOf(val)<0)
				addedWords.push(val);
			});
			
			localStorage["storedWords"] = JSON.stringify(addedWords);
			
			$(".selected").hide();

			$("#count").text(JSON.parse(localStorage["storedWords"]).length);
		});
	}
	
	
	
	
	String.prototype.removeStopWords = function() {
    var x;
    var y;
    var word;
    var stop_word;
    var regex_str;
    var regex;
    var cleansed_string = this.valueOf();
    var stop_words = new Array(
		"",
		"[",
		"`",
		"~",
		"!",
		"@",
		"#",
		"$",
		"%",
		"^",
		"&",
		"*",
		"(",
		")",
		"_",
		"|",
		"+",
		"-",
		"=",
		"?",
		";",
		":",
		",",
		".",
		"<",
		">",
		"{",
		"}",
		"[",
		"]",
		"/",
		"]",
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"one","two","three","four","five","six","seven","eight","nine","zero",
		//"ill","im","arent","doesnt","years","will","hey","dont","citys",
		"a","able","about","above","abst","accordance","according","accordingly","across","act","actually","added","adj","affected","affecting","affects","after","afterwards","again","against","ah","all","almost","alone","along","already","also","although","always","am","among","amongst","an","and","announce","another","any","anybody","anyhow","anymore","anyone","anything","anyway","anyways","anywhere","apparently","approximately","are","aren","arent","arise","around","as","aside","ask","asking","at","auth","available","away","awfully","b","back","be","became","because","become","becomes","becoming","been","before","beforehand","begin","beginning","beginnings","begins","behind","being","believe","below","beside","besides","between","beyond","biol","both","brief","briefly","but","by","c","ca","came","can","cannot","can't","cause","causes","certain","certainly","co","com","come","comes","contain","containing","contains","could","couldnt","d","date","did","didn't","different","do","does","doesn't","doing","done","don't","down","downwards","due","during","e","each","ed","edu","effect","eg","eight","eighty","either","else","elsewhere","end","ending","enough","especially","et","et-al","etc","even","ever","every","everybody","everyone","everything","everywhere","ex","except","f","far","few","ff","fifth","first","five","fix","followed","following","follows","for","former","formerly","forth","found","four","from","further","furthermore","g","gave","get","gets","getting","give","given","gives","giving","go","goes","gone","got","gotten","h","had","happens","hardly","has","hasn't","have","haven't","having","he","hed","hence","her","here","hereafter","hereby","herein","heres","hereupon","hers","herself","hes","hi","hid","him","himself","his","hither","home","how","howbeit","however","hundred","i","id","ie","if","i'll","im","immediate","immediately","importance","important","in","inc","indeed","index","information","instead","into","invention","inward","is","isn't","it","itd","it'll","its","itself","i've","j","just","k","keep","keeps","kept","kg","km","know","known","knows","l","largely","last","lately","later","latter","latterly","least","less","lest","let","lets","like","liked","likely","line","little","'ll","look","looking","looks","ltd","m","made","mainly","make","makes","many","may","maybe","me","mean","means","meantime","meanwhile","merely","mg","might","million","miss","ml","more","moreover","most","mostly","mr","mrs","much","mug","must","my","myself","n","na","name","namely","nay","nd","near","nearly","necessarily","necessary","need","needs","neither","never","nevertheless","new","next","nine","ninety","no","nobody","non","none","nonetheless","noone","nor","normally","nos","not","noted","nothing","now","nowhere","o","obtain","obtained","obviously","of","off","often","oh","ok","okay","old","omitted","on","once","one","ones","only","onto","or","ord","other","others","otherwise","ought","our","ours","ourselves","out","outside","over","overall","owing","own","p","page","pages","part","particular","particularly","past","per","perhaps","placed","please","plus","poorly","possible","possibly","potentially","pp","predominantly","present","previously","primarily","probably","promptly","proud","provides","put","q","que","quickly","quite","qv","r","ran","rather","rd","re","readily","really","recent","recently","ref","refs","regarding","regardless","regards","related","relatively","research","respectively","resulted","resulting","results","right","run","s","said","same","saw","say","saying","says","sec","section","see","seeing","seem","seemed","seeming","seems","seen","self","selves","sent","seven","several","shall","she","shed","she'll","shes","should","shouldn't","show","showed","shown","showns","shows","significant","significantly","similar","similarly","since","six","slightly","so","some","somebody","somehow","someone","somethan","something","sometime","sometimes","somewhat","somewhere","soon","sorry","specifically","specified","specify","specifying","still","stop","strongly","sub","substantially","successfully","such","sufficiently","suggest","sup","sure","t","take","taken","taking","tell","tends","th","than","thank","thanks","thanx","that","that'll","thats","that've","the","their","theirs","them","themselves","then","thence","there","thereafter","thereby","thered","therefore","therein","there'll","thereof","therere","theres","thereto","thereupon","there've","these","they","theyd","they'll","theyre","they've","think","this","those","thou","though","thoughh","thousand","throug","through","throughout","thru","thus","til","tip","to","together","too","took","toward","towards","tried","tries","truly","try","trying","ts","twice","two","u","un","under","unfortunately","unless","unlike","unlikely","until","unto","up","upon","ups","us","use","used","useful","usefully","usefulness","uses","using","usually","v","value","various","'ve","very","via","viz","vol","vols","vs","w","want","wants","was","wasnt","way","we","wed","welcome","we'll","went","were","werent","we've","what","whatever","what'll","whats","when","whence","whenever","where","whereafter","whereas","whereby","wherein","wheres","whereupon","wherever","whether","which","while","whim","whither","who","whod","whoever","whole","who'll","whom","whomever","whos","whose","why","widely","willing","wish","with","within","without","wont","words","world","would","wouldnt","www","x","y","yes","yet","you","youd","you'll","your","youre","yours","yourself","yourselves","you've","z","zero", 
		
		
		"arrow","knew","spending","nights","trust","oliver","thought","time","talked","serial","killer","start","laurel","love","lord","guilty","lot","things","chose","moira","queen","ceo","horrible","purpose","destroy","architect","malcolm","merlyn","beat","heart","fighting","safe","yeah","saved","tommy","airplane","approaching","speaking","chinese","felicity","scared","insist","sitting","front","seat","seatbelt","will","handy","hit","water","miles","hour","happen","butyou","parachutes","case","vomiting","waiting","touched","pleasure","move","heard","birds","click","dig","landmine","going","diggle","walk","god","sweaty","hard","man","find","emailed","exactly","wifi","hotspot","lived","glad","spent","weeks","tracking","traveled","halfway","morning","flew","plane","pretty","safer","jumped","offer","coconut","fresh","coconuts","happy","coming","city","mission","father","list","fool","failed","destroyed","died","hood","mother","prison","trial","thea","family","business","bad","press","left","ripe","takeover","international","gutted","company","employees","job","including","expert","listen","leave","better","happened","blame","leaving","learn","women","distraction","months","trade","island","playing","hunting","well","attractive","woman","hunt","meal","cooked","cook","great","proof","breaks","neck","eat","beeping","detector","soldier","camp","picks","moving","zone","stopped","men","dead","animal","imaging","interface","animals","original","air","october","sync","corrected","blood","save","fill","shoes","vice","president","acquisitions","named","isabel","angry","photo","office","check","house","second","boss","ass","today","hear","sounds","kidding","fight","clearly","street","corner","drug","dealer","worse","people","managed","buried","alive","hero","death","guess","true","stand","earthquake","laughs","ollie","remember","friend","roy","europe","texted","postcards","kind","snow","rumors","club","management","drink","bar","iron","heights","visit","dropped","innocent","theathat","mom","choice","mass","murderer","choose","daughter","honestly","deal","liquor","distributor","shorted","yesterday","delivery","called","sick","nice","representative","central","construction","star","labs","particle","completed","christmas","local","news","billionaire","returned","upcoming","freefall","analysts","planned","piano","country","founded","brand","vigilantism","donner","revolutionaries","boston","tea","party","choosing","justice","law","compare","founding","fathers","mayor","twisted","risen","wake","lance","vigilantes","foolish","disagree","smart","hire","joined","district","change","colleagues","cnri","opening","doors","reopened","song","good","evening","difficult","year","losses","generous","donations","making","tonight","tragedy","hell","watch","swore","protect","citizens","wealthy","folks","sorted","minute","hoods","gasps","police","radio","chatter","dad","fine","brave","sir","lose","attacks","strictly","limited","financial","sector","redistribute","wealth","gunpoint","result","focus","gun","barrel","pointed","face","tattoos","distinguishing","marks","interviewing","witness","detective","officer","killed","parent","stay","cop","free","downsides","demoted","sunny","daily","basis","town","ago","call","hooded","gunmen","selfdefense","classes","handle","funeral","needed","figure","mistake","slept","cheating","broken","feel","feels","brought","sister","forgiveness","led","sara","played","terrorizing","onepercenters","cleaning","honor","working","big","day","tomorrow","absolutely","unbelievable","live","showing","wrong","real","payback","useless","applied","sciences","division","built","generator","pay","suffering","caused","full","hello","earth","drop","vertigo","brother","lack","height","hearing","suspense","harper","matter","mind","control","paycheck","sex","life","parents","worth","damn","talk","lost","she'd","dying","mothers","kids","helped","kill","hurt","consider","hurting","conference","room","fyi","eating","bagels","late","meeting","career","realize","takeovers","filled","mood","destroying","companies","agrees","winning","won","majored","dropping","college","terms","easy","understand","stock","outstanding","days","board","release","final","i'll","buy","money","doubt","fund","large","angel","investor","build","machine","half","rise","fall","fallen","pull","careful","quick","building","responsibility","hours","uniform","fits","mutual","nope","guys","idea","capable","wondering","avoided","told","considering","body","count","excuse","care","secret","best","thinking","dishonors","memory","guy","faced","stayed","help","definitely","closer","position","you'll","backup","teaching","sweet","teach","gunshot","shado","hey","sooner","apologies","rest","hundreds","lives","thrilled","forgive","optimistic","strangers","box","key","rightful","place","declared","long","dangerous","options","scoffs","talking","dance","music","table","bottle","service","round","three","top","sighs","andi'll","night","clean","streets","thing","owns","dump","plan","shooting","grows","pair","aaah","aah","missing","hand","sutures","downstairs","improvements","decided","figured","you'd","eventually","watching","boyfriend","hospital","records","males","surgical","crosschecking","race","age","onejeff","thirties","explain","overseas","wife","bridge","collapsed","phone","contact","calls","church","standing","strong","support","group","loved","quake","meet","address","custom","perfect","signed","bodies","meant","occasionally","kid","cares","wait","signal","uhh","knock","faces","older","murdered","heroes","mommy","afraid","queens","till","shoot","die","bring","typically","disturb","machines","crossfire","archers","archer","catch","outfit","coloring","cruel","unusual","punishment","avoid","mirrors","worry","sweetheart","spend","hated","hate","freed","hug","risk","shh","win","percent","attempt","lead","litigation","penniless","poverty","glamorous","charles","invest","equity","capital","white","respect","associated","murder","steel","understanding","resigned","chief","national","bank","institution","committed","rescue","financing","bought","remaining","shares","released","partners","forward","fail","exhales","walter","reaching","gratified","smoak","tenth","grade","algebra","online","static","question","cell","rings","visiting","ready","pick","belly","burger","friendly","scare","archery","avenge","dothis","honoring","hoped","step","game","involve","landmines","saving","crossing","names","ruined","nickname",
		
		"years","goal","besomething","buddhism","symbolizes","reconnecting","grunting","faster","foot","floor","truck","pursued","armed","bikers","heading","south","third","requesting","assistance","tires","horns","starts","engine","siren","headed","open","door","divide","sound","running","dummies","ordering","bulk","launch","simple","book","engaged","illegal","activity","robbed","dinner","sudden","interest","entrance","installed","course","arrows","likes","green","funny","charge","guardian","emulate","situation","fell","hole","interested","telephones","ringing","distance","totaled","car","junior","pressing","charges","trouble","breathing","forged","sort","connection","ways","loose","speeches","exgirlfriend","laid","cars","work","broke","noticed","anger","burn","inside","longer","knowing","memorial","read","damaged","medicine","sending","hijacked","resupply","forced","close","doctors","nurses","bailing","cops","rarely","venture","deep","leaves","reason","map","chain","shots","war","eyes","split","recognize","tear","baby","crying","survived","ended","stealing","failing","accounts","spotlight","shy","sharing","opinions","abandoned","met","side","bare","minimum","resources","department","sees","thieves","seeking","buck","brings","assume","afford","medical","treatment","assure","suffered","access","basic","services","wonder","concern","ordered","crowd","ladies","gentlemen","power","represent","sleep","homes","stores","businesses","rich","boy","spare","visits","pardon","quit","executive","assistant","accept","girl","wednesday","answer","computers","upgraded","processing","typical","secretary","hint","arts","identities","travel","floors","discuss","worked","fetch","coffee","identity","black","driver","hijackers","goods","picking","targets","cup","offering","happening","reservations","saturday","salt","internet","plate","flowers","wellwishes","cordial","comment","telling","turning","terrible","demon","recognizes","opposing","forces","darkness","light","basement","factory","high","shipping","units","scheduled","minutes","motorcycle","gang","luck","china","emerald","feared","opportunity","interference","permanently","partnership","easily","cemented","eager","promised","hope","nerve","sirens","surrounded","weapons","fire","cease","catching","tax","dollars","authorities","leading","involved","jump","throat","lousy","week","pissed","invoked","almighty","chin","bringing","pulling","pin","truth","strain","separate","deadshot","reconciling","sides","closed","starting","shift","suicide","finished","wanted","arrest","girlfriend","rock","buddhist","reconnect","entirely","invited","cameras","throw","view","small","guest","coffeemaker","violently","surprised","turned","mob","surprising","enemy","hoping","prove","problem","solved","friends","morally","unacceptable","allow","thousands","host","benefit","invite","consolidated","public","difference","emotions","laughing","laughed","washing","prepare","dirty","couple","clicks","northwest","totally","suck","survive","cloud","judgment","voice","times","turn","understood","criminal","apply","helping","climb","busy","meaningless","duel","wear","hide","coward","promise","unmasked","prosecuted","speak","lucky","mine","throwing","imagine","putting","crosshairs","opinion","apologized","excesses","fact","dramatic","reputation","meaning","refer","person","vibrating","elevator","dings","hacked","server","federal","offense","shipment","pharmaceuticals","definition","sucky","timing","butwhich","suit","planning","wearing","presence","guests","media","romans","punish","acted","cheers","applause","hold","charity","brain","child","forgiven","painfully","problems","counted","sighting","breathe","obvious","sense","supposed","feeding","yearold","healthcare","allowed","clear","heavily","wind","blowing","ahh","ahead","waste","electricity","zapping","changed","reporter","prolonged","arrested","highranking","member","responsible","hijackings","bound","representatives","praise","efforts","shutting","sources","protests","continue","trick","couples","break","learning","wrapped","iforgot","dangerously","ride","turns","failure","surprise","footsteps","location","islands","soldiers","belong","japanese","army","bottles","untrained","beating","ears","alley","wall","unclear","single","killing","fields","gladly","beep",
		
		"weapon","highpitched","noise","mask","scanner","force","silent","alarm","actual","masked","trained","sonicthing","sonic","bit","specific","glass","questions","player","number","chat","differently","wonderful","operating","friendliest","bunch","talents","higher","ground","vantage","point","establish","play","bud","dog","delicious","robbery","respond","patrol","responding","negative","resume","orders","bill","huh","wave","indicates","consecutive","sentences","brass","panic","keeping","quiet","head","caught","notes","files","order","reports","describe","attacking","attackers","wouldbe","rapists","ear","drums","targeting","criminals","started","movement","letting","overrun","opens","closes","convinced","events","doll","maker","suffocates","flexible","polymer","pours","throats","dresses","dolls","personal","file","girls","spread","thin","barking","chirps","gasping","beautiful","skin","papers","shuffling","active","connect","young","lone","wolves","harder","set","represented","assuming","takes","priority","finding","covered","target","engage","mess","add","bullets","tired","moment","court","digging","books","dark","chance","stopping","kills","guilt","feeling","justify","positive","lawyer","retail","therapy","viable","legal","strategy","spoke","regular","clothes","hmm","fashion","joke","measure","tony","daniel","handled","appeals","parking","ticket","clients","shield","swear","report","shoulder","therethere","drawing","sketching","walls","museum","reminded","germany","invented","enthusiastic","lady","desk","matching","description","checked","paid","cash","torture","asked","telephone","ring","trace","son","bitch","felt","fair","dear","deserves","beauty","preserved","forever","special","attention","slowly","hardening","continues","blocked","skip","begging","enjoy","loves","victim","complete","private","lab","system","offline","systems","tag","breaking","entering","chemical","ingredients","makeup","cream","nail","polish","lipstick","scroll","sodium","sulphate","traces","fingers","purse","analyze","formula","taste","coincidence","advice","attachment","idiot","carrying","changing","ohh","finger","pulse","leather","type","beats","crap","bow","staff","sin","short","hair","hanging","hangs","product","crushed","pearl","super","highend","carried","handful","marketed","extremely","delicate","finds","carry","facial","recognition","empty","staking","cover","bases","undercover","casino","jumping","sea","steal","living","appears","offshore","explosions","firing","store","receipts","record","huge","fan","reimburse","helpless","meat","volunteered","loss","beliefs","youngest","month","threw","level","admit","seriously","false","bait","code","progress","required","ceremony","disappointed","honest","search","area","remain","charging","email","blast","servers","defective","slow","state","versus","issue","bail","charged","return","passage","relevant","remind","school","learned","denied","absence","circumstance","serve","notice","defense","rule","procedure","professional","courtesy","conversation","seek","penalty","murmuring","client","aided","conversations","convince","favors","owes","taskforce","appropriate","answers","crack","offered","worried","toe","doctor","paying","vendors","channel","earlier","demanded","urging","shot","guard","sounded","pulled","security","camera","footage","van","eye","send","disapproving","thanksgiving","calm","lovely","art","soul","slice","pieces","remains","intact","honey","struggle","hunted","hehe","blaming","fault","inhales","agree","methods","argue","buzz","situations","stunt","jean","peace","courtroom","reveal","thumb","finally","children","spoken","decision","lie","note","depends","reimburse","helpless","meat","volunteered","loss","beliefs","youngest","month","threw","level","admit","seriously","false","bait","code","progress","required","ceremony","disappointed","honest","search","area","remain","charging","email","blast","servers","defective","slow","state","versus","issue","bail","charged","return","passage","relevant","remind","school","learned","denied","absence","circumstance","serve","notice","defense","rule","procedure","professional","courtesy","conversation","seek","penalty","murmuring","client","aided","conversations","convince","favors","owes","taskforce","appropriate","answers","crack","offered","worried","toe","doctor","paying","vendors","channel","earlier","demanded","urging","shot","guard","sounded","pulled","security","camera","footage","van","eye","send","disapproving","thanksgiving","calm","lovely","art","soul","slice","pieces","remains","intact","honey","struggle","hunted","hehe","blaming","fault","inhales","agree","methods","argue","buzz","situations","stunt","jean","peace","courtroom","reveal","thumb","finally","children","spoken","decision","lie","note","depends","reimburse","helpless","meat","volunteered","loss","beliefs","youngest","month","threw","level","admit","seriously","false","bait","code","progress","required","ceremony","disappointed","honest","search","area","remain","charging","email","blast","servers","defective","slow","state","versus","issue","bail","charged","return","passage","relevant","remind","school","learned","denied","absence","circumstance","serve","notice","defense","rule","procedure","professional","courtesy","conversation","seek","penalty","murmuring","client","aided","conversations","convince","favors","owes","taskforce","appropriate","answers","crack","offered","worried","toe","doctor","paying","vendors","channel","earlier","demanded","urging","shot","guard","sounded","pulled","security","camera","footage","van","eye","send","disapproving","thanksgiving","calm","lovely","art","soul","slice","pieces","remains","intact","honey","struggle","hunted","hehe","blaming","fault","inhales","agree","methods","argue","buzz","situations","stunt","jean","peace","courtroom","reveal","thumb","finally","children","spoken","decision","lie","note","depends"
    );
	
	stop_words = stop_words.concat(addedWords);
         
    // Split out all the individual words in the phrase
    words = cleansed_string.match(/[^\s]+|\s+[^\s+]$/g)
	//console.log(words);
    // Review all the words
    for(x=0; x < words.length; x++) {
        // For each word, check all the stop words
        for(y=0; y < stop_words.length; y++) {
            // Get the current word
            word = words[x].replace(/\s+|[^a-z]+/g, "");   // Trim the word and remove non-alpha
             
            // Get the stop word
            stop_word = stop_words[y].toLowerCase();
             
            // If the word matches the stop word, remove it from the keywords
            if(word.toLowerCase() == stop_word) {
                // Build the regex
                regex_str = "^\\s*"+stop_word+"\\s*$";      // Only word
                regex_str += "|^\\s*"+stop_word+"\\s+";     // First word
                regex_str += "|\\s+"+stop_word+"\\s*$";     // Last word
                regex_str += "|\\s+"+stop_word+"\\s+";      // Word somewhere in the middle
                regex = new RegExp(regex_str, "g");
             
                // Remove the word from the keywords
                cleansed_string = cleansed_string.replace(regex, " ");
            }
        }
    }
    return cleansed_string.replace(/^\s+|\s+$/g, "");
}


}