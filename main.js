//A function that gets the ID's of the elements
let id = (id) => document.getElementById(id)

let classes = (classes) => document.getElementsByClassName(classes);

//variable that refers to the username ID
let username = id("username"),
//variable that refers to the email ID
email = id("email"),
//variable that refers to the password ID
password = id("password"),
//varlable that refers to the form ID
form = id("form")

//getElementsbyClassName selector gets multiple class names at the same time
//selects all elements with ID Error and stores them in an array
errorMsg = classes("error"),
successIcon = classes("success-icon"),
failureIcon = classes("failure-icon");

/*
//injects the string into the selected array object
errorMsg[2].innerHTML = "blablabla";
*/

//An event listener means that when we click "submit" in our form, it fires the function

form.addEventListener("submit", (e)=>{
    //the e argument prevents the flickering behaviour of the error message, make it just stay put
    e.preventDefault();

    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannot be blank");

}); 


//The engine function is so that we don't have to repeat the function 3 times for each array object
let engine = (id, serial, message) =>{
//the if statements says, if the username value is nothing, give this message:, else, give that statement
//.trim means that the error message will also appear if the user puts in blank spaces
if(id.value.trim() === ''){
    errorMsg[serial].innerHTML = message;
    //in the styles, the icons have 0 opacity, this means that if the username is blank, opacity goes up to 100
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
} else{
    errorMsg[serial].innerHTML = '';
    successIcon[serial].style.opacity = "1";
    failureIcon[serial].style.opacity = "0";
}
}