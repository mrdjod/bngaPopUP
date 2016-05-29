function bnga(branding,img,price,availability,describe){
	this.branding = branding;
	this.img = img;
	this.price = price;
	this.availability = availability;
	this.describe = describe;
}
//create the clothes objects.
var gordonRed = new bnga ("Gordon Red", "img/gordon.jpg", "$68.00","yes","Unisex, medium weight. Updated branding on the sleeves.");
var clinic = new bnga ("Clinic","img/clinic.jpg", "$75.00","yes","Unisex, medium-weight. Embroidered 'BNGA' on the front.");
var mWiggles = new bnga ("'BNGA x Mr.Wiggles'","img/wiggles.jpg","$55.00","sold-out","Hoodies run large. Suggest to size down for slimmer fit.");
var steps = new bnga("Steps", "img/steps.jpg", "$35.00", "available","Unisex, medium weight. Bnga Collective, white.");
var infared = new bnga("All Eyez","img/infared.jpg", "$20.00", "available", "lightweight, polyester/cotton fabric.  Fits slim.");
var peckers = new bnga("Peckers","img/peckers.jpg","$25.00","available","lightweight material. Sleeve cut to the forearm.");
var trippy = new bnga("Trippy Camo", "img/trippyCamo.jpg", "$20.00", "available", "Size S/M only. Bucket Style. Loose.")
var signature = new bnga("Signature | Beige", "img/signature.jpg", "35.00", "available", "Strap back.  Polo style, fitted cap.")
var tokyo = new bnga("Tokyo is Yours", "img/tokyo.jpg", "$25.00", "sold-out","QoffeeShop | Rie Hata. Lightweight")


//create the array to store our clothes objects.				
var bngaArray = [];

//push all the objects to our array.
bngaArray.push(gordonRed)
bngaArray.push(clinic)
bngaArray.push(mWiggles)
bngaArray.push(steps)
bngaArray.push(infared)
bngaArray.push(peckers)
bngaArray.push(trippy)
bngaArray.push(signature)
bngaArray.push(tokyo)
console.log(bngaArray) //checking to see if my clothes pushed.

//looping thorugh our array of objects.
for(i = 0; i < bngaArray.length; i++){
	console.log(bngaArray.length)
	//storing the information about the objects in a paramater.
	var bngaName = document.createTextNode(bngaArray[i].branding)
	var bngaImg = bngaArray[i].img
	var bngaPrice = document.createTextNode("Price: " + bngaArray[i].price)
	var bngaAvailable = document.createTextNode("Availability: " + bngaArray[i].availability)
	var bngaDescription = document.createTextNode("Description: " + bngaArray[i].describe)
	var bngaButton = document.createTextNode("Click to Purchase!")
		
		//creating our text elements to reflect the information in our objects.
		var nameBrand = document.createElement("h2")
		var newImg = document.createElement("img")
		var priceText = document.createElement("h4")
		var availableText = document.createElement("h4")
		var descriptionText = document.createElement("h4")
		var bngaStore = document.createElement("a")
		bngaStore.setAttribute("href","http://bngabrand.com/")
		bngaStore.setAttribute("target","_blank")
		var newButton = document.createElement("button")
		var col = document.createElement("div")
		var bngaDiv = document.createElement("div")
		
		// append the information to our elements.
			nameBrand.appendChild(bngaName)
			newImg.src = bngaImg
			priceText.appendChild(bngaPrice)
			availableText.appendChild(bngaAvailable)
			descriptionText.appendChild(bngaDescription)
			newButton.appendChild(bngaButton)
			bngaStore.appendChild(newButton)
			//class names
				col.className = "col-sm-4"
				bngaDiv.className = "item" + " thumbnail"
				newImg.className = "img-responsive"
				newButton.className = "btn btn-lg"
			//append the elements to your div.
				 bngaDiv.appendChild(nameBrand)
				 bngaDiv.appendChild(newImg)
				 bngaDiv.appendChild(priceText)
				 bngaDiv.appendChild(availableText)
				 bngaDiv.appendChild(descriptionText)
				 bngaDiv.appendChild(bngaStore)
				 col.appendChild(bngaDiv)
				 console.log(col)
				 document.getElementById("addHere").appendChild(col)
			}

// constructor object notation to make our life easier in creating multiple objects with similar properties.
// we declare new objects by setting a variable equal to new bnga(paramaters)
// create an array to store the new objects
// push the objects to the array
// create a for loop to loop through objects.
// recall that .length starts counting from 1. our array starts counting from 0.
// MUST use < .length to account for this. //correct: 0,1 | 1,2 | 2,3 
// 	if we use <= will continue looking for additional object in the length (this does not exist, because of the differnece in paramaters.
// 	create variables to store the object properties.
// 	create variables to style
// 	append the properties to our DOM elements.
// 	created divs to house the elements, and stored the div inside another div.
