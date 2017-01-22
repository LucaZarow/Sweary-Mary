
var swearWord = ["shit","fuck","damn","bitch","crap","piss","dick","cock","fag","faggot","pussy","asshole","bastard","slut","douche","bloody","cunt","bugger","bollocks","arsehole",
"prick","motherfucker","nigga","whore","jizz","chink","hell","twat","twit","bullshit","retarded","jackass","suck"];

var rhyme = ["pitt","duck","bam","snitch","snap","bliss","click","sock","bag","baggett","pushy","rock and roll","mastered","strut","whoosh","study","blunt","hugger","frolics","black hole",
"trick","butter","giga","snore","fizz","blink","bell","dot","wit","permit","guarded","eyeglass","truck"];

var definitions = ["feces","sexual intercourse","condemnation","female dog","excrement","crying kidneys","male organ","male organ","homosexual","homosexual","cat","opening",
"illegitimate child","brothel inhabitants","cleaning tool","stain","vulva","lad","nonsense","opening","sharp point","intercourse with mothers","dark-skinned","promiscuous sexual intercourse",
"male come","fissure","powers of evil","vulva","tease","lies","behind","male donkey","vacuum"];

var ridiculous = ["poopy stuffs","two in the pink, one in the stink","fiiine","mean lady","fudge","lemonade","Richard","morning alarm clock","just fab!","fabulous homosexual","don't cha wish your girlfriend was hot like me","no man's land",
"Jon Snow","guys I hope we never lose hope","mighty cleanser","Mary","danger zoneee","oh bother","WHAT IS HAPPENING?","fancy entrance","cactus","Oedipus","I told ya, what did I tell you, didn't I tell you, cause I told you, mhhhmm, and when did I tell you...A loonnngg time ago, and what did I say would happen when I told ya? Exactly what just happened!",
"easy peasy","fizzy lifting drinks","smart","school","where the sun don't shine","tweeting","to the garbage collector","you won't understand","don't do this at home","vacuum-cleaner"];

var replacement = [rhyme, definitions, ridiculous];


var docElement = document.getElementsByTagName('*');

for (var i = 0; i<swearWord.length; i++){
	for (var j = 0; j<docElement.length; j++){
		var oneElement = docElement[j];
	
		for (var k = 0; k<oneElement.childNodes.length; k++){
			var node = oneElement.childNodes[k];
			
			if(node.nodeType == 3){
				var ran = Math.floor(Math.random()*3);
				var nodeText = node.nodeValue;
				var replacedText = nodeText.replace(RegExp(swearWord[i], "ig"), function(match){
				return matchCase(replacement[ran][i],match);});
				//console.log(replacedText);
			
				if(replacedText !== nodeText){
				oneElement.replaceChild(document.createTextNode(replacedText), node);
				}
			}
		}
	}
}

function matchCase(text, pattern) {
    var result = '';

    for(var i = 0; i < text.length; i++) {
        var c = text.charAt(i);
        var p = pattern.charCodeAt(i);

        if(p >= 65 && p < 65 + 26) {
            result += c.toUpperCase();
        } else {
            result += c.toLowerCase();
        }
    }

    return result;
}
