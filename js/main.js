// Task 1: when user enters first name 
// Step1: create a variable for user name
// Step2: create a variable for audio 
// Step3: Use the focus event on the first name input 
// Step4: create a function to play the audio 


// Dont need this right now
let fnameInput = document.getElementById("fnameInput");
// console.log(fnameInput);

let playAudio1 = document.getElementById("audio1");
// console.log(playAudio1);

// Dont need this right now
// let playAudio2 = document.getElementById("audio2");
// console.log(playAudio2);

fnameInput.addEventListener("focus", playAudio1_funtion)

function playAudio1_funtion(){
    playAudio1.play();
}



// Task 2: when user enters first name 
// Step1: create a variable for all inputs
let playAudio2 = document.getElementById("audio2");
console.log(playAudio2);

let formInputs = document.querySelectorAll(".message-input");
console.log("formInputs");

// Step2: create a variable for audio 
// let playAudio11 = document.getElementById("audio1");
// console.log(playAudio11);


// Step3: Add the focus event on all inputs 
formInputs.forEach(function(thisInput){thisInput.addEventListener("focus", function(){
    playAudio1.play();
})});

// Step4: create a function to play the audio 

formInputs.forEach(thisInput => {
    thisInput.addEventListener("blur", function(){
        playAudio2.play();
    })
})

// Add chanegs which are in new css class which was not assigned to any element in html 
formInputs = document.querySelectorAll(".message-input");
formInputs.forEach(thisInput => {
    thisInput.addEventListener("focus", function(){
        thisInput.classList.add("js_focus");
    })
})

// Remove that effect when leaving 
formInputs = document.querySelectorAll(".message-input");
formInputs.forEach(thisInput => {
    thisInput.addEventListener("blur", function(){
        thisInput.classList.remove("js_focus");
    })
})


// Task3: Change the style of the label of each input when on focus
// Step1: Access the inputs - Done before
// Step2: access the label of the input
// Step3: add focus to inpts
formInputs.forEach(thisInput => {
    thisInput.addEventListener("focus", function(){
        thisInput.previousElementSibling.classList.add("labelOnFocus");
    })
})

formInputs.forEach(thisInput => {
    thisInput.addEventListener("blur", function(){
        thisInput.previousElementSibling.classList.remove("labelOnFocus");
    })
})
// Step4: create a function to change the style of the label


// Task4: When user clicks on the submit button show the popup
// Step1: Access the button
// Step2: Access to the div confirmation
// Step3: Add a click listner to button
// Step4: Function to change the display

let submitButton = document.getElementById("submitButton");
console.log(submitButton);

let popUp = document.getElementById("confirmation");
console.log(confirmation);

submitButton.addEventListener("click", function(event){
    event.preventDefault();

    // Get value from form inuts 
    formInputs.forEach(thisOne => {
        console.log(thisOne.value)
    });

    
//Task: If input is not empty show popup
formInputs.forEach(thisOne => {
    console.log(thisOne.value);
    if(formInputs[0].value !== "" && 
        formInputs[1].value !== "" &&
        formInputs[2].value !== "" &&
        formInputs[3].value !== ""
     ){
        //Create the message
        let text =`Hello ${formInputs[0].value} I have recieved your 
        message and email back at ${formInputs[2].value}`

        let popupText = document.getElementById("confirmationText")
        //Place the text inside popup text in HTML
        popupText.innerHTML = text

        popUpBox.style.display = "flex";
    }
    else{
        if(thisOne.value === ""){
        // console.log(thisInput);
        thisOne.classList.add(".error");
        }
        // formInputs.forEach(thisInput => {
        //     if(thisInput.value === ""){
        //         //Show error
        //         thisInput.classList.add("error");
        //         thisInput.nextElementSibling.nextElementSibling.style.display = "block";
        //     }
        // })
    }
});

    
})


// Popup 
let popUpBox = document.getElementById("confirmation");

formInputs.forEach(thisInput => {
    thisInput.addEventListener("keypress", function(event){
        if(event.key === "Enter"){
            console.log("You pressed space");
            popUpBox.style.display = "flex";
        }
    })
    
})


formInputs.forEach(thisInput => {
    thisInput.addEventListener("focus", function(){
        thisInput.style.border = "2px solid #fff";
    })
})

formInputs.forEach(thisInput => {
    thisInput.addEventListener("blur", function(){
        thisInput.style.border = "none";
        if(thisInput.value === ""){
            thisInput.classList.add("error");
            thisInput.nextElementSibling.nextElementSibling.style.display = "block"
        }
        else{
             thisInput.classList.remove("error");
            thisInput.nextElementSibling.nextElementSibling.style.display = "none"
        }
    })
})



// Error message

// const form = document.getElementById('myForm');
// const inputs = form.querySelectorAll('input[required]');  // Get all required inputs

// form.addEventListener('submit', (event) => {
//   event.preventDefault();  // Prevent default form submission

//   inputs.forEach(input => {
//     const errorMessage = input.nextElementSibling;  // Get the error message span
//     errorMessage.classList.remove('active');  // Clear any previous errors

//     if (input.value.trim() === '') {
//       errorMessage.textContent = 'This field is required.';
//       errorMessage.classList.add('active');  // Show the error message
//     }
//   });
// })


formInputs.forEach( thisError => {
    thisError.addEventListener("blur", function(){
        if (thisError.value === ""){
            thisError.previousElementSibling.style.display = "block";
        } else {
            thisError.previousElementSibling.style.display = "none";
        }
    })
})

submitButton.addEventListener("click", function(e){
    e.preventDefault();

    if(
        formInputs[0].value !== "" &&
        formInputs[1].value !== "" &&
        formInputs[2].value !== "" &&
        formInputs[3].value !== "" 
    ){ 
    console.log("Show popup message");
    } else {
        if(thisError.value === ""){
                thisError.previousElementSibling.style.display = "block";
            } else {
                thisError.previousElementSibling.style.display = "none";
            }
        }

    }
)
