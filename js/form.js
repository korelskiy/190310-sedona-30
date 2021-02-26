const button = document.querySelector('.button-search');
const form = document.querySelector(".search-form");
const date_in = document.querySelector(".search-input-date-in");
const date_out = document.querySelector(".search-input-date-out");
const adults = document.querySelector(".search-input-adults");
const kids = document.querySelector(".search-input-kids");


let isStorageSupport = true;
let storage_adults = "";
let storage_kids = "";

try {
  storage_adults = localStorage.getItem("adults");
  storage_kids = localStorage.getItem("kids");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle ('search-form-none');
  if (storage_adults) {
    adults.value = storage_adults;
	}
  if (storage_kids) {
    kids.value = storage_kids;
	}
date_in.focus();
});

form.addEventListener("submit", function (evt) {
    if (!date_in.value || !date_out.value || !adults.value || !kids.value) {
    	evt.preventDefault();
      form.classList.add("search-form-error");
  } else {
  	if (isStorageSupport) {
  		localStorage.setItem("adults", adults.value);
  		localStorage.setItem("kids", kids.value);	
  	}

  }
    
});
