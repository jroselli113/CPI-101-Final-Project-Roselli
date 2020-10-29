var groceryArray =  [
					["Safeway ", "https://www.safeway.com/faq/covid-19-faq.html"], 
					["Fry's ", "https://www.frysfood.com/i/coronavirus-update"],
					["Target ", "https://corporate.target.com/about/purpose-history/our-commitments/target-coronavirus-hub"],

					];

var restArray = [
				["Chick-fil-a", "https://www.chick-fil-a.com/covid"],
				["P.F. Chang's", "https://www.pfchangs.com/updates"],				// Do you think doing our project in this way will work?
				["Five Guys", "https://www.fiveguys.com/covid-19-statement"],  		// I'm not sure the best way to go about implementing our idea, so feel free to alter this as much as you want
				];

var allArray = groceryArray.concat(restArray);



function search() {  //Doesn't work yet, but will eventually print out covid policies or links to covid polices based on what the user selects
	//window.alert("hi");
	var x = document.getElementsByName('selection');
	var y = "all";
	for(i=0; i < x.length; i++){ 
		if(x[i].checked)
			y = x[i].value;
	}

	if (y == "all")
		document.getElementById("out").innerHTML = allArray;
	else if(y == "grocery")
		document.getElementById("out").innerHTML = groceryArray;
	else if(y == "restaurant")
		document.getElementById("out").innerHTML = restArray;

	//document.write(y);
}

