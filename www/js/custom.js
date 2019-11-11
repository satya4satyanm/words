window.onload = function() {
	try{
	var len = JSON.parse(localStorage["storedWords"]).length;
	$("#count").text(len);
	} catch(e){}
	
	$.support.cors = true;
	if($.mobile) {
		$.mobile.allowCrossDomainPages = true;
		alert("got mobile got")
	}


	$.ajax({
		type : 'get',	//Request method: GET, POST  
		url : 'http://api.conceptnet.io/related/c/en/cow?filter=/c/en&limit=200',  //Where to send the data
		success:function(data) {
			//Here you will receive data from server
			//Do what you want to do with data                         
			alert(JSON.stringify(data));	 //This is a example, like we want to print the result
		}
	})


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
		string = classes[num].words.toLowerCase();
		debugger;
		string = string.removeStopWords();
		var wordsi = string.split(" ");
		
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
    var stop_words = [
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
		"one","two","three","four","five","six","seven","eight","nine","zero"
	];
	debugger;
	stop_words = stop_words.concat(addedWords);
	debugger;
         
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
            if(word.toLowerCase() == stop_word.toLowerCase()) {
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