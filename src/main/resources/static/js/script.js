
//decalre a variable for return values


//declare an array
const booked = [];

function button(btnName,seatNo){
    document.getElementById(btnName).style.backgroundColor = "red";
    const value = seatNo;
    if(!booked.includes(value)){
        booked.push(value);
        document.getElementById("details").innerHTML = ""+booked.length;
    }
}

function can_button(btnName,seatNo){
    document.getElementById(btnName).style.backgroundColor = "greenyellow";
}