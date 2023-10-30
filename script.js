const slider = document.getElementById("slider");
const sliderValue = document.getElementById("sliderValue");
const yourRebateValue = document.getElementById("yourRebateValue");
const primaryFeeValue = document.getElementById("primaryFeeValue");
const secondaryFeeValue = document.getElementById("secondaryFeeValue");
const commissionValue = document.getElementById("commissionValue");
const purchasePrice = document.getElementById("buySellPrice");
const purchasePrice = document.getElementById("total");
var grossCommissionIncome;
var brokerageSplit;
var netIncome;
var estimatedRebate;
var adjustedCommission;
var total;

function updateResults() {
    calculate()
    brokerageSplit.textContent = ;
    netIncome.textContent = ;
    estimatedRebate.textContent = ;
    commissionValue.textContent = ;
    total.textContent = ;
}
function calculate() {
    grossCommissionIncome = (purchasePrice.value * (sliderValue.value / 100));
    brokerageSplit = (grossCommissionIncome * 0.93);
    netIncome = (brokerageSplit * 0.95);
    estimatedRebate = (netIncome * 0.4);
    commissionValue = (netIncome - estimatedRebate);
    total = (brokerageSplit + netIncome + estimatedRebate + commissionValue)
}
slider.addEventListener("input", function () {
    sliderValue.textContent = slider.value;
    updateResults()
});
purchasePrice.addEventListener("input", function () {
    updateResults()
});
