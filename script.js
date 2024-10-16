const inputVerse = document.getElementById('txtVerse');
//const searchBtn = document.getElementById('class');
const referenceTag = document.getElementById('reference');
const previewTag = document.getElementById('preview');
const BASE_POINT = "https://bible-api.com/"
const Loader = document.getElementById('loader')
let debounceTimeout;

inputVerse.addEventListener('input', () => {
  let verse = inputVerse.value.trim();
  if(verse === '') {
    referenceTag.innerHTML = '';
    previewTag.innerHTML = '';
    return;
  }

  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {Dra
    requestUserInput(verse);
  }, 1000);
  Loader.style.display = "block"
})

//Set preloader to none
Loader.style.display = "none"

// Create an event handler for the button
// searchBtn.addEventListener('click', requestUserInput)
  

//Create a funtion to request  user input
function requestUserInput(verse){

  //set the preloader to block
 

  //disable the button whrn is clicked
  // searchBtn.disabled =  true

  //get the verse value
 
  fetch(`${BASE_POINT}${verse}`).then(function (res){
    return res.json()
  }).then(function (data){

    //set the preloader to display
    Loader.style.display = "none"

    //set the button disabled to true
    // searchBtn.disabled =  false

    referenceTag.innerHTML = data.reference;
    previewTag.innerHTML = data.text;
  })
}




//code metrix