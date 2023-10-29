//vars from user input
var buyerOrSeller;  //radio buttons
var purchasePrice;  //text box
var commissionRate;  //slider
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
