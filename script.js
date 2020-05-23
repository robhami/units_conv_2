
function tab (tabSelect) {

	tabConfig(tabSelect);


}




function dropDown (ddSelect, buttToChange) {

	//console.log("dropDown");
	console.log("ddSElect", ddSelect.value);
	// set ddStick var to text of dropdown id selected		
	let ddStick = document.getElementById(ddSelect).text;
	let ddStickVal = document.getElementById(ddSelect).value;
	//change button value to ddStick text & value
	buttToChange.textContent = ddStick;
	buttToChange.value = ddStickVal;
	//console.log(ddStick);
	//console.log(ddStickVal);
	userOutput.value="Result";

	userInput.value="";

	//unitsTo.value="";
	//unitsFrom.value="";

	//if button changed is unitsType, send ddSelect to DDconfig to configure units From & To dropdowns
	if((buttToChange.id)=="unitsType"){
			
		return ddConfig(ddSelect, buttToChange);
	}
}

function clearChildNodes (DDToClear) {
 	//clear childNodes whilst any exist
	while(DDToClear.hasChildNodes()){
	DDToClear.removeChild(DDToClear.firstChild);

	}
 	
}

function tabConfig (tabSelect) {
	//console.log(ddSelect);
	//clear any existing dropdown option nodes from both From and To dropdowns
	//do you need to create variables or can you call ID's direct like below? 
	clearChildNodes(unitsFromDD);
	clearChildNodes(unitsToDD);
	unitsFrom.textContent = "Units From";
	unitsTo.textContent = "Units To";
	unitsTo.value="";
	unitsFrom.value="";
	userInput.value="";
	userOutput.value="";
	// document.getElementById("userInput").placeholder = "Value from";


	//console.log("tabConfig");
	//can't pass value maybe to do with it being a li element so use id to set unitTypeSel, with dropdown version used value
	let unitTypeSel2 = tabSelect;
	console.log(unitTypeSel2);
	//send object with unitsFrom/To DD properties and values based on unitTypeSel to assignConvFac ()
	 switch (unitTypeSel2) {

	 	case "mass":

	 	let mass =
				{
				kg: 1, 
				g: 0.001,
				klb: 0.0022046,
				lb: 2.2046226,
				m_ton: 0.001,
				dn: 0.98,
				kdn: 0.0098,
				};
			assignConvFac (mass);
	 		break;
 		
	 	case "length":
	 		let length =
				{
				m: 1, 
				ft: 3.28084,
				km: 0.001,
				inch: 39.37008,
				mile: 0.00062,
				cm: 100,
				mm: 1000,
				yard: 1.09361,

				};
			assignConvFac (length);
	 		break;

	 	
		case "density":
	 		let density =
				{
				kg_m3: 1, 
				g_cm3: 0.001,
				pcf: 0.06243,
				ppg: 0.0083,
				SG: 0.001,
				};
			assignConvFac (density);
	 		break;

 		case "flow":
	 		let flow =
				{
				LPM: 1, 
				GPM_US: 0.26417,
				ft3_min: 0.06243,
				m3_min: 0.001,
				in3_min: 61.02376,
				BBL_US_min: 0.00629,
				ml_min: 1000,

				};

			assignConvFac (flow);
	 		break;

 		case "pressure":
	 		let pressure =
				{
				bar: 1, 
				psi: 14.50377,
				Pa: 100000,
				kPa: 100,
				mPa: 0.1,
				atm: 0.98692,
				kg_cm2: 1.01972,
				kg_m2: 10197.16,
				

				};

			assignConvFac (pressure);
	 		break;

 		case "torque":
	 		let torque =
				{
				N_m: 1,
				ft_lb: 0.737562,
				kft_lb: 0.000737562,
				kg_m: 0.1019716,
				kN_m: 0.001,
				

				};

			assignConvFac (torque);
	 		break;

 		case "area":
	 		let area =
				{
				m2: 1,
				cm2: 10000,
				in2: 1550,
				ft2: 1.19599,
				mm2: 1000000,
				
				

				};

			assignConvFac (area);
	 		break;



	}
	
	
}



function ddConfig(ddSelect) {
	//console.log("ddconfig");
	console.log(ddSelect);
	//clear any existing dropdown option nodes from both From and To dropdowns
	//do you need to create variables or can you call ID's direct like below? 
	clearChildNodes(unitsFromDD);
	clearChildNodes(unitsToDD);
	unitsFrom.textContent = "Units from";
	unitsTo.textContent = "Units to";
	unitsTo.value="";
	unitsFrom.value="";

	//set unitTypeSel variable to value of unitsType dropdown selected
	let unitTypeSel = document.getElementById(ddSelect).value;
	console.log("unitsSel",unitTypeSel);
	//send object with unitsFrom/To DD properties and values based on unitTypeSel to assignConvFac ()
	 switch (unitTypeSel) {
	 	case "density":
	 		let density =
				{
				kg_m3: 1, 
				g_cm3: 0.001,
				pcf: 0.06243,
				ppg: 0.0083,
				SG: 0.001,
				};
			assignConvFac (density);
	 		break;

	 	case "mass":

	 	let mass =
				{
				kg: 1, 
				g: 0.001,
				klb: 0.0022046,
				lb: 2.2046226,
				m_ton: 0.001,
				dn: 0.98,
				kdn: 0.0098,
				};
			assignConvFac (mass);
	 		break;
 		

	}
	
	
}

function assignConvFac (facPush)  {

	//console.log("assignConvFac")
	//copies values from pushed object across to new object
	let convFacObj =Object.assign({}, facPush);
	//console.log (convFacObj);
	ddAddLoop (convFacObj);

}


function ddAddLoop (convFacObj) {
	//console.log("ddAddLoop")

	//console.log(Object.keys(convFacObj).length);
	//set dfLength to keys in object
			let dfLength = (Object.keys(convFacObj).length);
		//loop for number of object keys getting unit and unit value
			for (i=0; i<dfLength; i++) {
	 			
		 		let unit = Object.keys(convFacObj)[i];
		 		let unitVal = Object.values(convFacObj)[i];

		 		//console.log(unit);
		 		//console.log(unitVal);
		 //then send to createDDVal to add unnits to unitsTo and unitsFrom dropdown lists
				createDDVal(unit, unitVal, unitsFromDD);
				createDDVal(unit, unitVal, unitsToDD);
	 		}
 		//return(convFacObj);
}

function createDDVal (unit, unitVal, DD) {
	//console.log("createDDVal")
	//create an option node
	let opt = document.createElement('option');
	//add attributes e.g. dropdown etc, 1st 2 came from stackoverflow
	opt.value = unitVal;
	opt.text = unit;
	opt.setAttribute("class","dropdown-item");
	opt.setAttribute("id",unit);
	opt.setAttribute("onclick","dropDown(this.id,this.parentElement.parentElement.children[0])");
	opt.setAttribute("href","#");

	//console.log ("opt: ", opt);
	// add text node to opt 
	opt.appendChild(document.createTextNode(""));
	// append opt to DD
	DD.appendChild(opt);


}


function formSubmit () {
	//console.log("formSubmit")
	//get input value
	//does var name need to be different from id? I have made them different
	// let unitsTypeVal = document.getElementById("unitsType").value;
	
	// let unitsFromVal = document.getElementById("unitsFrom").value;
	// let unitsToVal = document.getElementById("unitsTo").value;
	// console.log(unitsCatX);
	// console.log(userInputX);
	// console.log(unitsFromX);
	// console.log(unitsToX);

	// ddChecker(unitsType);
	ddChecker(unitsFrom);
	ddChecker(unitsTo);
	console.log(userInput.value);
	let decimal = /[0-9]/;
	//parseFloat(userInput.value);
	// userInputVal.setAttribute("value",userInputVal);

	if (userInput.value.match(decimal)) {
		
		getResult(userInput.value);
		 
	} else {
		alert ("Invalid Character Input");
		throw "Invalid character input";
	}

}


function ddChecker (ddCheck) {	
	
	if(ddCheck.value=="") {
		let ddError = `${ddCheck.textContent}`;
		alert (ddError + " dropdown is not selected");
		throw (ddError + " dropdown is not selected");
		//return;			
	}

}

function getResult (userInputVal) {
	//console.log("")
	//console.log(userInputX);	
	//
	var unitsFromX = document.getElementById("unitsFrom").value;
	var unitsToX = document.getElementById("unitsTo").value;
	

	// ddChecker (unitsFromX);
	// ddChecker (unitsFromX);

	resultX= +(userInputVal*(unitsToX/unitsFromX)).toFixed(5);
	//console.log(resultX);
	// addResult (resultX);
	userOutput.value = resultX;
	console.log(userOutput.value);
	//userOutput.value = resultX;

}