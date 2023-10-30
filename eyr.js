//vars from user input
var buyerOrSeller;  //radio buttons
var purchasePrice;  //text box
var commissionRateSlider = document.getElementById("commisionRange");  //slider
var userDonate;  //checkbox

//vars for Rebate calculation
var GrossCommissionIncome = purchasePrice * commissionRate
var BrokerageSplit = GrossCommissionIncome * 0.93
var NetIncome = BrokerageSplit * 0.95

var EstimatedRebate = NetIncome * 0.4;
var EstimatedDonation;

if(userDonate == True) {
    var EstimatedRebate = NetIncome * 0.25;
    var EstimatedDonation=NetIncome * 15;
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
