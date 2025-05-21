alert("PLEASE LET IT WORK");

var BTN = document.getElementById("myButton");

for(var i =0; i < 3; i++){
    var newBTN = BTN.cloneNode(true);
    document.body.append(newBTN);
};