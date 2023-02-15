const ratingsForm = document.querySelector("[data-form]");
const resultsPage = document.querySelector("[data-result]");
const resultsText = document.querySelector(".result-container-selection");

let rating;

const ratings = document.querySelectorAll(".form-input");
Array.from(ratings).forEach((rating) => {
  rating.addEventListener("change", captureInputValue);
});

const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", submitForm);

function submitForm(e) {
  e.preventDefault();
  console.log("form submitted ✔️");

  ratingsForm.classList.add("hide");
  resultsPage.classList.remove("hide");
}

function captureInputValue(e) {
  rating = e.target.value;
  console.log(rating);

  if (rating) {
    submitBtn.disabled = false;
    resultsText.textContent = `You selected ${rating} out of 5`;
  }
}
