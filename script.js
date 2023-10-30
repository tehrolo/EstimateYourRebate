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
    let grossCommissionIncome = buySellPriceValu.value * (slider.value / 100);
    let brokerageSplit = grossCommissionIncome * 0.07;
    let primaryFee = grossCommissionIncome - brokerageSplit;
    let secondaryFee = (grossCommissionIncome - brokerageSplit) * 0.05;
    let netIncome = grossCommissionIncome - brokerageSplit - secondaryFee;
    let estimatedRebate = netIncome * 0.4;
    let adjustedCommission = netIncome - estimatedRebate;
    let donationValue = 0;
    let total = 0;

    if(document.getElementById("donationCheckBox").checked == true) {
        estimatedRebate = netIncome * 0.25;
        donationValue = netIncome * 0.15;
    } else {
        donationValue = 0;
    }
    
    total = primaryFee + secondaryFee + estimatedRebate + commissionValue + donationValue;
    
    totalValu.innerHTML = grossCommissionIncome.toFixed(2);
    yourRebateValu.innerHTML = estimatedRebate.toFixed(2);
    primaryFeeValu.innerHTML = brokerageSplit.toFixed(2);
    secondaryFeeValu.innerHTML = secondaryFee.toFixed(2);
    commissionValu.innerHTML = adjustedCommission.toFixed(2);
    donationValu.innerHTML = donationValue.toFixed(2);
    totalValu.innerHTML = total.toFixed(2);
    yValues = [estimatedRebate.toFixed(2),brokerageSplit.toFixed(2),secondaryFee.toFixed(2),adjustedCommission.toFixed(2),donationValue.toFixed(2)];
    updateChart()
};

slider.addEventListener("input", function() {
  sliderValu.innerHTML = slider.value;
  updateResults();
});
buySellPrice.addEventListener("input", e => { updateResults() });
donationCheckBox.addEventListener("input", e => { updateResults() });

//Chart
const initialData = [20,20,20,20,20];
const labels  = ["Your Rebate", "Primary Fee", "Secondary Fee", "Commission", "Donation"];
var yValues;

var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];
// Initialize Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: labels,
    datasets: [{
      label: 'Where it all goes:',
      data: initialData,
      backgroundColor: barColors,
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Function to update chart data
function updateChart() {
  // Generate random data for demonstration
  const updatedData = x;
  
  // Update chart data and redraw
  myChart.data.datasets[0].data = yValues;
  myChart.update();
}
