const slider = document.getElementById("slider");
const sliderValue = document.getElementById("sliderValue");
const yourRebateValue = document.getElementById("yourRebateValue");
const primaryFeeValue = document.getElementById("primaryFeeValue");
const secondaryFeeValue = document.getElementById("secondaryFeeValue");
const commissionValue = document.getElementById("commissionValue");

slider.addEventListener("input", function () {
    sliderValue.textContent = slider.value;
});
