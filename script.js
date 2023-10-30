const slider = document.getElementById("slider");
const sliderValue = document.getElementById("sliderValue");
const yourRebateValue = document.getElementById("yourRebateValue");
const primaryFeeValue = document.getElementById("primaryFeeValue");
const secondaryFeeValue = document.getElementById("secondaryFeeValue");
const commissionValue = document.getElementById("commissionValue");
const purchasePrice = document.getElementById("buySellPrice");
const total = document.getElementById("total");
var grossCommissionIncome;
var brokerageSplit;
var primaryFee;
var secondaryFee
var netIncome;
var estimatedRebate;
var adjustedCommission;
var total;

function updateResults() {
    calculate()
    primaryFeeValue.textContent = primaryFee;
    secondaryFeeValue.textContent = secondaryFee;
    yourRebateValue.textContent = estimatedRebate;
    commissionValue.textContent = commissionValue;
    total.textContent = total;
}
function calculate() {
    grossCommissionIncome = (purchasePrice.value * (sliderValue.value / 100));
    brokerageSplit = (grossCommissionIncome * 0.93);
    netIncome = (brokerageSplit * 0.95);
    primaryFee = (grossCommissionIncome - brokerageSplit);
    secondaryFee = (brokerageSplit - netIncome);
    estimatedRebate = (netIncome * 0.4);
    commissionValue = (netIncome - estimatedRebate);
    total = (primaryFee + secondaryFee + estimatedRebate + commissionValue)
}
slider.addEventListener("input", function () {
    sliderValue.textContent = slider.value;
    updateResults()
});
purchasePrice.addEventListener("input", function () {
    updateResults()
});
