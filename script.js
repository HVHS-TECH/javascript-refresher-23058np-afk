function getFormInput(){
    const ALERT_FIELD = document.getElementById("myForm"); //this assigns myAlert to ALERT_FIELD as a value. I think. const is a type of vule that does not change. write them in SCREAMING_SNAKE_CASE.
    let alertName = ALERT_FIELD.value; //this assigns the alert field to alertname.
    document.getElementById("welcomeMessage").innerHTML = alertName;
    console.log(alertName)
    /*alert(alertName) // makes the alert!*/
} // I dont know what the bracket part is used for yet.





//junk codee down here, but i need it for referrence of the old code
/*

function myFunction(alert) {
    alert("Congratulations!\nYou got the script running.");
    console.log(alertmessage)
}

console.log("working?")
//let alertMessage = document.getElementById("alertMessage")
//function myFunction(type)*/



