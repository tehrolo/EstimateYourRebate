const slider = document.getElementById("slider");
const sliderValu = document.getElementById("sliderValue");
const yourRebateValu = document.getElementById("yourRebateValue");
const primaryFeeValu = document.getElementById("primaryFeeValue");
const secondaryFeeValu = document.getElementById("secondaryFeeValue");
const commissionValu = document.getElementById("commissionValue");
const buySellPriceValu = document.getElementById("buySellPrice");
const totalValu = document.getElementById("totalValue");
const donationValu = document.getElementById("donationValue");
const userDonation = document.getElementById("donationCheckBox");

      
function updateResults() {
    let grossCommissionIncome = (buySellPriceValu.value * (slider.value / 100)).toFixed();
    let brokerageSplit = (grossCommissionIncome * 0.07).toFixed();
    let primaryFee = (grossCommissionIncome - brokerageSplit).toFixed();
    let secondaryFee = ((grossCommissionIncome - brokerageSplit) * 0.05).toFixed();
    let netIncome = (grossCommissionIncome - brokerageSplit - secondaryFee).toFixed();
    let estimatedRebate = (netIncome * 0.4).toFixed();
    let adjustedCommission = (netIncome - estimatedRebate).toFixed();
    let donationValue = 0;
    let total = 0;

    if(document.getElementById("donationCheckBox").checked == true) {
        estimatedRebate = netIncome * 0.25;
        donationValue = netIncome * 0.15;
    } else {
        donationValue = 0;
    }
    
    //total = (primaryFee + secondaryFee + estimatedRebate + commissionValue + donationValue);
    
    yourRebateValu.innerHTML = estimatedRebate;
    primaryFeeValu.innerHTML = brokerageSplit;
    secondaryFeeValu.innerHTML = secondaryFee;
    commissionValu.innerHTML = adjustedCommission;
    donationValu.innerHTML = donationValue;

    let data = [estimatedRebate, brokerageSplit, secondaryFee, adjustedCommission, donationValue];
    updateChart(data);
};

slider.addEventListener("input", function() {
  sliderValu.innerHTML = slider.value;
  updateResults();
});
buySellPrice.addEventListener("input", e => { updateResults() });
donationCheckBox.addEventListener("input", e => { updateResults() });

// Initialize Chart.js
const initialData = [20,20,20,20,20];
const labels  = ["Your Rebate", "Primary Fee", "Secondary Fee", "Commission", "Donation"];

var barColors = ["#b91d47","#00aba9","#2b5797","#e8c3b9","#1e7145"];
const ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: labels,
    datasets: [{
      label: '',
      data: initialData,
      backgroundColor: barColors,
    }]
  },
});

// Function to update chart data
function updateChart(data) {
    // Update chart data and redraw
      myChart.data.datasets[0].data = data;
      myChart.update();
};
