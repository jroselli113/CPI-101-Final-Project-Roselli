



function search() {  //Doesn't work yet, but will eventually print out covid policies or links to covid polices based on what the user selects
	var x = document.getElementsByName('selection');
	var y = "all";
	for(i=0; i < x.length; i++){
		document.write("1"); 
		if(x[i].checked)
			y = x[i].value;
	}

	document.write(y);
}

