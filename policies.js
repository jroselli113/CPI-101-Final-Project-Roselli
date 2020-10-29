var groceryArray =  [
					["Safeway:", "https://www.safeway.com/faq/covid-19-faq.html"], 
					["Fry's:", "https://www.frysfood.com/i/coronavirus-update"],
					["Target:", "https://corporate.target.com/about/purpose-history/our-commitments/target-coronavirus-hub"],

					];

var restArray = [
				["Chick-fil-a:", "https://www.chick-fil-a.com/covid"],
				["P.F. Chang's:", "https://www.pfchangs.com/updates"],				// Do you think doing our project in this way will work?
				["Five Guys:", "https://www.fiveguys.com/covid-19-statement"],  		// I'm not sure the best way to go about implementing our idea, so feel free to alter this as much as you want
				];

var allArray = groceryArray.concat(restArray);





function search() {  //Doesn't work yet, but will eventually print out covid policies or links to covid polices based on what the user selects
	var x = document.getElementsByName('selection');
	var y = "all";
	for(i=0; i < x.length; i++){ 
		if(x[i].checked)
			y = x[i].value;
	}

	if (y == "all") {
		var tempAll = "";
		for(i = 0; i < allArray.length; i++)
			tempAll += allArray[i][0] + "\t" + allArray[i][1] + '<br>';
		document.getElementById("out").innerHTML = tempAll;
	}
	else if(y == "grocery") {
		var tempGrocery = "";
		for(i = 0; i < groceryArray.length; i++)
			tempGrocery += groceryArray[i][0] + "\t" + groceryArray[i][1] + '<br>';
		document.getElementById("out").innerHTML = tempGrocery;
	}
	else if(y == "restaurant") {
		var tempRest = "";
		for(i = 0; i < restArray.length; i++)
			tempRest += restArray[i][0] + "\t" + restArray[i][1] + '<br>';
		document.getElementById("out").innerHTML = tempRest;
	}
}

