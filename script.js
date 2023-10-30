const slider = document.getElementById("slider");
const sliderValu = document.getElementById("sliderValue");
const yourRebateValu = document.getElementById("yourRebateValue");
const primaryFeeValu = document.getElementById("primaryFeeValue");
const secondaryFeeValu = document.getElementById("secondaryFeeValue");
const commissionValu = document.getElementById("commissionValue");
const buySellPriceValu = document.getElementById("buySellPrice");
const totalValu = document.getElementById("totalValue");


function updateResults() {
    let grossCommissionIncome = buySellPriceValu.value * (slider.value / 100);
    let brokerageSplit = grossCommissionIncome * 0.07;
    let primaryFee = grossCommissionIncome - brokerageSplit;
    let secondaryFee = (grossCommissionIncome - brokerageSplit) * 0.05;
    let netIncome = grossCommissionIncome - brokerageSplit - secondaryFee;
    let estimatedRebate = netIncome * 0.4;
    let adjustedCommission = netIncome - estimatedRebate;
    let total = primaryFee + secondaryFee + estimatedRebate + commissionValue;
    
    
    totalValu.innerHTML = grossCommissionIncome.toFixed(2);
    yourRebateValu.innerHTML = estimatedRebate.toFixed(2);
    primaryFeeValu.innerHTML = brokerageSplit.toFixed(2);
    secondaryFeeValu.innerHTML = secondaryFee.toFixed(2);
    commissionValu.innerHTML = adjustedCommission.toFixed(2);
    totalValu.innerHTML = total.toFixed(2);
};

slider.addEventListener("input", function() {
    sliderValu.innerHTML = slider.value;
    updateResults();
});
buySellPrice.addEventListener("input", e => { updateResults() });
