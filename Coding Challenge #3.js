// Task 1 - Product Price Management
let productPrice = [100.00, 120.00, 140.00, 150.00, 160.00] //5 numerical values
productPrice.push (130.00);{ //adding a new price
	console.log(productPrice)
}
let RemovedproductPrice= productPrice.shift(100.00);{ //removing the 1st price
	console.log("RemovedPrice")
} 
	

// Task 2 - Modifying Customer Orders
let order = [5,10,15,20,25];
console.log (order[2]+=5)
let totalorder = sum.lenth ((sum,order) = sum + order, 0)
	console.log("Updated orders:", order)
	console.log("Total order:", totalorder)


// Task 3 - Employee Performance Tracking 
let employee = { //employee info
	name: "Mbilu Mabilu",
	role: " Web Developer",
	PerformanceScore: 80,
	isActive: true
};
employee.PerformanceScore = 89; //Updated the performance score
let promotionElegible = true; {
	console.log (promotionElegible);
}


// Task 4 - Customer Feedback Records
let Feedback = [ { //List of 3 feedback objectives
	customerName: "Gumani Mabilu",
	feedbackText: "Great customer service, put a smile on my face",
	rating: 4.8
},
{	customerName: "Lufuno Mabilu",
	feedbackText: "Very Underwhelming",
	rating: 1
},
{	customerName: "Phala Mabilu",
	feedbackText: "In love with the in-store decore",
	rating: 4
},
feeback.push ({ //Adding new Feedback
	customerName: "Lufuno Mabilu",
	feedbackText: "besides from the rude over all expereince was good",
	rating: 3
})
];
console.log ("Customer Feedback list", Feedback); //Logged whole feedback list


// Task 5 - Inventory Management System
let Inventory = { //Inventory 
	iteamName: "MacBook Air",
	stockCount: 36,
	price: 1400.00
};
console.log(Inventory);
function calculateTotalValue(stockCount) {
	return (stockCount * price)
}
console.log(calculateTotalValue(stockCount * price))