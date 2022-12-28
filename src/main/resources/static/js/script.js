const btn = document.getElementById('btn1');
var output = document.getElementById('output');

const booked = [];

btn.addEventListener('click', function onClick() {
    btn.style.backgroundColor = 'salmon';
    btn.style.color = 'white';
    booked.push("seat01");
});



function removeDuplicates(booked) {
    return booked.filter((item,
                       index) => booked.indexOf(item) === index);
}

function printValue(){
    output.innerHTML = booked[0];
}

console.log(removeDuplicates(booked));