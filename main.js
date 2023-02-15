let rating;

const ratings = document.querySelectorAll(".form-input");
Array.from(ratings).forEach((rating) => {
  rating.addEventListener("change", captureInputValue);
});

const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", submitForm);

function submitForm(e) {
  e.preventDefault();

  const resultsPage = document.querySelector("[data-result]");
  const ratingsForm = document.querySelector("[data-form]");
  ratingsForm.classList.add("hide");
  resultsPage.classList.remove("hide");
}

function captureInputValue(e) {
  const resultsText = document.querySelector(".result-container-selection");
  rating = e.target.value;

  if (rating) {
    submitBtn.disabled = false;
    resultsText.textContent = `You selected ${rating} out of 5`;
  }
}
