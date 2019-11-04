$(function () {
	var words=[];

    //Check File API support
    if (window.File && window.FileList && window.FileReader) {
        var filesInput = document.getElementById("files");

        filesInput.addEventListener("change", function(event) {

            var files = event.target.files; //FileList object
            

            for (var j = 0; j < files.length; j++) {
                var file = files[j];

                //Only plain text
                //if (!file.type.match('plain')) continue;

                var picReader = new FileReader();

                picReader.addEventListener("load", function(event) {

                    var textFile = event.target;

                    

                    //div.innerText = textFile.result;
					
					var str = textFile.result;
					
					/*var mapObj = { "1": "", "2": "", "3": "", "4": "", "5": "", "6": "", "7": "", "8": "", "9": "", "0": "",  ",": "", ";": "", "#": "", "@": "", "$": "", "<": "", ">": "", "&": "", ":": "", "-": "" };
						
					var re = new RegExp(Object.keys(mapObj).join("|"),"g");
					str = str.replace(re, function(matched){
					  return mapObj[matched];
					});*/
					
					words = str.split(" ");
					
					genWords();
					
					
					
	
					
                });

                //Read the text file
                picReader.readAsText(file);
            }

        });
    }
    else {
        console.log("Your browser does not support File API");
    }
	
	function removeElements(array /*, ...args */){
		var args = Array.apply(null, arguments).slice(1);
		var indices = [];
		for(var i = 0; i < args.length; i++){
			var arg = args[i];
			var index = array.indexOf(arg);
			while(index > -1){
				indices.push(index);
				index = array.indexOf(arg, index + 1);
			}
		}
		indices.sort();
		for(var i = 0; i < indices.length; i++){
			var index = indices[i] - i;
			array.splice(index, 1);
		}  

		return array;
	}
	
	
	var arr = ["cat", "dog", "bear", "cat", "bird", "dog", "dog"];
	arr = removeElements(arr, "cat", "dog");
	console.log(arr);  // => ["bear", "bird"] 
					
					
	
	function genWords(){
		//removeElements(words, "a", "am", "i", "the", "name", "my", "for", "is");
		words = removeElements(words, "a", "about", "above", "above", "across", "after", "afterwards", "again", "against", "all", "almost", "alone", "along", "already", "also", "although", "always", "am", "among", "amongst", "amoungst", "amount", " an", "and", "another", "any", "anyhow", "anyone", "anything", "anyway", "anywhere", "are", "around", "as", " at", "back", "be", "became", "because", "become", "becomes", "becoming", "been", "before", "beforehand", "behind", "being", "below", "beside", "besides", "between", "beyond", "bill", "both", "bottom", "but", "by", "call", "can", "cannot", "cant", "co", "con", "could", "couldnt", "cry", "de", "describe", "detail", "do", "done", "down", "due", "during", "each", "eg", "eight", "either", "eleven", "else", "elsewhere", "empty", "enough", "etc", "even", "ever", "every", "everyone", "everything", "everywhere", "except", "few", "fifteen", "fify", "fill", "find", "fire", "first", "five", "for", "former", "formerly", "forty", "found", "four", "from", "front", "full", "further", "get", "give", "go", "had", "has", "hasnt", "have", "he", "hence", "her", "here", "hereafter", "hereby", "herein", "hereupon", "hers", "herself", "him", "himself", "his", "how", "however", "hundred", "ie", "if", "in", "inc", "indeed", "interest", "into", "is", "it", "its", "itself", "keep", "last", "latter", "latterly", "least", "less", "ltd", "made", "many", "may", "me", "meanwhile", "might", "mill", "mine", "more", "moreover", "most", "mostly", "move", "much", "must", "my", "myself", "name", "namely", "neither", "never", "nevertheless", "next", "nine", "no", "nobody", "none", "noone", "nor", "not", "nothing", "now", "nowhere", "of", "off", "often", "on", "once", "one", "only", "onto", "or", "other", "others", "otherwise", "our", "ours", "ourselves", "out", "over", "own", "part", "per", "perhaps", "please", "put", "rather", "re", "same", "see", "seem", "seemed", "seeming", "seems", "serious", "several", "she", "should", "show", "side", "since", "sincere", "six", "sixty", "so", "some", "somehow", "someone", "something", "sometime", "sometimes", "somewhere", "still", "such", "system", "take", "ten", "than", "that", "the", "their", "them", "themselves", "then", "thence", "there", "thereafter", "thereby", "therefore", "therein", "thereupon", "these", "they", "thickv", "thin", "third", "this", "those", "though", "three", "through", "throughout", "thru", "thus", "to", "together", "too", "top", "toward", "towards", "twelve", "twenty", "two", "un", "under", "until", "up", "upon", "us", "very", "via", "was", "we", "well", "were", "what", "whatever", "when", "whence", "whenever", "where", "whereafter", "whereas", "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", "whither", "who", "whoever", "whole", "whom", "whose", "why", "will", "with", "within", "without", "would", "yet", "you", "your", "yours", "yourself", "yourselves", "the");
		
		var div = document.createElement("div");
		div.innerText = words;
		
		var output = document.getElementById("result");
		output.insertBefore(div, null);
	}
});